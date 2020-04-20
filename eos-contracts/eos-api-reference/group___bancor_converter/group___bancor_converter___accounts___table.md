# Accounts Table

## Group BancorConverter\_Accounts\_Table

[**Modules**](https://github.com/bancorprotocol/docs/tree/16d03db8efcaeb54ed2d180abcb852d57d9de2bc/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorConverter\_Accounts\_Table**](group___bancor_converter___accounts___table.md)

_This table stores "temporary balances" that are transfered in by liquidity providers before they can get added to their respective reserves._ [More...](group___bancor_converter___accounts___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| uint64\_t | [**id**](group___bancor_converter___accounts___table.md#variable-id)   _PRIMARY KEY for this table, unused dummy variable._ |
| asset | [**quantity**](group___bancor_converter___accounts___table.md#variable-quantity)   _balance in the reserve currency_ |
| symbol\_code | [**symbl**](group___bancor_converter___accounts___table.md#variable-symbl)   _symbol of the smart token \(a way to reference converters\) this balance pertains to_ |

### Public Functions

| Type | Name |
| ---: | :--- |
| uint128\_t | [**by\_cnvrt**](group___bancor_converter___accounts___table.md#function-by-cnvrt) \(\) const _SECONDARY KEY of this table based on the symbol of the temporary reserve balance for a particular converter._ |

## Detailed Description

SCOPE of this table is the `name.value` of the liquidity provider, owner of the `quantity`

### Public Attributes Documentation

#### [variable id](group___bancor_converter___accounts___table.md#variable-id) <a id="variable-id"></a>

```cpp
uint64_t id;
```

#### [variable quantity](group___bancor_converter___accounts___table.md#variable-quantity) <a id="variable-quantity"></a>

```cpp
asset quantity;
```

#### [variable symbl](group___bancor_converter___accounts___table.md#variable-symbl) <a id="variable-symbl"></a>

```cpp
symbol_code symbl;
```

### Public Functions Documentation

#### [function by\_cnvrt](group___bancor_converter___accounts___table.md#function-by-cnvrt) <a id="function-by-cnvrt"></a>

```cpp
uint128_t by_cnvrt () const
```

uint128\_t { balance.symbol.code\(\).raw\(\) } &lt;&lt; 64 \) \| currency.raw\(\)

