[Bancor SDK](../README.md) › [Globals](../globals.md) › ["utils"](../modules/_utils_.md) › [Utils](_utils_.utils.md)

# Class: Utils

The Utils module provides various utility and helper functions

## Hierarchy

* SDKModule

  ↳ **Utils**

## Index

### Constructors

* [constructor](_utils_.utils.md#constructor)

### Properties

* [core](_utils_.utils.md#core)

### Methods

* [getConverterVersion](_utils_.utils.md#getconverterversion)

## Constructors

###  constructor

\+ **new Utils**(`core`: Core): *[Utils](_utils_.utils.md)*

*Inherited from [History](_history_.history.md).[constructor](_history_.history.md#constructor)*

Defined in sdk_module.ts:4

**Parameters:**

Name | Type |
------ | ------ |
`core` | Core |

**Returns:** *[Utils](_utils_.utils.md)*

## Properties

###  core

• **core**: *any* = null

*Inherited from [History](_history_.history.md).[core](_history_.history.md#core)*

Defined in sdk_module.ts:4

## Methods

###  getConverterVersion

▸ **getConverterVersion**(`converter`: [Converter](../interfaces/_types_.converter.md)): *Promise‹string›*

Defined in utils.ts:15

returns the version number of a converter in the bancor network

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`converter` | [Converter](../interfaces/_types_.converter.md) | converter  |

**Returns:** *Promise‹string›*

converter version
