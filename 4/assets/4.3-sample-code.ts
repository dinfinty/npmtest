/**
 * Checks gas (BOBA) token balance
 */

/* eslint-disable no-console */
import { Networks, FireflyClient, bnStrToBaseNumber } from "@firefly-exchange/firefly-client";

async function main() {

  const dummyAccountKey =
    "a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";

    const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey);
    
    await client.init()
    
    console.log("User's balance is: ", await client.getBobaBalance());
}

main().then().catch(console.warn);
