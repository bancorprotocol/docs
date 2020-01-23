# Token

## Group BancorToken

[**Modules**]() **&gt;** [**BancorToken**](./)

_BNT Token contract._ [More...](./#detailed-description)

### Modules

| Type | Name |
| ---: | :--- |
| module | [**Currency Stats Table**](group___currency___stats___table.md)  _This table stores stats on the supply of the token governed by this contract._ |
| module | [**Accounts Table**](group___token___accounts___table.md)  _This table stores balances for every holder of this token._ |

### Public Functions

| Type | Name |
| ---: | :--- |
| ACTION | [**close**](./#function-close) \(name owner, symbol\_code symbol\)  _Close action._ |
| ACTION | [**create**](./#function-create) \(name issuer, asset maximum\_supply\)  _Create action._ |
| ACTION | [**issue**](./#function-issue) \(name to, asset quantity, string memo\)  _Issue action._ |
| ACTION | [**open**](./#function-open) \(name owner, symbol\_code symbol, name ram\_payer\)  _Open action._ |
| ACTION | [**retire**](./#function-retire) \(asset quantity, string memo\)  _Retire action._ |
| ACTION | [**transfer**](./#function-transfer) \(name from, name to, asset quantity, string memo\)  _Standard transfer action._ |
| ACTION | [**transferbyid**](./#function-transferbyid) \(name from, name to, name amount\_account, uint64\_t amount\_id, string memo\)  _used for cross chain transfers_ |

### Public Static Functions

| Type | Name |
| ---: | :--- |
| asset | [**get\_balance**](https://github.com/bancorprotocol/docs/tree/134e9c8753b429cc88ccc7dfc9c3e471a9e1a508/api-reference/eos-smart-contracts/_token_8hpp.md#function-get-balance) \(name token\_contract\_account, name owner, symbol\_code sym\)  _Get balance method._ |
| asset | [**get\_supply**](https://github.com/bancorprotocol/docs/tree/134e9c8753b429cc88ccc7dfc9c3e471a9e1a508/api-reference/eos-smart-contracts/_token_8hpp.md#function-get-supply) \(name token\_contract\_account, symbol\_code sym\)  _Get supply method._ |

## Detailed Description

based on `eosio.token` contract \(with addition of `transferbyid`\) defines the structures and actions that allow to create, issue, and transfer BNT tokens

### Public Functions Documentation

#### [function close](./#function-close) <a id="function-close"></a>

```cpp
ACTION close (
    name owner,
    symbol_code symbol
)
```

This action is the opposite for open, it closes the account `owner` for token `symbol`.

**Parameters:**

* `owner` - the owner account to execute the close action for, 
* `symbol` - the symbol of the token to execute the close action for. 

**Precondition:**

The pair of owner plus symbol has to exist otherwise no action is executed,

**Precondition:**

If the pair of owner plus symbol exists, the balance has to be zero.

#### [function create](./#function-create) <a id="function-create"></a>

```cpp
ACTION create (
    name issuer,
    asset maximum_supply
)
```

Allows `issuer` account to create a token in supply of `maximum_supply`. If validation is successful a new entry in statstable for token symbol scope gets created.

**Parameters:**

* `issuer` - the account that creates the token, 
* `maximum_supply` - the maximum supply set for the token created. 

**Precondition:**

Token symbol has to be valid,

**Precondition:**

Token symbol must not be already created,

**Precondition:**

maximum\_supply has to be smaller than the maximum supply allowed by the system: 1^62 - 1.

**Precondition:**

Maximum supply must be positive;

#### [function issue](./#function-issue) <a id="function-issue"></a>

```cpp
ACTION issue (
    name to,
    asset quantity,
    string memo
)
```

This action issues to `to` account a `quantity` of tokens.

**Parameters:**

* `to` - the account to issue tokens to, it must be the same as the issuer, 
* `quantity` - the amount of tokens to be issued, 
* `memo` - the memo string that accompanies the token issue transaction. 

#### [function open](./#function-open) <a id="function-open"></a>

```cpp
ACTION open (
    name owner,
    symbol_code symbol,
    name ram_payer
)
```

Allows `ram_payer` to create an account `owner` with zero balance for token `symbol` at the expense of `ram_payer`.

**Parameters:**

* `owner` - the account to be created, 
* `symbol` - the token to be payed with by `ram_payer`, 
* `ram_payer` - the account that supports the cost of this action. 

#### [function retire](./#function-retire) <a id="function-retire"></a>

```cpp
ACTION retire (
    asset quantity,
    string memo
)
```

The opposite for create action, if all validations succeed, it debits the statstable.supply amount.

**Parameters:**

* `quantity` - the quantity of tokens to retire, 
* `memo` - the memo string to accompany the transaction. 

#### [function transfer](./#function-transfer) <a id="function-transfer"></a>

```cpp
ACTION transfer (
    name from,
    name to,
    asset quantity,
    string memo
)
```

Allows `from` account to transfer to `to` account the `quantity` tokens. One account is debited and the other is credited with quantity tokens.

**Parameters:**

* `from` - the account to transfer from, 
* `to` - the account to be transferred to, 
* `quantity` - the quantity of tokens to be transferred, 
* `memo` - the memo string to accompany the transaction. 

#### [function transferbyid](./#function-transferbyid) <a id="function-transferbyid"></a>

```cpp
ACTION transferbyid (
    name from,
    name to,
    name amount_account,
    uint64_t amount_id,
    string memo
)
```

**Parameters:**

* `from` - sender of the amount should match target 
* `to` - receiver of the amount 
* `amount_account` - scope \(target\) of the transfer 
* `amount_id` - id of the intended transfer, containing amount 
* `memo` - memo for the transfer 

### Public Static Functions Documentation

#### [function get\_balance](./#function-get-balance) <a id="function-get-balance"></a>

```cpp
static asset get_balance (
    name token_contract_account,
    name owner,
    symbol_code sym
)
```

Get the balance for a token `sym_code` created by `token_contract_account` account, for account `owner`.

**Parameters:**

* `token_contract_account` - the token creator account, 
* `owner` - the account for which the token balance is returned, 
* `sym` - the token for which the balance is returned. 

#### [function get\_supply](./#function-get-supply) <a id="function-get-supply"></a>

```cpp
static asset get_supply (
    name token_contract_account,
    symbol_code sym
)
```

Gets the supply for token `sym_code`, created by `token_contract_account` account.

**Parameters:**

* `token_contract_account` - the account to get the supply for, 
* `sym` - the symbol to get the supply for. 

