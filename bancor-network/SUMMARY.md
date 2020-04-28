# Table of contents

* [Introduction](README.md)

## Getting Started

* [Resources](../getting-started/resources.md)
* [What Can I Do With Bancor?](../getting-started/what-can-i-do-with-bancor.md)

## Liquidity Pools

* [Overview](../liquidity-pools/liquidity-overview.md)
* [Mechanics](../liquidity-pools/liquidity-pool-mechanics.md)
* [Impermanent Loss](../liquidity-pools/impermanent-loss.md)
* [Slippage](../liquidity-pools/slippage.md)
* [The Bancor Formula](../liquidity-pools/the-bancor-formula.md)

## Network Architecture

* [Overview](../network-architecture/overview.md)
* [Ethereum](../network-architecture/ethereum.md)
* [BancorX](../network-architecture/bancorx.md)

## Guides

* [Trading on Bancor](../guides/trading-on-bancor.md)
* [Deploying a Standard Liquidity Pool](../guides/deploying-a-standard-liquidity-pool.md)
* [Deploying a Custom Liquidity Pool](../guides/deploying-a-custom-liquidity-pool-wip.md)
* [Adding and Removing Liquidity](../guides/adding-liquidity-to-a-pool.md)
* [Accepting Ownership of Liquidity Pools](../guides/accepting-ownership-of-liquidity-pools.md)
* [Upgrading a Converter Contract](../guides/upgrading-a-converter-contract.md)
* [Interfacing with Bancor Contracts](../guides/interfacing-with-bancor-contracts.md)
* [Minting USDB](../guides/minting-usdb.md)
* [Querying a Pool Contract](../guides/querying-a-pool-contract.md)
* [Measuring Trading Volume](../guides/measuring-trading-volume.md)
* [Creating an Affiliate Widget](../guides/creating-an-affiliate-widget.md)

## Ethereum Contracts

* [Addresses](../ethereum-contracts/ethereum-addresses.md)
* [API Reference](../ethereum-contracts/ethereum-api-reference/README.md)
  * [BancorNetwork](../ethereum-contracts/ethereum-api-reference/bancornetwork.md)
  * [BancorNetworkPathFinder](../ethereum-contracts/ethereum-api-reference/bancornetworkpathfinder.md)
  * [BancorX](../ethereum-contracts/ethereum-api-reference/bancorx/README.md)
    * [BancorX](../ethereum-contracts/ethereum-api-reference/bancorx/bancorx.md)
  * [Converter](../ethereum-contracts/ethereum-api-reference/converter/README.md)
    * [BancorConverter](../ethereum-contracts/ethereum-api-reference/converter/bancorconverter.md)
    * [BancorConverterFactory](../ethereum-contracts/ethereum-api-reference/converter/bancorconverterfactory.md)
    * [BancorConverterRegistry](../ethereum-contracts/ethereum-api-reference/converter/bancorconverterregistry.md)
    * [BancorConverterUpgrader](../ethereum-contracts/ethereum-api-reference/converter/bancorconverterupgrader.md)
    * [BancorFormula](../ethereum-contracts/ethereum-api-reference/converter/bancorformula.md)
    * [BancorGasPriceLimit](../ethereum-contracts/ethereum-api-reference/converter/bancorgaspricelimit.md)
  * [Token](../ethereum-contracts/ethereum-api-reference/token/README.md)
    * [ERC20Token](../ethereum-contracts/ethereum-api-reference/token/erc20token.md)
    * [EtherToken](../ethereum-contracts/ethereum-api-reference/token/ethertoken.md)
    * [SmartToken](../ethereum-contracts/ethereum-api-reference/token/smarttoken.md)
    * [SmartTokenController](../ethereum-contracts/ethereum-api-reference/token/smarttokencontroller.md)
  * [Utility](../ethereum-contracts/ethereum-api-reference/utility/README.md)
    * [ContractFeatures](../ethereum-contracts/ethereum-api-reference/utility/contractfeatures.md)
    * [ContractRegistry](../ethereum-contracts/ethereum-api-reference/utility/contractregistry.md)
    * [ContractRegistryClient](../ethereum-contracts/ethereum-api-reference/utility/contractregistryclient.md)
    * [Managed](../ethereum-contracts/ethereum-api-reference/utility/managed.md)
    * [Owned](../ethereum-contracts/ethereum-api-reference/utility/owned.md)
    * [SafeMath](../ethereum-contracts/ethereum-api-reference/utility/safemath.md)
    * [TokenHolder](../ethereum-contracts/ethereum-api-reference/utility/tokenholder.md)
    * [Utils](../ethereum-contracts/ethereum-api-reference/utility/utils.md)
    * [Whitelist](../ethereum-contracts/ethereum-api-reference/utility/whitelist.md)

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

* [API Reference](../sdk/sdk-api-reference/README.md)
  * [Globals](../sdk/sdk-api-reference/globals.md)
  * [Classes](../sdk/sdk-api-reference/classes/README.md)
    * [SDK](../sdk/sdk-api-reference/classes/_index_.sdk.md)
    * [Pricing](../sdk/sdk-api-reference/classes/_pricing_.pricing.md)
    * [History](../sdk/sdk-api-reference/classes/_history_.history.md)
    * [Utils](../sdk/sdk-api-reference/classes/_utils_.utils.md)
  * [Enums](../sdk/sdk-api-reference/enums/README.md)
    * [BlockchainType](../sdk/sdk-api-reference/enums/_types_.blockchaintype.md)
  * [Interfaces](../sdk/sdk-api-reference/interfaces/README.md)
    * [Blockchain](../sdk/sdk-api-reference/interfaces/_types_.blockchain.md)
    * [ConversionEvent](../sdk/sdk-api-reference/interfaces/_types_.conversionevent.md)
    * [Converter](../sdk/sdk-api-reference/interfaces/_types_.converter.md)
    * [Settings](../sdk/sdk-api-reference/interfaces/_types_.settings.md)
    * [Token](../sdk/sdk-api-reference/interfaces/_types_.token.md)
  * [Modules](../sdk/sdk-api-reference/modules/README.md)
    * [SDK](../sdk/sdk-api-reference/modules/_index_.md)
    * [Pricing](../sdk/sdk-api-reference/modules/_pricing_.md)
    * [History](../sdk/sdk-api-reference/modules/_history_.md)
    * [Utils](../sdk/sdk-api-reference/modules/_utils_.md)
    * [Types](../sdk/sdk-api-reference/modules/_types_.md)
