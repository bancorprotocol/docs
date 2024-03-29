---
description: >-
  General guide for users on how to be a market maker for a Bancor liquidity
  pool
---

# Liquidity Provision - General

If you are not a developer, see this [step by step guide to adding / removing liquidity](https://blog.bancor.network/how-to-stake-liquidity-earn-fees-on-bancor-bff8369274a1) from the bancor.network front-end.&#x20;

Alternatively, developers can interact with the Bancor contracts directly using the below guide.

{% hint style="info" %}
Developers are encouraged to use the guide in the **Developer Quick Start** section.
{% endhint %}

### Adding Liquidity via Etherscan

The first required piece of information is the **Converter** contract address for the liquidity pool.&#x20;

* Find the SmartToken for the relevant pool on Etherscan and navigate to the `Read` tab in the contract view.
* Find the address in the return value for the `owner` function

For each ERC20 token that you contribute to a liquidity pool, you'll need to approve the transfer amount on each of the contracts.

* Find the token contract on Etherscan
* Find the `_approve` function in the `Write` section of the contract page
* Execute the `_approve` function with the following parameters:
  * `_spender`: This should be the converter address you found above
  * `_amount`: This is the number of tokens of this kind of you plan to contribute. Remember to consider the ERC20 decimals (.e.g. 200 DAI would equal 200 ^ 10\*\*18)

Repeat this step for all the relevant tokens.

Now, find the **Converter** contract on Etherscan. Execute the `fund` function with the following parameter:

* `_amount`: This is the number of liquidity tokens you expect the liquidity pool to issue you. Finding this figure may require some math to calculate the expected liquidity token issuance based on your contribution and the outstanding balance of assets in the pool

### Removing Liquidity via Etherscan

* Find the token contract on Etherscan
* Execute the `liquidate` function with the following parameter:
  * `_amount`: The number of liquidity tokens you would like to redeem for the underlying reserves





