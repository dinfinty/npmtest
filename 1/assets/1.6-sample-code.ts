/**
 * Getting user's USDC balance locked in Margin Bank
 */

/* eslint-disable no-console */
import { Networks, FireflyClient } from "@firefly-exchange/firefly-client";

async function main() {
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  await client.init()

  // will use margin bank contract from `contractAddresses` initialized above
  console.log(
    "User's margin bank balance is: ",
    await client.getMarginBankBalance()
  );
}

main().then().catch(console.warn);
