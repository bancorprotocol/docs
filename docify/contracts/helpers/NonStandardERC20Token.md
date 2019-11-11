# Functions:

- [`constructor(string _name, string _symbol, uint8 _decimals)`](#NonStandardERC20Token-constructor-string-string-uint8-)

- [`transfer(address _to, uint256 _value)`](#NonStandardERC20Token-transfer-address-uint256-)

- [`transferFrom(address _from, address _to, uint256 _value)`](#NonStandardERC20Token-transferFrom-address-address-uint256-)

- [`approve(address _spender, uint256 _value)`](#NonStandardERC20Token-approve-address-uint256-)

# Events:

- [`Transfer(address _from, address _to, uint256 _value)`](#NonStandardERC20Token-Transfer-address-address-uint256-)

- [`Approval(address _owner, address _spender, uint256 _value)`](#NonStandardERC20Token-Approval-address-address-uint256-)

# Function `constructor(string _name, string _symbol, uint8 _decimals)` {#NonStandardERC20Token-constructor-string-string-uint8-}

initializes a new NonStandardERC20Token instance

## Parameters:

- `_name`:        token name

- `_symbol`:      token symbol

- `_decimals`:    decimal points, for display purposes

# Function `transfer(address _to, uint256 _value)` {#NonStandardERC20Token-transfer-address-uint256-}

send coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

# Function `transferFrom(address _from, address _to, uint256 _value)` {#NonStandardERC20Token-transferFrom-address-address-uint256-}

an account/contract attempts to get the coins

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_from`:    source address

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

# Function `approve(address _spender, uint256 _value)` {#NonStandardERC20Token-approve-address-uint256-}

allow another account/contract to spend some tokens on your behalf

throws on any error rather then return a false flag to minimize user errors

also, to minimize the risk of the approve/transferFrom attack vector

(see https://docs.google.com/document/d/1YLPtQxZu1UAvO9cZ1O2RPXBbT0mooh4DYKjA_jp-RLM/), approve has to be called twice

in 2 separate transactions - once to change the allowance to 0 and secondly to change it to the new allowance value

## Parameters:

- `_spender`: approved address

- `_value`:   allowance amount

## Return Values:

- true if the approval was successful, false if it wasn't

# Event `Transfer(address _from, address _to, uint256 _value)` {#NonStandardERC20Token-Transfer-address-address-uint256-}

No description

# Event `Approval(address _owner, address _spender, uint256 _value)` {#NonStandardERC20Token-Approval-address-address-uint256-}

No description
