/**
 * Cancels all open orders for the given market
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

  // open multiple limit orders
  await client.postOrder({
    symbol: MARKET_SYMBOLS.BTC,
    price: 15,
    quantity: 0.5,
    side: ORDER_SIDE.SELL,
    orderType: ORDER_TYPE.LIMIT,
    leverage: btcLeverage
  });
  await client.postOrder({
    symbol: MARKET_SYMBOLS.BTC,
    price: 15,
    quantity: 0.5,
    side: ORDER_SIDE.SELL,
    orderType: ORDER_TYPE.LIMIT,
    leverage: btcLeverage
  });

  // cancels all open order
  const cancelAllResponse = await client.cancelAllOpenOrders(MARKET_SYMBOLS.BTC);

  console.log("Cancel All Response: ", cancelAllResponse.data);
}

main().then().catch(console.warn);
