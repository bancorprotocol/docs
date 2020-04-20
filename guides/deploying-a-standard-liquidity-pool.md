---
description: >-
  This guide provides step-by-step instruction for to how to create a standard
  Bancor liquidity pool.
---

# Deploying a Standard Liquidity Pool

### This document briefly outlines the steps to deploy and activate a Bancor liquidity pool for an ERC-20 token on Bancor Network.

We strongly advise you have the right software development and blockchain knowledge before entering into the process. Mistakes and errors on your behalf in the process of deploying and activating a liquidity pool could result in your financial loss and other related damages.

_Permissionless listing portals can be found here:_

ERC-20 Tokens: [CoTrader Portal](https://bancor.cotrader.com/) \| EOS Tokens: [EOS Nation](https://bancor.eosnation.io/)

## A Note on Liquidity Pools

Most liquidity pools in the Bancor network hold two assets: **BNT**, the Bancor Network Token, and a second trading token, **DAI** or **KNC** for example. With BNT as a the common token - the "hub" - investors can trade token pairs even if a direct liquidity pool doesn't exist. With that in mind, deploying a liquidity pool with BNT and one other asset can offer more utility than expected. This section describes the process for doing so.

## Self-Service Guide

In this process, you'll deploy two contracts:

* **Smart Token Contract \(1\)**
* **Converter Contract \(2\)**

Then, you'll configure your liquidity pool:

* **Define token reserves \(3\)**
* **Set trading fees \(4\)**

Finally, you'll initialize your liquidity pool:

* **Fund pool with initial tokens reserves \(5\)**
* **Issue initial liquidity tokens \(6\)**
* **Activate the system \(7\)**
* **Register your pool \(8\)**

### Step \#1: Deploy the Smart Token Contract

The Smart Relay Token is the contract that will connect your pool's liquidity to the rest of Bancor Network. Use the following instructions:

* Navigate to [MyEtherWallet](https://www.myetherwallet.com/)
* Connect your wallet
* Select `Deploy Contract` from the **Contract** section on the left navigation panel
* Copy and paste the **Byte Code** [here](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/SmartToken.bin) \(make sure to add "0x" at the beginning of the string\)
* Copy and paste the **ABI/JSON Interface** [here](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/SmartToken.abi)
* Input your three parameters:
  * `_name`:  **YYYBNT Pool Token**" would work, for example, for a liquidity pool with YYY and BNT reserves, but there are no constraints on this param.
  * `_symbol` : Using the symbol **YYYBNT"** would be standard practice for a pool with 
  * YYY and BNT reserves.
  * `_decimals` : This is the number of decimals on your token's ERC20 contract. We recommend **18**.
* Name your contract and ensure that you have enough ETH in your account before signing the transaction
* Sign transaction and take note of the deployed contract's address for Step \#2

### Step \#2: Deploy the Converter Contract

Now that the smart token is deployed, we can connect it to the larger Bancor Network. We can use the Bancor Converter Factory to deploy the converter: the exchange contract for your pool.

* Navigate to Bancor's [verified factory contract on Etherscan](https://etherscan.io/address/0x5ed8c09f98b2b3ed37d07414bb8c3f065bbb802b#writeContract)
* Deploy the BancorConverter contract with these parameters:
  * `_token` : The address of the pool token created in the previous step.
  * `_registry`: **0x52ae12abe5d8bd778bd5397f99ca900624cfadd4**
  * `_maxConversionFee` : **30000** \(3%\) - recommended value. Note that this is _not_ your converter's trading fee.
  * `_reserveToken`: Use the BNT token address **0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c** as your first reserve token. The second will be added in the next step.
  * `_reserveRatio` : Use **500,000** \(50%\) meaning the pool will hold two assets in equal size.
* Retrieve the address of the the new contract for step \#3. 

### Step \#3: Define Token Reserves

We've added the first token reserve in your liquidity pool \(BNT\). Now let's add the token of your choice \(YYY\). 

* Navigate to the address of your new contract on Etherscan. It should be automatically verified.
* In the `Write Contract` section, execute the **addReserve** function with the following parameters:

  * `_token` : address of the ERC20 token you want to add to your pool \(e.g. YYY\).
  * `_ratio` : **500,000** \(50%\) because you've deployed a pool with two reserves

### Step \#4: Set Trading Fees

One of Bancor's powerful features is the ability to set custom trading fees for a pool. Many other automated market makers require a set trading fee throughout the system, cutting off market makers from any flexibility specific to their needs.

* Once again, navigate to your new Converter contract on Etherscan. 
* Execute the **setConversionFee** function with the following parameters:

  * `_conversionFee`: 1000 \(equal to 0.1%\) is a common input for this param, but the value is up to you. Recall, that the `maxConversionFee` we set in Step \#2 was 30000 or 3% so this would be the theoretical maximum. Most pools set fees between 0 and 0.3%. 

### Step \#5: Fund Pool with Initial Token Reserves

In this step you'll need to transfer an initial value of both tokens in your pool to your newly created Converter contract. You can use MetaMask or any other wallet of your choice to execute these simple ERC20 transfers. Ensure that each of the token values you transfer are roughly USD-equivalent. Otherwise, you'll be opening an arbitrage opportunity for a future trader. 

* Transfer the BNT to your Converter contract
* Transfer your other token reserve \(ex: YYY\) to your Converter contract

### Step \#6: Issue Initial Liquidity Tokens

In this step, we'll circle back to the Smart Token we deployed in Step \#1. Navigate to the address on Etherscan. The contract should have been automatically verified.

* Execute the `issue` function with the following parameters:
  * `_to`: The address to receive the pool tokens for the initial funding. This is likely your address
  * `_amount`: This is the amount of pool tokens you'll be issuing. You can use any amount but it should be flexible enough to be able to grow/shrink based on liquidity. It's usually recommended to define an amount equal to the total $ value of all the reserves. So if the pool has 2 reserves with $100 value in each, define 200 pool tokens. Recall, we need to enter a value consistent with the number of decimals we defined in Step \#1. If we set our Pool Token contract to 18 decimals, you'll need to enter an argument of 200 \* 10 ^ 18.

### Step \#7: Activate the System

Now that the system is configured, it’s time to activate it. Activation means transferring the pool token ownership to the converter.

* On the `Smart Token` contract in our Remix window, execute the **transferOwnership** function with the following parameters:

  * `_newOwner`: This is the address of the Converter contract we deployed earlier

* On the `Converter` contract on Etherscan, execute the **acceptTokenOwnership** function

### Step \#8: Register your Pool

Now that your pool is active on the blockchain, you want to ensure that it's discoverable on the Bancor SDK, as well as the rest of the liquidity pools on the Bancor Network. First, we need to find the current address of the `ConverterRegistry` contract.

* Navigate to Bancor `ContractRegistry` [contract](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract) on Etherscan
* Enter **0x42616e636f72436f6e7665727465725265676973747279** into the `getAddress` function to read the current address of the `ConverterRegistry`. This is the bytes32 representation of "ConverterRegistry"
* Copy the return value address and use it to search on Etherscan to find the current address of `ConverterRegistry`. It should be verified under the "Contract" tab
* Under the `Write Contract` tab, execute the **addConverter** function with the following parameters:
  * `_converter`: Your new deployed Converter address

Congrats! Your new liquidity pool is active, registered and ready for trading.





\*\*\*\*





