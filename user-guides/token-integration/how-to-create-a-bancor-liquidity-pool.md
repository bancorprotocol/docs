---
description: >-
  This guide provides step-by-step instruction for to how to create a Bancor
  liquidity pool.
---

# How to Create a Bancor Liquidity Pool

### This document briefly outlines the steps to deploy and activate a Bancor liquidity pool for an ERC-20 token on Bancor Network.

We strongly advise you have the right software development and blockchain knowledge before entering into the process. Mistakes and errors on your behalf in the process of deploying and activating a liquidity pool could result in your financial loss and other related damages.

_Permissionless listing portals can be found here:_

ERC-20 Tokens: [CoTrader Portal](https://bancor.cotrader.com/) \| EOS Tokens: [EOS Nation](https://bancor.eosnation.io/)

## Self-Service Guide

### Step \#1: Initial Setup

Note that ABIs/binaries are available on the Bancor Contracts Github repo -

[https://github.com/bancorprotocol/contracts/tree/master/solidity/build](https://github.com/bancorprotocol/contracts/tree/master/solidity/build)

ABIs for specific deployed contracts are available on etherscan.

* BNT token contract - [https://etherscan.io/address/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c](https://etherscan.io/address/0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c)
* ContractRegistry contract - [https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4)
* BancorConverterRegistry contract \(see the [Ethereum Contract Addresses](../network-data-and-stats/ethereum-contract-addresses.md) guide for accessing the latest deployment\).

### Step \#2: Pool Token Deployment

The SmartToken contract is used to deploy the Pool Token. For the name/symbol, it's recommended to use values that contain the symbols of the underlying assets.

* Deploy a SmartToken contract, args:
  * \_name - XXXYYY Pool Token - XXX / YYY can be the symbols of the reserve tokens.
  * \_symbol - XXXYYY - XXX / YYY can be the symbols of the reserve tokens.
  * \_decimals - 18 - the token can have any decimals but it's recommended to use 18, both for precision and for clarity.

### Step \#3: Converter Deployment

Next step is to deploy the converter that will handle the actual conversions.

* Deploy a ConverterBase contract, args:
  * \_token - address of the pool token created in the previous step.
  * \_registry - address of the token registry contract.
  * \_maxConversionFee - 30000 \(3%\) - recommended value.
  * \_reserveToken - it's possible to add the first reserve upon creation by providing its ERC20 address here - this can also be done as a separate step later.
  * \_reserveRatio - ratio of the first reserve if it's defined upon creation, 500,000 \(50%\) can be used when creating a pool with 2 identical reserves \(50% each\).

### Step \#4: Reserve Definition

The Bancor contracts are flexible and allow adding multiple number of reserves to any pool. You can define simple pools with 2 reserves or more advanced pools with as many reserves as you'd like.

The first reserve can also be created upon creation in the previous step. Other reserves can be added by following this step.

Note that since BNT or USDB serve as anchors that connect all pools in the Bancor Network, one of them should be added to the pool to ensure that the pool is actually connected and that tokens in the pool are convertible to other tokens in the network.

* New converter - execute **addReserve**, args:
  * \_token - address of the ERC20 reserve token.
  * \_ratio - reserve ratio, 500,000 \(50%\) can be used when creating a pool with 2 identical reserves \(50% each\), but any ratio can be define as long as the total reserve ratio \(of all reserves\) doesn't exceed 100%.
* Repeat this step for any reserve you'd like to add. Any number of reserves can be added as long as the total reserve ratio doesn't exceed 100%

### Step \#5: Conversion Fee

Once the reserves are set, the actual conversion fee can be set. Low fee will encourage more conversions in the pool while higher value will encourage liquidity providers to add more liquidity to the pool. Pick the right balance between these two that is more suitable for the specific pool.

* New converter - execute **setConversionFee**, args:
  * \_conversionFee - 1,000 \(0.1%\) is used by many pools but it's possible to use any value between 0% and the maximum defined upon creation.

### Step \#6: Funding & Initial Supply

Once the converter is deployed and set up, it's time to provide the initial funding and issue the initial pool token supply.

* Transfer all reserve tokens from your wallet to the newly created converter address.
* Verify that the reserve balances are set and have similar USD \($\) value - the reserve values should be balanced to prevent opening an arbitrage opportunity upon activation.
* New pool token - execute **issue**, args:
  * \_to - address to receive the pool tokens for the initial funding.
  * \_amount - you can use any amount but it should be flexible enough to be able to grow/shrink based on liquidity. It's usually recommended to define an amount equal to the total $ value of all the reserves. So if the pool has 2 reserves with $100 value in each, define 200 pool tokens. Remember the number of decimals when defining the initial supply, so for 200 pool tokens with 18 decimals, you'll need to put in 200 \* 10 ^ 18.

### Step \#7: Activation

Once the system is set, it’s time to activate it. Activation means transferring the pool token ownership to the converter.

* Pool token - execute **transferOwnership**, args:
  * \_newOwner - converter address
* Converter - execute **acceptTokenOwnership**
* The pool is now active on the blockchain

### Step \#8: Listing & Discovery

To ensure that your new pool is discoverable by the SDK and by the different liquidity provider portals, it needs to be added to the converter registry.

* Converter registry - execute **addConverter**, args:
  * \_converter - new converter address. Note that you'll need to provide the converter address as an arg as opposed to the new pool token address.

You new pool is now active and discoverable!

