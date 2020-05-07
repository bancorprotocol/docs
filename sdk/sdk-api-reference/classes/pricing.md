# Pricing

[Bancor SDK](../) › [Globals](../globals.md) › [Pricing](pricing.md)

## Class: Pricing

The Pricing module provides access to pricing and rates logic for tokens in the bancor network

### Hierarchy

* SDKModule

  ↳ **Pricing**

### Index

#### Constructors

* [constructor](pricing.md#constructor)

#### Properties

* [core](pricing.md#core)

#### Methods

* [getPathAndRate](pricing.md#getpathandrate)
* [getRateByPath](pricing.md#getratebypath)

### Constructors

#### constructor

+ **new Pricing**\(`core`: Core\): [_Pricing_](pricing.md)

_Inherited from_ [_History_](history.md)_._[_constructor_](history.md#constructor)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `core` | Core |

**Returns:** [_Pricing_](pricing.md)

### Properties

#### core

• **core**: _any_ = null

_Inherited from_ [_History_](history.md)_._[_core_](history.md#core)

### Methods

#### getPathAndRate

▸ **getPathAndRate**\(`sourceToken`: [Token](../interfaces/token.md), `targetToken`: [Token](../interfaces/token.md), `amount`: string\): _Promise‹object›_

returns the best conversion path and rate for a given pair of tokens in the bancor network

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `sourceToken` | [Token](../interfaces/token.md) | - | source token |
| `targetToken` | [Token](../interfaces/token.md) | - | target token |
| `amount` | string | "1" | input amount |

**Returns:** _Promise‹object›_

the best path and rate between the source token and the target token

#### getRateByPath

▸ **getRateByPath**\(`path`: [Token](../interfaces/token.md)\[\], `amount`: string\): _Promise‹string›_

returns the rate for a given conversion path in the bancor network

**Parameters:**

| Name | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `path` | [Token](../interfaces/token.md)\[\] | - | conversion path |
| `amount` | string | "1" | input amount |

**Returns:** _Promise‹string›_

output amount for a conversion on the given path

