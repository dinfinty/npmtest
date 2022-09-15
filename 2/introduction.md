Introduction
===

The client library exposes a number of get methods to fetch user state on exchange. These methods internally perform GET API calls which are available over [here](https://dapi-testnet.firefly.exchange/docs/#/) at swagger.
This section will detail each of these get methods and their returned repose. Following get methods are available on client library:

- [async getUserOrders(params: GetOrderRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L402)
- [async getUserPosition(params: GetPositionRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L418)
-[async getOrderbook(params: GetOrderbookRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L431)
-[async getUserTrades(params: GetUserTradesRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L445)
-[async getUserAccountData()](https://github.com/fireflyprotocol/firefly-client/blob/c2d967b405425ab4a2b6a3a18cb5224c11ba059f/src/fireflyClient.ts#L622)
-[async getUserTransactionHistory(params: GetTransactionHistoryRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L472)
-[async getMarketRecentTrades(params: GetMarketRecentTradesRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L487)
-[async getMarketCandleStickData(params: GetCandleStickRequest)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L500)
-[async getExchangeInfo(symbol?: MarketSymbol)](https://github.com/fireflyprotocol/firefly-client/blob/c2d967b405425ab4a2b6a3a18cb5224c11ba059f/src/fireflyClient.ts#L676)
-[async getMarketData(symbol?: MarketSymbol)](https://github.com/fireflyprotocol/firefly-client/blob/c2d967b405425ab4a2b6a3a18cb5224c11ba059f/src/fireflyClient.ts#L689)
-[async getMarketMetaInfo(symbol?: MarketSymbol)](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L539)
-[async getExchangeStatus()](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L551)
-[getPublicAddress()](https://github.com/fireflyprotocol/FireflyClient/blob/9de8442be50a074212f962bb3ef74899a3955766/src/fireflyClient.ts#L562)
- [async getUserDefaultLeverage(symbol: MarketSymbol)](https://github.com/fireflyprotocol/firefly-client/blob/c2d967b405425ab4a2b6a3a18cb5224c11ba059f/src/fireflyClient.ts#L535)

