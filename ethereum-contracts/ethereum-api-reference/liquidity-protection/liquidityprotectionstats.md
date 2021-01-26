This contract aggregates the statistics of the liquidity protection mechanism.

# Functions:

- [`increaseTotalAmounts(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken, uint256 poolAmount, uint256 reserveAmount)`](#LiquidityProtectionStats-increaseTotalAmounts-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)

- [`decreaseTotalAmounts(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken, uint256 poolAmount, uint256 reserveAmount)`](#LiquidityProtectionStats-decreaseTotalAmounts-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)

- [`addProviderPool(address provider, contract IDSToken poolToken)`](#LiquidityProtectionStats-addProviderPool-address-contract-IDSToken-)

- [`removeProviderPool(address provider, contract IDSToken poolToken)`](#LiquidityProtectionStats-removeProviderPool-address-contract-IDSToken-)

- [`totalPoolAmount(contract IDSToken poolToken)`](#LiquidityProtectionStats-totalPoolAmount-contract-IDSToken-)

- [`totalReserveAmount(contract IDSToken poolToken, contract IERC20Token reserveToken)`](#LiquidityProtectionStats-totalReserveAmount-contract-IDSToken-contract-IERC20Token-)

- [`totalProviderAmount(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken)`](#LiquidityProtectionStats-totalProviderAmount-address-contract-IDSToken-contract-IERC20Token-)

- [`providerPools(address provider)`](#LiquidityProtectionStats-providerPools-address-)

- [`seedPoolAmounts(contract IDSToken[] poolTokens, uint256[] poolAmounts)`](#LiquidityProtectionStats-seedPoolAmounts-contract-IDSToken---uint256---)

- [`seedReserveAmounts(contract IDSToken[] poolTokens, contract IERC20Token[] reserveTokens, uint256[] reserveAmounts)`](#LiquidityProtectionStats-seedReserveAmounts-contract-IDSToken---contract-IERC20Token---uint256---)

- [`seedProviderAmounts(address[] providers, contract IDSToken[] poolTokens, contract IERC20Token[] reserveTokens, uint256[] reserveAmounts)`](#LiquidityProtectionStats-seedProviderAmounts-address---contract-IDSToken---contract-IERC20Token---uint256---)

- [`seedProviderPools(address[] providers, contract IDSToken[] poolTokens)`](#LiquidityProtectionStats-seedProviderPools-address---contract-IDSToken---)

# Function `increaseTotalAmounts(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken, uint256 poolAmount, uint256 reserveAmount)` {#LiquidityProtectionStats-increaseTotalAmounts-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-}

increases the total amounts

can only be executed only by an owner

## Parameters:

- `provider`:          liquidity provider address

- `poolToken`:         pool token address

- `reserveToken`:      reserve token address

- `poolAmount`:        pool token amount

- `reserveAmount`:     reserve token amount

# Function `decreaseTotalAmounts(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken, uint256 poolAmount, uint256 reserveAmount)` {#LiquidityProtectionStats-decreaseTotalAmounts-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-}

decreases the total amounts

can only be executed only by an owner

## Parameters:

- `provider`:          liquidity provider address

- `poolToken`:         pool token address

- `reserveToken`:      reserve token address

- `poolAmount`:        pool token amount

- `reserveAmount`:     reserve token amount

# Function `addProviderPool(address provider, contract IDSToken poolToken) → bool` {#LiquidityProtectionStats-addProviderPool-address-contract-IDSToken-}

adds a pool to the list of pools of a liquidity provider

can only be executed only by an owner

## Parameters:

- `provider`:  liquidity provider address

- `poolToken`: pool token address

# Function `removeProviderPool(address provider, contract IDSToken poolToken) → bool` {#LiquidityProtectionStats-removeProviderPool-address-contract-IDSToken-}

removes a pool from the list of pools of a liquidity provider

can only be executed only by an owner

## Parameters:

- `provider`:  liquidity provider address

- `poolToken`: pool token address

# Function `totalPoolAmount(contract IDSToken poolToken) → uint256` {#LiquidityProtectionStats-totalPoolAmount-contract-IDSToken-}

returns the total amount of protected pool tokens

## Parameters:

- `poolToken`: pool token address

## Return Values:

- total amount of protected pool tokens

# Function `totalReserveAmount(contract IDSToken poolToken, contract IERC20Token reserveToken) → uint256` {#LiquidityProtectionStats-totalReserveAmount-contract-IDSToken-contract-IERC20Token-}

returns the total amount of protected reserve tokens

## Parameters:

- `poolToken`:     pool token address

- `reserveToken`:  reserve token address

## Return Values:

- total amount of protected reserve tokens

# Function `totalProviderAmount(address provider, contract IDSToken poolToken, contract IERC20Token reserveToken) → uint256` {#LiquidityProtectionStats-totalProviderAmount-address-contract-IDSToken-contract-IERC20Token-}

returns the total amount of a liquidity provider's protected reserve tokens

## Parameters:

- `provider`:      liquidity provider address

- `poolToken`:     pool token address

- `reserveToken`:  reserve token address

## Return Values:

- total amount of the liquidity provider's protected reserve tokens

# Function `providerPools(address provider) → contract IDSToken[]` {#LiquidityProtectionStats-providerPools-address-}

returns the list of pools of a liquidity provider

## Parameters:

- `provider`:  liquidity provider address

## Return Values:

- pool tokens

# Function `seedPoolAmounts(contract IDSToken[] poolTokens, uint256[] poolAmounts)` {#LiquidityProtectionStats-seedPoolAmounts-contract-IDSToken---uint256---}

seeds the total amount of protected pool tokens

can only be executed only by a seeder

## Parameters:

- `poolTokens`:    pool token addresses

- `poolAmounts`:   pool token amounts

# Function `seedReserveAmounts(contract IDSToken[] poolTokens, contract IERC20Token[] reserveTokens, uint256[] reserveAmounts)` {#LiquidityProtectionStats-seedReserveAmounts-contract-IDSToken---contract-IERC20Token---uint256---}

seeds the total amount of protected reserve tokens

can only be executed only by a seeder

## Parameters:

- `poolTokens`:        pool token addresses

- `reserveTokens`:     reserve token addresses

- `reserveAmounts`:    reserve token amounts

# Function `seedProviderAmounts(address[] providers, contract IDSToken[] poolTokens, contract IERC20Token[] reserveTokens, uint256[] reserveAmounts)` {#LiquidityProtectionStats-seedProviderAmounts-address---contract-IDSToken---contract-IERC20Token---uint256---}

seeds the total amount of protected reserve tokens per liquidity provider

can only be executed only by a seeder

## Parameters:

- `providers`:         liquidity provider addresses

- `poolTokens`:        pool token addresses

- `reserveTokens`:     reserve token addresses

- `reserveAmounts`:    reserve token amounts

# Function `seedProviderPools(address[] providers, contract IDSToken[] poolTokens)` {#LiquidityProtectionStats-seedProviderPools-address---contract-IDSToken---}

seeds the list of pools per liquidity provider

can only be executed only by a seeder

## Parameters:

- `providers`:     liquidity provider addresses

- `poolTokens`:    pool token addresses
