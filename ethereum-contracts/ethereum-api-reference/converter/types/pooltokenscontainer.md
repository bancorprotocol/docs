The PoolTokensContainer contract serves as a container for multiple pool tokens.

It is used by specific liquidity pool types that require more than a single pool token,

while still maintaining the single converter / anchor relationship.

It maintains and provides a list of the underlying pool tokens.

# Functions:

- [`constructor(string _name, string _symbol, uint8 _decimals)`](#PoolTokensContainer-constructor-string-string-uint8-)

- [`poolTokens()`](#PoolTokensContainer-poolTokens--)

- [`createToken()`](#PoolTokensContainer-createToken--)

- [`mint(contract IDSToken _token, address _to, uint256 _amount)`](#PoolTokensContainer-mint-contract-IDSToken-address-uint256-)

- [`burn(contract IDSToken _token, address _from, uint256 _amount)`](#PoolTokensContainer-burn-contract-IDSToken-address-uint256-)

# Function `constructor(string _name, string _symbol, uint8 _decimals)` {#PoolTokensContainer-constructor-string-string-uint8-}

initializes a new PoolTokensContainer instance

## Parameters:

- `_name`:       pool name, also used as a prefix for the underlying pool token names

- `_symbol`:     pool symbol, also used as a prefix for the underlying pool token symbols

- `_decimals`:   used for the underlying pool token decimals

# Function `poolTokens() → contract IDSToken[]` {#PoolTokensContainer-poolTokens--}

returns the list of pool tokens

## Return Values:

- list of pool tokens

# Function `createToken() → contract IDSToken` {#PoolTokensContainer-createToken--}

creates a new pool token and adds it to the list

## Return Values:

- new pool token address

# Function `mint(contract IDSToken _token, address _to, uint256 _amount)` {#PoolTokensContainer-mint-contract-IDSToken-address-uint256-}

increases the pool token supply and sends the new tokens to the given account

can only be called by the contract owner

## Parameters:

- `_token`:   pool token address

- `_to`:      account to receive the newly minted tokens

- `_amount`:  amount to mint

# Function `burn(contract IDSToken _token, address _from, uint256 _amount)` {#PoolTokensContainer-burn-contract-IDSToken-address-uint256-}

removes tokens from the given account and decreases the pool token supply

can only be called by the contract owner

## Parameters:

- `_token`:   pool token address

- `_from`:    account to remove the tokens from

- `_amount`:  amount to burn
