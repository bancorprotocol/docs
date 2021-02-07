# LiquidityProtectionSystemStore

This contract aggregates the system balances of the liquidity protection mechanism.

## Functions:

* [`systemBalance(contract IERC20Token token)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-systemBalance-contract-IERC20Token-)
* [`incSystemBalance(contract IERC20Token token, uint256 amount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-incSystemBalance-contract-IERC20Token-uint256-)
* [`decSystemBalance(contract IERC20Token token, uint256 amount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-decSystemBalance-contract-IERC20Token-uint256-)
* [`networkTokensMinted(contract IConverterAnchor poolAnchor)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-networkTokensMinted-contract-IConverterAnchor-)
* [`incNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-incNetworkTokensMinted-contract-IConverterAnchor-uint256-)
* [`decNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-decNetworkTokensMinted-contract-IConverterAnchor-uint256-)

## Events:

* [`SystemBalanceUpdated(contract IERC20Token token, uint256 prevAmount, uint256 newAmount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-)
* [`NetworkTokensMintedUpdated(contract IConverterAnchor poolAnchor, uint256 prevAmount, uint256 newAmount)`](liquidityprotectionsystemstore.md#LiquidityProtectionSystemStore-NetworkTokensMintedUpdated-contract-IConverterAnchor-uint256-uint256-)

### Function `systemBalance(contract IERC20Token token) → uint256` <a id="LiquidityProtectionSystemStore-systemBalance-contract-IERC20Token-"></a>

returns the system balance for a given token

### Parameters:

* `token`: token address

### Return Values:

* system balance

### Function `incSystemBalance(contract IERC20Token token, uint256 amount)` <a id="LiquidityProtectionSystemStore-incSystemBalance-contract-IERC20Token-uint256-"></a>

increases the system balance for a given token

can be executed only by an owner

### Parameters:

* `token`: token address
* `amount`: token amount

### Function `decSystemBalance(contract IERC20Token token, uint256 amount)` <a id="LiquidityProtectionSystemStore-decSystemBalance-contract-IERC20Token-uint256-"></a>

decreases the system balance for a given token

can be executed only by an owner

### Parameters:

* `token`: token address
* `amount`: token amount

### Function `networkTokensMinted(contract IConverterAnchor poolAnchor) → uint256` <a id="LiquidityProtectionSystemStore-networkTokensMinted-contract-IConverterAnchor-"></a>

returns the amount of network tokens minted into a specific pool

### Parameters:

* `poolAnchor`:    pool anchor

### Return Values:

* amount of network tokens

### Function `incNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)` <a id="LiquidityProtectionSystemStore-incNetworkTokensMinted-contract-IConverterAnchor-uint256-"></a>

increases the amount of network tokens minted into a specific pool

can be executed only by an owner

### Parameters:

* `poolAnchor`: pool anchor
* `amount`: amount to increase the minted tokens by

### Function `decNetworkTokensMinted(contract IConverterAnchor poolAnchor, uint256 amount)` <a id="LiquidityProtectionSystemStore-decNetworkTokensMinted-contract-IConverterAnchor-uint256-"></a>

decreases the amount of network tokens minted into a specific pool

can be executed only by an owner

### Parameters:

* `poolAnchor`: pool anchor
* `amount`: amount to decrease the minted tokens by

### Event `SystemBalanceUpdated(contract IERC20Token token, uint256 prevAmount, uint256 newAmount)` <a id="LiquidityProtectionSystemStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-"></a>

triggered when the system balance for a given token is updated

### Parameters:

* `token`: token address
* `prevAmount`: previous amount
* `newAmount`: new amount

### Event `NetworkTokensMintedUpdated(contract IConverterAnchor poolAnchor, uint256 prevAmount, uint256 newAmount)` <a id="LiquidityProtectionSystemStore-NetworkTokensMintedUpdated-contract-IConverterAnchor-uint256-uint256-"></a>

triggered when the amount of network tokens minted into a specific pool is updated

### Parameters:

* `poolAnchor`: pool anchor
* `prevAmount`: previous amount
* `newAmount`: new amount

