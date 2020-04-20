# EtherToken

Ether tokenization contract

'Owned' is specified here for readability reasons

## Functions:

* [`constructor(string _name, string _symbol)`](ethertoken.md#EtherToken-constructor-string-string-)
* [`deposit()`](ethertoken.md#EtherToken-deposit--)
* [`withdraw(uint256 _amount)`](ethertoken.md#EtherToken-withdraw-uint256-)
* [`depositTo(address _to)`](ethertoken.md#EtherToken-depositTo-address-)
* [`withdrawTo(address _to, uint256 _amount)`](ethertoken.md#EtherToken-withdrawTo-address-uint256-)
* [`transfer(address _to, uint256 _value)`](ethertoken.md#EtherToken-transfer-address-uint256-)
* [`transferFrom(address _from, address _to, uint256 _value)`](ethertoken.md#EtherToken-transferFrom-address-address-uint256-)
* [`fallback()`](ethertoken.md#EtherToken-fallback--)

## Events:

* [`Issuance(uint256 _amount)`](ethertoken.md#EtherToken-Issuance-uint256-)
* [`Destruction(uint256 _amount)`](ethertoken.md#EtherToken-Destruction-uint256-)

## Function `constructor(string _name, string _symbol)` <a id="EtherToken-constructor-string-string-"></a>

initializes a new EtherToken instance

### Parameters:

* `_name`: token name
* `_symbol`: token symbol

## Function `deposit()` <a id="EtherToken-deposit--"></a>

deposit ether on behalf of the sender

## Function `withdraw(uint256 _amount)` <a id="EtherToken-withdraw-uint256-"></a>

withdraw ether to the sender's account

### Parameters:

* `_amount`:  amount of ether to withdraw

## Function `depositTo(address _to)` <a id="EtherToken-depositTo-address-"></a>

deposit ether to be entitled for a given account

### Parameters:

* `_to`:      account to be entitled for the ether

## Function `withdrawTo(address _to, uint256 _amount)` <a id="EtherToken-withdrawTo-address-uint256-"></a>

withdraw ether entitled by the sender to a given account

### Parameters:

* `_to`: account to receive the ether
* `_amount`: amount of ether to withdraw

## Function `transfer(address _to, uint256 _value) → bool success` <a id="EtherToken-transfer-address-uint256-"></a>

send coins

throws on any error rather then return a false flag to minimize user errors

### Parameters:

* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Function `transferFrom(address _from, address _to, uint256 _value) → bool success` <a id="EtherToken-transferFrom-address-address-uint256-"></a>

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

### Parameters:

* `_from`: source address
* `_to`: target address
* `_value`: transfer amount

### Return Values:

* true if the transfer was successful, false if it wasn't

## Function `fallback()` <a id="EtherToken-fallback--"></a>

deposit ether in the account

## Event `Issuance(uint256 _amount)` <a id="EtherToken-Issuance-uint256-"></a>

triggered when the total supply is increased

### Parameters:

* `_amount`:  amount that gets added to the supply

## Event `Destruction(uint256 _amount)` <a id="EtherToken-Destruction-uint256-"></a>

triggered when the total supply is decreased

### Parameters:

* `_amount`:  amount that gets removed from the supply

