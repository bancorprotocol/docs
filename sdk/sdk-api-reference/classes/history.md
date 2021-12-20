# History

[Bancor SDK](../) › [Globals](../globals.md) › [History](history.md)

## Class: History

The History module allows querying historical data in the bancor network

### Hierarchy

*   SDKModule

    ↳ **History**

### Index

#### Constructors

* [constructor](history.md#constructor)

#### Properties

* [core](history.md#core)

#### Methods

* [getConversionEvents](history.md#getconversionevents)
* [getConversionEventsByTimestamp](history.md#getconversioneventsbytimestamp)

### Constructors

#### constructor

\+ **new History**(`core`: Core): [_History_](history.md)

_Inherited from_ [_History_](history.md)_._[_constructor_](history.md#constructor)

**Parameters:**

| Name   | Type |
| ------ | ---- |
| `core` | Core |

**Returns:** [_History_](history.md)

### Properties

#### core

• **core**: _any_ = null

_Inherited from_ [_History_](history.md)_._[_core_](history.md#core)

### Methods

#### getConversionEvents

▸ **getConversionEvents**(`token`: [Token](../interfaces/token.md), `fromBlock`: number, `toBlock`: number): _Promise‹_[_ConversionEvent_](../interfaces/conversionevent.md)_\[]›_

returns all Conversion events for a given liquidity pool / liquid token between two block numbers

**Parameters:**

| Name        | Type                            | Description        |
| ----------- | ------------------------------- | ------------------ |
| `token`     | [Token](../interfaces/token.md) | smart token        |
| `fromBlock` | number                          | start block number |
| `toBlock`   | number                          | end block number   |

**Returns:** _Promise‹_[_ConversionEvent_](../interfaces/conversionevent.md)_\[]›_

list of Conversion events

#### getConversionEventsByTimestamp

▸ **getConversionEventsByTimestamp**(`token`: [Token](../interfaces/token.md), `fromTimestamp`: number, `toTimestamp`: number): _Promise‹_[_ConversionEvent_](../interfaces/conversionevent.md)_\[]›_

returns all Conversion events for a given liquidity pool / liquid token between two points in time

**Parameters:**

| Name            | Type                            | Description |
| --------------- | ------------------------------- | ----------- |
| `token`         | [Token](../interfaces/token.md) | smart token |
| `fromTimestamp` | number                          | start time  |
| `toTimestamp`   | number                          | end time    |

**Returns:** _Promise‹_[_ConversionEvent_](../interfaces/conversionevent.md)_\[]›_

list of Conversion events
