Introduction
===

Firefly exchange protocol has a centralized api gate way that takes user orders and forwards these orders to orderbook for matching and settlement. The api gateway provides event data to users via socket. The client library has a public instance of [Socket Class](https://github.com/fireflyprotocol/FireflyClient/blob/myym/init-branch/src/exchange/sockets.ts) that allows users to listen to events pertaining to the user and the global market state. The section discusses the exposed methods and how to use them. Following events are emitted by exchange:
- [onOrderBookUpdate](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L92) emitted when a change in orderbook state takes place.

- [onMarketDataUpdate](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L96) emitted when market data is updated

- [onMarketHealthChange](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L102) emitted when health/status of market is changed from ACTIVE to INACTIVE vice-versa

- [onExchangeHealthChange](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L108) emitted when the exchange health changes from alive to not alive and vice-versa

- [onRecentTrades](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L115) emitted when any trades take place across the market by any trader

- [onUserOrderUpdate](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L121) emitted when state of a user order changes. Its emitted every time the state of order changes PENDING to OPEN to CANCEL to FILLED etc..

- [onUserPositionUpdate](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L127) emitted when on-chain position of the user changes. This will happen when a trade is settled against user's address.

- [onUserUpdates](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L133) emitted when any trade is performed by user.

- [onUserAccountDataUpdate](https://github.com/fireflyprotocol/FireflyClient/blob/c61a14171783125137299363dbf4223857c56e4e/src/exchange/sockets.ts#L139) emitted whenever a change in account's data of a user happens.

- [onCandleStickUpdate](https://github.com/fireflyprotocol/firefly-client/blob/8aaf8bfac12992c3824ed24510ba89b8da8f346f/src/exchange/sockets.ts#L117) emitted after every n interval (currently 10 secs) or when trade happens
