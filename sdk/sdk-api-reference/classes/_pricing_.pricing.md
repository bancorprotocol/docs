[bancor-sdk](../README.md) › [Globals](../globals.md) › ["pricing"](../modules/_pricing_.md) › [Pricing](_pricing_.pricing.md)

# Class: Pricing

The Pricing module provides access to pricing and rates logic for tokens in the bancor network

## Hierarchy

* SDKModule

  ↳ **Pricing**

## Index

### Constructors

* [constructor](_pricing_.pricing.md#constructor)

### Properties

* [core](_pricing_.pricing.md#core)

### Methods

* [getPathAndRate](_pricing_.pricing.md#getpathandrate)
* [getRateByPath](_pricing_.pricing.md#getratebypath)

## Constructors

###  constructor

\+ **new Pricing**(`core`: Core): *[Pricing](_pricing_.pricing.md)*

*Inherited from [History](_history_.history.md).[constructor](_history_.history.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`core` | Core |

**Returns:** *[Pricing](_pricing_.pricing.md)*

## Properties

###  core

• **core**: *any* = null

*Inherited from [History](_history_.history.md).[core](_history_.history.md#core)*

## Methods

###  getPathAndRate

▸ **getPathAndRate**(`sourceToken`: [Token](../interfaces/_types_.token.md), `targetToken`: [Token](../interfaces/_types_.token.md), `amount`: string): *Promise‹object›*

returns the best conversion path and rate for a given pair of tokens in the bancor network

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`sourceToken` | [Token](../interfaces/_types_.token.md) | - | source token |
`targetToken` | [Token](../interfaces/_types_.token.md) | - | target token |
`amount` | string | "1" | input amount  |

**Returns:** *Promise‹object›*

the best path and rate between the source token and the target token

___

###  getRateByPath

▸ **getRateByPath**(`path`: [Token](../interfaces/_types_.token.md)[], `amount`: string): *Promise‹string›*

returns the rate for a given conversion path in the bancor network

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`path` | [Token](../interfaces/_types_.token.md)[] | - | conversion path |
`amount` | string | "1" | input amount  |

**Returns:** *Promise‹string›*

output amount for a conversion on the given path
