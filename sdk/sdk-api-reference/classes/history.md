[Bancor SDK](../README.md) › [Globals](../globals.md) › [History](history.md)

# Class: History

The History module allows querying historical data in the bancor network

## Hierarchy

* SDKModule

  ↳ **History**

## Index

### Constructors

* [constructor](history.md#constructor)

### Properties

* [core](history.md#core)

### Methods

* [getConversionEvents](history.md#getconversionevents)
* [getConversionEventsByTimestamp](history.md#getconversioneventsbytimestamp)

## Constructors

###  constructor

\+ **new History**(`core`: Core): *[History](history.md)*

*Inherited from [History](history.md).[constructor](history.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`core` | Core |

**Returns:** *[History](history.md)*

## Properties

###  core

• **core**: *any* = null

*Inherited from [History](history.md).[core](history.md#core)*

## Methods

###  getConversionEvents

▸ **getConversionEvents**(`token`: [Token](../interfaces/token.md), `fromBlock`: number, `toBlock`: number): *Promise‹[ConversionEvent](../interfaces/conversionevent.md)[]›*

returns all Conversion events for a given liquidity pool / liquid token between two block numbers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | [Token](../interfaces/token.md) | smart token |
`fromBlock` | number | start block number |
`toBlock` | number | end block number  |

**Returns:** *Promise‹[ConversionEvent](../interfaces/conversionevent.md)[]›*

list of Conversion events

___

###  getConversionEventsByTimestamp

▸ **getConversionEventsByTimestamp**(`token`: [Token](../interfaces/token.md), `fromTimestamp`: number, `toTimestamp`: number): *Promise‹[ConversionEvent](../interfaces/conversionevent.md)[]›*

returns all Conversion events for a given liquidity pool / liquid token between two points in time

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | [Token](../interfaces/token.md) | smart token |
`fromTimestamp` | number | start time |
`toTimestamp` | number | end time  |

**Returns:** *Promise‹[ConversionEvent](../interfaces/conversionevent.md)[]›*

list of Conversion events
