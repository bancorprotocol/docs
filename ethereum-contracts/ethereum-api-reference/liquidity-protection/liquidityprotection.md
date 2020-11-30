# LiquidityProtection

Liquidity Protection

## Functions:

* [`constructor(contract ILiquidityProtectionStore _store, contract IDSToken _networkToken, contract IDSToken _govToken, contract IContractRegistry _registry)`](liquidityprotection.md#LiquidityProtection-constructor-contract-ILiquidityProtectionStore-contract-IDSToken-contract-IDSToken-contract-IContractRegistry-)
* [`receive()`](liquidityprotection.md#LiquidityProtection-receive--)
* [`transferStoreOwnership(address _newOwner)`](liquidityprotection.md#LiquidityProtection-transferStoreOwnership-address-)
* [`acceptStoreOwnership()`](liquidityprotection.md#LiquidityProtection-acceptStoreOwnership--)
* [`transferNetworkTokenOwnership(address _newOwner)`](liquidityprotection.md#LiquidityProtection-transferNetworkTokenOwnership-address-)
* [`acceptNetworkTokenOwnership()`](liquidityprotection.md#LiquidityProtection-acceptNetworkTokenOwnership--)
* [`transferGovTokenOwnership(address _newOwner)`](liquidityprotection.md#LiquidityProtection-transferGovTokenOwnership-address-)
* [`acceptGovTokenOwnership()`](liquidityprotection.md#LiquidityProtection-acceptGovTokenOwnership--)
* [`setWhitelistAdmin(address _whitelistAdmin)`](liquidityprotection.md#LiquidityProtection-setWhitelistAdmin-address-)
* [`setSystemNetworkTokenLimits(uint256 _maxSystemNetworkTokenAmount, uint32 _maxSystemNetworkTokenRatio)`](liquidityprotection.md#LiquidityProtection-setSystemNetworkTokenLimits-uint256-uint32-)
* [`setProtectionDelays(uint256 _minProtectionDelay, uint256 _maxProtectionDelay)`](liquidityprotection.md#LiquidityProtection-setProtectionDelays-uint256-uint256-)
* [`setMinNetworkCompensation(uint256 _minCompensation)`](liquidityprotection.md#LiquidityProtection-setMinNetworkCompensation-uint256-)
* [`setLockDuration(uint256 _lockDuration)`](liquidityprotection.md#LiquidityProtection-setLockDuration-uint256-)
* [`whitelistPool(contract IConverterAnchor _poolAnchor, bool _add)`](liquidityprotection.md#LiquidityProtection-whitelistPool-contract-IConverterAnchor-bool-)
* [`isPoolSupported(contract IConverterAnchor _poolAnchor)`](liquidityprotection.md#LiquidityProtection-isPoolSupported-contract-IConverterAnchor-)
* [`protectLiquidity(contract IConverterAnchor _poolAnchor, uint256 _amount)`](liquidityprotection.md#LiquidityProtection-protectLiquidity-contract-IConverterAnchor-uint256-)
* [`unprotectLiquidity(uint256 _id1, uint256 _id2)`](liquidityprotection.md#LiquidityProtection-unprotectLiquidity-uint256-uint256-)
* [`addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount)`](liquidityprotection.md#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-)
* [`transferLiquidity(uint256 _id, address _newProvider)`](liquidityprotection.md#LiquidityProtection-transferLiquidity-uint256-address-)
* [`removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp)`](liquidityprotection.md#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-)
* [`removeLiquidity(uint256 _id, uint32 _portion)`](liquidityprotection.md#LiquidityProtection-removeLiquidity-uint256-uint32-)
* [`claimBalance(uint256 _startIndex, uint256 _endIndex)`](liquidityprotection.md#LiquidityProtection-claimBalance-uint256-uint256-)
* [`poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD)`](liquidityprotection.md#LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)

## Events:

* [`WhitelistAdminUpdated(address _prevWhitelistAdmin, address _newWhitelistAdmin)`](liquidityprotection.md#LiquidityProtection-WhitelistAdminUpdated-address-address-)
* [`SystemNetworkTokenLimitsUpdated(uint256 _prevMaxSystemNetworkTokenAmount, uint256 _newMaxSystemNetworkTokenAmount, uint256 _prevMaxSystemNetworkTokenRatio, uint256 _newMaxSystemNetworkTokenRatio)`](liquidityprotection.md#LiquidityProtection-SystemNetworkTokenLimitsUpdated-uint256-uint256-uint256-uint256-)
* [`ProtectionDelaysUpdated(uint256 _prevMinProtectionDelay, uint256 _newMinProtectionDelay, uint256 _prevMaxProtectionDelay, uint256 _newMaxProtectionDelay)`](liquidityprotection.md#LiquidityProtection-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-)
* [`MinNetworkCompensationUpdated(uint256 _prevMinNetworkCompensation, uint256 _newMinNetworkCompensation)`](liquidityprotection.md#LiquidityProtection-MinNetworkCompensationUpdated-uint256-uint256-)
* [`LockDurationUpdated(uint256 _prevLockDuration, uint256 _newLockDuration)`](liquidityprotection.md#LiquidityProtection-LockDurationUpdated-uint256-uint256-)

## Function `constructor(contract ILiquidityProtectionStore _store, contract IDSToken _networkToken, contract IDSToken _govToken, contract IContractRegistry _registry)` <a id="LiquidityProtection-constructor-contract-ILiquidityProtectionStore-contract-IDSToken-contract-IDSToken-contract-IContractRegistry-"></a>

initializes a new LiquidityProtection contract

### Parameters:

* `_store`: liquidity protection store
* `_networkToken`: network token
* `_govToken`: governance token
* `_registry`: contract registry

## Function `receive()` <a id="LiquidityProtection-receive--"></a>

accept ETH

used when removing liquidity from ETH converters

## Function `transferStoreOwnership(address _newOwner)` <a id="LiquidityProtection-transferStoreOwnership-address-"></a>

transfers the ownership of the store

can only be called by the contract owner

### Parameters:

* `_newOwner`:    the new owner of the store

## Function `acceptStoreOwnership()` <a id="LiquidityProtection-acceptStoreOwnership--"></a>

accepts the ownership of the store

can only be called by the contract owner

## Function `transferNetworkTokenOwnership(address _newOwner)` <a id="LiquidityProtection-transferNetworkTokenOwnership-address-"></a>

transfers the ownership of the network token

can only be called by the contract owner

### Parameters:

* `_newOwner`:    the new owner of the network token

## Function `acceptNetworkTokenOwnership()` <a id="LiquidityProtection-acceptNetworkTokenOwnership--"></a>

accepts the ownership of the network token

can only be called by the contract owner

## Function `transferGovTokenOwnership(address _newOwner)` <a id="LiquidityProtection-transferGovTokenOwnership-address-"></a>

transfers the ownership of the governance token

can only be called by the contract owner

### Parameters:

* `_newOwner`:    the new owner of the governance token

## Function `acceptGovTokenOwnership()` <a id="LiquidityProtection-acceptGovTokenOwnership--"></a>

accepts the ownership of the governance token

can only be called by the contract owner

## Function `setWhitelistAdmin(address _whitelistAdmin)` <a id="LiquidityProtection-setWhitelistAdmin-address-"></a>

set the address of the whitelist admin

can only be called by the contract owner

### Parameters:

* `_whitelistAdmin`:  the address of the new whitelist admin

## Function `setSystemNetworkTokenLimits(uint256 _maxSystemNetworkTokenAmount, uint32 _maxSystemNetworkTokenRatio)` <a id="LiquidityProtection-setSystemNetworkTokenLimits-uint256-uint32-"></a>

updates the system network token balance limits

can only be called by the contract owner

### Parameters:

* `_maxSystemNetworkTokenAmount`: maximum absolute balance in a pool
* `_maxSystemNetworkTokenRatio`: maximum balance out of the total balance in a pool \(in PPM units\)

## Function `setProtectionDelays(uint256 _minProtectionDelay, uint256 _maxProtectionDelay)` <a id="LiquidityProtection-setProtectionDelays-uint256-uint256-"></a>

updates the protection delays

can only be called by the contract owner

### Parameters:

* `_minProtectionDelay`: seconds until the protection starts
* `_maxProtectionDelay`: seconds until full protection

## Function `setMinNetworkCompensation(uint256 _minCompensation)` <a id="LiquidityProtection-setMinNetworkCompensation-uint256-"></a>

updates the minimum network token compensation

can only be called by the contract owner

### Parameters:

* `_minCompensation`: new minimum compensation

## Function `setLockDuration(uint256 _lockDuration)` <a id="LiquidityProtection-setLockDuration-uint256-"></a>

updates the network token lock duration

can only be called by the contract owner

### Parameters:

* `_lockDuration`:    network token lock duration, in seconds

## Function `whitelistPool(contract IConverterAnchor _poolAnchor, bool _add)` <a id="LiquidityProtection-whitelistPool-contract-IConverterAnchor-bool-"></a>

adds a pool to the whitelist, or removes a pool from the whitelist

note that when a pool is whitelisted, it's not possible to remove liquidity anymore

removing a pool from the whitelist is an extreme measure in case of a base token compromise etc.

can only be called by the whitelist admin

### Parameters:

* `_poolAnchor`: anchor of the pool
* `_add`: true to add the pool to the whitelist, false to remove it from the whitelist

## Function `isPoolSupported(contract IConverterAnchor _poolAnchor) → bool` <a id="LiquidityProtection-isPoolSupported-contract-IConverterAnchor-"></a>

checks if protection is supported for the given pool

only standard pools are supported \(2 reserves, 50%/50% weights\)

note that the pool should still be whitelisted

### Parameters:

* `_poolAnchor`:  anchor of the pool

### Return Values:

* true if the pool is supported, false otherwise

## Function `protectLiquidity(contract IConverterAnchor _poolAnchor, uint256 _amount)` <a id="LiquidityProtection-protectLiquidity-contract-IConverterAnchor-uint256-"></a>

adds protection to existing pool tokens

also mints new governance tokens for the caller

### Parameters:

* `_poolAnchor`: anchor of the pool
* `_amount`: amount of pool tokens to protect

## Function `unprotectLiquidity(uint256 _id1, uint256 _id2)` <a id="LiquidityProtection-unprotectLiquidity-uint256-uint256-"></a>

cancels the protection and returns the pool tokens to the caller

also burns governance tokens from the caller

must be called with the indices of both the base token and the network token protections

### Parameters:

* `_id1`: id in the caller's list of protected liquidity
* `_id2`: matching id in the caller's list of protected liquidity

## Function `addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount) → uint256` <a id="LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-"></a>

adds protected liquidity to a pool

also mints new governance tokens for the caller if the caller adds network tokens

### Parameters:

* `_poolAnchor`: anchor of the pool
* `_reserveToken`: reserve token to add to the pool
* `_amount`: amount of tokens to add to the pool

### Return Values:

* new protected liquidity id

## Function `transferLiquidity(uint256 _id, address _newProvider) → uint256` <a id="LiquidityProtection-transferLiquidity-uint256-address-"></a>

transfers protected liquidity to a new provider

### Parameters:

* `_id`: protected liquidity id
* `_newProvider`: new provider

### Return Values:

* new protected liquidity id

## Function `removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp) → uint256, uint256, uint256` <a id="LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-"></a>

returns the expected/actual amounts the provider will receive for removing liquidity

it's also possible to provide the remove liquidity time to get an estimation

for the return at that given point

### Parameters:

* `_id`: protected liquidity id
* `_portion`: portion of liquidity to remove, in PPM
* `_removeTimestamp`: time at which the liquidity is removed

### Return Values:

* expected return amount in the reserve token
* actual return amount in the reserve token
* compensation in the network token

## Function `removeLiquidity(uint256 _id, uint32 _portion)` <a id="LiquidityProtection-removeLiquidity-uint256-uint32-"></a>

removes protected liquidity from a pool

also burns governance tokens from the caller if the caller removes network tokens

### Parameters:

* `_id`: id in the caller's list of protected liquidity
* `_portion`: portion of liquidity to remove, in PPM

## Function `claimBalance(uint256 _startIndex, uint256 _endIndex)` <a id="LiquidityProtection-claimBalance-uint256-uint256-"></a>

allows the caller to claim network token balance that is no longer locked

note that the function can revert if the range is too large

### Parameters:

* `_startIndex`: start index in the caller's list of locked balances
* `_endIndex`: end index in the caller's list of locked balances \(exclusive\)

## Function `poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD) → uint256` <a id="LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-"></a>

returns the ROI for removing liquidity in the current state after providing liquidity with the given args

the function assumes full protection is in effect

return value is in PPM and can be larger than PPM\_RESOLUTION for positive ROI, 1M = 0% ROI

### Parameters:

* `_poolToken`: pool token
* `_reserveToken`: reserve token
* `_reserveAmount`: reserve token amount that was added
* `_poolRateN`: rate of 1 pool token in reserve token units when the liquidity was added \(numerator\)
* `_poolRateD`: rate of 1 pool token in reserve token units when the liquidity was added \(denominator\)
* `_reserveRateN`: rate of 1 reserve token in the other reserve token units when the liquidity was added \(numerator\)
* `_reserveRateD`: rate of 1 reserve token in the other reserve token units when the liquidity was added \(denominator\)

### Return Values:

* ROI in PPM

## Event `WhitelistAdminUpdated(address _prevWhitelistAdmin, address _newWhitelistAdmin)` <a id="LiquidityProtection-WhitelistAdminUpdated-address-address-"></a>

triggered when whitelist admin is updated

### Parameters:

* `_prevWhitelistAdmin`: previous whitelist admin
* `_newWhitelistAdmin`: new whitelist admin

## Event `SystemNetworkTokenLimitsUpdated(uint256 _prevMaxSystemNetworkTokenAmount, uint256 _newMaxSystemNetworkTokenAmount, uint256 _prevMaxSystemNetworkTokenRatio, uint256 _newMaxSystemNetworkTokenRatio)` <a id="LiquidityProtection-SystemNetworkTokenLimitsUpdated-uint256-uint256-uint256-uint256-"></a>

triggered when the system network token balance limits are updated

### Parameters:

* `_prevMaxSystemNetworkTokenAmount`: previous maximum absolute balance in a pool
* `_newMaxSystemNetworkTokenAmount`: new maximum absolute balance in a pool
* `_prevMaxSystemNetworkTokenRatio`: previos maximum balance out of the total balance in a pool
* `_newMaxSystemNetworkTokenRatio`: new maximum balance out of the total balance in a pool

## Event `ProtectionDelaysUpdated(uint256 _prevMinProtectionDelay, uint256 _newMinProtectionDelay, uint256 _prevMaxProtectionDelay, uint256 _newMaxProtectionDelay)` <a id="LiquidityProtection-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-"></a>

triggered when the protection delays are updated

### Parameters:

* `_prevMinProtectionDelay`: previous seconds until the protection starts
* `_newMinProtectionDelay`: new seconds until the protection starts
* `_prevMaxProtectionDelay`: previos seconds until full protection
* `_newMaxProtectionDelay`: new seconds until full protection

## Event `MinNetworkCompensationUpdated(uint256 _prevMinNetworkCompensation, uint256 _newMinNetworkCompensation)` <a id="LiquidityProtection-MinNetworkCompensationUpdated-uint256-uint256-"></a>

triggered when the minimum network token compensation is updated

### Parameters:

* `_prevMinNetworkCompensation`: previous minimum network token compensation
* `_newMinNetworkCompensation`: new minimum network token compensation

## Event `LockDurationUpdated(uint256 _prevLockDuration, uint256 _newLockDuration)` <a id="LiquidityProtection-LockDurationUpdated-uint256-uint256-"></a>

triggered when the network token lock duration is updated

### Parameters:

* `_prevLockDuration`: previous network token lock duration, in seconds
* `_newLockDuration`: new network token lock duration, in seconds

