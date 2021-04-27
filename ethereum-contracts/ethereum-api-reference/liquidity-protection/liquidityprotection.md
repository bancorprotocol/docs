This contract implements the liquidity protection mechanism.

# Functions:

- [`constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)`](#LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-)

- [`store()`](#LiquidityProtection-store--)

- [`stats()`](#LiquidityProtection-stats--)

- [`settings()`](#LiquidityProtection-settings--)

- [`systemStore()`](#LiquidityProtection-systemStore--)

- [`wallet()`](#LiquidityProtection-wallet--)

- [`receive()`](#LiquidityProtection-receive--)

- [`transferStoreOwnership(address newOwner)`](#LiquidityProtection-transferStoreOwnership-address-)

- [`acceptStoreOwnership()`](#LiquidityProtection-acceptStoreOwnership--)

- [`transferWalletOwnership(address newOwner)`](#LiquidityProtection-transferWalletOwnership-address-)

- [`acceptWalletOwnership()`](#LiquidityProtection-acceptWalletOwnership--)

- [`addLiquidityFor(address owner, contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount)`](#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IReserveToken-uint256-)

- [`addLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount)`](#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IReserveToken-uint256-)

- [`poolAvailableSpace(contract IConverterAnchor poolAnchor)`](#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-)

- [`removeLiquidityReturn(uint256 id, uint32 portion, uint256 removeTimestamp)`](#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-)

- [`removeLiquidity(uint256 id, uint32 portion)`](#LiquidityProtection-removeLiquidity-uint256-uint32-)

- [`transferPosition(uint256 id, address newProvider)`](#LiquidityProtection-transferPosition-uint256-address-)

- [`transferPositionAndCall(uint256 id, address newProvider, address target, bytes data)`](#LiquidityProtection-transferPositionAndCall-uint256-address-address-bytes-)

- [`claimBalance(uint256 startIndex, uint256 endIndex)`](#LiquidityProtection-claimBalance-uint256-uint256-)

- [`poolROI(contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 reserveAmount, uint256 poolRateN, uint256 poolRateD, uint256 reserveRateN, uint256 reserveRateD)`](#LiquidityProtection-poolROI-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-)

## Function `constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)` {#LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-}

initializes a new LiquidityProtection contract

## Parameters:

- `settings`: liquidity protection settings

- `store`: liquidity protection store

- `stats`: liquidity protection stats

- `systemStore`: liquidity protection system store

- `wallet`: liquidity protection wallet

- `networkTokenGovernance`: network token governance

- `govTokenGovernance`: governance token governance

- `lastRemoveCheckpointStore`: last liquidity removal/unprotection checkpoints store

## Function `store() → contract ILiquidityProtectionStore` {#LiquidityProtection-store--}

returns the LP store

## Return Values:

- the LP store

## Function `stats() → contract ILiquidityProtectionStats` {#LiquidityProtection-stats--}

returns the LP stats

## Return Values:

- the LP stats

## Function `settings() → contract ILiquidityProtectionSettings` {#LiquidityProtection-settings--}

returns the LP settings

## Return Values:

- the LP settings

## Function `systemStore() → contract ILiquidityProtectionSystemStore` {#LiquidityProtection-systemStore--}

returns the LP system store

## Return Values:

- the LP system store

## Function `wallet() → contract ITokenHolder` {#LiquidityProtection-wallet--}

returns the LP wallet

## Return Values:

- the LP wallet

## Function `receive()` {#LiquidityProtection-receive--}

accept ETH

## Function `transferStoreOwnership(address newOwner)` {#LiquidityProtection-transferStoreOwnership-address-}

transfers the ownership of the store

can only be called by the contract owner

## Parameters:

- `newOwner`: the new owner of the store

## Function `acceptStoreOwnership()` {#LiquidityProtection-acceptStoreOwnership--}

accepts the ownership of the store

can only be called by the contract owner

## Function `transferWalletOwnership(address newOwner)` {#LiquidityProtection-transferWalletOwnership-address-}

transfers the ownership of the wallet

can only be called by the contract owner

## Parameters:

- `newOwner`: the new owner of the wallet

## Function `acceptWalletOwnership()` {#LiquidityProtection-acceptWalletOwnership--}

accepts the ownership of the wallet

can only be called by the contract owner

## Function `addLiquidityFor(address owner, contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount) → uint256` {#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IReserveToken-uint256-}

adds protected liquidity to a pool for a specific recipient

also mints new governance tokens for the caller if the caller adds network tokens

## Parameters:

- `owner`: position owner

- `poolAnchor`: anchor of the pool

- `reserveToken`: reserve token to add to the pool

- `amount`: amount of tokens to add to the pool

## Return Values:

- new position id

## Function `addLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, uint256 amount) → uint256` {#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IReserveToken-uint256-}

adds protected liquidity to a pool

also mints new governance tokens for the caller if the caller adds network tokens

## Parameters:

- `poolAnchor`: anchor of the pool

- `reserveToken`: reserve token to add to the pool

- `amount`: amount of tokens to add to the pool

## Return Values:

- new position id

## Function `poolAvailableSpace(contract IConverterAnchor poolAnchor) → uint256, uint256` {#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-}

returns the single-side staking limits of a given pool

## Parameters:

- `poolAnchor`: anchor of the pool

## Return Values:

- maximum amount of base tokens that can be single-side staked in the pool

- maximum amount of network tokens that can be single-side staked in the pool

## Function `removeLiquidityReturn(uint256 id, uint32 portion, uint256 removeTimestamp) → uint256, uint256, uint256` {#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-}

returns the expected/actual amounts the provider will receive for removing liquidity

it's also possible to provide the remove liquidity time to get an estimation

for the return at that given point

## Parameters:

- `id`: position id

- `portion`: portion of liquidity to remove, in PPM

- `removeTimestamp`: time at which the liquidity is removed

## Return Values:

- expected return amount in the reserve token

- actual return amount in the reserve token

- compensation in the network token

## Function `removeLiquidity(uint256 id, uint32 portion)` {#LiquidityProtection-removeLiquidity-uint256-uint32-}

removes protected liquidity from a pool

also burns governance tokens from the caller if the caller removes network tokens

## Parameters:

- `id`: position id

- `portion`: portion of liquidity to remove, in PPM

## Function `transferPosition(uint256 id, address newProvider) → uint256` {#LiquidityProtection-transferPosition-uint256-address-}

transfers a position to a new provider

## Parameters:

- `id`: position id

- `newProvider`: the new provider

## Return Values:

- new position id

## Function `transferPositionAndCall(uint256 id, address newProvider, address target, bytes data) → uint256` {#LiquidityProtection-transferPositionAndCall-uint256-address-address-bytes-}

transfers a position to a new provider and optionally notifies another contract

## Parameters:

- `id`: position id

- `newProvider`: the new provider

- `target`: the contract to notify

- `data`: the data to call the contract with

## Return Values:

- new position id

## Function `claimBalance(uint256 startIndex, uint256 endIndex)` {#LiquidityProtection-claimBalance-uint256-uint256-}

allows the caller to claim network token balance that is no longer locked

note that the function can revert if the range is too large

## Parameters:

- `startIndex`: start index in the caller's list of locked balances

- `endIndex`: end index in the caller's list of locked balances (exclusive)

## Function `poolROI(contract IDSToken poolToken, contract IReserveToken reserveToken, uint256 reserveAmount, uint256 poolRateN, uint256 poolRateD, uint256 reserveRateN, uint256 reserveRateD) → uint256` {#LiquidityProtection-poolROI-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-}

returns the ROI for removing liquidity in the current state after providing liquidity with the given args

the function assumes full protection is in effect

return value is in PPM and can be larger than PPM_RESOLUTION for positive ROI, 1M = 0% ROI

## Parameters:

- `poolToken`: pool token

- `reserveToken`: reserve token

- `reserveAmount`: reserve token amount that was added

- `poolRateN`: rate of 1 pool token in reserve token units when the liquidity was added (numerator)

- `poolRateD`: rate of 1 pool token in reserve token units when the liquidity was added (denominator)

- `reserveRateN`: rate of 1 reserve token in the other reserve token units when the liquidity was added (numerator)

- `reserveRateD`: rate of 1 reserve token in the other reserve token units when the liquidity was added (denominator)

## Return Values:

- ROI in PPM
