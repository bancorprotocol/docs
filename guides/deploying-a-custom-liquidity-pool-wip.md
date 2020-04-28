---
description: >-
  This guide provides step-by-step instruction for to how to create a custom
  Bancor liquidity pool, with flexibility around number of assets and reserve
  ratio
---

# Deploying a Custom Liquidity Pool

### This document briefly outlines the steps to deploy and activate a custom Bancor liquidity pool for an ERC-20 token on Bancor Network.

We strongly advise you have the right software development and blockchain knowledge before entering into the process. Mistakes and errors on your behalf in the process of deploying and activating a liquidity pool could result in your financial loss and other related damages.

_Self-service listing portals can be found here:_

ERC-20 Tokens: [Katana Pools](https://katanapools.com/pool/create) \| EOS Tokens: [EOS Nation](https://bancor.eosnation.io/)

## A Note on Liquidity Pools

Certain liquidity pools on Bancor are highly customized. They can hold any combination of assets at any reserve ratio. This section describes the process for deploying this type of liquidity pool.

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
* Copy and paste the **Byte Code** from [here](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/SmartToken.bin) \(make sure to add "0x" at the beginning of the string\)
* Copy and paste the **ABI/JSON Interface** from [here](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/SmartToken.abi)
* Input your three parameters:
* * `_name`:  "**ZZZDAIYYY Pool Token**" would make sense, for example, for a liquidity pool with ZZZ, DAI and YYY reserves.
  * `_symbol` : Using the symbol **"ZZZDAIYYY"** would be standard practice for a pool with ZZZ, DAI and YYY reserves.
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
  * `_reserveToken`: Use the first reserve in your liquidity pool for this argument. In this case, you'd use the address of the ZZZ token. The other reserves will be added in the following step.
  * `_reserveRatio` : This argument will be the percentage of your pool allocated to the ZZZ token. For example, 20% would mean you would input **200,000**
* Retrieve the address of the the new contract for step \#3. 

{% hint style="info" %}
Remember, the sum of the reserve ratios of your assets must equal **100%** or **1000000**
{% endhint %}

### Step \#3: Define Token Reserves

We've added the first token reserve in your liquidity pool \(e.g., ZZZ\). Now let's add the second \(e.g., DAI\). 

* Navigate to the address of your new contract on Etherscan. It should have been automatically verified. 
* Execute the **addReserve** function with the following parameters:

  * `_token` : Address of the ERC20 token you want to add \(ex: DAI\).
  * `_ratio` : Share of the pool allocated to this token \(ex: 600000 / 60%\)

Repeat this step until you've added all the remaining assets. If you're deploying a pool with three assets, you'll have to repeat this step once to add the third asset. 

### Step \#4: Set Trading Fees

One of Bancor's powerful features is the ability to set custom trading fees for a pool. Many other automated market makers require a set trading fee throughout the system, cutting off market makers from any flexibility specific to their needs.

* Once again, navigate to your new Converter contract on Etherscan. 
* Execute the **setConversionFee** function with the following parameters:

  * `_conversionFee`: 1000 \(equal to 0.1%\) is a common input for this param, but the value is up to you. Recall, that the `maxConversionFee` we set in Step \#2 was 30000 or 3% so this would be the theoretical maximum. Most pools set fees between 0 and 0.3%. 

### Step \#5: Fund Pool with Initial Token Reserves

In this step you'll need to transfer an initial value of each of the tokens in your pool to your newly created Converter contract. You can use MetaMask or any other wallet of your choice to execute these simple ERC20 transfers. Ensure that each of the token values you transfer are roughly in-line in USD terms with the proportion you defined in your reserve ratios \(e.g. ZZZ: 20%, DAI: 60%, YYY: 20%\). Otherwise, you'll be opening an arbitrage opportunity for a future trader. 

* Transfer each ERC20 token in correct proportionate value to the contract

### Step \#6: Issue Initial Liquidity Tokens

In this step, we'll circle back to the Smart Token we deployed in Step \#1. Navigate to the address on Etherscan. The contract should have been automatically verified.

* Execute the `issue` function with the following parameters:
  * `_to`: The address to receive the pool tokens for the initial funding. This is likely your address
  * `_amount`: This is the amount of pool tokens you'll be issuing. You can use any amount but it should be flexible enough to be able to grow/shrink based on liquidity. It's usually recommended to define an amount equal to the total $ value of all the reserves. So if the pool has 3 reserves with reserve values of $20, $60, and $20 \($100 total\), define 100 pool tokens. Recall, we need to enter a value consistent with the number of decimals we defined in Step \#1. If we set our Pool Token contract to 18 decimals, you'll need to enter an argument of 100 \* 10 ^ 18.

### Step \#7: Activate the System

Now that the system is configured, it’s time to activate it. Activation means transferring the pool token ownership to the converter.

* On the `Smart Token` contract on Etherscan, execute the **transferOwnership** function with the following parameters:

  * `_newOwner`: This is the address of the Converter contract we deployed earlier

* On the `Converter` contract on Etherscan, execute the **acceptTokenOwnership** function

### Step \#8: Register your Pool

Now that your pool is active on the blockchain, you want to ensure that it's discoverable on the Bancor SDK, as well as the rest of the liquidity pools on the Bancor Network. First, we need to find the current address of the `ConverterRegistry` contract.

* Navigate to Bancor `ContractRegistry` [contract](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract) on Etherscan
* Enter **0x42616e636f72436f6e7665727465725265676973747279** into the `getAddress` function to read the current address of the `ConverterRegistry`. This is the bytes32 representation of "ConverterRegistry"
* Copy the return value address and use it to search on Etherscan to find the current address of `ConverterRegistry`. It should be verified under the "Contract" tab
* Under the "Write" tab, execute the **addConverter** function with the following parameters:
  * `_converter`: Your new deployed Converter address

Congrats! Your new liquidity pool is active, registered and ready for trading.





