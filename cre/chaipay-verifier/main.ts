// ChaiPay payout verifier — Chainlink CRE workflow entrypoint. Logic lives in verifier.ts.
import { CronCapability, handler, Runner } from "@chainlink/cre-sdk";
import { onTick, type Config } from "./verifier";

const initWorkflow = (config: Config) => {
  const cron = new CronCapability();
  return [handler(cron.trigger({ schedule: config.schedule }), onTick)];
};

export async function main() {
  const runner = await Runner.newRunner<Config>();
  await runner.run(initWorkflow);
}

main();
