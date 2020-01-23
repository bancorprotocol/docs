# Currency Stats Table

[**Modules**]() **&gt;** [**Currency\_Stats\_Table**](group___currency___stats___table.md)

_This table stores stats on the supply of the token governed by this contract._

## Public Attributes

| Type | Name |
| ---: | :--- |
| name | [**issuer**](group___currency___stats___table.md#variable-issuer)   _Issuer of the token._ |
| asset | [**max\_supply**](group___currency___stats___table.md#variable-max-supply)   _Maximum supply of the token._ |
| asset | [**supply**](group___currency___stats___table.md#variable-supply)   _Current supply of the token._ |

## Public Attributes Documentation

### [variable issuer](group___currency___stats___table.md#variable-issuer) <a id="variable-issuer"></a>

```cpp
name issuer;
```

### [variable max\_supply](group___currency___stats___table.md#variable-max-supply) <a id="variable-max-supply"></a>

```cpp
asset max_supply;
```

### [variable supply](group___currency___stats___table.md#variable-supply) <a id="variable-supply"></a>

```cpp
asset supply;
```

PRIMARY KEY of this table is `supply.symbol.code().raw()`

