/**
 * Posts an order to exchange. Creates the signed order and places it to exchange, 
 * without requiring two separate function calls.
 */

/* eslint-disable no-console */
import {
  Networks,
  FireflyClient,
  MARKET_SYMBOLS,
  ORDER_SIDE,
  ORDER_TYPE,
} from "@firefly-exchange/firefly-client";

async function main() {
  
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); 
  await client.init()

  await client.addMarket(MARKET_SYMBOLS.BTC);
  const btcLeverage = await client.getUserDefaultLeverage(MARKET_SYMBOLS.BTC);

  // will post a market order for 0.1 BTC
  const response = await client.postOrder({
    symbol: MARKET_SYMBOLS.BTC, // asset to be traded
    orderType: ORDER_TYPE.MARKET,
    price: 0, // 0 implies market order 
    quantity: 0.1, // the amount of asset to trade
    side: ORDER_SIDE.SELL, // buy or sell
    leverage: btcLeverage, // order must be at same leverage as market
    postOnly: true, // order should only be a maker
    clientId: "my id"
  });

  console.log("Post order response: ", response.data);

}

main().then().catch(console.warn);
