[Bancor SDK](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [SDK](_index_.sdk.md)

# Class: SDK

Main SDK object, should be instantiated using the `create` static method

## Hierarchy

* **SDK**

## Index

### Properties

* [_core](_index_.sdk.md#_core)
* [history](_index_.sdk.md#history)
* [pricing](_index_.sdk.md#pricing)
* [utils](_index_.sdk.md#utils)

### Methods

* [refresh](_index_.sdk.md#refresh)
* [create](_index_.sdk.md#static-create)
* [destroy](_index_.sdk.md#static-destroy)

## Properties

###  _core

• **_core**: *Core‹›* = new Core()

___

###  history

• **history**: *any* = null

___

###  pricing

• **pricing**: *any* = null

___

###  utils

• **utils**: *any* = null

## Methods

###  refresh

▸ **refresh**(): *Promise‹void›*

refreshes the local cache with data from the converter registry
should be called periodically to support new pools

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`settings`: [Settings](../interfaces/_types_.settings.md)): *Promise‹[SDK](_index_.sdk.md)›*

creates and initializes a new SDK object
should be called as the first step before using the SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`settings` | [Settings](../interfaces/_types_.settings.md) | initialization settings  |

**Returns:** *Promise‹[SDK](_index_.sdk.md)›*

new SDK object

___

### `Static` destroy

▸ **destroy**(`sdk`: [SDK](_index_.sdk.md)): *Promise‹void›*

cleans up and destroys an existing SDK object
should be called as the last step after the SDK work is complete to free up resources

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sdk` | [SDK](_index_.sdk.md) | sdk object  |

**Returns:** *Promise‹void›*
