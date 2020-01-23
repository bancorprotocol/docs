---
description: This guide will show you how to query the Bancor Network conversion volume.
---

# Conversion Volume

The Bancor Network is composed of many different liquidity pools that work together in order to create a seamless experience for converting any token to any other token in the network.

Getting all the volume information for these pools requires interacting with each pool separately.

In addition, since the Bancor Network operates on multiple blockchains, querying the volume requires a slightly different process on each blockchain.

The principle is the same for each blockchain:

* Get all conversion events from the network
* Normalize the values to a single common denominator \(BNT, USD etc.\)
* Aggregate the data based on the required timeframe \(day, week etc.\)

## Ethereum

### Step 1 - Get Conversion Events

On Ethereum it's possible to simply query the BancorNetwork contract to get all the Conversion events in the entire network:

* `bancorNetwork = ContractRegistry.addressOf('BancorNetwork')` // get the BancorNetwork contract address from the contract registry
* `events = bancorNetwork.getPastEvents('Conversion', { fromBlock: 9200000, toBlock: 9200100})`

For each conversion event, get the amount converted. Note that you can get the value in both the source token and the target token. See the [Conversion](https://github.com/bancorprotocol/docs/tree/6e6fc921006fa85e69dc01b70c8a657b8a5711bd/bancor-network/api-reference/ethereum/bancornetwork.md#event-conversionaddress-smarttoken-address-fromtoken-address-totoken-uint256-fromamount-uint256-toamount-address-trader-bancornetwork-conversion-address-address-address-uint256-uint256-address) event documentation for details.

### Step 2 - Normalize Values

Once you have all the data from the blockchain, it's time to process it.

For each conversion event, the data needs to be normalized into a single common value that can later by aggregated:

* Decide on the output value \(BNT, USD etc.\)
* For each conversion, get the rate between the token and the output value
* Convert the conversion amount to the output value

### Step 3 - Aggregate the Data

Once you have all conversion amounts in a single value, the values can be aggregated based on the required timeframe.

For the simplest aggregation, sum the values up in each required timeframe.

## EOS

Bancor currently doesn't provide an on-chain converter registry on EOS yet, so the values should be hardcoded for the time being.

See the full list on the [EOS Converter List page](eos-converter-list.md).

### Step 1 - Get Conversion Events

Once you have the full list of converters on the blockchain, you can query all `Conversion` events from each one of the converters. This requires processing all the actions from each converter and getting their logs.

Note that in EOS, events are emitted to the log as JSON objects.

For each conversion event, get the amount converted. Note that you can get the value in both the `source` token and the `target` token.

### Step 2 - Normalize Values

Once you have all the data from the blockchain, it's time to process it.

For each conversion event, the data needs to be normalized into a single common value that can later by aggregated:

* Decide on the output value \(BNT, USD etc.\)
* For each conversion, get the rate between the token and the output value
* Convert the conversion amount to the output value

### Step 3 - Aggregate the Data

Once you have all conversion amounts in a single value, the values can be aggregated based on the required timeframe.

For the simplest aggregation, sum the values up in each required timeframe.

