import { describe, expect } from "bun:test";
import { test, newTestRuntime, HttpActionsMock, EvmMock, addContractMock } from "@chainlink/cre-sdk/test";
import { getNetwork } from "@chainlink/cre-sdk";
import { decodeAbiParameters, keccak256, toBytes, bytesToHex as vBytesToHex } from "viem";
import { onTick, verifyNextPayout, type Config } from "./verifier";

const CHAIPAY = "0x1111111111111111111111111111111111111111" as const;
const sepolia = getNetwork({ chainFamily: "evm", chainSelectorName: "ethereum-testnet-sepolia", isTestnet: true })!;

const baseConfig: Config = {
  schedule: "*/30 * * * * *",
  relayerUrl: "https://relayer.example",
  verificationMode: "razorpayx",
  razorpayAuth: "Basic dGVzdDp0ZXN0",
  evms: [{ chainName: "ethereum-testnet-sepolia", chaipayAddress: CHAIPAY, gasLimit: "300000" }],
};

const queue = [
  { orderId: "7", payoutId: "pout_ABC", utrHash: "0x" + "ab".repeat(32), source: "razorpayx", expectedVpa: "raju.chai@okaxis", expectedPaise: "2000" },
];
const goodPayout = {
  id: "pout_ABC",
  status: "processed",
  mode: "UPI",
  amount: 2000,
  utr: "431297650012",
  fund_account: { vpa: { address: "raju.chai@okaxis" } },
};

const json = (o: unknown) => ({ statusCode: 200, body: new TextEncoder().encode(JSON.stringify(o)) });

function mockHttp(payout: unknown, q: unknown = queue) {
  const http = HttpActionsMock.testInstance();
  http.sendRequest = (req) => {
    if (req.url.endsWith("/api/payouts/pending")) return json(q);
    if (req.url.startsWith("https://api.razorpay.com/v1/payouts/")) return json(payout);
    return { statusCode: 404, body: new Uint8Array() };
  };
}

describe("ChaiPay CRE verifier", () => {
  test("verifies a processed UPI payout and writes (orderId, utrHash) to ChaiPay", () => {
    mockHttp(goodPayout);
    EvmMock.testInstance(sepolia.chainSelector.selector);
    let written: Uint8Array | null = null;
    const contract = addContractMock(EvmMock.testInstance(sepolia.chainSelector.selector), { address: CHAIPAY, abi: [] });
    contract.writeReport = (input) => {
      written = input.report.rawReport;
      return { txStatus: 2, txHash: new Uint8Array(32).fill(9) } as any;
    };

    const runtime = newTestRuntime<Config>(null, {}, baseConfig);
    const tx = onTick(runtime as any);
    expect(tx).toBe("0x" + "09".repeat(32));
    expect(written).not.toBeNull();

    // The raw report carries metadata then our ABI payload; the payload is the last 64 bytes.
    const payload = vBytesToHex((written as unknown as Uint8Array).slice(-64));
    const [orderId, utrHash] = decodeAbiParameters([{ type: "uint256" }, { type: "bytes32" }], payload);
    expect(orderId).toBe(7n);
    expect(utrHash).toBe(keccak256(toBytes("431297650012")));
  });

  test("rejects a payout with the wrong amount", () => {
    mockHttp({ ...goodPayout, amount: 1000 });
    const runtime = newTestRuntime<Config>(null, {}, baseConfig);
    expect(verifyNextPayout(runtime as any).orderId).toBe("0");
  });

  test("rejects a payout to a different UPI ID", () => {
    mockHttp({ ...goodPayout, fund_account: { vpa: { address: "scammer@ybl" } } });
    const runtime = newTestRuntime<Config>(null, {}, baseConfig);
    expect(verifyNextPayout(runtime as any).orderId).toBe("0");
  });

  test("rejects a payout that is not processed yet", () => {
    mockHttp({ ...goodPayout, status: "queued" });
    const runtime = newTestRuntime<Config>(null, {}, baseConfig);
    expect(verifyNextPayout(runtime as any).orderId).toBe("0");
  });

  test("idle when the queue is empty", () => {
    mockHttp(goodPayout, []);
    const runtime = newTestRuntime<Config>(null, {}, baseConfig);
    expect(onTick(runtime as any)).toBe("idle");
  });

  test("attested mode passes through the LP's UTR hash", () => {
    mockHttp(goodPayout);
    const runtime = newTestRuntime<Config>(null, {}, { ...baseConfig, verificationMode: "attested" });
    expect(verifyNextPayout(runtime as any)).toEqual({ orderId: "7", utrHash: queue[0].utrHash });
  });
});
