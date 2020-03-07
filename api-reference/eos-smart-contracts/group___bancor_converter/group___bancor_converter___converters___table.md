# Converters Table

## Group BancorConverter\_Converters\_Table

[**Modules**](https://github.com/bancorprotocol/docs/tree/16d03db8efcaeb54ed2d180abcb852d57d9de2bc/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorConverter\_Converters\_Table**](group___bancor_converter___converters___table.md)

_This table stores the key information about all converters in this contract._ [More...](group___bancor_converter___converters___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| symbol | [**currency**](group___bancor_converter___converters___table.md#variable-currency)   _symbol of the smart token_  _representing a share in the reserves of this converter_ |
| uint64\_t | [**fee**](group___bancor_converter___converters___table.md#variable-fee)   _conversion fee for this converter, applied on every hop_ |
| name | [**owner**](group___bancor_converter___converters___table.md#variable-owner)   _creator of the converter_ |
| bool | [**stake\_enabled**](group___bancor_converter___converters___table.md#variable-stake-enabled)   _toggle boolean to enable/disable this staking and voting for this converter_ |

## Detailed Description

SCOPE of this table is the converters' smart token symbol's `code().raw()` values

### Public Attributes Documentation

#### [variable currency](group___bancor_converter___converters___table.md#variable-currency) <a id="variable-currency"></a>

```cpp
symbol currency;
```

PRIMARY KEY for this table is `currency.code().raw()`

#### [variable fee](group___bancor_converter___converters___table.md#variable-fee) <a id="variable-fee"></a>

```cpp
uint64_t fee;
```

#### [variable owner](group___bancor_converter___converters___table.md#variable-owner) <a id="variable-owner"></a>

```cpp
name owner;
```

#### [variable stake\_enabled](group___bancor_converter___converters___table.md#variable-stake-enabled) <a id="variable-stake-enabled"></a>

```cpp
bool stake_enabled;
```

