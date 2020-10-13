# DSToken

DSToken represents a token with dynamic supply.

The owner of the token can mint/burn tokens to/from any account.

## Functions:

* [`constructor(string _name, string _symbol, uint8 _decimals)`](dstoken.md#DSToken-constructor-string-string-uint8-)
* [`issue(address _to, uint256 _amount)`](dstoken.md#DSToken-issue-address-uint256-)
* [`destroy(address _from, uint256 _amount)`](dstoken.md#DSToken-destroy-address-uint256-)
* [`transfer(address _to, uint256 _value)`](dstoken.md#DSToken-transfer-address-uint256-)
* [`transferFrom(address _from, address _to, uint256 _value)`](dstoken.md#DSToken-transferFrom-address-address-uint256-)

## Events:

* [`Issuance(uint256 _amount)`](dstoken.md#DSToken-Issuance-uint256-)
* [`Destruction(uint256 _amount)`](dstoken.md#DSToken-Destruction-uint256-)

## Function `constructor(string _name, string _symbol, uint8 _decimals)` <a id="DSToken-constructor-string-string-uint8-"></a>

initializes a new DSToken instance

### Parameters:

* `_name`: token name
* `_symbol`: token short symbol, minimum 1 character
* `_decimals`: for display purposes only

## Function `issue(address _to, uint256 _amount)` <a id="DSToken-issue-address-uint256-"></a>

increases the token supply and sends the new tokens to the given account

can only be called by the contract owner

### Parameters:

* `_to`: account to receive the new amount
* `_amount`: amount to increase the supply by

## Function `destroy(address _from, uint256 _amount)` <a id="DSToken-destroy-address-uint256-"></a>

removes tokens from the given account and decreases the token supply

can only be called by the contract owner

### Parameters:

* `_from`: account to remove the amount from
* `_amount`: amount to decrease the supply by

## Function `transfer(address _to, uint256 _value) → bool` <a id="DSToken-transfer-address-uint256-"></a>

send coins

throws on any error rather then return a false flag to minimize user errors

in addition to the standard checks, the function throws if transfers are disabled

### Parameters:

* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Function `transferFrom(address _from, address _to, uint256 _value) → bool` <a id="DSToken-transferFrom-address-address-uint256-"></a>

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

in addition to the standard checks, the function throws if transfers are disabled

### Parameters:

* `_from`: source address
* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Event `Issuance(uint256 _amount)` <a id="DSToken-Issuance-uint256-"></a>

triggered when the total supply is increased

### Parameters:

* `_amount`:  amount that gets added to the supply

## Event `Destruction(uint256 _amount)` <a id="DSToken-Destruction-uint256-"></a>

triggered when the total supply is decreased

### Parameters:

* `_amount`:  amount that gets removed from the supply

