/**
 * Places the order cancellation request to exchange
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

  // post a limit order
  const response = await client.postOrder({
    symbol: MARKET_SYMBOLS.BTC,
    orderType: ORDER_TYPE.LIMIT,
    price: 15,
    quantity: 0.5,
    side: ORDER_SIDE.SELL,
    leverage: btcLeverage
  });

  const orderHash = response.data?.hash || ""

  // create signature
  const cancelSignature = await client.createOrderCancellationSignature({
    symbol: MARKET_SYMBOLS.BTC,
    hashes: [orderHash], 
  });

  // place order for cancellation
  const cancellationResponse = await client.placeCancelOrder({
    symbol: MARKET_SYMBOLS.BTC,
    hashes: [orderHash],
    signature: cancelSignature,
  });

  console.log("Place cancellation response: ", cancellationResponse.data);
}

main().then().catch(console.warn);
