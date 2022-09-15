/**
 * Listens for exchange health
 */

/* eslint-disable no-console */
import {
    Networks,
    FireflyClient,
    MARKET_SYMBOLS,
  } from "@firefly-exchange/firefly-client";
  
  async function main() {
    // no gas fee is required to create order signature.
    const dummyAccountKey =
      "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";
  
    const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); //passing isTermAccepted = true for compliance and authorizarion
      
    // load/init contract addresses
    client.init()

    client.addMarket(MARKET_SYMBOLS.DOT);
  
    // create socket connection
    client.sockets.open();
    
    const callback = ({ isAlive }: { isAlive: boolean }) => {
      console.log(`Exchange is alive: ${isAlive}`);
  
      // kill sockets in order to stop script
      client.sockets.close();
    };
  
    client.sockets.onExchangeHealthChange(callback);
  }
  
  main().then().catch(console.warn);
  