/**
 * update user default Leverage
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, MARKET_SYMBOLS } from "@firefly-exchange/firefly-client";

async function main() {

  // ensure account has funds to pay gas
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  await client.init()

  // set BTC market to 10x leverage  
  await client.adjustLeverage(MARKET_SYMBOLS.BTC, 10)
}

main().then().catch(console.warn);
