---
description: Converting assets using the Bancor Network
---

# Trading on Bancor

Bancor Network is one of the first decentralised exchanges that popularised the use of liquidity pools and AMMs(automated market makers) that allow users to easily deposit and trade crypto currencies.

The main feature of the [Bancor Dapp](https://www.bancor.network/) is trading.
It comes with an intuitive UI so it is a great entry point for users who are interested in the world of Decentralized Finance.

There are other different ways to trade using Bancor too:

1. Bancor is integrated with several other decentralised exchange aggregators like [1inch](https://1inch.exchange/#/), [X Nation](http://xnation.io/),[Paraswap](https://paraswap.io/#/), and [DEX.AG](http://dex.ag/).
   This means when you use any of these platforms your trades may be routed through Bancor.
2. The Bancor Widget.
   This can be embedded by third party websites and developers via smart contract interface integration.

## Trading via Etherscan

If you are a developer you can trade directly on the `BancorNetwork` contract.
[Etherscan](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract) provides you with an easy UI and additionally you can follow this guide on integrating [interface with Bancor contracts](https://docs.bancor.network/guides/interfacing-with-bancor-contracts) via their own smart contract.

### Step \#1: Query for Latest BancorNetwork Address

The `BancorNetwork` address may change over time.
To find the latest updated version you have to do the following:

- Navigate to the [ContractRegistry contract on Etherscan](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract)
- In the `Read Contract` section, execute the **getAddress** function with the following parameter:
  - `_contractName`: **0x42616e636f724e6574776f726b**. This is the bytes32 representation of "BancorNetwork"
- This return value is the address of the `BancorNetwork` contract. Save this value for Step \#3

### Step \#2: Generate Conversion Path

Conversion path is the key input for any trade on Bancor. It is the map between liquidity pools that allows token exchanges on the Network.
To generate the most efficient path between the exchange of two tokens we recommend using **Bancor SDK** .
Navigate to [SDK Github](https://github.com/bancorprotocol/bancor-sdk) and read the documentation of `getPathAndRate` function.
This API call will provide you with the conversion path and expected exchange rate of the trade. You'll need both of these inputs for Step \#3.

To generate a conversion-path on chain use the **BancorNetworkPathFinder** contract.It will provide you with a working path. Be aware that this path might not be the most efficient.

To generate a conversion path on chain:

- Navigate to the Bancor **ContractRegistry** on [Etherscan](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract)
- Read from the `getAddress` function with **0x42616e636f724e6574776f726b5061746846696e646572** as the argument input. This is the bytes32 representation of "BancorNetworkPathFinder"
- Take the return value address of this function and navigate to that address on Etherscan. This is the **BancorNetworkPathFinder** contract
- In the `Read Contract` section, read from the `generatePath` function with your source and destination tokens as inputs

- The return value is an array of addresses that connects your two tokens. You'll notice that your source token is at the first index in the array and your destination token is at the last index

### Step \#3: Execute a Trade

- Open the contract address from Step 1 on [Etherscan](https://etherscan.io/) and click on the `Write Contract` view
- Use the `convert` function \(\#25\) to exchange ether to another token
- If you are exchanging other alt-coins then ether use the `claimAndConvert` function. \(\#19\)
- To determine the `minReturn` argument you can use the `_path` parameter from step 2 and the `rate` return value from `getPathAndRate` as a reference point
- Execute the correct function with the relevant inputs
