/**
 * Deposits USDC from USDC contract to MarginBank
 */

/* eslint-disable no-console */
import { Networks, FireflyClient } from "@firefly-exchange/firefly-client";

async function main() {

  // ensure account has funds to pay gas
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
  
  // load/init contract addresses
  client.init()

  // fund test gas & mint test USDC if connecting to Testnet. Will not work on Mainnet. 
  //        console.log("Gas tokens funded:", await client.fundGas());
  //        console.log("Tokens minted:", await client.mintTestUSDC());

  // deposits 10 USDC to Firefly Exchange (MarginBank contract)
  //    requires users has 10 USDC in their wallet (on-chain USDC Contract)
  console.log(
    "USDC Deposited to MarginBank: ",
    await client.depositToMarginBank(10)
  );
}

main().then().catch(console.warn);
