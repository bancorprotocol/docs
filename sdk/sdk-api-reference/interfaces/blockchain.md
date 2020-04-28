[Bancor SDK](../README.md) › [Globals](../globals.md) › [Blockchain](blockchain.md)

# Interface: Blockchain

**`internal`** 

## Hierarchy

* **Blockchain**

## Index

### Methods

* [getAnchorToken](blockchain.md#getanchortoken)
* [getConversionEvents](blockchain.md#getconversionevents)
* [getConversionEventsByTimestamp](blockchain.md#getconversioneventsbytimestamp)
* [getConverterVersion](blockchain.md#getconverterversion)
* [getPaths](blockchain.md#getpaths)
* [getRates](blockchain.md#getrates)

## Methods

###  getAnchorToken

▸ **getAnchorToken**(): *[Token](token.md)*

**Returns:** *[Token](token.md)*

___

###  getConversionEvents

▸ **getConversionEvents**(`token`: [Token](token.md), `fromBlock`: number, `toBlock`: number): *Promise‹[ConversionEvent](conversionevent.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](token.md) |
`fromBlock` | number |
`toBlock` | number |

**Returns:** *Promise‹[ConversionEvent](conversionevent.md)[]›*

___

###  getConversionEventsByTimestamp

▸ **getConversionEventsByTimestamp**(`token`: [Token](token.md), `fromTimestamp`: number, `toTimestamp`: number): *Promise‹[ConversionEvent](conversionevent.md)[]›*

**Parameters:**

Name | Type |
------ | ------ |
`token` | [Token](token.md) |
`fromTimestamp` | number |
`toTimestamp` | number |

**Returns:** *Promise‹[ConversionEvent](conversionevent.md)[]›*

___

###  getConverterVersion

▸ **getConverterVersion**(`converter`: [Converter](converter.md)): *Promise‹string›*

**Parameters:**

Name | Type |
------ | ------ |
`converter` | [Converter](converter.md) |

**Returns:** *Promise‹string›*

___

###  getPaths

▸ **getPaths**(`sourceToken`: [Token](token.md), `targetToken`: [Token](token.md)): *Promise‹[Token](token.md)[][]›*

**Parameters:**

Name | Type |
------ | ------ |
`sourceToken` | [Token](token.md) |
`targetToken` | [Token](token.md) |

**Returns:** *Promise‹[Token](token.md)[][]›*

___

###  getRates

▸ **getRates**(`tokenPaths`: [Token](token.md)[][], `tokenAmount`: string): *Promise‹string[]›*

**Parameters:**

Name | Type |
------ | ------ |
`tokenPaths` | [Token](token.md)[][] |
`tokenAmount` | string |

**Returns:** *Promise‹string[]›*
