This contract aggregates the system balances of the liquidity protection mechanism.

# Functions:

- [`systemBalance(contract IERC20Token token)`](#LiquidityProtectionSystemStore-systemBalance-contract-IERC20Token-)

- [`incSystemBalance(contract IERC20Token token, uint256 amount)`](#LiquidityProtectionSystemStore-incSystemBalance-contract-IERC20Token-uint256-)

- [`decSystemBalance(contract IERC20Token token, uint256 amount)`](#LiquidityProtectionSystemStore-decSystemBalance-contract-IERC20Token-uint256-)

- [`networkTokensMinted(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSystemStore-networkTokensMinted-contract-IConverterAnchor-)

- [`incNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)`](#LiquidityProtectionSystemStore-incNetworkTokensMinted-contract-IConverterAnchor-uint256-)

- [`decNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)`](#LiquidityProtectionSystemStore-decNetworkTokensMinted-contract-IConverterAnchor-uint256-)

# Events:

- [`SystemBalanceUpdated(contract IERC20Token token, uint256 prevAmount, uint256 newAmount)`](#LiquidityProtectionSystemStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-)

- [`NetworkTokensMintedUpdated(contract IConverterAnchor poolAnchor, uint256 prevAmount, uint256 newAmount)`](#LiquidityProtectionSystemStore-NetworkTokensMintedUpdated-contract-IConverterAnchor-uint256-uint256-)

## Function `systemBalance(contract IERC20Token token) → uint256` {#LiquidityProtectionSystemStore-systemBalance-contract-IERC20Token-}

returns the system balance for a given token

## Parameters:

- `token`: token address

## Return Values:

- system balance

## Function `incSystemBalance(contract IERC20Token token, uint256 amount)` {#LiquidityProtectionSystemStore-incSystemBalance-contract-IERC20Token-uint256-}

increases the system balance for a given token

can be executed only by an owner

## Parameters:

- `token`:     token address

- `amount`:    token amount

## Function `decSystemBalance(contract IERC20Token token, uint256 amount)` {#LiquidityProtectionSystemStore-decSystemBalance-contract-IERC20Token-uint256-}

decreases the system balance for a given token

can be executed only by an owner

## Parameters:

- `token`:     token address

- `amount`:    token amount

## Function `networkTokensMinted(contract IConverterAnchor poolAnchor) → uint256` {#LiquidityProtectionSystemStore-networkTokensMinted-contract-IConverterAnchor-}

returns the amount of network tokens minted into a specific pool

## Parameters:

- `poolAnchor`:    pool anchor

## Return Values:

- amount of network tokens

## Function `incNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)` {#LiquidityProtectionSystemStore-incNetworkTokensMinted-contract-IConverterAnchor-uint256-}

increases the amount of network tokens minted into a specific pool

can be executed only by an owner

## Parameters:

- `poolAnchor`:    pool anchor

- `amount`:        amount to increase the minted tokens by

## Function `decNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)` {#LiquidityProtectionSystemStore-decNetworkTokensMinted-contract-IConverterAnchor-uint256-}

decreases the amount of network tokens minted into a specific pool

can be executed only by an owner

## Parameters:

- `poolAnchor`:    pool anchor

- `amount`:        amount to decrease the minted tokens by

## Event `SystemBalanceUpdated(contract IERC20Token token, uint256 prevAmount, uint256 newAmount)` {#LiquidityProtectionSystemStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-}

triggered when the system balance for a given token is updated

## Parameters:

- `token`:         token address

- `prevAmount`:    previous amount

- `newAmount`:     new amount

## Event `NetworkTokensMintedUpdated(contract IConverterAnchor poolAnchor, uint256 prevAmount, uint256 newAmount)` {#LiquidityProtectionSystemStore-NetworkTokensMintedUpdated-contract-IConverterAnchor-uint256-uint256-}

triggered when the amount of network tokens minted into a specific pool is updated

## Parameters:

- `poolAnchor`:    pool anchor

- `prevAmount`:    previous amount

- `newAmount`:     new amount
