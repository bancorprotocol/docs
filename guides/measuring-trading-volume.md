---
description: >-
  This guide will show you how to query the Bancor Network for trading volume,
  or "conversion volume" in Bancor parlance
---

# Measuring Trading Volume

The Bancor Network is composed of many different liquidity pools that work together in order to create a seamless experience for converting any token to any other token in the network. Querying for all the volume information for these pools requires interacting with each pool separately.

In addition, since the Bancor Network operates on multiple blockchains, querying the volume requires a slightly different process on each blockchain.

The principle is the same for each blockchain:

* Query for all conversion events from the network
* Normalize the values to a single common denominator \(BNT, USD etc.\)
* Aggregate the data based on the required timeframe \(day, week etc.\)

## Ethereum

### Step 1 - Query for Conversion Events

On Ethereum it's possible to simply query the **BancorNetwork** contract to get all the conversion events in the network:

* `bancorNetwork = ContractRegistry.addressOf('BancorNetwork')` This pulls the BancorNetwork contract address from the contract registry
* `events = bancorNetwork.getPastEvents('Conversion', { fromBlock: 9200000, toBlock: 9200100})`

For each conversion event, get the amount converted. Note that you can get the value in both the source token and the target token. See the [Conversion](https://docs.bancor.network/sdk/sdk-api-reference/interfaces/conversionevent) event documentation for details.

### Step 2 - Normalize Values

Once you have all the data from the blockchain, it's time to process it.

For each conversion event, the data needs to be normalized into a single common value that can later be aggregated:

* Decide on the output value \(BNT, USD etc.\)
* For each conversion, get the rate between the token and the output value
* Convert the conversion amount to the output value

### Step 3 - Aggregate the Data

Once you have all conversion amounts in a single unit of value, the values can be aggregated based on the required timeframe.

For the simplest aggregation, sum the values up in each timeframe.



