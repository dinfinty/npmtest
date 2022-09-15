/**
 * Getting user's USDC balance
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, bnStrToBaseNumber } from "@firefly-exchange/firefly-client";

async function main() {
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  await client.init()

  // will use USDC contract address from `contractAddresses` initialized above
  console.log("User's USDC balance is: ", await client.getUSDCBalance());
}

main().then().catch(console.warn);
