# Table of contents

* [Introduction](README.md)

## Getting Started

* [Resources](../getting-started/resources.md)
* [What Can I Do With Bancor?](../getting-started/what-can-i-do-with-bancor.md)

## Developer Quick Start

* [Working with Bancor Network](../developer-quick-start/working-with-bancor-network.md)
* [Trading with Bancor](../developer-quick-start/trading-with-bancor.md)
* [Adding and Removing Liquidity](../developer-quick-start/adding-and-removing-liquidity.md)
* [Deploying Liquidity Pools](../developer-quick-start/deploying-liquidity-pools.md)
* [Deploying Bancor Contracts for Testing](../developer-quick-start/deploying-bancor-contracts-for-testing.md)

## Liquidity Pools

* [Overview](../liquidity-pools/liquidity-overview.md)
* [Mechanics](../liquidity-pools/liquidity-pool-mechanics.md)
* [Impermanent Loss](../liquidity-pools/impermanent-loss.md)
* [Slippage](../liquidity-pools/slippage.md)
* [The Bancor Formula](../liquidity-pools/the-bancor-formula.md)

## Other Guides <a id="guides"></a>

* [Trading on Bancor - General](../guides/trading-on-bancor-general.md)
* [Deploying a Liquidity Pool for Testing](../guides/deploying-a-liquidity-pool-testing.md)
* [Liquidity Provision - General](../guides/general-liquidity-provision.md)
* [Managing Ownership of Liquidity Pools](../guides/accepting-ownership-of-liquidity-pools.md)
* [Upgrading a Converter Contract](../guides/upgrading-a-converter-contract.md)
* [Interfacing with Bancor Contracts](../guides/interfacing-with-bancor-contracts.md)
* [Minting USDB](../guides/minting-usdb.md)
* [Querying a Pool Contract](../guides/querying-a-pool-contract.md)
* [Measuring Trading Volume](../guides/measuring-trading-volume.md)
* [Creating an Affiliate Widget](../guides/creating-an-affiliate-widget.md)

## Network Architecture

* [Overview](../network-architecture/overview.md)
* [Ethereum](../network-architecture/ethereum.md)
* [BancorX](../network-architecture/bancorx.md)

## Ethereum Contracts

* [Addresses](../ethereum-contracts/ethereum-addresses.md)
* [API Reference](../ethereum-contracts/ethereum-api-reference/README.md)
  * [BancorNetwork](../ethereum-contracts/ethereum-api-reference/BancorNetwork.md)
  * [BancorX](../ethereum-contracts/ethereum-api-reference/bancorx/README.md)
    * [BancorX](../ethereum-contracts/ethereum-api-reference/bancorx/BancorX.md)
  * [Converter](../ethereum-contracts/ethereum-api-reference/converter/README.md)
    * [ConverterBase](../ethereum-contracts/ethereum-api-reference/converter/ConverterBase.md)
    * [LiquidityPoolConverter](../ethereum-contracts/ethereum-api-reference/converter/LiquidityPoolConverter.md)
    * [LiquidityPoolV1Converter](../ethereum-contracts/ethereum-api-reference/converter/LiquidityPoolV1Converter.md)
    * [LiquidTokenConverter](../ethereum-contracts/ethereum-api-reference/converter/LiquidTokenConverter.md)
    * [ConverterRegistry](../ethereum-contracts/ethereum-api-reference/converter/ConverterRegistry.md)
    * [ConverterUpgrader](../ethereum-contracts/ethereum-api-reference/converter/ConverterUpgrader.md)
    * [BancorFormula](../ethereum-contracts/ethereum-api-reference/converter/BancorFormula.md)
  * [Token](../ethereum-contracts/ethereum-api-reference/token/README.md)
    * [ERC20Token](../ethereum-contracts/ethereum-api-reference/token/ERC20Token.md)
    * [EtherToken](../ethereum-contracts/ethereum-api-reference/token/EtherToken.md)
    * [SmartToken](../ethereum-contracts/ethereum-api-reference/token/SmartToken.md)
  * [Utility](../ethereum-contracts/ethereum-api-reference/utility/README.md)
    * [ContractRegistry](../ethereum-contracts/ethereum-api-reference/utility/ContractRegistry.md)
    * [ContractRegistryClient](../ethereum-contracts/ethereum-api-reference/utility/ContractRegistryClient.md)
    * [Owned](../ethereum-contracts/ethereum-api-reference/utility/Owned.md)
    * [TokenHandler](../ethereum-contracts/ethereum-api-reference/utility/TokenHandler.md)
    * [TokenHolder](../ethereum-contracts/ethereum-api-reference/utility/TokenHolder.md)
    * [ReentrancyGuard](../ethereum-contracts/ethereum-api-reference/utility/ReentrancyGuard.md)
    * [Utils](../ethereum-contracts/ethereum-api-reference/utility/Utils.md)
    * [SafeMath](../ethereum-contracts/ethereum-api-reference/utility/SafeMath.md)
    * [Whitelist](../ethereum-contracts/ethereum-api-reference/utility/Whitelist.md)

