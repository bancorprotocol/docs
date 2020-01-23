# BancorConverter

## Group BancorConverter

[**Modules**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorConverter**](./)

_Bancor BancorConverter._ [More...](./#detailed-description)

### Modules

| Type | Name |
| ---: | :--- |
| module | [**Accounts Table**]()  _This table stores "temporary balances" that are transfered in by liquidity providers before they can get added to their respective reserves._ |
| module | [**Reserves Table**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/group___bancor_converter___reserves___table.md)  _This table stores the reserve balances and related information for the reserves of every converter in this contract._ |
| module | [**Settings Table**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/group___bancor_converter___settings___table.md)  _This table stores the global settings affecting all the converters in this contract._ |
| module | [**Reserves Table**](group___converter___reserves___table.md)  _This table stores stats on the reserves of the converter, the actual balance is owned by converter account within the accounts._ |
| module | [**Settings Table**](group___converter___settings___table.md)  _This table stores stats on the settings of the converter._ |
| module | [**Converters Table**]()  _This table stores the key information about all converters in this contract._ |

### Public Types

| Type | Name |
| ---: | :--- |
| typedef action\_wrapper&lt;"delconverter"\_n, &[**BancorConverter::delconverter**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-delconverter) &gt; | [**close\_action**](./#typedef-close-action)    |
| typedef action\_wrapper&lt;"create"\_n, &[**BancorConverter::create**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_token_8hpp.md#function-create) &gt; | [**create\_action**](./#typedef-create-action)    |
| typedef action\_wrapper&lt;"delreserve"\_n, &[**BancorConverter::delreserve**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/legacy_2_bancor_converter_2_bancor_converter_8hpp.md#function-delreserve) &gt; | [**delreserve\_action**](./#typedef-delreserve-action)    |
| typedef action\_wrapper&lt;"enablestake"\_n, &[**BancorConverter::enablestake**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-enablestake) &gt; | [**enablestake\_action**](./#typedef-enablestake-action)    |
| typedef action\_wrapper&lt;"fund"\_n, &[**BancorConverter::fund**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-fund) &gt; | [**fund\_action**](./#typedef-fund-action)    |
| typedef action\_wrapper&lt;"setmaxfee"\_n, &[**BancorConverter::setmaxfee**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_network_8hpp.md#function-setmaxfee) &gt; | [**setmaxfee\_action**](./#typedef-setmaxfee-action)    |
| typedef action\_wrapper&lt;"setmultitokn"\_n, &[**BancorConverter::setmultitokn**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-setmultitokn) &gt; | [**setmultitokn\_action**](./#typedef-setmultitokn-action)    |
| typedef action\_wrapper&lt;"setreserve"\_n, &[**BancorConverter::setreserve**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/legacy_2_bancor_converter_2_bancor_converter_8hpp.md#function-setreserve) &gt; | [**setreserve\_action**](./#typedef-setreserve-action)    |
| typedef action\_wrapper&lt;"setstaking"\_n, &[**BancorConverter::setstaking**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-setstaking) &gt; | [**setstaking\_action**](./#typedef-setstaking-action)    |
| typedef action\_wrapper&lt;"updatefee"\_n, &[**BancorConverter::updatefee**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-updatefee) &gt; | [**updatefee\_action**](./#typedef-updatefee-action)    |
| typedef action\_wrapper&lt;"updateowner"\_n, &[**BancorConverter::updateowner**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-updateowner) &gt; | [**updateowner\_action**](./#typedef-updateowner-action)    |
| typedef action\_wrapper&lt;"withdraw"\_n, &[**BancorConverter::withdraw**](https://github.com/bancorprotocol/docs/tree/6547d48cf908ff84f8ef8142521dfa886c5447eb/api-reference/eos-smart-contracts/_bancor_converter_2_bancor_converter_8hpp.md#function-withdraw) &gt; | [**withdraw\_action**](./#typedef-withdraw-action)    |

### Public Functions

| Type | Name |
| ---: | :--- |
| ACTION | [**create**](./#function-create) \(name owner, symbol\_code token\_code, double initial\_supply\)  _initializes a new converter_ |
| ACTION | [**delconverter**](./#function-delconverter) \(symbol\_code converter\_currency\_code\)  _deletes a converter with empty reserves_ |
| ACTION | [**delreserve**](./#function-delreserve) \(symbol\_code converter, symbol\_code reserve\)  _deletes an empty reserve in the converter_ |
| ACTION | [**delreserve**](./#function-delreserve) \(symbol\_code currency\)  _deletes an empty reserve_ |
| ACTION | [**enablestake**](./#function-enablestake) \(symbol\_code currency, bool enabled\)  _flag indicating if the smart token can be staked, false if not_ |
| ACTION | [**fund**](./#function-fund) \(name sender, asset quantity\)  _buys smart tokens with all connector tokens using the same percentage_ |
| ACTION | [**init**](./#function-init) \(name smart\_contract, asset smart\_currency, bool smart\_enabled, bool enabled, name network, bool require\_balance, uint64\_t max\_fee, uint64\_t fee\)  _initializes the converter settings_ |
| void | [**on\_transfer**](./#function-on-transfer) \(name from, name to, asset quantity, string memo\)  _transfer intercepts with standard transfer args_ |
| void | [**on\_transfer**](./#function-on-transfer) \(name from, name to, asset quantity, std::string memo\)  _transfer intercepts_ |
| ACTION | [**setmaxfee**](./#function-setmaxfee) \(uint64\_t maxfee\)  _modify maxfee in this multi-converter's settings_ |
| ACTION | [**setmultitokn**](./#function-setmultitokn) \(name multi\_token\)  _creates the multi-converter settings, can only be called by multi-converter owner_ |
| ACTION | [**setnetwork**](./#function-setnetwork) \(name network\)  _sets the bancor network contract account_ |
| ACTION | [**setreserve**](./#function-setreserve) \(symbol\_code converter\_currency\_code, symbol currency, name contract, uint64\_t ratio\)  _initializes a new reserve in the converter_ |
| ACTION | [**setreserve**](./#function-setreserve) \(name contract, symbol currency, uint64\_t ratio, bool sale\_enabled\)  _initializes a new reserve in the converter_ |
| ACTION | [**setstaking**](./#function-setstaking) \(name staking\)  _may only set staking/voting contract for this multi-converter once_ |
| ACTION | [**update**](./#function-update) \(bool smart\_enabled, bool enabled, bool require\_balance, uint64\_t fee\)  _updates the converter settings_ |
| ACTION | [**updatefee**](./#function-updatefee) \(symbol\_code currency, uint64\_t fee\)  _updates the converter fee_ |
| ACTION | [**updateowner**](./#function-updateowner) \(symbol\_code currency, name new\_owner\)  _change converter's owner_ |
| ACTION | [**withdraw**](./#function-withdraw) \(name sender, asset quantity, symbol\_code converter\_currency\_code\)  _called by liquidity providers withdrawing "temporary balances" before_ `fund` _ing them into the reserve_ |

### Macros

| Type | Name |
| ---: | :--- |
| define | [**EMIT\_CONVERSION\_EVENT**](./#define-emit-conversion-event) \(converter\_currency\_symbol, memo, from\_contract, from\_symbol, to\_contract, to\_symbol, from\_amount, to\_amount, fee\_amount\)  _triggered when a conversion between two tokens occurs_ |
| define | [**EMIT\_CONVERSION\_EVENT**](./#define-emit-conversion-event) \(memo, from\_contract, from\_symbol, to\_contract, to\_symbol, from\_amount, to\_amount, fee\_amount\)  _triggered when a conversion between two tokens occurs_ |
| define | [**EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT**](./#define-emit-conversion-fee-update-event) \(converter\_currency\_symbol, prev\_fee, new\_fee\)  _triggered after a fee update occurs for a converter_ |
| define | [**EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT**](./#define-emit-conversion-fee-update-event) \(prev\_fee, new\_fee\)  _triggered when the conversion fee is updated_ |
| define | [**EMIT\_PRICE\_DATA\_EVENT**](./#define-emit-price-data-event) \(converter\_currency\_symbol, smart\_supply, reserve\_contract, reserve\_symbol, reserve\_balance, reserve\_ratio\)  _triggered after a conversion with new tokens price data_ |
| define | [**EMIT\_PRICE\_DATA\_EVENT**](./#define-emit-price-data-event) \(smart\_supply, reserve\_contract, reserve\_symbol, reserve\_balance, reserve\_ratio\)  _triggered after a conversion with new tokens price data_ |

## Detailed Description

Bancor Converter.

The Bancor converter allows conversions between a smart token and tokens that are defined as its reserves and between the different reserves directly.

### Public Types Documentation

#### [typedef close\_action](./#typedef-close-action) <a id="typedef-close-action"></a>

```cpp
using close_action =  action_wrapper<"delconverter"_n, &BancorConverter::delconverter>;
```

#### [typedef create\_action](./#typedef-create-action) <a id="typedef-create-action"></a>

```cpp
using create_action =  action_wrapper<"create"_n, &BancorConverter::create>;
```

#### [typedef delreserve\_action](./#typedef-delreserve-action) <a id="typedef-delreserve-action"></a>

```cpp
using delreserve_action =  action_wrapper<"delreserve"_n, &BancorConverter::delreserve>;
```

#### [typedef enablestake\_action](./#typedef-enablestake-action) <a id="typedef-enablestake-action"></a>

```cpp
using enablestake_action =  action_wrapper<"enablestake"_n, &BancorConverter::enablestake>;
```

#### [typedef fund\_action](./#typedef-fund-action) <a id="typedef-fund-action"></a>

```cpp
using fund_action =  action_wrapper<"fund"_n, &BancorConverter::fund>;
```

#### [typedef setmaxfee\_action](./#typedef-setmaxfee-action) <a id="typedef-setmaxfee-action"></a>

```cpp
using setmaxfee_action =  action_wrapper<"setmaxfee"_n, &BancorConverter::setmaxfee>;
```

#### [typedef setmultitokn\_action](./#typedef-setmultitokn-action) <a id="typedef-setmultitokn-action"></a>

```cpp
using setmultitokn_action =  action_wrapper<"setmultitokn"_n, &BancorConverter::setmultitokn>;
```

#### [typedef setreserve\_action](./#typedef-setreserve-action) <a id="typedef-setreserve-action"></a>

```cpp
using setreserve_action =  action_wrapper<"setreserve"_n, &BancorConverter::setreserve>;
```

#### [typedef setstaking\_action](./#typedef-setstaking-action) <a id="typedef-setstaking-action"></a>

```cpp
using setstaking_action =  action_wrapper<"setstaking"_n, &BancorConverter::setstaking>;
```

#### [typedef updatefee\_action](./#typedef-updatefee-action) <a id="typedef-updatefee-action"></a>

```cpp
using updatefee_action =  action_wrapper<"updatefee"_n, &BancorConverter::updatefee>;
```

#### [typedef updateowner\_action](./#typedef-updateowner-action) <a id="typedef-updateowner-action"></a>

```cpp
using updateowner_action =  action_wrapper<"updateowner"_n, &BancorConverter::updateowner>;
```

#### [typedef withdraw\_action](./#typedef-withdraw-action) <a id="typedef-withdraw-action"></a>

```cpp
using withdraw_action =  action_wrapper<"withdraw"_n, &BancorConverter::withdraw>;
```

### Public Functions Documentation

#### [function create](./#function-create) <a id="function-create"></a>

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

#### [function delconverter](./#function-delconverter) <a id="function-delconverter"></a>

```cpp
ACTION delconverter (
    symbol_code converter_currency_code
)
```

**Parameters:**

* `converter_currency_code` - the currency code of the currency governed by the converter 

#### [function delreserve](./#function-delreserve) <a id="function-delreserve"></a>

```cpp
ACTION delreserve (
    symbol_code converter,
    symbol_code reserve
)
```

**Parameters:**

* `converter` - the currency code of the smart token governed by the converter 
* `currency` - reserve token currency code 

#### [function delreserve](./#function-delreserve) <a id="function-delreserve"></a>

```cpp
ACTION delreserve (
    symbol_code currency
)
```

**Parameters:**

* `currency` - reserve token currency symbol 

#### [function enablestake](./#function-enablestake) <a id="function-enablestake"></a>

```cpp
ACTION enablestake (
    symbol_code currency,
    bool enabled
)
```

**Parameters:**

* `currency` - the currency symbol governed by the converter 
* `enabled` - true if staking/voting for this symbol are enabled 

#### [function fund](./#function-fund) <a id="function-fund"></a>

```cpp
ACTION fund (
    name sender,
    asset quantity
)
```

i.e. if the caller increases the supply by 10%, it will cost an amount equal to 10% of each connector token balance can only be called if the total ratio is exactly 100%

**Parameters:**

* `sender` - sender of the quantity 
* `quantity` - amount to increase the supply by \(in the smart token\) 

#### [function init](./#function-init) <a id="function-init"></a>

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

#### [function on\_transfer](./#function-on-transfer) <a id="function-on-transfer"></a>

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

#### [function on\_transfer](./#function-on-transfer) <a id="function-on-transfer"></a>

```cpp
void on_transfer (
    name from,
    name to,
    asset quantity,
    std::string memo
)
```

`memo` in csv format, may contain an extra keyword \(e.g. "setup"\) following a semicolon at the end of the conversion path; indicates special transfer which otherwise would be interpreted as a standard conversion

**Parameters:**

* `from` - the sender of the transfer 
* `to` - the receiver of the transfer 
* `quantity` - the quantity for the transfer 
* `memo` - the memo for the transfer 

#### [function setmaxfee](./#function-setmaxfee) <a id="function-setmaxfee"></a>

```cpp
ACTION setmaxfee (
    uint64_t maxfee
)
```

**Parameters:**

* `maxfee` - maximum fee for all converters in this multi-converter 

#### [function setmultitokn](./#function-setmultitokn) <a id="function-setmultitokn"></a>

```cpp
ACTION setmultitokn (
    name multi_token
)
```

**Parameters:**

* `multi_token` - may only set multi-token contract once 

#### [function setnetwork](./#function-setnetwork) <a id="function-setnetwork"></a>

```cpp
ACTION setnetwork (
    name network
)
```

**Parameters:**

* `network` - bancor network contract account 

#### [function setreserve](./#function-setreserve) <a id="function-setreserve"></a>

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

#### [function setreserve](./#function-setreserve) <a id="function-setreserve"></a>

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

#### [function setstaking](./#function-setstaking) <a id="function-setstaking"></a>

```cpp
ACTION setstaking (
    name staking
)
```

**Parameters:**

* `staking` - name of staking/voting contract 

#### [function update](./#function-update) <a id="function-update"></a>

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

#### [function updatefee](./#function-updatefee) <a id="function-updatefee"></a>

```cpp
ACTION updatefee (
    symbol_code currency,
    uint64_t fee
)
```

**Parameters:**

* `currency` - the currency symbol governed by the converter 
* `fee` - the new fee % for this converter, must be lower than the maximum fee, 0-1000000 

#### [function updateowner](./#function-updateowner) <a id="function-updateowner"></a>

```cpp
ACTION updateowner (
    symbol_code currency,
    name new_owner
)
```

**Parameters:**

* `currency` - the currency symbol governed by the converter 
* `new_owner` - converter's new owner 

#### [function withdraw](./#function-withdraw) <a id="function-withdraw"></a>

```cpp
ACTION withdraw (
    name sender,
    asset quantity,
    symbol_code converter_currency_code
)
```

**Parameters:**

* `sender` - sender of the quantity 
* `quantity` - amount to decrease the supply by \(in the smart token\) 
* `converter_currency_code` - the currency code of the currency governed by the converter 

### Macro Definition Documentation

#### [define EMIT\_CONVERSION\_EVENT](./#define-emit-conversion-event) <a id="define-emit-conversion-event"></a>

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

#### [define EMIT\_CONVERSION\_EVENT](./#define-emit-conversion-event) <a id="define-emit-conversion-event"></a>

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

#### [define EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT](./#define-emit-conversion-fee-update-event) <a id="define-emit-conversion-fee-update-event"></a>

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

#### [define EMIT\_CONVERSION\_FEE\_UPDATE\_EVENT](./#define-emit-conversion-fee-update-event) <a id="define-emit-conversion-fee-update-event"></a>

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

#### [define EMIT\_PRICE\_DATA\_EVENT](./#define-emit-price-data-event) <a id="define-emit-price-data-event"></a>

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

#### [define EMIT\_PRICE\_DATA\_EVENT](./#define-emit-price-data-event) <a id="define-emit-price-data-event"></a>

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

