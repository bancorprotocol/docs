# Utils

[Bancor SDK](../) › [Globals](../globals.md) › [Utils](utils.md)

## Class: Utils

The Utils module provides various utility and helper functions

### Hierarchy

* SDKModule

  ↳ **Utils**

### Index

#### Constructors

* [constructor](utils.md#constructor)

#### Properties

* [core](utils.md#core)

#### Methods

* [getConverterVersion](utils.md#getconverterversion)

### Constructors

#### constructor

+ **new Utils**\(`core`: Core\): [_Utils_](utils.md)

_Inherited from_ [_History_](history.md)_._[_constructor_](history.md#constructor)

**Parameters:**

| Name | Type |
| :--- | :--- |
| `core` | Core |

**Returns:** [_Utils_](utils.md)

### Properties

#### core

• **core**: _any_ = null

_Inherited from_ [_History_](history.md)_._[_core_](history.md#core)

### Methods

#### getConverterVersion

▸ **getConverterVersion**\(`converter`: [Converter](../interfaces/converter.md)\): _Promise‹string›_

returns the version number of a converter in the bancor network

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `converter` | [Converter](../interfaces/converter.md) | converter |

**Returns:** _Promise‹string›_

converter version

