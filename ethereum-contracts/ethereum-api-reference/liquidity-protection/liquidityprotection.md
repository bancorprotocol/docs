# LiquidityProtection

This contract implements the liquidity protection mechanism.

## Functions:

* [`constructor(address[8] _contractAddresses)`](liquidityprotection.md#LiquidityProtection-constructor-address-8--)
* [`receive()`](liquidityprotection.md#LiquidityProtection-receive--)
* [`transferStoreOwnership(address _newOwner)`](liquidityprotection.md#LiquidityProtection-transferStoreOwnership-address-)
* [`acceptStoreOwnership()`](liquidityprotection.md#LiquidityProtection-acceptStoreOwnership--)
* [`transferWalletOwnership(address _newOwner)`](liquidityprotection.md#LiquidityProtection-transferWalletOwnership-address-)
* [`acceptWalletOwnership()`](liquidityprotection.md#LiquidityProtection-acceptWalletOwnership--)
* [`addLiquidityFor(address _owner, contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount)`](liquidityprotection.md#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IERC20Token-uint256-)
* [`addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount)`](liquidityprotection.md#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-)
* [`poolAvailableSpace(contract IConverterAnchor _poolAnchor)`](liquidityprotection.md#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-)
* [`baseTokenAvailableSpace(contract IConverterAnchor _poolAnchor)`](liquidityprotection.md#LiquidityProtection-baseTokenAvailableSpace-contract-IConverterAnchor-)
* [`networkTokenAvailableSpace(contract IConverterAnchor _poolAnchor)`](liquidityprotection.md#LiquidityProtection-networkTokenAvailableSpace-contract-IConverterAnchor-)
* [`removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp)`](liquidityprotection.md#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-)
* [`removeLiquidity(uint256 _id, uint32 _portion)`](liquidityprotection.md#LiquidityProtection-removeLiquidity-uint256-uint32-)
* [`claimBalance(uint256 _startIndex, uint256 _endIndex)`](liquidityprotection.md#LiquidityProtection-claimBalance-uint256-uint256-)
* [`poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD)`](liquidityprotection.md#LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)

### Function `constructor(address[8] _contractAddresses)` <a id="LiquidityProtection-constructor-address-8--"></a>

initializes a new LiquidityProtection contract

### Parameters:

* `liquidity`: protection settings
* \[1\] liquidity protection store
* \[2\] liquidity protection stats
* \[3\] liquidity protection system store
* \[4\] liquidity protection wallet
* \[5\] network token governance
* \[6\] governance token governance
* \[7\] last liquidity removal/unprotection checkpoints store

### Function `receive()` <a id="LiquidityProtection-receive--"></a>

accept ETH

used when removing liquidity from ETH converters

### Function `transferStoreOwnership(address _newOwner)` <a id="LiquidityProtection-transferStoreOwnership-address-"></a>

transfers the ownership of the store

can only be called by the contract owner

### Parameters:

* `_newOwner`:    the new owner of the store

### Function `acceptStoreOwnership()` <a id="LiquidityProtection-acceptStoreOwnership--"></a>

accepts the ownership of the store

can only be called by the contract owner

### Function `transferWalletOwnership(address _newOwner)` <a id="LiquidityProtection-transferWalletOwnership-address-"></a>

transfers the ownership of the wallet

can only be called by the contract owner

### Parameters:

* `_newOwner`:    the new owner of the wallet

### Function `acceptWalletOwnership()` <a id="LiquidityProtection-acceptWalletOwnership--"></a>

accepts the ownership of the wallet

can only be called by the contract owner

### Function `addLiquidityFor(address _owner, contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount) → uint256` <a id="LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IERC20Token-uint256-"></a>

adds protected liquidity to a pool for a specific recipient

also mints new governance tokens for the caller if the caller adds network tokens

### Parameters:

* `_owner`: protected liquidity owner
* `_poolAnchor`: anchor of the pool
* `_reserveToken`: reserve token to add to the pool
* `_amount`: amount of tokens to add to the pool

### Return Values:

* new protected liquidity id

### Function `addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount) → uint256` <a id="LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-"></a>

adds protected liquidity to a pool

also mints new governance tokens for the caller if the caller adds network tokens

### Parameters:

* `_poolAnchor`: anchor of the pool
* `_reserveToken`: reserve token to add to the pool
* `_amount`: amount of tokens to add to the pool

### Return Values:

* new protected liquidity id

### Function `poolAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256, uint256` <a id="LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-"></a>

returns the single-side staking limits of a given pool

### Parameters:

* `_poolAnchor`:   anchor of the pool

### Return Values:

* maximum amount of base tokens that can be single-side staked in the pool
* maximum amount of network tokens that can be single-side staked in the pool

### Function `baseTokenAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256` <a id="LiquidityProtection-baseTokenAvailableSpace-contract-IConverterAnchor-"></a>

returns the base-token staking limits of a given pool

### Parameters:

* `_poolAnchor`:   anchor of the pool

### Return Values:

* maximum amount of base tokens that can be single-side staked in the pool

### Function `networkTokenAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256` <a id="LiquidityProtection-networkTokenAvailableSpace-contract-IConverterAnchor-"></a>

returns the network-token staking limits of a given pool

### Parameters:

* `_poolAnchor`:   anchor of the pool

### Return Values:

* maximum amount of network tokens that can be single-side staked in the pool

### Function `removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp) → uint256, uint256, uint256` <a id="LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-"></a>

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

### Function `removeLiquidity(uint256 _id, uint32 _portion)` <a id="LiquidityProtection-removeLiquidity-uint256-uint32-"></a>

removes protected liquidity from a pool

also burns governance tokens from the caller if the caller removes network tokens

### Parameters:

* `_id`: id in the caller's list of protected liquidity
* `_portion`: portion of liquidity to remove, in PPM

### Function `claimBalance(uint256 _startIndex, uint256 _endIndex)` <a id="LiquidityProtection-claimBalance-uint256-uint256-"></a>

allows the caller to claim network token balance that is no longer locked

note that the function can revert if the range is too large

### Parameters:

* `_startIndex`: start index in the caller's list of locked balances
* `_endIndex`: end index in the caller's list of locked balances \(exclusive\)

### Function `poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD) → uint256` <a id="LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-"></a>

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

