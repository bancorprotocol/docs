# Reserves Table

## Group Converter\_Reserves\_Table

[**Modules**]() **&gt;** [**Converter\_Reserves\_Table**](group___converter___reserves___table.md)

_This table stores stats on the reserves of the converter, the actual balance is owned by converter account within the accounts._ [More...](group___converter___reserves___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| name | [**contract**](group___converter___reserves___table.md#variable-contract)   _Token contract for the currency._ |
| asset | [**currency**](group___converter___reserves___table.md#variable-currency)   _Symbol of the tokens in this reserve._ |
| uint64\_t | [**ratio**](group___converter___reserves___table.md#variable-ratio)   _Reserve ratio._ |
| bool | [**sale\_enabled**](group___converter___reserves___table.md#variable-sale-enabled)   _Are transactions enabled on this reserve._ |

## Detailed Description

SCOPE of this table is `_self`

### Public Attributes Documentation

#### [variable contract](group___converter___reserves___table.md#variable-contract) <a id="variable-contract"></a>

```cpp
name contract;
```

#### [variable currency](group___converter___reserves___table.md#variable-currency) <a id="variable-currency"></a>

```cpp
asset currency;
```

PRIMARY KEY is `currency.symbol.code().raw()`

#### [variable ratio](group___converter___reserves___table.md#variable-ratio) <a id="variable-ratio"></a>

```cpp
uint64_t ratio;
```

#### [variable sale\_enabled](group___converter___reserves___table.md#variable-sale-enabled) <a id="variable-sale-enabled"></a>

```cpp
bool sale_enabled;
```

