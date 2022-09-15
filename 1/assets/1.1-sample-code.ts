/**
 * Client initialization code example
 */

/* eslint-disable no-console */
import { Networks, Network, FireflyClient } from "@firefly-exchange/firefly-client";

async function main(){
	const dummyAccountKey =
	"a182091b4d5a090b65d604e36f68629a692e3bf2aa864bd3f037854034cdd676";
  
  // use predefined network
  const client = new FireflyClient(true, Networks.TESTNET, dummyAccountKey); //passing isTermAccepted = true for compliance and authorization 

  // load/init contract addresses
  await client.init()

  // prints client address
  console.log(client.getPublicAddress());
  
}

main().then().catch(console.warn);
