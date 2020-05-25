---
description: How to navigate through the Bancor Network contracts
---

# Working with Bancor Network

Bancor Network is composed of several smart contracts that work together to provide a complete solution to on-chain liquidity. Most of these contracts are upgraded occasionally and, for that reason their addresses change. 

The network also includes a contract address discovery mechanism - a contract that servers as a registry for all the core contracts, that queries the latest contract addresses by their names.

In order to stay up-to-date with the latest version and ensure that production code doesn't break, contract addresses should always be referenced by first querying the contract registry.

## Option 1: Querying the ContractRegistry

For example, to get the latest contract address of the BancorNetwork contract, the following call should be used:

`bancorNetwork = ContractRegistry.addressOf('BancorNetwork')`

The `addressOf` function on the **ContractRegistry** [contract](https://etherscan.io/address/0x52ae12abe5d8bd778bd5397f99ca900624cfadd4#readContract) can receive any of the known contract names as an argument, in bytes32 format. Below is a list of all core contract names with their bytes32 representation

## Option 2: Listen to AddressUpdate Events

Every time an address is changed, the ContractRegistry will throw an AddressUpdate event. 

```text
Name 
AddressUpdate (index_topic_1 bytes32 _contractName, address _contractAddress)View Source

Topics
0 0xfc08d1253c81bcd5444fc7056ef1f5a5df4c9220b6fd70d7449267f1f0f29918
1  0x42616e636f72436f6e766572746572466163746f727900000000000000000000

Data
_contractAddress : 0x3cc4a258aff14a88380ca3d9703d6bbfb7a8042e

```

For example, to get the latest contract address of the BancorNetwork contract, one should track an AddressUpdate event that indicates new address for BancorNetwork \(using its bytes32 representation\).

## Contract Names and Addresses

### ContractRegistry address

| **Contract Name** | Contract Address |
| :--- | :--- |
| `ContractRegistry​` | `0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4` |

{% hint style="info" %}
ContractRegistry also indicates its own address, which means you should run the same process to make sure you are working with the latest version of the ContractRegistry
{% endhint %}



### List of Contracts Names and Bytes32 Representation

| **Contract Name** | bytes32 Representation |
| :--- | :--- |
| `ContractRegistry` | `0x436f6e74726163745265676973747279z` |
| `BancorNetwork` | `0x42616e636f724e6574776f726b` |
| `BancorFormula` | `0x42616e636f72466f726d756c61` |
| `BancorConverterRegistry` | `0x42616e636f72436f6e7665727465725265676973747279` |
| `BancorNetworkPathFinder` | `0x42616e636f724e6574776f726b5061746846696e646572` |

{% hint style="info" %}
If you are not sure about the contract name or bytes32 representation, you can always trigger the function contractNames with a serial number as an input \(i.e. 0, 1, 2, etc\). The response will be the name of the available contract.
{% endhint %}

###  <a id="mainnet"></a>

