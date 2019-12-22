---
description: >-
  This page provides a step-by-step guide to how to create a Bancor liquidity
  pool.
---

# How to Create a Bancor Liquidity Pool

#### This document briefly outlines the steps to deploy and activate a Bancor liquidity pool for an ERC-20 token on Bancor Network.

We strongly advise you have the right software development and blockchain knowledge before entering into the process. Mistakes and errors on your behalf in the process of deploying and activating a liquidity pool could result in your financial loss and other related damages.

_Permissionless listing portals can be found here:_ 

ERC-20 Tokens: [CoTrader Portal](https://bancor.cotrader.com/) \| EOS Tokens: [EOS Nation](https://bancor.eosnation.io/)

### Self-Service Guide 

#### Step \#1: Initial Setup

Note that ABIs/binaries are available on the Bancor Contracts Github repo -

[https://github.com/bancorprotocol/contracts/tree/master/solidity/contracts/build](https://github.com/bancorprotocol/contracts/tree/master/solidity/contracts/build)

ABIs for specific deployed contracts are available on etherscan.

* Watch the BNT token contract - 0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C
* Watch the ContractRegistry contract - 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4
* Watch the ERC20 token contract

#### Step \#2: Smart Relay Token Deployment

Initially, the SmartToken is deployed that serves as a “bridge” between the existing ERC20 token and bancor network.

* Deploy a SmartToken contract, args \(XXX stands for the ERC20 token symbol\):
  * Name: XXX Smart Relay Token
  * Symbol: XXXBNT
  * Decimals: 18

#### Step \#3: Converter Deployment

Next step is to deploy the converter that will handle the actual conversions.

* Deploy a BancorConverter contract, args:
  * Token: Select XXXBNT token created in the previous step
  * Registry: Select Contract Registry contract
  * Max Fee: 30000 \(3%\)
  * Connector: Select BNT contract
  * Weight: 500,000 \(50%\)
* New converter - execute **addConnector**, args:
  * Existing ERC20 token address
  * Weight, 500,000 \(50%\)
  * enableVirtualB-alance - false \(can be updated later on if needed\)
* New converter - execute **setConversionFee**, args:
  * Fee: 1,000 \(0.1%\)

#### Step \#4: Funding & Initial Supply

Once the converter is deployed and set up, you will fund it and issue the relay token initial supply.

* Transfer the ERC20 connector amount from an existing account to the deployed converter address
* Transfer the BNT connector amount from an existing account to the deployed converter address
* Verify that the connector balances are set and have similar USD \($\) value - doesn’t have to be perfect but should be close enough - a small percentage difference is fine
* New relay token - execute **issue**, args:
  * Address: owner address received from the token issuer
  * Amount: BNT connector balance x 2 \(remember the 18 decimals\)

#### Step \#5: Activation

Once the system is set, it’s time to activate it. Activation means transferring the token ownership to the converter.

* New SmartToken, deployed earlier \(step \#2\): execute **transferOwnership**, args:
  * Converter address
* Converter, deployed earlier \(step \#3\): execute **acceptTokenOwnership**
* The relay is now active on the blockchain

#### Step \#6: Multisig Ownership

This is an optional but recommended step - move ownership of all contracts to a multisig wallet for extra security.

* New converter \(from existing owner\) - execute **transferOwnership**/**transferManagement**, args:
* Multisig wallet address
* New converter \(from new owner\) - execute **acceptOwnership**/**acceptManagement** on the new converter

#### Step \#7: Converters Registry Listing

To ensure your relay is added to our Master Registry, please join the [Bancor Developers Telegram Group](https://t.me/BancorDevelopers) and announce your integration to make sure it is tracked and included by our community of developers. 



