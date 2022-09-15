/**
 * Removing Markets code example
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, MARKET_SYMBOLS } from "@firefly-exchange/firefly-client";

async function main() {
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); 
  
  // load/init contract addresses
  await client.init()

  // will return false as BTC market has not yet been initialized in the client
  console.log("Market Removed: ", client.removeMarket(MARKET_SYMBOLS.BTC));

  console.log("Market Added: ", client.addMarket(MARKET_SYMBOLS.BTC));

  // will return true
  console.log("Market Removed: ", client.removeMarket(MARKET_SYMBOLS.BTC));
}

main().then().catch(console.warn);