## EOS Contracts

* [Converter List](../eos-contracts/converter-list.md)
* [API Reference](../eos-contracts/eos-api-reference/README.md)
  * [BancorConverter](../eos-contracts/eos-api-reference/bancorconverter/README.md)
    * [Converters Table](../eos-contracts/eos-api-reference/bancorconverter/converters-table.md)
    * [Reserves Table](../eos-contracts/eos-api-reference/bancorconverter/reserves-table.md)
    * [Settings Table](../eos-contracts/eos-api-reference/bancorconverter/settings-table.md)
    * [Accounts Table](../eos-contracts/eos-api-reference/bancorconverter/accounts-table.md)
  * [BancorNetwork](../eos-contracts/eos-api-reference/bancornetwork/README.md)
    * [Settings Table](../eos-contracts/eos-api-reference/bancornetwork/settings-table.md)
  * [Token](../eos-contracts/eos-api-reference/token/README.md)
    * [Currency Stats Table](../eos-contracts/eos-api-reference/token/currency-stats-table.md)
    * [Accounts Table](../eos-contracts/eos-api-reference/token/accounts-table.md)
  * [BancorX](../eos-contracts/eos-api-reference/bancorx/README.md)
    * [Amounts Table](../eos-contracts/eos-api-reference/bancorx/amounts-table.md)
    * [Reporters Table](../eos-contracts/eos-api-reference/bancorx/reporters-table.md)
    * [Transfers Table](../eos-contracts/eos-api-reference/bancorx/transfers-table.md)
    * [Settings Table](../eos-contracts/eos-api-reference/bancorx/settings-table.md)
  * [XTransferRerouter](../eos-contracts/eos-api-reference/xtransferrerouter/README.md)
    * [Settings Table](../eos-contracts/eos-api-reference/xtransferrerouter/settings-table.md)

## SDK

* [Using the Bancor SDK](../sdk/using-the-bancor-sdk.md)
* [API Reference](../sdk/sdk-api-reference/README.md)
  * [Globals](../sdk/sdk-api-reference/globals.md)
  * [Classes](../sdk/sdk-api-reference/classes/README.md)
    * [SDK](../sdk/sdk-api-reference/classes/sdk.md)
    * [Pricing](../sdk/sdk-api-reference/classes/pricing.md)
    * [History](../sdk/sdk-api-reference/classes/history.md)
    * [Utils](../sdk/sdk-api-reference/classes/utils.md)
  * [Interfaces](../sdk/sdk-api-reference/interfaces/README.md)
    * [ConversionEvent](../sdk/sdk-api-reference/interfaces/conversionevent.md)
    * [Converter](../sdk/sdk-api-reference/interfaces/converter.md)
    * [Settings](../sdk/sdk-api-reference/interfaces/settings.md)
    * [Token](../sdk/sdk-api-reference/interfaces/token.md)
  * [Enums](../sdk/sdk-api-reference/enums/README.md)
    * [BlockchainType](../sdk/sdk-api-reference/enums/blockchaintype.md)

