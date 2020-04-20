# Accounts Table

## Group Token\_Accounts\_Table

[**Modules**](https://github.com/bancorprotocol/docs/tree/8f41a761c0e4e8a9a597f33b377ea0ee0bfda223/api-reference/eos-smart-contracts/modules.md) **&gt;** [**Token\_Accounts\_Table**](group___token___accounts___table.md)

_This table stores balances for every holder of this token._ [More...](group___token___accounts___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| asset | [**balance**](group___token___accounts___table.md#variable-balance)   _User's balance balance in the token._ |

## Detailed Description

SCOPE is balance owner's `name.value`

### Public Attributes Documentation

#### [variable balance](group___token___accounts___table.md#variable-balance) <a id="variable-balance"></a>

```cpp
asset balance;
```

PRIMARY KEY is `balance.symbol.code().raw()`

