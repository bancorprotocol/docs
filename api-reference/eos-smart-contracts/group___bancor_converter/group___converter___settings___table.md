# Settings Table

## Group Converter\_Settings\_Table

[**Modules**]() **&gt;** [**Converter\_Settings\_Table**](group___converter___settings___table.md)

_This table stores stats on the settings of the converter._ [More...](group___converter___settings___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| bool | [**enabled**](group___converter___settings___table.md#variable-enabled)   _true if conversions are enabled, false if not_ |
| uint64\_t | [**fee**](group___converter___settings___table.md#variable-fee)   _conversion fee for this converter_ |
| uint64\_t | [**max\_fee**](group___converter___settings___table.md#variable-max-fee)   _maximum conversion fee percentage, 0-30000, 4-pt precision a la eosio.asset_ |
| name | [**network**](group___converter___settings___table.md#variable-network)   _bancor network contract name_ |
| bool | [**require\_balance**](group___converter___settings___table.md#variable-require-balance)   _require creating new balance for the calling account should fail_ |
| name | [**smart\_contract**](group___converter___settings___table.md#variable-smart-contract)   _contract account name of the smart token governed by the converter_ |
| asset | [**smart\_currency**](group___converter___settings___table.md#variable-smart-currency)   _currency of the smart token governed by the converter_ |
| bool | [**smart\_enabled**](group___converter___settings___table.md#variable-smart-enabled)   _true if the smart token can be converted to/from, false if not_ |

## Detailed Description

Both SCOPE and PRIMARY KEY are `_self`, so this table is effectively a singleton.

### Public Attributes Documentation

#### [variable enabled](group___converter___settings___table.md#variable-enabled) <a id="variable-enabled"></a>

```cpp
bool enabled;
```

#### [variable fee](group___converter___settings___table.md#variable-fee) <a id="variable-fee"></a>

```cpp
uint64_t fee;
```

#### [variable max\_fee](group___converter___settings___table.md#variable-max-fee) <a id="variable-max-fee"></a>

```cpp
uint64_t max_fee;
```

#### [variable network](group___converter___settings___table.md#variable-network) <a id="variable-network"></a>

```cpp
name network;
```

#### [variable require\_balance](group___converter___settings___table.md#variable-require-balance) <a id="variable-require-balance"></a>

```cpp
bool require_balance;
```

#### [variable smart\_contract](group___converter___settings___table.md#variable-smart-contract) <a id="variable-smart-contract"></a>

```cpp
name smart_contract;
```

#### [variable smart\_currency](group___converter___settings___table.md#variable-smart-currency) <a id="variable-smart-currency"></a>

```cpp
asset smart_currency;
```

#### [variable smart\_enabled](group___converter___settings___table.md#variable-smart-enabled) <a id="variable-smart-enabled"></a>

```cpp
bool smart_enabled;
```

