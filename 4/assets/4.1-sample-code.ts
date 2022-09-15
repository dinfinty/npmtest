/**
 * Mint's Test USDC on TESTNET
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, bnStrToBaseNumber } from "@firefly-exchange/firefly-client";

async function main() {

  // ensure that account has sufficient gas tokens to perform on-chain USDC.mint() call
  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

  // using TESTNET network, mintTestUSDC does not work on MAINNET
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); //passing isTermAccepted = true for compliance and authorizarion
  
  // load/init contract addresses
  await client.init()

  // will return true if successful
  console.log("Tokens minted:", await client.mintTestUSDC());

  // balance will be 10K
  console.log("User's balance in USDC is: ", await client.getUSDCBalance());

}

main().then().catch(console.warn);
