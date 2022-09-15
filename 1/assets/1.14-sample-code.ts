/**
 * Create an order signature on chain and returns it. The signature is used to verify
 * during on-chain trade settlement whether the orders being settled against each other
 * were actually signed on by the maker/taker of the order or not.
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
    
  // load/init contract addresses
  await client.init()

  await client.addMarket(MARKET_SYMBOLS.BTC);
  const btcLeverage = await client.getUserDefaultLeverage(MARKET_SYMBOLS.BTC);


  // will create a signed order to sell 0.1 BTC at market price
  const signedOrder = await client.createSignedOrder({
    symbol: MARKET_SYMBOLS.BTC, // asset to be traded
    orderType: ORDER_TYPE.MARKET,
    price: 0, // 0 implies market order 
    quantity: 0.1, // the amount of asset to trade
    side: ORDER_SIDE.SELL, // buy or sell
    leverage: btcLeverage // order must be at same leverage as market
  });

  console.log("Signed Order Created:", signedOrder);
}

main().then().catch(console.warn);
