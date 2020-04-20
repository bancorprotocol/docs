# Settings Table

## Group BancorConverter\_Settings\_Table

[**Modules**](https://github.com/bancorprotocol/docs/tree/07ce5f4845283bbd7a5b340236c7bc19cfd08e0e/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorConverter\_Settings\_Table**](group___bancor_converter___settings___table.md)

_This table stores the global settings affecting all the converters in this contract._ [More...](group___bancor_converter___settings___table.md#detailed-description)

### Public Attributes

| Type | Name |
| ---: | :--- |
| uint64\_t | [**max\_fee**](group___bancor_converter___settings___table.md#variable-max-fee)   _maximum conversion fee for converters in this contract_ |
| name | [**multi\_token**](group___bancor_converter___settings___table.md#variable-multi-token)   _account name of contract for relay tokens_ |
| name | [**network**](group___bancor_converter___settings___table.md#variable-network)   _account name of the bancor network contract_ |
| name | [**staking**](group___bancor_converter___settings___table.md#variable-staking)   _account name of contract for voting and staking_ |

## Detailed Description

Both SCOPE and PRIMARY KEY are `_self`, so this table is effectively a singleton

### Public Attributes Documentation

#### [variable max\_fee](group___bancor_converter___settings___table.md#variable-max-fee) <a id="variable-max-fee"></a>

```cpp
uint64_t max_fee;
```

#### [variable multi\_token](group___bancor_converter___settings___table.md#variable-multi-token) <a id="variable-multi-token"></a>

```cpp
name multi_token;
```

#### [variable network](group___bancor_converter___settings___table.md#variable-network) <a id="variable-network"></a>

```cpp
name network;
```

#### [variable staking](group___bancor_converter___settings___table.md#variable-staking) <a id="variable-staking"></a>

```cpp
name staking;
```

