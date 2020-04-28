[Bancor SDK](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [Blockchain](_types_.blockchain.md)

# Interface: Blockchain

Blockchain interface - defines the methods that each blockchain plugin should implement

## Hierarchy

* **Blockchain**

## Index

### Methods

* [getAnchorToken](_types_.blockchain.md#getanchortoken)
* [getConversionEvents](_types_.blockchain.md#getconversionevents)
* [getConversionEventsByTimestamp](_types_.blockchain.md#getconversioneventsbytimestamp)
* [getConverterVersion](_types_.blockchain.md#getconverterversion)
* [getPaths](_types_.blockchain.md#getpaths)
* [getRates](_types_.blockchain.md#getrates)

## Methods

###  getAnchorToken

▸ **getAnchorToken**(): *[Token](_types_.token.md)*

**Returns:** *[Token](_types_.token.md)*

___

###  getConversionEvents

▸ **getConversionEvents**(`token`: [Token](_types_.token.md), `fromBlock`: number, `toBlock`: number): *Promise‹[ConversionEvent](_types_.conversionevent.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](_types_.token.md) |
`fromBlock` | number |
`toBlock` | number |

**Returns:** *Promise‹[ConversionEvent](_types_.conversionevent.md)[]›*

___

###  getConversionEventsByTimestamp

▸ **getConversionEventsByTimestamp**(`token`: [Token](_types_.token.md), `fromTimestamp`: number, `toTimestamp`: number): *Promise‹[ConversionEvent](_types_.conversionevent.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](_types_.token.md) |
`fromTimestamp` | number |
`toTimestamp` | number |

**Returns:** *Promise‹[ConversionEvent](_types_.conversionevent.md)[]›*

___

###  getConverterVersion

▸ **getConverterVersion**(`converter`: [Converter](_types_.converter.md)): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`converter` | [Converter](_types_.converter.md) |

**Returns:** *Promise‹string›*

___

###  getPaths

▸ **getPaths**(`sourceToken`: [Token](_types_.token.md), `targetToken`: [Token](_types_.token.md)): *Promise‹[Token](_types_.token.md)[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`sourceToken` | [Token](_types_.token.md) |
`targetToken` | [Token](_types_.token.md) |

**Returns:** *Promise‹[Token](_types_.token.md)[][]›*

___

###  getRates

▸ **getRates**(`tokenPaths`: [Token](_types_.token.md)[][], `tokenAmount`: string): *Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`tokenPaths` | [Token](_types_.token.md)[][] |
`tokenAmount` | string |

**Returns:** *Promise‹string[]›*
