[Bancor SDK](../README.md) › [Globals](../globals.md) › [Utils](utils.md)

# Class: Utils

The Utils module provides various utility and helper functions

## Hierarchy

* SDKModule

  ↳ **Utils**

## Index

### Constructors

* [constructor](utils.md#constructor)

### Properties

* [core](utils.md#core)

### Methods

* [getConverterVersion](utils.md#getconverterversion)

## Constructors

###  constructor

\+ **new Utils**(`core`: Core): *[Utils](utils.md)*

*Inherited from [History](history.md).[constructor](history.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`core` | Core |

**Returns:** *[Utils](utils.md)*

## Properties

###  core

• **core**: *any* = null

*Inherited from [History](history.md).[core](history.md#core)*

## Methods

###  getConverterVersion

▸ **getConverterVersion**(`converter`: [Converter](../interfaces/converter.md)): *Promise‹string›*

returns the version number of a converter in the bancor network

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`converter` | [Converter](../interfaces/converter.md) | converter  |

**Returns:** *Promise‹string›*

converter version
