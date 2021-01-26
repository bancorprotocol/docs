Ether tokenization contract

# Functions:

- [`constructor(string _name, string _symbol)`](#EtherToken-constructor-string-string-)

- [`deposit()`](#EtherToken-deposit--)

- [`withdraw(uint256 _amount)`](#EtherToken-withdraw-uint256-)

- [`depositTo(address _to)`](#EtherToken-depositTo-address-)

- [`withdrawTo(address payable _to, uint256 _amount)`](#EtherToken-withdrawTo-address-payable-uint256-)

- [`transfer(address _to, uint256 _value)`](#EtherToken-transfer-address-uint256-)

- [`transferFrom(address _from, address _to, uint256 _value)`](#EtherToken-transferFrom-address-address-uint256-)

- [`receive()`](#EtherToken-receive--)

# Events:

- [`Issuance(uint256 _amount)`](#EtherToken-Issuance-uint256-)

- [`Destruction(uint256 _amount)`](#EtherToken-Destruction-uint256-)

## Function `constructor(string _name, string _symbol)` {#EtherToken-constructor-string-string-}

initializes a new EtherToken instance

## Parameters:

- `_name`:        token name

- `_symbol`:      token symbol

## Function `deposit()` {#EtherToken-deposit--}

deposit ether on behalf of the sender

## Function `withdraw(uint256 _amount)` {#EtherToken-withdraw-uint256-}

withdraw ether to the sender's account

## Parameters:

- `_amount`:  amount of ether to withdraw

## Function `depositTo(address _to)` {#EtherToken-depositTo-address-}

deposit ether to be entitled for a given account

## Parameters:

- `_to`:      account to be entitled for the ether

## Function `withdrawTo(address payable _to, uint256 _amount)` {#EtherToken-withdrawTo-address-payable-uint256-}

withdraw ether entitled by the sender to a given account

## Parameters:

- `_to`:      account to receive the ether

- `_amount`:  amount of ether to withdraw

## Function `transfer(address _to, uint256 _value) → bool` {#EtherToken-transfer-address-uint256-}

send coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

## Function `transferFrom(address _from, address _to, uint256 _value) → bool` {#EtherToken-transferFrom-address-address-uint256-}

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_from`:    source address

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

## Function `receive()` {#EtherToken-receive--}

deposit ether in the account

## Event `Issuance(uint256 _amount)` {#EtherToken-Issuance-uint256-}

triggered when the total supply is increased

## Parameters:

- `_amount`:  amount that gets added to the supply

## Event `Destruction(uint256 _amount)` {#EtherToken-Destruction-uint256-}

triggered when the total supply is decreased

## Parameters:

- `_amount`:  amount that gets removed from the supply
