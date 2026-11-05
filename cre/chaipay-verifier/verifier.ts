// ChaiPay payout verifier logic (imported by main.ts, unit-tested in verifier.test.ts).
//
// Every 30s the DON:
//   1. reads the relayer's work queue of claimed orders whose LP says "I paid the merchant",
//   2. independently re-checks that UPI payout against the payout provider's API on every node
//      (RazorpayX Payouts: processed, mode UPI, right amount, right VPA),
//   3. reaches consensus on (orderId, utrHash), and
//   4. writes a DON-signed report to ChaiPay.onReport, which releases the escrowed USDT to the LP.
//
// The relayer never decides who gets paid; the escrow only trusts reports the forwarder has verified.
import {
  HTTPClient,
  EVMClient,
  ConsensusAggregationByFields,
  identical,
  getNetwork,
  hexToBase64,
  bytesToHex,
  type NodeRuntime,
  type Runtime,
} from "@chainlink/cre-sdk";
import { encodeAbiParameters, parseAbiParameters, keccak256, toBytes } from "viem";

export type Config = {
  schedule: string;
  relayerUrl: string;
  // "razorpayx": verify against RazorpayX (production path)
  // "attested":  accept the LP-attested UTR the relayer recorded (stage demo with a phone UPI app)
  verificationMode: "razorpayx" | "attested";
  razorpayAuth?: string; // "Basic base64(key:secret)" — set via CRE secrets in production
  evms: { chainName: string; chaipayAddress: string; gasLimit: string }[];
};

type PendingPayout = {
  orderId: string;
  payoutId: string | null;
  utrHash: string;
  source: string;
  expectedVpa: string | null;
  expectedPaise: string;
};

export type Verdict = { orderId: string; utrHash: string };

export const NONE: Verdict = { orderId: "0", utrHash: "0x" + "00".repeat(32) };

const decode = (body: Uint8Array) => JSON.parse(new TextDecoder().decode(body));

// Runs on every node; consensus requires all honest nodes to land on the same verdict.
export const verifyNextPayout = (nodeRuntime: NodeRuntime<Config>): Verdict => {
  const cfg = nodeRuntime.config;
  const http = new HTTPClient();

  const queueResp = http.sendRequest(nodeRuntime, { url: `${cfg.relayerUrl}/api/payouts/pending`, method: "GET" }).result();
  if (queueResp.statusCode !== 200) return NONE;
  const queue = decode(queueResp.body) as PendingPayout[];
  if (queue.length === 0) return NONE;

  // One order per run keeps consensus simple and the report small.
  const next = [...queue].sort((a, b) => Number(BigInt(a.orderId) - BigInt(b.orderId)))[0];

  if (cfg.verificationMode === "attested") {
    return { orderId: next.orderId, utrHash: next.utrHash };
  }

  // RazorpayX: don't trust the relayer — look the payout up ourselves.
  if (!next.payoutId || !cfg.razorpayAuth) return NONE;
  const pResp = http
    .sendRequest(nodeRuntime, {
      url: `https://api.razorpay.com/v1/payouts/${next.payoutId}`,
      method: "GET",
      headers: { authorization: cfg.razorpayAuth },
    })
    .result();
  if (pResp.statusCode !== 200) return NONE;
  const p = decode(pResp.body);

  const vpa = p?.fund_account?.vpa?.address?.toLowerCase?.() ?? null;
  const ok =
    p.status === "processed" &&
    p.mode === "UPI" &&
    String(p.amount) === String(next.expectedPaise) &&
    (!next.expectedVpa || vpa === next.expectedVpa) &&
    typeof p.utr === "string" &&
    p.utr.length > 0;
  if (!ok) return NONE;

  return { orderId: next.orderId, utrHash: keccak256(toBytes(p.utr)) };
};

export const onTick = (runtime: Runtime<Config>): string => {
  const verdict = runtime
    .runInNodeMode(
      verifyNextPayout,
      ConsensusAggregationByFields<Verdict>({ orderId: identical, utrHash: identical }),
    )()
    .result();

  if (verdict.orderId === "0") {
    runtime.log("No verified payouts this round.");
    return "idle";
  }
  runtime.log(`UPI payout verified for order #${verdict.orderId}; writing report.`);

  const evm = runtime.config.evms[0];
  const network = getNetwork({ chainFamily: "evm", chainSelectorName: evm.chainName, isTestnet: true });
  if (!network) throw new Error(`Unknown chain ${evm.chainName}`);
  const evmClient = new EVMClient(network.chainSelector.selector);

  // Matches ChaiPay.onReport: abi.decode(report, (uint256 orderId, bytes32 utrHash))
  const payload = encodeAbiParameters(parseAbiParameters("uint256 orderId, bytes32 utrHash"), [
    BigInt(verdict.orderId),
    verdict.utrHash as `0x${string}`,
  ]);

  const report = runtime
    .report({ encodedPayload: hexToBase64(payload), encoderName: "evm", signingAlgo: "ecdsa", hashingAlgo: "keccak256" })
    .result();

  const write = evmClient
    .writeReport(runtime, { receiver: evm.chaipayAddress, report, gasConfig: { gasLimit: evm.gasLimit } })
    .result();

  const txHash = bytesToHex(write.txHash || new Uint8Array(32));
  runtime.log(`Escrow release tx: ${txHash}`);
  return txHash;
};

