[Bancor SDK](../README.md) › [Globals](../globals.md) › [SDK](sdk.md)

# Class: SDK

Main SDK object, should be instantiated using the `create` static method

## Hierarchy

* **SDK**

## Index

### Properties

* [history](sdk.md#history)
* [pricing](sdk.md#pricing)
* [utils](sdk.md#utils)

### Methods

* [refresh](sdk.md#refresh)
* [create](sdk.md#static-create)
* [destroy](sdk.md#static-destroy)

## Properties

###  history

• **history**: *[History](history.md)* = null

History module

___

###  pricing

• **pricing**: *[Pricing](pricing.md)* = null

Pricing module

___

###  utils

• **utils**: *[Utils](utils.md)* = null

Utils module

## Methods

###  refresh

▸ **refresh**(): *Promise‹void›*

refreshes the local cache with data from the converter registry
should be called periodically to support new pools

**Returns:** *Promise‹void›*

___

### `Static` create

▸ **create**(`settings`: [Settings](../interfaces/settings.md)): *Promise‹[SDK](sdk.md)›*

creates and initializes a new SDK object
should be called as the first step before using the SDK

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`settings` | [Settings](../interfaces/settings.md) | initialization settings  |

**Returns:** *Promise‹[SDK](sdk.md)›*

new SDK object

___

### `Static` destroy

▸ **destroy**(`sdk`: [SDK](sdk.md)): *Promise‹void›*

cleans up and destroys an existing SDK object
should be called as the last step after the SDK work is complete to free up resources

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`sdk` | [SDK](sdk.md) | sdk object  |

**Returns:** *Promise‹void›*
