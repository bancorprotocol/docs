
# Group BancorConverter


[**Modules**](modules.md)
 **>** [**BancorConverter**](group___bancor_converter.md)



_Bancor BancorConverter._ [More...](#detailed-description)









## Modules

| Type | Name |
| ---: | :--- |
| module | [**Accounts Table**](group___accounts___table.md) <br>_This table stores "temporary balances" that are transfered in by liquidity providers before they can get added to their respective reserves._  |
| module | [**Reserves Table**](group___bancor_converter___reserves___table.md) <br>_This table stores the reserve balances and related information for the reserves of every converter in this contract._  |
| module | [**Settings Table**](group___bancor_converter___settings___table.md) <br>_This table stores the global settings affecting all the converters in this contract._  |
| module | [**Reserves Table**](group___converter___reserves___table.md) <br>_This table stores stats on the reserves of the converter, the actual balance is owned by converter account within the accounts._  |
| module | [**Settings Table**](group___converter___settings___table.md) <br>_This table stores stats on the settings of the converter._  |
| module | [**Converters Table**](group___converters___table.md) <br>_This table stores the key information about all converters in this contract._  |



## Public Types

| Type | Name |
| ---: | :--- |
| typedef action\_wrapper&lt;"delconverter"\_n, &[**BancorConverter::delconverter**](_bancor_converter_2_bancor_converter_8hpp.md#function-delconverter) &gt; | [**close\_action**](group___bancor_converter.md#typedef-close-action)  <br> |
| typedef action\_wrapper&lt;"create"\_n, &[**BancorConverter::create**](_token_8hpp.md#function-create) &gt; | [**create\_action**](group___bancor_converter.md#typedef-create-action)  <br> |
| typedef action\_wrapper&lt;"delreserve"\_n, &[**BancorConverter::delreserve**](legacy_2_bancor_converter_2_bancor_converter_8hpp.md#function-delreserve) &gt; | [**delreserve\_action**](group___bancor_converter.md#typedef-delreserve-action)  <br> |
| typedef action\_wrapper&lt;"enablestake"\_n, &[**BancorConverter::enablestake**](_bancor_converter_2_bancor_converter_8hpp.md#function-enablestake) &gt; | [**enablestake\_action**](group___bancor_converter.md#typedef-enablestake-action)  <br> |
| typedef action\_wrapper&lt;"fund"\_n, &[**BancorConverter::fund**](_bancor_converter_2_bancor_converter_8hpp.md#function-fund) &gt; | [**fund\_action**](group___bancor_converter.md#typedef-fund-action)  <br> |
| typedef action\_wrapper&lt;"setmaxfee"\_n, &[**BancorConverter::setmaxfee**](_bancor_network_8hpp.md#function-setmaxfee) &gt; | [**setmaxfee\_action**](group___bancor_converter.md#typedef-setmaxfee-action)  <br> |
| typedef action\_wrapper&lt;"setmultitokn"\_n, &[**BancorConverter::setmultitokn**](_bancor_converter_2_bancor_converter_8hpp.md#function-setmultitokn) &gt; | [**setmultitokn\_action**](group___bancor_converter.md#typedef-setmultitokn-action)  <br> |
| typedef action\_wrapper&lt;"setreserve"\_n, &[**BancorConverter::setreserve**](legacy_2_bancor_converter_2_bancor_converter_8hpp.md#function-setreserve) &gt; | [**setreserve\_action**](group___bancor_converter.md#typedef-setreserve-action)  <br> |
| typedef action\_wrapper&lt;"setstaking"\_n, &[**BancorConverter::setstaking**](_bancor_converter_2_bancor_converter_8hpp.md#function-setstaking) &gt; | [**setstaking\_action**](group___bancor_converter.md#typedef-setstaking-action)  <br> |
| typedef action\_wrapper&lt;"updatefee"\_n, &[**BancorConverter::updatefee**](_bancor_converter_2_bancor_converter_8hpp.md#function-updatefee) &gt; | [**updatefee\_action**](group___bancor_converter.md#typedef-updatefee-action)  <br> |
| typedef action\_wrapper&lt;"updateowner"\_n, &[**BancorConverter::updateowner**](_bancor_converter_2_bancor_converter_8hpp.md#function-updateowner) &gt; | [**updateowner\_action**](group___bancor_converter.md#typedef-updateowner-action)  <br> |
| typedef action\_wrapper&lt;"withdraw"\_n, &[**BancorConverter::withdraw**](_bancor_converter_2_bancor_converter_8hpp.md#function-withdraw) &gt; | [**withdraw\_action**](group___bancor_converter.md#typedef-withdraw-action)  <br> |




## Public Functions

| Type | Name |
| ---: | :--- |
|  ACTION | [**create**](group___bancor_converter.md#function-create) (name owner, symbol\_code token\_code, double initial\_supply) <br>_initializes a new converter_  |
|  ACTION | [**delconverter**](group___bancor_converter.md#function-delconverter) (symbol\_code converter\_currency\_code) <br>_deletes a converter with empty reserves_  |
|  ACTION | [**delreserve**](group___bancor_converter.md#function-delreserve) (symbol\_code converter, symbol\_code reserve) <br>_deletes an empty reserve in the converter_  |
|  ACTION | [**delreserve**](group___bancor_converter.md#function-delreserve) (symbol\_code currency) <br>_deletes an empty reserve_  |
|  ACTION | [**enablestake**](group___bancor_converter.md#function-enablestake) (symbol\_code currency, bool enabled) <br>_flag indicating if the smart token can be staked, false if not_  |
|  ACTION | [**fund**](group___bancor_converter.md#function-fund) (name sender, asset quantity) <br>_buys smart tokens with all connector tokens using the same percentage_  |
|  ACTION | [**init**](group___bancor_converter.md#function-init) (name smart\_contract, asset smart\_currency, bool smart\_enabled, bool enabled, name network, bool require\_balance, uint64\_t max\_fee, uint64\_t fee) <br>_initializes the converter settings_  |
|  void | [**on\_transfer**](group___bancor_converter.md#function-on-transfer) (name from, name to, asset quantity, string memo) <br>_transfer intercepts with standard transfer args_  |
|  void | [**on\_transfer**](group___bancor_converter.md#function-on-transfer) (name from, name to, asset quantity, std::string memo) <br>_transfer intercepts_  |
|  ACTION | [**setmaxfee**](group___bancor_converter.md#function-setmaxfee) (uint64\_t maxfee) <br>_modify maxfee in this multi-converter's settings_  |
|  ACTION | [**setmultitokn**](group___bancor_converter.md#function-setmultitokn) (name multi\_token) <br>_creates the multi-converter settings, can only be called by multi-converter owner_  |
|  ACTION | [**setnetwork**](group___bancor_converter.md#function-setnetwork) (name network) <br>_sets the bancor network contract account_  |
|  ACTION | [**setreserve**](group___bancor_converter.md#function-setreserve) (symbol\_code converter\_currency\_code, symbol currency, name contract, uint64\_t ratio) <br>_initializes a new reserve in the converter_  |
|  ACTION | [**setreserve**](group___bancor_converter.md#function-setreserve) (name contract, symbol currency, uint64\_t ratio, bool sale\_enabled) <br>_initializes a new reserve in the converter_  |
|  ACTION | [**setstaking**](group___bancor_converter.md#function-setstaking) (name staking) <br>_may only set staking/voting contract for this multi-converter once_  |
|  ACTION | [**update**](group___bancor_converter.md#function-update) (bool smart\_enabled, bool enabled, bool require\_balance, uint64\_t fee) <br>_updates the converter settings_  |
|  ACTION | [**updatefee**](group___bancor_converter.md#function-updatefee) (symbol\_code currency, uint64\_t fee) <br>_updates the converter fee_  |
|  ACTION | [**updateowner**](group___bancor_converter.md#function-updateowner) (symbol\_code currency, name new\_owner) <br>_change converter's owner_  |
|  ACTION | [**withdraw**](group___bancor_converter.md#function-withdraw) (name sender, asset quantity, symbol\_code converter\_currency\_code) <br>_called by liquidity providers withdrawing "temporary balances" before_ `fund` _ing them into the reserve_ |







## Macros

| Type | Name |
| ---: | :--- |
| define  | [**EMIT\_CONVERSION\_EVENT**](group___bancor_converter.md#define-emit-conversion-event) (converter\_currency\_symbol, memo, from\_contract, from\_symbol, to\_contract, to\_symbol, from\_amount, to\_amount, fee\_amount) <br>_triggered when a conversion between two tokens occurs_  |
| define  | [**EMIT\_CONVERSION\_EVENT**](group___bancor_converter.md#define-emit-conversion-event) (memo, from\_contract, from\_symbol, to\_contract, to\_symbol, from\_amount, to\_amount, fee\_amount) <br>_triggered when a conversion between two tokens occurs_  |
| define  | [**EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT**](group___bancor_converter.md#define-emit-conversion-fee-update-event) (converter\_currency\_symbol, prev\_fee, new\_fee) <br>_triggered after a fee update occurs for a converter_  |
| define  | [**EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT**](group___bancor_converter.md#define-emit-conversion-fee-update-event) (prev\_fee, new\_fee) <br>_triggered when the conversion fee is updated_  |
| define  | [**EMIT\_PRICE\_DATA\_EVENT**](group___bancor_converter.md#define-emit-price-data-event) (converter\_currency\_symbol, smart\_supply, reserve\_contract, reserve\_symbol, reserve\_balance, reserve\_ratio) <br>_triggered after a conversion with new tokens price data_  |
| define  | [**EMIT\_PRICE\_DATA\_EVENT**](group___bancor_converter.md#define-emit-price-data-event) (smart\_supply, reserve\_contract, reserve\_symbol, reserve\_balance, reserve\_ratio) <br>_triggered after a conversion with new tokens price data_  |

# Detailed Description


Bancor Converter.

The Bancor converter allows conversions between a smart token and tokens that are defined as its reserves and between the different reserves directly. 

    
## Public Types Documentation


### <a href="#typedef-close-action" id="typedef-close-action">typedef close\_action </a>


```cpp
using close_action =  action_wrapper<"delconverter"_n, &BancorConverter::delconverter>;
```



### <a href="#typedef-create-action" id="typedef-create-action">typedef create\_action </a>


```cpp
using create_action =  action_wrapper<"create"_n, &BancorConverter::create>;
```



### <a href="#typedef-delreserve-action" id="typedef-delreserve-action">typedef delreserve\_action </a>


```cpp
using delreserve_action =  action_wrapper<"delreserve"_n, &BancorConverter::delreserve>;
```



### <a href="#typedef-enablestake-action" id="typedef-enablestake-action">typedef enablestake\_action </a>


```cpp
using enablestake_action =  action_wrapper<"enablestake"_n, &BancorConverter::enablestake>;
```



### <a href="#typedef-fund-action" id="typedef-fund-action">typedef fund\_action </a>


```cpp
using fund_action =  action_wrapper<"fund"_n, &BancorConverter::fund>;
```



### <a href="#typedef-setmaxfee-action" id="typedef-setmaxfee-action">typedef setmaxfee\_action </a>


```cpp
using setmaxfee_action =  action_wrapper<"setmaxfee"_n, &BancorConverter::setmaxfee>;
```



### <a href="#typedef-setmultitokn-action" id="typedef-setmultitokn-action">typedef setmultitokn\_action </a>


```cpp
using setmultitokn_action =  action_wrapper<"setmultitokn"_n, &BancorConverter::setmultitokn>;
```



### <a href="#typedef-setreserve-action" id="typedef-setreserve-action">typedef setreserve\_action </a>


```cpp
using setreserve_action =  action_wrapper<"setreserve"_n, &BancorConverter::setreserve>;
```



### <a href="#typedef-setstaking-action" id="typedef-setstaking-action">typedef setstaking\_action </a>


```cpp
using setstaking_action =  action_wrapper<"setstaking"_n, &BancorConverter::setstaking>;
```



### <a href="#typedef-updatefee-action" id="typedef-updatefee-action">typedef updatefee\_action </a>


```cpp
using updatefee_action =  action_wrapper<"updatefee"_n, &BancorConverter::updatefee>;
```



### <a href="#typedef-updateowner-action" id="typedef-updateowner-action">typedef updateowner\_action </a>


```cpp
using updateowner_action =  action_wrapper<"updateowner"_n, &BancorConverter::updateowner>;
```



### <a href="#typedef-withdraw-action" id="typedef-withdraw-action">typedef withdraw\_action </a>


```cpp
using withdraw_action =  action_wrapper<"withdraw"_n, &BancorConverter::withdraw>;
```


## Public Functions Documentation


### <a href="#function-create" id="function-create">function create </a>


```cpp
ACTION create (
    name owner,
    symbol_code token_code,
    double initial_supply
) 
```




**Parameters:**


* `owner` - the converter creator 
* `initial_supply` - initial supply of the smart token governed by the converter 
* `maximum_supply` - maximum supply of the smart token governed by the converter 



        

### <a href="#function-delconverter" id="function-delconverter">function delconverter </a>


```cpp
ACTION delconverter (
    symbol_code converter_currency_code
) 
```




**Parameters:**


* `converter_currency_code` - the currency code of the currency governed by the converter 



        

### <a href="#function-delreserve" id="function-delreserve">function delreserve </a>


```cpp
ACTION delreserve (
    symbol_code converter,
    symbol_code reserve
) 
```




**Parameters:**


* `converter` - the currency code of the smart token governed by the converter 
* `currency` - reserve token currency code 



        

### <a href="#function-delreserve" id="function-delreserve">function delreserve </a>


```cpp
ACTION delreserve (
    symbol_code currency
) 
```




**Parameters:**


* `currency` - reserve token currency symbol 



        

### <a href="#function-enablestake" id="function-enablestake">function enablestake </a>


```cpp
ACTION enablestake (
    symbol_code currency,
    bool enabled
) 
```




**Parameters:**


* `currency` - the currency symbol governed by the converter 
* `enabled` - true if staking/voting for this symbol are enabled 



        

### <a href="#function-fund" id="function-fund">function fund </a>


```cpp
ACTION fund (
    name sender,
    asset quantity
) 
```


i.e. if the caller increases the supply by 10%, it will cost an amount equal to 10% of each connector token balance can only be called if the total ratio is exactly 100% 

**Parameters:**


* `sender` - sender of the quantity 
* `quantity` - amount to increase the supply by (in the smart token) 



        

### <a href="#function-init" id="function-init">function init </a>


```cpp
ACTION init (
    name smart_contract,
    asset smart_currency,
    bool smart_enabled,
    bool enabled,
    name network,
    bool require_balance,
    uint64_t max_fee,
    uint64_t fee
) 
```


can only be called once, by the contract account 

**Parameters:**


* `smart_contract` - contract account name of the smart token governed by the converter 
* `smart_currency` - currency of the smart token governed by the converter 
* `smart_enabled` - true if the smart token can be converted to/from, false if not 
* `enabled` - true if conversions are enabled, false if not 
* `require_balance` - true if conversions that require creating new balance for the calling account should fail, false if not 
* `network` - bancor network contract name 
* `max_fee` - maximum conversion fee percentage, 0-30000, 4-pt precision a la eosio.asset 
* `fee` - conversion fee percentage, must be lower than the maximum fee, same precision 



        

### <a href="#function-on-transfer" id="function-on-transfer">function on\_transfer </a>


```cpp
void on_transfer (
    name from,
    name to,
    asset quantity,
    string memo
) 
```


`memo` containing a keyword following a semicolon at the end of the conversion path indicates special kind of transfer:
* e.g. transferring smart tokens with keyword "liquidate", or
* transferring reserve tokens with keyword "fund" 

**Parameters:**


  * `from` - the sender of the transfer 
  * `to` - the receiver of the transfer 
  * `quantity` - the quantity for the transfer 
  * `memo` - the memo for the transfer 





        

### <a href="#function-on-transfer" id="function-on-transfer">function on\_transfer </a>


```cpp
void on_transfer (
    name from,
    name to,
    asset quantity,
    std::string memo
) 
```


`memo` in csv format, may contain an extra keyword (e.g. "setup") following a semicolon at the end of the conversion path; indicates special transfer which otherwise would be interpreted as a standard conversion 

**Parameters:**


* `from` - the sender of the transfer 
* `to` - the receiver of the transfer 
* `quantity` - the quantity for the transfer 
* `memo` - the memo for the transfer 



        

### <a href="#function-setmaxfee" id="function-setmaxfee">function setmaxfee </a>


```cpp
ACTION setmaxfee (
    uint64_t maxfee
) 
```




**Parameters:**


* `maxfee` - maximum fee for all converters in this multi-converter 



        

### <a href="#function-setmultitokn" id="function-setmultitokn">function setmultitokn </a>


```cpp
ACTION setmultitokn (
    name multi_token
) 
```




**Parameters:**


* `multi_token` - may only set multi-token contract once 



        

### <a href="#function-setnetwork" id="function-setnetwork">function setnetwork </a>


```cpp
ACTION setnetwork (
    name network
) 
```




**Parameters:**


* `network` - bancor network contract account 



        

### <a href="#function-setreserve" id="function-setreserve">function setreserve </a>


```cpp
ACTION setreserve (
    symbol_code converter_currency_code,
    symbol currency,
    name contract,
    uint64_t ratio
) 
```


can also be used to update an existing reserve, can only be called by the contract account 

**Parameters:**


* `converter_currency_code` - the currency code of the currency governed by the converter 
* `currency` - reserve token currency symbol 
* `contract` - reserve token contract name 
* `ratio` - reserve ratio, percentage, 0-1000000 



        

### <a href="#function-setreserve" id="function-setreserve">function setreserve </a>


```cpp
ACTION setreserve (
    name contract,
    symbol currency,
    uint64_t ratio,
    bool sale_enabled
) 
```


can also be used to update an existing reserve, can only be called by the contract account 

**Parameters:**


* `contract` - reserve token contract name 
* `currency` - reserve token currency symbol 
* `ratio` - reserve ratio, percentage, 0-1000000, precision a la max\_fee 
* `sale_enabled` - true if purchases are enabled with the reserve, false if not 



        

### <a href="#function-setstaking" id="function-setstaking">function setstaking </a>


```cpp
ACTION setstaking (
    name staking
) 
```




**Parameters:**


* `staking` - name of staking/voting contract 



        

### <a href="#function-update" id="function-update">function update </a>


```cpp
ACTION update (
    bool smart_enabled,
    bool enabled,
    bool require_balance,
    uint64_t fee
) 
```


can only be called by the contract account 

**Parameters:**


* `smart_enabled` - true if the smart token can be converted to/from, false if not 
* `enabled` - true if conversions are enabled, false if not 
* `require_balance` - true if conversions that require creating new balance for the calling account should fail, false if not 
* `fee` - conversion fee percentage, must be lower than the maximum fee, same precision 



        

### <a href="#function-updatefee" id="function-updatefee">function updatefee </a>


```cpp
ACTION updatefee (
    symbol_code currency,
    uint64_t fee
) 
```




**Parameters:**


* `currency` - the currency symbol governed by the converter 
* `fee` - the new fee % for this converter, must be lower than the maximum fee, 0-1000000 



        

### <a href="#function-updateowner" id="function-updateowner">function updateowner </a>


```cpp
ACTION updateowner (
    symbol_code currency,
    name new_owner
) 
```




**Parameters:**


* `currency` - the currency symbol governed by the converter 
* `new_owner` - converter's new owner 



        

### <a href="#function-withdraw" id="function-withdraw">function withdraw </a>


```cpp
ACTION withdraw (
    name sender,
    asset quantity,
    symbol_code converter_currency_code
) 
```




**Parameters:**


* `sender` - sender of the quantity 
* `quantity` - amount to decrease the supply by (in the smart token) 
* `converter_currency_code` - the currency code of the currency governed by the converter 



        
## Macro Definition Documentation



### <a href="#define-emit-conversion-event" id="define-emit-conversion-event">define EMIT\_CONVERSION\_EVENT </a>


```cpp
#define EMIT_CONVERSION_EVENT (
    converter_currency_symbol,
    memo,
    from_contract,
    from_symbol,
    to_contract,
    to_symbol,
    from_amount,
    to_amount,
    fee_amount
) { \
    START_EVENT("conversion", "1.4") \
    EVENTKV("converter_currency_symbol", converter_currency_symbol) \
    EVENTKV("memo", memo) \
    EVENTKV("from_contract", from_contract) \
    EVENTKV("from_symbol", from_symbol) \
    EVENTKV("to_contract", to_contract) \
    EVENTKV("to_symbol", to_symbol) \
    EVENTKV("amount", from_amount) \
    EVENTKV("return", to_amount) \
    EVENTKVL("conversion_fee", fee_amount) \
    END_EVENT() \
}
```



### <a href="#define-emit-conversion-event" id="define-emit-conversion-event">define EMIT\_CONVERSION\_EVENT </a>


```cpp
#define EMIT_CONVERSION_EVENT (
    memo,
    from_contract,
    from_symbol,
    to_contract,
    to_symbol,
    from_amount,
    to_amount,
    fee_amount
) { \
    START_EVENT("conversion", "1.3") \
    EVENTKV("memo", memo) \
    EVENTKV("from_contract", from_contract) \
    EVENTKV("from_symbol", from_symbol) \
    EVENTKV("to_contract", to_contract) \
    EVENTKV("to_symbol", to_symbol) \
    EVENTKV("amount", from_amount) \
    EVENTKV("return", to_amount) \
    EVENTKVL("conversion_fee", fee_amount) \
    END_EVENT() \
}
```



### <a href="#define-emit-conversion-fee-update-event" id="define-emit-conversion-fee-update-event">define EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT </a>


```cpp
#define EMIT_CONVERSION_FEE_UPDATE_EVENT (
    converter_currency_symbol,
    prev_fee,
    new_fee
) { \
    START_EVENT("conversion_fee_update", "1.2") \
    EVENTKV("converter_currency_symbol", converter_currency_symbol) \
    EVENTKV("prev_fee", prev_fee) \
    EVENTKVL("new_fee", new_fee) \
    END_EVENT() \
}
```



### <a href="#define-emit-conversion-fee-update-event" id="define-emit-conversion-fee-update-event">define EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT </a>


```cpp
#define EMIT_CONVERSION_FEE_UPDATE_EVENT (
    prev_fee,
    new_fee
) { \
    START_EVENT("conversion_fee_update", "1.1") \
    EVENTKV("prev_fee", prev_fee) \
    EVENTKVL("new_fee", new_fee) \
    END_EVENT() \
}
```



### <a href="#define-emit-price-data-event" id="define-emit-price-data-event">define EMIT\_PRICE\_DATA\_EVENT </a>


```cpp
#define EMIT_PRICE_DATA_EVENT (
    converter_currency_symbol,
    smart_supply,
    reserve_contract,
    reserve_symbol,
    reserve_balance,
    reserve_ratio
) { \
    START_EVENT("price_data", "1.5") \
    EVENTKV("converter_currency_symbol", converter_currency_symbol) \
    EVENTKV("smart_supply", smart_supply) \
    EVENTKV("reserve_contract", reserve_contract) \
    EVENTKV("reserve_symbol", reserve_symbol) \
    EVENTKV("reserve_balance", reserve_balance) \
    EVENTKVL("reserve_ratio", reserve_ratio) \
    END_EVENT() \
}
```



### <a href="#define-emit-price-data-event" id="define-emit-price-data-event">define EMIT\_PRICE\_DATA\_EVENT </a>


```cpp
#define EMIT_PRICE_DATA_EVENT (
    smart_supply,
    reserve_contract,
    reserve_symbol,
    reserve_balance,
    reserve_ratio
) { \
    START_EVENT("price_data", "1.4") \
    EVENTKV("smart_supply", smart_supply) \
    EVENTKV("reserve_contract", reserve_contract) \
    EVENTKV("reserve_symbol", reserve_symbol) \
    EVENTKV("reserve_balance", reserve_balance) \
    EVENTKVL("reserve_ratio", reserve_ratio) \
    END_EVENT() \
}
```



------------------------------
