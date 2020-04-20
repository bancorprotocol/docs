# Reserves Table

## Group BancorConverter\_Reserves\_Table

[**Modules**](https://github.com/bancorprotocol/docs/tree/07ce5f4845283bbd7a5b340236c7bc19cfd08e0e/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorConverter\_Reserves\_Table**](group___bancor_converter___reserves___table.md)

_This table stores the reserve balances and related information for the reserves of every converter in this contract._ [More...](group___bancor_converter___reserves___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| asset | [**balance**](group___bancor_converter___reserves___table.md#variable-balance)   _amount in the reserve_ |
| name | [**contract**](group___bancor_converter___reserves___table.md#variable-contract)   _name of the account storing the token contract for this reserve's token_ |
| uint64\_t | [**ratio**](group___bancor_converter___reserves___table.md#variable-ratio)   _reserve ratio relative to the other reserves_ |

## Detailed Description

SCOPE of this table is the converters' smart token symbol's `code().raw()` values

### Public Attributes Documentation

#### [variable balance](group___bancor_converter___reserves___table.md#variable-balance) <a id="variable-balance"></a>

```cpp
asset balance;
```

PRIMARY KEY for this table is `balance.symbol.code().raw()`

#### [variable contract](group___bancor_converter___reserves___table.md#variable-contract) <a id="variable-contract"></a>

```cpp
name contract;
```

#### [variable ratio](group___bancor_converter___reserves___table.md#variable-ratio) <a id="variable-ratio"></a>

```cpp
uint64_t ratio;
```

