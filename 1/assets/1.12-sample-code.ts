/**
 * get user default Leverage on the exchange
 */

/* eslint-disable no-console */
import {
  Networks,
  FireflyClient,
  MARKET_SYMBOLS,
} from "@firefly-exchange/firefly-client";

async function main() {
  
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  await client.init()
  
  // returns the user default leverage, a number
  console.log("Initial leverage: ", await client.getUserDefaultLeverage(MARKET_SYMBOLS.BTC));
}

main().then().catch(console.warn);
