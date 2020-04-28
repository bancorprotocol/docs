---
description: How to get basic data from a Liquidity Pool Contract
---

# Querying a Pool Contract

To better understand the properties of a liquidity pool and converter contract, you may want to query the contract for basic information. Some examples of contract data include:

* the addresses of the reserve tokens
* the balance of the reserve tokens
* the reserve ratio of a token in the pool
* the expected return from a trade

If you know the address of your converter contract, navigate to the contract's Etherscan page. If the pool was deployed properly, you should be able to read from the contract directly from Etherscan.

If you only know the address of the pool's smart token, navigate to the token's address on Etherscan and read the return value of `owner` on the verified contract. This is your converter address. 

To query for the **addresses of the reserve tokens**, read from the `connectorTokens` function on the converter contract. The `_index` argument is the index of the token in the order it was added to the pool. If there are three reserve tokens in the pool for example, **0**, **1**, and **2** will be valid inputs and will return the addresses of the tokens.

To query for the **balance of a reserve token** in a pool, read from the `getReserveBalance` function on the converter contract. The `_reserveToken` argument is the address of the token.

To query for the **reserve ratio \(i.e., the weight\) of a token**, read from the `getReserveRatio` function on the converter contract. The `_reserveToken` argument is the address of the token in question. A return value of **500000** for example would signal that the token is weighted at 50% of the pool.

To simulate the **expected return from a trade** of the underlying reserve assets, read from the `getReturn` function on the converter contract. The _fromToken and \`_to

