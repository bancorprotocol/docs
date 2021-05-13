---
description: Overview of the Bancor Network Architecture and its core entities.
---

# Network Architecture

Bancor Network consists of a set of smart contracts that manage the conversion flow between tokens - including tokens on different blockchains - and access to liquidity pools.

![Bancor Protocol Overview](../../.gitbook/assets/graph-2-3.png)

## Bancor Converter Registry

Bancor Registry Contract: 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4

## Entities

### Bancor Network Smart Contracts

The core Bancor Network smart contracts manage the conversion flow as well as access to the different liquidity pools.

The main entry point to the network is the BancorNetwork contract.

Users can call the different “convert” functions defined in the BancorNetwork contract to initiate a conversion between any token to any other token in the network - including on other blockchains.

At the heart of the network is the BNT token that connects all the different tokens together. USDB is the stable version of BNT, and is an alternative reserve currency for Bancor Network.

### Liquidity Pools

Liquidity pools on Bancor Network provide liquidity to specific tokens in the network and are managed by liquidity providers.

Anyone can be a liquidity provider and receive conversion fees in the pools they have contributed liquidity to. When a user contributes liquidity, he/she receives pool tokens proportional to his/her holdings in the pool.

Each liquidity pool is managed by a ConverterBase contract.

Liquidity providers can create new instances of the converter contract to create new liquidity pools, as well as call the “fund”/”liquidate” function to add or remove liquidity from a pool.

### Tokens / Liquidity Pools Registry

Every liquidity pool in Bancor Network is registered in a global registry for easy discovery.

It is used by liquidity providers to find or create new pools to contribute to and by users to find which tokens can be converted in the network.

The registry is implemented using the BancorConverterRegistry contract.

Liquidity providers can call the \`registerConverter\`/\`unregisterConverter\` functions to add or remove a liquidity pool to/from the registry.

Users can also call the “tokens” function to iterate through all the available tokens / liquidity pools in the registry.

### Cross-Chain Bridge \(BancorX\)

Bancor is a cross chain liquidity network. Any token in the network can be converted to any other token in the network, even if these tokens reside on different blockchains.

The cross chain bridge is managed by the BancorX contract.

BNT token and its stable version USDB reside on multiple blockchains and can be transferred between the blockchains by any holder of the token.

Users can call the \`xTransfer\` function to transfer reserve tokens between the different blockchains or initiate a conversion in the network that will perform the reserve token transfer on their behalf.

