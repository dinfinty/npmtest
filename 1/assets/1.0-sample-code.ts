/**
 * Posts an order to Firefly Exchange.
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
    await client.init() // initialize wallet & signer objects

    // Only Testnet
    await client.fundGas(); // mint gas tokens on testnet
    await client.mintTestUSDC(); // mint test usdc on testnet
    
    // Deposit USDC into Firefly's on-chain MarginBank contract
    const usdcBalance = await client.getUSDCBalance();
    await client.depositToMarginBank(usdcBalance); 
    console.log( "Balance available on Firefly: ", await client.getMarginBankBalance());

  
    await client.addMarket(MARKET_SYMBOLS.BTC); // initialize internal market signer objects
    await client.adjustLeverage(MARKET_SYMBOLS.BTC, 10) // adjust market leverage to 10x
    const btcLeverage = await client.getUserDefaultLeverage(MARKET_SYMBOLS.BTC);
  
    // Post a market order for 0.1 BTC
    const response = await client.postOrder({
      symbol: MARKET_SYMBOLS.BTC, // asset to be traded
      orderType: ORDER_TYPE.MARKET,
      price: 0, // 0 implies market order 
      quantity: 0.1, // the amount of asset to trade
      side: ORDER_SIDE.SELL, // buy or sell
      leverage: btcLeverage, // order must be at same leverage as market
      postOnly: true, // order should only be a maker
      clientId: "1-my-fist-order"
    });
  
    console.log("Post order response: ", response.data);
  
  }
  
  main().then().catch(console.warn);
  