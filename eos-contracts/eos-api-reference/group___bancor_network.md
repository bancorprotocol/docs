
# Group BancorNetwork


[**Modules**](modules.md)
 **>** [**BancorNetwork**](group___bancor_network.md)



_The BancorNetwork contract is the main entry point for Bancor token conversions._ [More...](#detailed-description)









## Modules

| Type | Name |
| ---: | :--- |
| module | [**Settings Table**](group___network___settings___table.md) <br>_This table stores the settings for the entire Bancor network._  |







## Public Functions

| Type | Name |
| ---: | :--- |
|  void | [**on\_transfer**](group___bancor_network.md#function-on-transfer) (name from, name to, asset quantity, string memo) <br>_transfer intercepts_  |
|  ACTION | [**setmaxfee**](group___bancor_network.md#function-setmaxfee) (uint64\_t max\_affiliate\_fee) <br>_set the maximum affliate fee for all chained BNT conversions_  |
|  ACTION | [**setnettoken**](group___bancor_network.md#function-setnettoken) (name network\_token) <br>_sets the network token contract_  |







## Macros

| Type | Name |
| ---: | :--- |
| define  | [**EMIT\_AFFILIATE\_FEE\_EVENT**](group___bancor_network.md#define-emit-affiliate-fee-event) (trader, from\_contract, fee\_account, to\_amount, fee\_amount) <br> |

# Detailed Description


This contract allows converting between the 'from' token being transfered into the contract and any other token in the Bancor network, initiated by submitting a single transaction and providing into `on_transfer` a "conversion path" in the `memo`:
* The path is most useful when the conversion must be routed through multiple "hops".
* The path defines which converters should be used and what kind of conversion should be done in each "hop".
* The path format doesn't include complex structure; it is represented by a space-delimited list of values in which each 'hop' is represented by a pair  converter s& 'to' token symbol. Here is the format: 
> [converter account, to token symbol, converter account, to token symbol...] 

* For example, in order to convert 10 EOS into BNT, the caller needs to transfer 10 EOS to the contract and provide the following memo: 
> `1,bnt2eoscnvrt BNT,1.0000000000,receiver_account_name`
>  

* Optionally, an affiliate fee and affiliate account may be included (either both or neither) as such: 
> `1,PATH,1.0000000000,receiver_account_name,affiliate_account_name,affiliate_fee`




    
## Public Functions Documentation


### <a href="#function-on-transfer" id="function-on-transfer">function on\_transfer </a>


```cpp
void on_transfer (
    name from,
    name to,
    asset quantity,
    string memo
) 
```


conversion will fail if the amount returned is lower "minreturn" element in the `memo` 

        

### <a href="#function-setmaxfee" id="function-setmaxfee">function setmaxfee </a>


```cpp
ACTION setmaxfee (
    uint64_t max_affiliate_fee
) 
```




**Parameters:**


* `max_affiliate_fee` - what network owner determines to be the maximum 



        

### <a href="#function-setnettoken" id="function-setnettoken">function setnettoken </a>


```cpp
ACTION setnettoken (
    name network_token
) 
```




**Parameters:**


* `network_token` - network token contract account 



        
## Macro Definition Documentation



### <a href="#define-emit-affiliate-fee-event" id="define-emit-affiliate-fee-event">define EMIT\_AFFILIATE\_FEE\_EVENT </a>


```cpp
#define EMIT_AFFILIATE_FEE_EVENT (
    trader,
    from_contract,
    fee_account,
    to_amount,
    fee_amount
) { \
    START_EVENT("affiliate", "1.0") \
    EVENTKV("trader", trader) \
    EVENTKV("from_contract", from_contract) \
    EVENTKV("affiliate_account", fee_account) \
    EVENTKV("return", to_amount) \
    EVENTKVL("affiliate_fee", fee_amount) \
    END_EVENT() \
}
```



* the account which originated the entire conversion path
* the final destination of the entire conversion path
* the contract where this conversion was processed
* the return from the conversion in BNT before fee deduction
* the account that was paid the affiliate fee
* the amount of that was paid as affiliate fee 



        

------------------------------
