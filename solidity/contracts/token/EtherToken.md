Ether tokenization contract

'Owned' is specified here for readability reasons

# Functions:

- [`constructor()`](#EtherToken-constructor--)

- [`deposit()`](#EtherToken-deposit--)

- [`withdraw(uint256 _amount)`](#EtherToken-withdraw-uint256-)

- [`withdrawTo(address _to, uint256 _amount)`](#EtherToken-withdrawTo-address-uint256-)

- [`transfer(address _to, uint256 _value)`](#EtherToken-transfer-address-uint256-)

- [`transferFrom(address _from, address _to, uint256 _value)`](#EtherToken-transferFrom-address-address-uint256-)

- [`fallback()`](#EtherToken-fallback--)

# Events:

- [`Issuance(uint256 _amount)`](#EtherToken-Issuance-uint256-)

- [`Destruction(uint256 _amount)`](#EtherToken-Destruction-uint256-)

# Function `constructor()` {#EtherToken-constructor--}

initializes a new EtherToken instance

# Function `deposit()` {#EtherToken-deposit--}

deposit ether in the account

# Function `withdraw(uint256 _amount)` {#EtherToken-withdraw-uint256-}

withdraw ether from the account

## Parameters:

- `_amount`:  amount of ether to withdraw

# Function `withdrawTo(address _to, uint256 _amount)` {#EtherToken-withdrawTo-address-uint256-}

withdraw ether from the account to a target account

## Parameters:

- `_to`:      account to receive the ether

- `_amount`:  amount of ether to withdraw

# Function `transfer(address _to, uint256 _value) → bool success` {#EtherToken-transfer-address-uint256-}

send coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

# Function `transferFrom(address _from, address _to, uint256 _value) → bool success` {#EtherToken-transferFrom-address-address-uint256-}

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_from`:    source address

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

# Function `fallback()` {#EtherToken-fallback--}

deposit ether in the account

# Event `Issuance(uint256 _amount)` {#EtherToken-Issuance-uint256-}

triggered when the total supply is increased

## Parameters:

- `_amount`:  amount that gets added to the supply

# Event `Destruction(uint256 _amount)` {#EtherToken-Destruction-uint256-}

triggered when the total supply is decreased

## Parameters:

- `_amount`:  amount that gets removed from the supply
