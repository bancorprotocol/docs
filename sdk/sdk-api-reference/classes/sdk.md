# SDK

[Bancor SDK](../) › [Globals](../globals.md) › [SDK](sdk.md)

## Class: SDK

Main SDK object, should be instantiated using the `create` static method

### Hierarchy

* **SDK**

### Index

#### Properties

* [history](sdk.md#history)
* [pricing](sdk.md#pricing)
* [utils](sdk.md#utils)

#### Methods

* [refresh](sdk.md#refresh)
* [create](sdk.md#static-create)
* [destroy](sdk.md#static-destroy)

### Properties

#### history

• **history**: [_History_](history.md) = null

History module

#### pricing

• **pricing**: [_Pricing_](pricing.md) = null

Pricing module

#### utils

• **utils**: [_Utils_](utils.md) = null

Utils module

### Methods

#### refresh

▸ **refresh**\(\): _Promise‹void›_

refreshes the local cache with data from the converter registry should be called periodically to support new pools

**Returns:** _Promise‹void›_

#### `Static` create

▸ **create**\(`settings`: [Settings](../interfaces/settings.md)\): _Promise‹_[_SDK_](sdk.md)_›_

creates and initializes a new SDK object should be called as the first step before using the SDK

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `settings` | [Settings](../interfaces/settings.md) | initialization settings |

**Returns:** _Promise‹_[_SDK_](sdk.md)_›_

new SDK object

#### `Static` destroy

▸ **destroy**\(`sdk`: [SDK](sdk.md)\): _Promise‹void›_

cleans up and destroys an existing SDK object should be called as the last step after the SDK work is complete to free up resources

**Parameters:**

| Name | Type | Description |
| :--- | :--- | :--- |
| `sdk` | [SDK](sdk.md) | sdk object |

**Returns:** _Promise‹void›_

