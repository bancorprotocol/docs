# LiquidityProtection

This contract implements the liquidity protection mechanism.

## Functions:

* [`constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)`](liquidityprotection.md#LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-)
* [`store()`](liquidityprotection.md#LiquidityProtection-store--)
* [`stats()`](liquidityprotection.md#LiquidityProtection-stats--)
* [`settings()`](liquidityprotection.md#LiquidityProtection-settings--)
* [`systemStore()`](liquidityprotection.md#LiquidityProtection-systemStore--)
* [`wallet()`](liquidityprotection.md#LiquidityProtection-wallet--)
* [`receive()`](liquidityprotection.md#LiquidityProtection-receive--)
* [`transferStoreOwnership(address newOwner)`](liquidityprotection.md#LiquidityProtection-transferStoreOwnership-address-)
* [`acceptStoreOwnership()`](liquidityprotection.md#LiquidityProtection-acceptStoreOwnership--)
* [`transferWalletOwnership(address newOwner)`](liquidityprotection.md#LiquidityProtection-transferWalletOwnership-address-)
* [`acceptWalletOwnership()`](liquidityprotection.md#LiquidityProtection-acceptWalletOwnership--)
* [`addLiquidityFor(address owner, contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount)`](liquidityprotection.md#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IReserveToken-uint256-)
* [`addLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount)`](liquidityprotection.md#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IReserveToken-uint256-)
* [`poolAvailableSpace(contract IConverterAnchor poolAnchor)`](liquidityprotection.md#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-)
* [`removeLiquidityReturn(uint256 id, uint32 portion, uint256 removeTimestamp)`](liquidityprotection.md#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-)
* [`removeLiquidity(uint256 id, uint32 portion)`](liquidityprotection.md#LiquidityProtection-removeLiquidity-uint256-uint32-)
* [`transferPosition(uint256 id, address newProvider)`](liquidityprotection.md#LiquidityProtection-transferPosition-uint256-address-)
* [`transferPositionAndCall(uint256 id, address newProvider, address target, bytes data)`](liquidityprotection.md#LiquidityProtection-transferPositionAndCall-uint256-address-address-bytes-)
* [`claimBalance(uint256 startIndex, uint256 endIndex)`](liquidityprotection.md#LiquidityProtection-claimBalance-uint256-uint256-)
* [`poolROI(contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 reserveAmount, uint256 poolRateN, uint256 poolRateD, uint256 reserveRateN, uint256 reserveRateD)`](liquidityprotection.md#LiquidityProtection-poolROI-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-)

### Function `constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)` <a id="LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-"></a>

initializes a new LiquidityProtection contract

### Parameters:

* `settings`: liquidity protection settings
* `store`: liquidity protection store
* `stats`: liquidity protection stats
* `systemStore`: liquidity protection system store
* `wallet`: liquidity protection wallet
* `networkTokenGovernance`: network token governance
* `govTokenGovernance`: governance token governance
* `lastRemoveCheckpointStore`: last liquidity removal/unprotection checkpoints store

### Function `store() → contract ILiquidityProtectionStore` <a id="LiquidityProtection-store--"></a>

returns the LP store

### Return Values:

* the LP store

### Function `stats() → contract ILiquidityProtectionStats` <a id="LiquidityProtection-stats--"></a>

returns the LP stats

### Return Values:

* the LP stats

### Function `settings() → contract ILiquidityProtectionSettings` <a id="LiquidityProtection-settings--"></a>

returns the LP settings

### Return Values:

* the LP settings

### Function `systemStore() → contract ILiquidityProtectionSystemStore` <a id="LiquidityProtection-systemStore--"></a>

returns the LP system store

### Return Values:

* the LP system store

### Function `wallet() → contract ITokenHolder` <a id="LiquidityProtection-wallet--"></a>

returns the LP wallet

### Return Values:

* the LP wallet

### Function `receive()` <a id="LiquidityProtection-receive--"></a>

accept ETH

### Function `transferStoreOwnership(address newOwner)` <a id="LiquidityProtection-transferStoreOwnership-address-"></a>

transfers the ownership of the store

can only be called by the contract owner

### Parameters:

* `newOwner`: the new owner of the store

### Function `acceptStoreOwnership()` <a id="LiquidityProtection-acceptStoreOwnership--"></a>

accepts the ownership of the store

can only be called by the contract owner

### Function `transferWalletOwnership(address newOwner)` <a id="LiquidityProtection-transferWalletOwnership-address-"></a>

transfers the ownership of the wallet

can only be called by the contract owner

### Parameters:

* `newOwner`: the new owner of the wallet

### Function `acceptWalletOwnership()` <a id="LiquidityProtection-acceptWalletOwnership--"></a>

accepts the ownership of the wallet

can only be called by the contract owner

### Function `addLiquidityFor(address owner, contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount) → uint256` <a id="LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IReserveToken-uint256-"></a>

adds protected liquidity to a pool for a specific recipient

also mints new governance tokens for the caller if the caller adds network tokens

### Parameters:

* `owner`: position owner
* `poolAnchor`: anchor of the pool
* `reserveToken`: reserve token to add to the pool
* `amount`: amount of tokens to add to the pool

### Return Values:

* new position id

### Function `addLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount) → uint256` <a id="LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IReserveToken-uint256-"></a>

adds protected liquidity to a pool

also mints new governance tokens for the caller if the caller adds network tokens

### Parameters:

* `poolAnchor`: anchor of the pool
* `reserveToken`: reserve token to add to the pool
* `amount`: amount of tokens to add to the pool

### Return Values:

* new position id

### Function `poolAvailableSpace(contract IConverterAnchor poolAnchor) → uint256, uint256` <a id="LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-"></a>

returns the single-side staking limits of a given pool

### Parameters:

* `poolAnchor`: anchor of the pool

### Return Values:

* maximum amount of base tokens that can be single-side staked in the pool
* maximum amount of network tokens that can be single-side staked in the pool

### Function `removeLiquidityReturn(uint256 id, uint32 portion, uint256 removeTimestamp) → uint256, uint256, uint256` <a id="LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-"></a>

returns the expected/actual amounts the provider will receive for removing liquidity

it's also possible to provide the remove liquidity time to get an estimation

for the return at that given point

### Parameters:

* `id`: position id
* `portion`: portion of liquidity to remove, in PPM
* `removeTimestamp`: time at which the liquidity is removed

### Return Values:

* expected return amount in the reserve token
* actual return amount in the reserve token
* compensation in the network token

### Function `removeLiquidity(uint256 id, uint32 portion)` <a id="LiquidityProtection-removeLiquidity-uint256-uint32-"></a>

removes protected liquidity from a pool

also burns governance tokens from the caller if the caller removes network tokens

### Parameters:

* `id`: position id
* `portion`: portion of liquidity to remove, in PPM

### Function `transferPosition(uint256 id, address newProvider) → uint256` <a id="LiquidityProtection-transferPosition-uint256-address-"></a>

transfers a position to a new provider

### Parameters:

* `id`: position id
* `newProvider`: the new provider

### Return Values:

* new position id

### Function `transferPositionAndCall(uint256 id, address newProvider, address target, bytes data) → uint256` <a id="LiquidityProtection-transferPositionAndCall-uint256-address-address-bytes-"></a>

transfers a position to a new provider and optionally notifies another contract

### Parameters:

* `id`: position id
* `newProvider`: the new provider
* `target`: the contract to notify
* `data`: the data to call the contract with

### Return Values:

* new position id

### Function `claimBalance(uint256 startIndex, uint256 endIndex)` <a id="LiquidityProtection-claimBalance-uint256-uint256-"></a>

allows the caller to claim network token balance that is no longer locked

note that the function can revert if the range is too large

### Parameters:

* `startIndex`: start index in the caller's list of locked balances
* `endIndex`: end index in the caller's list of locked balances \(exclusive\)

### Function `poolROI(contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 reserveAmount, uint256 poolRateN, uint256 poolRateD, uint256 reserveRateN, uint256 reserveRateD) → uint256` <a id="LiquidityProtection-poolROI-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-"></a>

returns the ROI for removing liquidity in the current state after providing liquidity with the given args

the function assumes full protection is in effect

return value is in PPM and can be larger than PPM\_RESOLUTION for positive ROI, 1M = 0% ROI

### Parameters:

* `poolToken`: pool token
* `reserveToken`: reserve token
* `reserveAmount`: reserve token amount that was added
* `poolRateN`: rate of 1 pool token in reserve token units when the liquidity was added \(numerator\)
* `poolRateD`: rate of 1 pool token in reserve token units when the liquidity was added \(denominator\)
* `reserveRateN`: rate of 1 reserve token in the other reserve token units when the liquidity was added \(numerator\)
* `reserveRateD`: rate of 1 reserve token in the other reserve token units when the liquidity was added \(denominator\)

### Return Values:

* ROI in PPM

