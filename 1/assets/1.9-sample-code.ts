/**
 * Withdraw margin(USDC) from bank. Reduces locked margin(USDC) in Margin bank for user
 * and unlocks USDC in USDC contract.
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, bnStrToBaseNumber } from "@firefly-exchange/firefly-client";

async function main() {

  // ensure account has funds to pay gas
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  await client.init()

  const freeCollateralBnStr = (await client.getUserAccountData())?.data?.freeCollateral;
  const freeCollateral = bnStrToBaseNumber(freeCollateralBnStr || "");


  // withdraws USDC token from margin bank back to USDC contract
  console.log(
    "USDC Withdrawn from MarginBank: ",
    await client.withdrawFromMarginBank(freeCollateral)
  );
}

main().then().catch(console.warn);
