[Bancor SDK](../README.md) › [Globals](../globals.md) › ["history"](../modules/_history_.md) › [History](_history_.history.md)

# Class: History

The History module allows querying historical data in the bancor network

## Hierarchy

* SDKModule

  ↳ **History**

## Index

### Constructors

* [constructor](_history_.history.md#constructor)

### Properties

* [core](_history_.history.md#core)

### Methods

* [getConversionEvents](_history_.history.md#getconversionevents)
* [getConversionEventsByTimestamp](_history_.history.md#getconversioneventsbytimestamp)

## Constructors

###  constructor

\+ **new History**(`core`: Core): *[History](_history_.history.md)*

*Inherited from [History](_history_.history.md).[constructor](_history_.history.md#constructor)*

Defined in sdk_module.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`core` | Core |

**Returns:** *[History](_history_.history.md)*

## Properties

###  core

• **core**: *any* = null

*Inherited from [History](_history_.history.md).[core](_history_.history.md#core)*

Defined in sdk_module.ts:4

## Methods

###  getConversionEvents

▸ **getConversionEvents**(`token`: [Token](../interfaces/_types_.token.md), `fromBlock`: number, `toBlock`: number): *Promise‹[ConversionEvent](../interfaces/_types_.conversionevent.md)[]›*

Defined in history.ts:17

returns all Conversion events for a given liquidity pool / liquid token between two block numbers

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | [Token](../interfaces/_types_.token.md) | smart token |
`fromBlock` | number | start block number |
`toBlock` | number | end block number  |

**Returns:** *Promise‹[ConversionEvent](../interfaces/_types_.conversionevent.md)[]›*

list of Conversion events

___

###  getConversionEventsByTimestamp

▸ **getConversionEventsByTimestamp**(`token`: [Token](../interfaces/_types_.token.md), `fromTimestamp`: number, `toTimestamp`: number): *Promise‹[ConversionEvent](../interfaces/_types_.conversionevent.md)[]›*

Defined in history.ts:30

returns all Conversion events for a given liquidity pool / liquid token between two points in time

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`token` | [Token](../interfaces/_types_.token.md) | smart token |
`fromTimestamp` | number | start time |
`toTimestamp` | number | end time  |

**Returns:** *Promise‹[ConversionEvent](../interfaces/_types_.conversionevent.md)[]›*

list of Conversion events
