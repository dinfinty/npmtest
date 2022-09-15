Introduction
===

To add client library package to your node project pleas run:
 `npm i@firefly-exchange/firefly-client` or `yarn add @firefly-exchange/firefly-client`. 
 
 This library exposes a set of methods to interact with the Firefly On-Chain Contracts and the Firefly Exchange API. In this section we will detail methods that allow users to post data to the API or on-chain contracts.

- [getMarketSymbols](https://github.com/fireflyprotocol/firefly-client/blob/14ad7e6bc2fe472e23c221fb92c45c305a85ca96/src/fireflyClient.ts#L715)
- [addMarket(symbol: MarketSymbol, ordersContract?: address)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L107)
- [removeMarket(market: MarketSymbol)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L127)
- [async getUSDCBalance(contract?: address)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L137)
- [async getMarginBankBalance(contract?: address)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L151)
- [async mintTestUSDC(contract?: address)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L166)
- [async depositToMarginBank(amount: number, usdtContract?: address, mbContract?: address)](https://github.com/fireflyprotocol/firefly-client/blob/0f01179033225cf1738619176627ea24977d208b/src/fireflyClient.ts#L244)
- [async withdrawFromMarginBank(amount?: number, mbContract?: address)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L219)
- [async getUserDefaultLeverage(symbol: MarketSymbol)](https://github.com/fireflyprotocol/firefly-client/blob/c2d967b405425ab4a2b6a3a18cb5224c11ba059f/src/fireflyClient.ts#L535)
- [async createSignedOrder(params: OrderSignatureRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L249)
- [async placeSignedOrder(params: PlaceOrderRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L289)
- [async postOrder(params: PostOrderRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L317)
- [async createOrderCancellationSignature(params: OrderCancelSignatureRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L333)
- [async placeCancelOrder(params: OrderCancellationRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L355)
- [async postCancelOrder(params: OrderCancelSignatureRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L368)
- [async cancelAllOpenOrders(symbol: MarketSymbol)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L382)