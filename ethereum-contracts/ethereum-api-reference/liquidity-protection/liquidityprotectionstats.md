# LiquidityProtectionStats

This contract aggregates the statistics of the liquidity protection mechanism.

## Functions:

* [`increaseTotalAmounts(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 poolAmount, uint256 reserveAmount)`](liquidityprotectionstats.md#LiquidityProtectionStats-increaseTotalAmounts-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-)
* [`decreaseTotalAmounts(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 poolAmount, uint256 reserveAmount)`](liquidityprotectionstats.md#LiquidityProtectionStats-decreaseTotalAmounts-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-)
* [`addProviderPool(address provider, contract IDSToken poolToken)`](liquidityprotectionstats.md#LiquidityProtectionStats-addProviderPool-address-contract-IDSToken-)
* [`removeProviderPool(address provider, contract IDSToken poolToken)`](liquidityprotectionstats.md#LiquidityProtectionStats-removeProviderPool-address-contract-IDSToken-)
* [`totalPoolAmount(contract IDSToken poolToken)`](liquidityprotectionstats.md#LiquidityProtectionStats-totalPoolAmount-contract-IDSToken-)
* [`totalReserveAmount(contract IDSToken poolToken, contract IReserveToken reserveToken)`](liquidityprotectionstats.md#LiquidityProtectionStats-totalReserveAmount-contract-IDSToken-contract-IReserveToken-)
* [`totalProviderAmount(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken)`](liquidityprotectionstats.md#LiquidityProtectionStats-totalProviderAmount-address-contract-IDSToken-contract-IReserveToken-)
* [`providerPools(address provider)`](liquidityprotectionstats.md#LiquidityProtectionStats-providerPools-address-)
* [`seedPoolAmounts(contract IDSToken[] poolTokens, uint256[] poolAmounts)`](liquidityprotectionstats.md#LiquidityProtectionStats-seedPoolAmounts-contract-IDSToken---uint256---)
* [`seedReserveAmounts(contract IDSToken[] poolTokens, contract IReserveToken[] reserveTokens, uint256[] reserveAmounts)`](liquidityprotectionstats.md#LiquidityProtectionStats-seedReserveAmounts-contract-IDSToken---contract-IReserveToken---uint256---)
* [`seedProviderAmounts(address[] providers, contract IDSToken[] poolTokens, contract IReserveToken[] reserveTokens, uint256[] reserveAmounts)`](liquidityprotectionstats.md#LiquidityProtectionStats-seedProviderAmounts-address---contract-IDSToken---contract-IReserveToken---uint256---)
* [`seedProviderPools(address[] providers, contract IDSToken[] poolTokens)`](liquidityprotectionstats.md#LiquidityProtectionStats-seedProviderPools-address---contract-IDSToken---)

### Function `increaseTotalAmounts(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 poolAmount, uint256 reserveAmount)` <a id="LiquidityProtectionStats-increaseTotalAmounts-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-"></a>

increases the total amounts

can be executed only by an owner

### Parameters:

* `provider`: liquidity provider address
* `poolToken`: pool token address
* `reserveToken`: reserve token address
* `poolAmount`: pool token amount
* `reserveAmount`: reserve token amount

### Function `decreaseTotalAmounts(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 poolAmount, uint256 reserveAmount)` <a id="LiquidityProtectionStats-decreaseTotalAmounts-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-"></a>

decreases the total amounts

can be executed only by an owner

### Parameters:

* `provider`: liquidity provider address
* `poolToken`: pool token address
* `reserveToken`: reserve token address
* `poolAmount`: pool token amount
* `reserveAmount`: reserve token amount

### Function `addProviderPool(address provider, contract IDSToken poolToken) → bool` <a id="LiquidityProtectionStats-addProviderPool-address-contract-IDSToken-"></a>

adds a pool to the list of pools of a liquidity provider

can be executed only by an owner

### Parameters:

* `provider`: liquidity provider address
* `poolToken`: pool token address

### Function `removeProviderPool(address provider, contract IDSToken poolToken) → bool` <a id="LiquidityProtectionStats-removeProviderPool-address-contract-IDSToken-"></a>

removes a pool from the list of pools of a liquidity provider

can be executed only by an owner

### Parameters:

* `provider`: liquidity provider address
* `poolToken`: pool token address

### Function `totalPoolAmount(contract IDSToken poolToken) → uint256` <a id="LiquidityProtectionStats-totalPoolAmount-contract-IDSToken-"></a>

returns the total amount of protected pool tokens

### Parameters:

* `poolToken`: pool token address

### Return Values:

* total amount of protected pool tokens

### Function `totalReserveAmount(contract IDSToken poolToken, contract IReserveToken reserveToken) → uint256` <a id="LiquidityProtectionStats-totalReserveAmount-contract-IDSToken-contract-IReserveToken-"></a>

returns the total amount of protected reserve tokens

### Parameters:

* `poolToken`: pool token address
* `reserveToken`: reserve token address

### Return Values:

* total amount of protected reserve tokens

### Function `totalProviderAmount(address provider, contract IDSToken poolToken, contract IReserveToken reserveToken) → uint256` <a id="LiquidityProtectionStats-totalProviderAmount-address-contract-IDSToken-contract-IReserveToken-"></a>

returns the total amount of a liquidity provider's protected reserve tokens

### Parameters:

* `provider`: liquidity provider address
* `poolToken`: pool token address
* `reserveToken`: reserve token address

### Return Values:

* total amount of the liquidity provider's protected reserve tokens

### Function `providerPools(address provider) → contract IDSToken[]` <a id="LiquidityProtectionStats-providerPools-address-"></a>

returns the list of pools of a liquidity provider

### Parameters:

* `provider`:  liquidity provider address

### Return Values:

* pool tokens

### Function `seedPoolAmounts(contract IDSToken[] poolTokens, uint256[] poolAmounts)` <a id="LiquidityProtectionStats-seedPoolAmounts-contract-IDSToken---uint256---"></a>

seeds the total amount of protected pool tokens

can be executed only by a seeder

### Parameters:

* `poolTokens`: pool token addresses
* `poolAmounts`: pool token amounts

### Function `seedReserveAmounts(contract IDSToken[] poolTokens, contract IReserveToken[] reserveTokens, uint256[] reserveAmounts)` <a id="LiquidityProtectionStats-seedReserveAmounts-contract-IDSToken---contract-IReserveToken---uint256---"></a>

seeds the total amount of protected reserve tokens

can be executed only by a seeder

### Parameters:

* `poolTokens`: pool token addresses
* `reserveTokens`: reserve token addresses
* `reserveAmounts`: reserve token amounts

### Function `seedProviderAmounts(address[] providers, contract IDSToken[] poolTokens, contract IReserveToken[] reserveTokens, uint256[] reserveAmounts)` <a id="LiquidityProtectionStats-seedProviderAmounts-address---contract-IDSToken---contract-IReserveToken---uint256---"></a>

seeds the total amount of protected reserve tokens per liquidity provider

can be executed only by a seeder

### Parameters:

* `providers`: liquidity provider addresses
* `poolTokens`: pool token addresses
* `reserveTokens`: reserve token addresses
* `reserveAmounts`: reserve token amounts

### Function `seedProviderPools(address[] providers, contract IDSToken[] poolTokens)` <a id="LiquidityProtectionStats-seedProviderPools-address---contract-IDSToken---"></a>

seeds the list of pools per liquidity provider

can be executed only by a seeder

### Parameters:

* `providers`: liquidity provider addresses
* `poolTokens`: pool token addresses

