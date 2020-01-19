---
description: >-
  This section contains the list of the deployed contract addresses on both the
  Ethereum mainnet and Ropsten testnet.
---

# Ethereum Contract Addresses

Bancor Network is composed of multiple smart contracts that are working together to provide a complete solution to on-chain liquidity.

Most of these contracts are occasionally upgraded and thus, their address changes.

The network also includes a contract address discovery mechanism - a contract that servers as a registry for all the core contracts, that allows querying the latest contract addresses by their names.

In order to always work with the latest version and ensure that production code doesn't break, contract addresses should always be referenced by first querying the contract registry.

The only exception is the contract registry itself, whose address rarely changes, if at all.

For example, to get the latest contract address of the BancorNetwork contract, the following call should be used:

`bancorNetwork = ContractRegistry.addressOf('BancorNetwork')`

The `addressOf` function can receive any of the known contract names as an argument, in bytes32 format. Below is a list of all core contract names with their bytes32 representation:

| **Contract Name** | bytes32 Representation |
| :--- | :--- |
| BancorNetwork | 0x42616e636f724e6574776f726b |
| BancorConverterRegistry | 0x42616e636f72436f6e7665727465725265676973747279 |
| BancorNetworkPathFinder | 0x42616e636f724e6574776f726b5061746846696e646572 |
| BancorConverterUpgrader | 0x42616e636f72436f6e7665727465725570677261646572 |
| BancorFormula | 0x42616e636f72466f726d756c61 |

Below are the Bancor Network contract addresses that cannot be retrieved from the contract registry:

### Mainnet

| **Contract Name** | Contract Address |
| :--- | :--- |
| [ContractRegistry](../../api-reference/introduction/utility/contractregistry.md) | 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4 |
| [BNT Token](../../api-reference/introduction/token/smarttoken.md) | 0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C |
| [ETH Token](../../api-reference/introduction/token/ethertoken.md) | 0xc0829421C1d260BD3cB3E0F06cfE2D52db2cE315 |

### Ropsten

| **Contract Name** | Contract Address |
| :--- | :--- |
| [ContractRegistry](../../api-reference/introduction/utility/contractregistry.md) | 0xFD95E724962fCfC269010A0c6700Aa09D5de3074 |
| [BNT Token](../../api-reference/introduction/token/smarttoken.md) | 0x62bd9D98d4E188e281D7B78e29334969bbE1053c |
| [ETH Token](../../api-reference/introduction/token/ethertoken.md) | 0xD368b98d03855835E2923Dc000b3f9c2EBF1b27b |

