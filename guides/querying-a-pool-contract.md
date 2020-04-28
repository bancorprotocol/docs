---
description: How to read basic information from a liquidity pool contract
---

# Querying a Pool Contract

Before contribution liquidity or making a trade, you may need to read basic data off the a pool's contract to make an informed decision. Some examples include:

* the addresses of the reserve tokens
* the balances of the reserve tokens
* the weight of each token in the pool
* the expected return from a trade

If you know the address of the converter contract, navigate to the contract's Etherscan page. If it the contract was deployed properly, it should be verified and you should be able to read directly from the UI.

If you only know the address of the pool's smart token, navigate to the token's Etherscan page and read the return value of the `owner` function. This is your converter contract address. 

To query for the **address of a reserve token**, read from the `connectorTokens` function of the converter contract. The `_index` argument is the index of the token in the order it was added to the reserve. For a pool with three reserve tokens, only **0**, **1**, and **2** will be valid inputs for this function.

To query for the **balances of a reserve token**, read from the `getConnectorBalance` function on the converter contract. The `_connectorToken` argument is the address of the token. 

To query for the **weight of a token in a pool**, read from the `getReserveRatio` function on the converter contract. The `_reserveToken` argument is the address of the token. A return value of **500000** for example signals that the reserve token makes up 50% of the weight of the contract's assets.

To query for the **expected return from a trade**, read from the `getReturn` function on the converter contract. The fromToken and toToken arguments must be addresses of tokens in the pool. The `_amount` is the input value of the trade. The first return value is the expected return in the destination token and the second return value is the fee a trader should expect to pay. 



