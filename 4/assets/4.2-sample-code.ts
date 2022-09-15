/**
 * Fund gas (BOBA) tokens on user's account
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, bnStrToBaseNumber } from "@firefly-exchange/firefly-client";

async function main() {

    const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

    // using TESTNET network, fundGas() does not work on MAINNET
    const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); //passing isTermAccepted = true for compliance and authorizarion
    
    await client.init()
  
    // balance will be 0.01, will return success message
    console.log("Gas tokens funded:", (await client.fundGas()).data?.message);
  
    // balance will be >= 0.01"
    console.log("User's gas balance: ", await client.getBobaBalance());

}

main().then().catch(console.warn);
