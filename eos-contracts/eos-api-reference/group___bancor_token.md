
# Group BancorToken


[**Modules**](modules.md)
 **>** [**BancorToken**](group___bancor_token.md)



_BNT Token contract._ [More...](#detailed-description)











## Classes

| Type | Name |
| ---: | :--- |
| struct | [**eosio::account**](structeosio_1_1account.md) <br> |
| struct | [**eosio::amounts\_t**](structeosio_1_1amounts__t.md) <br> |
| struct | [**eosio::currency\_stats**](structeosio_1_1currency__stats.md) <br> |

## Public Types

| Type | Name |
| ---: | :--- |
| typedef eosio::multi\_index&lt; "accounts"\_n, account &gt; | [**accounts**](group___bancor_token.md#typedef-accounts)  <br> |
| typedef eosio::multi\_index&lt;"amounts"\_n, amounts\_t &gt; | [**amounts**](group___bancor_token.md#typedef-amounts)  <br> |
| typedef eosio::action\_wrapper&lt;"close"\_n, &Token::close &gt; | [**close\_action**](group___bancor_token.md#typedef-close-action)  <br> |
| typedef eosio::action\_wrapper&lt;"create"\_n, &[**Token::create**](_bancor_converter_2_bancor_converter_8hpp.md#function-create) &gt; | [**create\_action**](group___bancor_token.md#typedef-create-action)  <br> |
| typedef eosio::action\_wrapper&lt;"issue"\_n, &Token::issue &gt; | [**issue\_action**](group___bancor_token.md#typedef-issue-action)  <br> |
| typedef eosio::action\_wrapper&lt;"open"\_n, &Token::open &gt; | [**open\_action**](group___bancor_token.md#typedef-open-action)  <br> |
| typedef eosio::action\_wrapper&lt;"retire"\_n, &Token::retire &gt; | [**retire\_action**](group___bancor_token.md#typedef-retire-action)  <br> |
| typedef eosio::multi\_index&lt; "stat"\_n, currency\_stats &gt; | [**stats**](group___bancor_token.md#typedef-stats)  <br> |
| typedef eosio::action\_wrapper&lt;"transfer"\_n, &Token::transfer &gt; | [**transfer\_action**](group___bancor_token.md#typedef-transfer-action)  <br> |


## Public Attributes

| Type | Name |
| ---: | :--- |
|  CONTRACT | [**Token**](group___bancor_token.md#variable-token)  <br> |
|  asset | [**balance**](group___bancor_token.md#variable-balance)  <br> |
|  uint64\_t | [**custom\_id**](group___bancor_token.md#variable-custom-id)  <br> |
|  name | [**issuer**](group___bancor_token.md#variable-issuer)  <br> |
|  asset | [**max\_supply**](group___bancor_token.md#variable-max-supply)  <br> |
|  asset | [**quantity**](group___bancor_token.md#variable-quantity)  <br> |
|  asset | [**supply**](group___bancor_token.md#variable-supply)  <br> |
|  name | [**target**](group___bancor_token.md#variable-target)  <br> |


## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**close**](group___bancor_token.md#function-close) (const name & owner, const symbol & symbol) <br> |
|  void | [**create**](group___bancor_token.md#function-create) (const name & issuer, const asset & maximum\_supply) <br> |
|  void | [**issue**](group___bancor_token.md#function-issue) (const name & to, const asset & quantity, const string & memo) <br> |
|  void | [**open**](group___bancor_token.md#function-open) (const name & owner, const symbol & symbol, const name & ram\_payer) <br> |
|  uint64\_t | [**primary\_key**](group___bancor_token.md#function-primary-key) () const<br> |
|  uint64\_t | [**primary\_key**](group___bancor_token.md#function-primary-key) () const<br> |
|  uint64\_t | [**primary\_key**](group___bancor_token.md#function-primary-key) () const<br> |
|  void | [**retire**](group___bancor_token.md#function-retire) (const asset & quantity, const string & memo) <br> |
|  void | [**transfer**](group___bancor_token.md#function-transfer) (const name & from, const name & to, const asset & quantity, const string & memo) <br> |
|  void | [**transferbyid**](group___bancor_token.md#function-transferbyid) (const name & from, const name & to, const name & amount\_account, uint64\_t amount\_id, const string & memo) <br>_used for cross chain transfers_  |

## Public Static Functions

| Type | Name |
| ---: | :--- |
|  asset | [**eosio::get\_balance**](namespaceeosio.md#function-get-balance) (const name & token\_contract\_account, const name & owner, const symbol\_code & sym\_code) <br> |
|  asset | [**eosio::get\_supply**](namespaceeosio.md#function-get-supply) (const name & token\_contract\_account, const symbol\_code & sym\_code) <br> |







# Detailed Description


based on `eosio.token` contract (with addition of `transferbyid`) defines the structures and actions that allow to create, issue, and transfer BNT tokens 

    
## Public Types Documentation


### <a href="#typedef-accounts" id="typedef-accounts">typedef accounts </a>


```cpp
typedef eosio::multi_index< "accounts"_n, account > eosio::accounts;
```



### <a href="#typedef-amounts" id="typedef-amounts">typedef amounts </a>


```cpp
typedef eosio::multi_index<"amounts"_n, amounts_t> eosio::amounts;
```



### <a href="#typedef-close-action" id="typedef-close-action">typedef close\_action </a>


```cpp
using eosio::close_action = typedef eosio::action_wrapper<"close"_n, &Token::close>;
```



### <a href="#typedef-create-action" id="typedef-create-action">typedef create\_action </a>


```cpp
using eosio::create_action = typedef eosio::action_wrapper<"create"_n, &Token::create>;
```



### <a href="#typedef-issue-action" id="typedef-issue-action">typedef issue\_action </a>


```cpp
using eosio::issue_action = typedef eosio::action_wrapper<"issue"_n, &Token::issue>;
```



### <a href="#typedef-open-action" id="typedef-open-action">typedef open\_action </a>


```cpp
using eosio::open_action = typedef eosio::action_wrapper<"open"_n, &Token::open>;
```



### <a href="#typedef-retire-action" id="typedef-retire-action">typedef retire\_action </a>


```cpp
using eosio::retire_action = typedef eosio::action_wrapper<"retire"_n, &Token::retire>;
```



### <a href="#typedef-stats" id="typedef-stats">typedef stats </a>


```cpp
typedef eosio::multi_index< "stat"_n, currency_stats > eosio::stats;
```



### <a href="#typedef-transfer-action" id="typedef-transfer-action">typedef transfer\_action </a>


```cpp
using eosio::transfer_action = typedef eosio::action_wrapper<"transfer"_n, &Token::transfer>;
```


## Public Attributes Documentation


### <a href="#variable-token" id="variable-token">variable Token </a>


```cpp
CONTRACT eosio::Token;
```



### <a href="#variable-balance" id="variable-balance">variable balance </a>


```cpp
asset eosio::account::balance;
```



### <a href="#variable-custom-id" id="variable-custom-id">variable custom\_id </a>


```cpp
uint64_t eosio::amounts_t::custom_id;
```



### <a href="#variable-issuer" id="variable-issuer">variable issuer </a>


```cpp
name eosio::currency_stats::issuer;
```



### <a href="#variable-max-supply" id="variable-max-supply">variable max\_supply </a>


```cpp
asset eosio::currency_stats::max_supply;
```



### <a href="#variable-quantity" id="variable-quantity">variable quantity </a>


```cpp
asset eosio::amounts_t::quantity;
```



### <a href="#variable-supply" id="variable-supply">variable supply </a>


```cpp
asset eosio::currency_stats::supply;
```



### <a href="#variable-target" id="variable-target">variable target </a>


```cpp
name eosio::amounts_t::target;
```


## Public Functions Documentation


### <a href="#function-close" id="function-close">function close </a>


```cpp
void close (
    const name & owner,
    const symbol & symbol
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




        

### <a href="#function-create" id="function-create">function create </a>


```cpp
void create (
    const name & issuer,
    const asset & maximum_supply
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




        

### <a href="#function-issue" id="function-issue">function issue </a>


```cpp
void issue (
    const name & to,
    const asset & quantity,
    const string & memo
) 
```


This action issues to `to` account a `quantity` of tokens.



**Parameters:**


* `to` - the account to issue tokens to, it must be the same as the issuer, 
* `quntity` - the amount of tokens to be issued,  - the memo string that accompanies the token issue transaction. 



        

### <a href="#function-open" id="function-open">function open </a>


```cpp
void open (
    const name & owner,
    const symbol & symbol,
    const name & ram_payer
) 
```


Allows `ram_payer` to create an account `owner` with zero balance for token `symbol` at the expense of `ram_payer`.



**Parameters:**


* `owner` - the account to be created, 
* `symbol` - the token to be payed with by `ram_payer`, 
* `ram_payer` - the account that supports the cost of this action.

More information can be read [here](https://github.com/EOSIO/eosio.contracts/issues/62) and [here](https://github.com/EOSIO/eosio.contracts/issues/61). 

        

### <a href="#function-primary-key" id="function-primary-key">function primary\_key </a>


```cpp
inline uint64_t primary_key () const
```



### <a href="#function-primary-key" id="function-primary-key">function primary\_key </a>


```cpp
inline uint64_t primary_key () const
```



### <a href="#function-primary-key" id="function-primary-key">function primary\_key </a>


```cpp
inline uint64_t primary_key () const
```



### <a href="#function-retire" id="function-retire">function retire </a>


```cpp
void retire (
    const asset & quantity,
    const string & memo
) 
```


The opposite for create action, if all validations succeed, it debits the statstable.supply amount.



**Parameters:**


* `quantity` - the quantity of tokens to retire, 
* `memo` - the memo string to accompany the transaction. 



        

### <a href="#function-transfer" id="function-transfer">function transfer </a>


```cpp
void transfer (
    const name & from,
    const name & to,
    const asset & quantity,
    const string & memo
) 
```


Allows `from` account to transfer to `to` account the `quantity` tokens. One account is debited and the other is credited with quantity tokens.



**Parameters:**


* `from` - the account to transfer from, 
* `to` - the account to be transferred to, 
* `quantity` - the quantity of tokens to be transferred, 
* `memo` - the memo string to accompany the transaction. 



        

### <a href="#function-transferbyid" id="function-transferbyid">function transferbyid </a>


```cpp
void transferbyid (
    const name & from,
    const name & to,
    const name & amount_account,
    uint64_t amount_id,
    const string & memo
) 
```




**Parameters:**


* `from` - sender of the amount should match target 
* `to` - receiver of the amount 
* `amount_account` - scope (target) of the transfer 
* `amount_id` - id of the intended transfer, containing amount 
* `memo` - memo for the transfer 



        
## Public Static Functions Documentation


### <a href="#function-get-balance" id="function-get-balance">function get\_balance </a>


```cpp
static asset eosio::get_balance (
    const name & token_contract_account,
    const name & owner,
    const symbol_code & sym_code
) 
```



### <a href="#function-get-supply" id="function-get-supply">function get\_supply </a>


```cpp
static asset eosio::get_supply (
    const name & token_contract_account,
    const symbol_code & sym_code
) 
```



------------------------------
