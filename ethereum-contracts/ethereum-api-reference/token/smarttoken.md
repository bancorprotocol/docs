# SmartToken

Smart Token

'Owned' is specified here for readability reasons

## Functions:

* [`constructor(string _name, string _symbol, uint8 _decimals)`](smarttoken.md#SmartToken-constructor-string-string-uint8-)
* [`disableTransfers(bool _disable)`](smarttoken.md#SmartToken-disableTransfers-bool-)
* [`issue(address _to, uint256 _amount)`](smarttoken.md#SmartToken-issue-address-uint256-)
* [`destroy(address _from, uint256 _amount)`](smarttoken.md#SmartToken-destroy-address-uint256-)
* [`transfer(address _to, uint256 _value)`](smarttoken.md#SmartToken-transfer-address-uint256-)
* [`transferFrom(address _from, address _to, uint256 _value)`](smarttoken.md#SmartToken-transferFrom-address-address-uint256-)

## Events:

* [`NewSmartToken(address _token)`](smarttoken.md#SmartToken-NewSmartToken-address-)
* [`Issuance(uint256 _amount)`](smarttoken.md#SmartToken-Issuance-uint256-)
* [`Destruction(uint256 _amount)`](smarttoken.md#SmartToken-Destruction-uint256-)

## Function `constructor(string _name, string _symbol, uint8 _decimals)` <a id="SmartToken-constructor-string-string-uint8-"></a>

initializes a new SmartToken instance

### Parameters:

* `_name`: token name
* `_symbol`: token short symbol, minimum 1 character
* `_decimals`: for display purposes only

## Function `disableTransfers(bool _disable)` <a id="SmartToken-disableTransfers-bool-"></a>

disables/enables transfers

can only be called by the contract owner

### Parameters:

* `_disable`:    true to disable transfers, false to enable them

## Function `issue(address _to, uint256 _amount)` <a id="SmartToken-issue-address-uint256-"></a>

increases the token supply and sends the new tokens to an account

can only be called by the contract owner

### Parameters:

* `_to`: account to receive the new amount
* `_amount`: amount to increase the supply by

## Function `destroy(address _from, uint256 _amount)` <a id="SmartToken-destroy-address-uint256-"></a>

removes tokens from an account and decreases the token supply

can be called by the contract owner to destroy tokens from any account or by any holder to destroy tokens from his/her own account

### Parameters:

* `_from`: account to remove the amount from
* `_amount`: amount to decrease the supply by

## Function `transfer(address _to, uint256 _value) → bool success` <a id="SmartToken-transfer-address-uint256-"></a>

send coins

throws on any error rather then return a false flag to minimize user errors

in addition to the standard checks, the function throws if transfers are disabled

### Parameters:

* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Function `transferFrom(address _from, address _to, uint256 _value) → bool success` <a id="SmartToken-transferFrom-address-address-uint256-"></a>

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

in addition to the standard checks, the function throws if transfers are disabled

### Parameters:

* `_from`: source address
* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Event `NewSmartToken(address _token)` <a id="SmartToken-NewSmartToken-address-"></a>

triggered when a smart token is deployed

the \_token address is defined for forward compatibility, in case the event is trigger by a factory

### Parameters:

* `_token`:  new smart token address

## Event `Issuance(uint256 _amount)` <a id="SmartToken-Issuance-uint256-"></a>

triggered when the total supply is increased

### Parameters:

* `_amount`:  amount that gets added to the supply

## Event `Destruction(uint256 _amount)` <a id="SmartToken-Destruction-uint256-"></a>

triggered when the total supply is decreased

### Parameters:

* `_amount`:  amount that gets removed from the supply

