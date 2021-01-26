ERC20 Standard Token implementation

# Functions:

- [`constructor(string _name, string _symbol, uint8 _decimals, uint256 _totalSupply)`](#ERC20Token-constructor-string-string-uint8-uint256-)

- [`transfer(address _to, uint256 _value)`](#ERC20Token-transfer-address-uint256-)

- [`transferFrom(address _from, address _to, uint256 _value)`](#ERC20Token-transferFrom-address-address-uint256-)

- [`approve(address _spender, uint256 _value)`](#ERC20Token-approve-address-uint256-)

# Events:

- [`Transfer(address _from, address _to, uint256 _value)`](#ERC20Token-Transfer-address-address-uint256-)

- [`Approval(address _owner, address _spender, uint256 _value)`](#ERC20Token-Approval-address-address-uint256-)

## Function `constructor(string _name, string _symbol, uint8 _decimals, uint256 _totalSupply)` {#ERC20Token-constructor-string-string-uint8-uint256-}

initializes a new ERC20Token instance

## Parameters:

- `_name`:        token name

- `_symbol`:      token symbol

- `_decimals`:    decimal points, for display purposes

- `_totalSupply`: total supply of token units

## Function `transfer(address _to, uint256 _value) → bool` {#ERC20Token-transfer-address-uint256-}

transfers tokens to a given address

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

## Function `transferFrom(address _from, address _to, uint256 _value) → bool` {#ERC20Token-transferFrom-address-address-uint256-}

transfers tokens to a given address on behalf of another address

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_from`:    source address

- `_to`:      target address

- `_value`:   transfer amount

## Return Values:

- true if the transfer was successful, false if it wasn't

## Function `approve(address _spender, uint256 _value) → bool` {#ERC20Token-approve-address-uint256-}

allows another account/contract to transfers tokens on behalf of the caller

throws on any error rather then return a false flag to minimize user errors

## Parameters:

- `_spender`: approved address

- `_value`:   allowance amount

## Return Values:

- true if the approval was successful, false if it wasn't

## Event `Transfer(address _from, address _to, uint256 _value)` {#ERC20Token-Transfer-address-address-uint256-}

triggered when tokens are transferred between wallets

## Parameters:

- `_from`:    source address

- `_to`:      target address

- `_value`:   transfer amount

## Event `Approval(address _owner, address _spender, uint256 _value)` {#ERC20Token-Approval-address-address-uint256-}

triggered when a wallet allows another wallet to transfer tokens from on its behalf

## Parameters:

- `_owner`:   wallet that approves the allowance

- `_spender`: wallet that receives the allowance

- `_value`:   allowance amount
