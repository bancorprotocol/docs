This contract represents a token with dynamic supply.

The owner of the token can mint/burn tokens to/from any account.

# Functions:

- [`constructor(string _name, string _symbol, uint8 _decimals)`](#DSToken-constructor-string-string-uint8-)

- [`decimals()`](#DSToken-decimals--)

- [`issue(address _to, uint256 _amount)`](#DSToken-issue-address-uint256-)

- [`destroy(address _from, uint256 _amount)`](#DSToken-destroy-address-uint256-)

# Events:

- [`Issuance(uint256 _amount)`](#DSToken-Issuance-uint256-)

- [`Destruction(uint256 _amount)`](#DSToken-Destruction-uint256-)

## Function `constructor(string _name, string _symbol, uint8 _decimals)` {#DSToken-constructor-string-string-uint8-}

initializes a new DSToken instance

## Parameters:

- `_name`:       token name

- `_symbol`:     token short symbol, minimum 1 character

- `_decimals`:   for display purposes only

## Function `decimals() → uint8` {#DSToken-decimals--}

No description

## Function `issue(address _to, uint256 _amount)` {#DSToken-issue-address-uint256-}

increases the token supply and sends the new tokens to the given account

can only be called by the contract owner

## Parameters:

- `_to`:      account to receive the new amount

- `_amount`:  amount to increase the supply by

## Function `destroy(address _from, uint256 _amount)` {#DSToken-destroy-address-uint256-}

removes tokens from the given account and decreases the token supply

can only be called by the contract owner

## Parameters:

- `_from`:    account to remove the amount from

- `_amount`:  amount to decrease the supply by

## Event `Issuance(uint256 _amount)` {#DSToken-Issuance-uint256-}

triggered when the total supply is increased

## Parameters:

- `_amount`:  amount that gets added to the supply

## Event `Destruction(uint256 _amount)` {#DSToken-Destruction-uint256-}

triggered when the total supply is decreased

## Parameters:

- `_amount`:  amount that gets removed from the supply
