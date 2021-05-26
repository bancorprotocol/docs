---
description: General guide for users on converting assets using the Bancor Network
---

# Trading on Bancor - General

Trading is the core value proposition to users of Bancor Network. The easiest way to trade is to use the [Bancor Dapp](https://www.bancor.network/). This is the recommended entry point to trading on Bancor for new users.

Bancor is also integrated with several decentralized exchange aggregators like [1inch](https://1inch.exchange/#/), [X Nation](http://xnation.io/), [Paraswap](https://paraswap.io/#/) and [DEX.AG](http://dex.ag/). When you use these platforms, your trades may be routed through Bancor.

Other ways to trade via Bancor include the Bancor Widget, which can be embedded by third parties on their sites, and via smart contract interface, where a third party developer has integrated Bancor into their smart contract.

{% hint style="info" %}
Developers should refer to the **Trading with Bancor** guide in the Developer Quick Start section.
{% endhint %}

## Trading via Etherscan

If you want to trade directly on the `BancorNetwork` contract, Etherscan's web UI makes it quite easy. Additionally, this guide will be helpful for developers looking to [interface with Bancor contracts](https://docs.bancor.network/guides/interfacing-with-bancor-contracts) via their own smart contract.

### Step \#1: Query for Latest BancorNetwork Address

Bancor contracts are regularly upgraded so the `BancorNetwork` address may change over time. To find the latest address:

* Navigate to the [ContractRegistry contract on Etherscan](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract)
* In the `Read Contract` section, execute the **getAddress** function with the following parameter:
  * `contractName`: **0x42616e636f724e6574776f726b**. This is the bytes32 representation of "BancorNetwork"
* This return value is the address of the `BancorNetwork` contract. Save this value for Step \#3

### Step \#2: Generate Conversion Path

A key input for any trade on Bancor is the conversion path. The conversion path is the map between liquidity pools that allows for any token on Bancor to be exchanged for any other.

We recommend using the **Bancor SDK** for generating the most efficient path between two tokens. Reference the `getPathAndRate` function documented on the [SDK Github](https://github.com/bancorprotocol/bancor-sdk). This API call will provide you with the conversion path and expected exchange rate of the trade. You'll need both of these inputs for Step \#3.

If you'd like to generate a conversion path on-chain, the `conversionPath` function on the **BancorNetwork** contract provides a good approximation of the best path. This function is well-documented in the `Trading with Bancor` guide in the Developer Quick Start.

### Step \#3: Execute a Trade

* Navigate to the Etherscan page of the contract address we queried for in Step \#1 and head to the `Write Contract` view
* If you're exchanging ether for another token, you'll be using the `convert` function \(\#25\)
* If you're exchanging one token for another token, you'll be using the `claimAndConvert` function \(\#19\)
* You have the `path` parameter from Step \#2 and you can use the `rate` return value from `getPathAndRate` as a reference point for how to determine the `minReturn` argument
* Execute the correct function with the relevant inputs

