This contract implements the liquidity protection mechanism.

# Functions:

- [`constructor(contract ILiquidityProtectionSettings _settings, contract ILiquidityProtectionStore _store, contract ILiquidityProtectionStats _stats, contract ITokenGovernance _networkTokenGovernance, contract ITokenGovernance _govTokenGovernance, contract ICheckpointStore _lastRemoveCheckpointStore)`](#LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-)

- [`receive()`](#LiquidityProtection-receive--)

- [`transferStoreOwnership(address _newOwner)`](#LiquidityProtection-transferStoreOwnership-address-)

- [`acceptStoreOwnership()`](#LiquidityProtection-acceptStoreOwnership--)

- [`setEventsSubscriber(contract ILiquidityProtectionEventsSubscriber _eventsSubscriber)`](#LiquidityProtection-setEventsSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

- [`addLiquidityFor(address _owner, contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount)`](#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IERC20Token-uint256-)

- [`addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount)`](#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-)

- [`poolAvailableSpace(contract IConverterAnchor _poolAnchor)`](#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-)

- [`baseTokenAvailableSpace(contract IConverterAnchor _poolAnchor)`](#LiquidityProtection-baseTokenAvailableSpace-contract-IConverterAnchor-)

- [`networkTokenAvailableSpace(contract IConverterAnchor _poolAnchor)`](#LiquidityProtection-networkTokenAvailableSpace-contract-IConverterAnchor-)

- [`removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp)`](#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-)

- [`removeLiquidity(uint256 _id, uint32 _portion)`](#LiquidityProtection-removeLiquidity-uint256-uint32-)

- [`claimBalance(uint256 _startIndex, uint256 _endIndex)`](#LiquidityProtection-claimBalance-uint256-uint256-)

- [`poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD)`](#LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)

# Events:

- [`EventSubscriberUpdated(contract ILiquidityProtectionEventsSubscriber _prevEventsSubscriber, contract ILiquidityProtectionEventsSubscriber _newEventsSubscriber)`](#LiquidityProtection-EventSubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

# Function `constructor(contract ILiquidityProtectionSettings _settings, contract ILiquidityProtectionStore _store, contract ILiquidityProtectionStats _stats, contract ITokenGovernance _networkTokenGovernance, contract ITokenGovernance _govTokenGovernance, contract ICheckpointStore _lastRemoveCheckpointStore)` {#LiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-}

initializes a new LiquidityProtection contract

## Parameters:

- `_settings`: liquidity protection settings

- `_store`: liquidity protection store

- `_stats`: liquidity protection stats

- `_networkTokenGovernance`: network token governance

- `_govTokenGovernance`: governance token governance

- `_lastRemoveCheckpointStore`: last liquidity removal/unprotection checkpoints store

# Function `receive()` {#LiquidityProtection-receive--}

accept ETH

used when removing liquidity from ETH converters

# Function `transferStoreOwnership(address _newOwner)` {#LiquidityProtection-transferStoreOwnership-address-}

transfers the ownership of the store

can only be called by the contract owner

## Parameters:

- `_newOwner`:    the new owner of the store

# Function `acceptStoreOwnership()` {#LiquidityProtection-acceptStoreOwnership--}

accepts the ownership of the store

can only be called by the contract owner

# Function `setEventsSubscriber(contract ILiquidityProtectionEventsSubscriber _eventsSubscriber)` {#LiquidityProtection-setEventsSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

sets the events subscriber

# Function `addLiquidityFor(address _owner, contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount) → uint256` {#LiquidityProtection-addLiquidityFor-address-contract-IConverterAnchor-contract-IERC20Token-uint256-}

adds protected liquidity to a pool for a specific recipient

also mints new governance tokens for the caller if the caller adds network tokens

## Parameters:

- `_owner`:       protected liquidity owner

- `_poolAnchor`:      anchor of the pool

- `_reserveToken`:    reserve token to add to the pool

- `_amount`:          amount of tokens to add to the pool

## Return Values:

- new protected liquidity id

# Function `addLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, uint256 _amount) → uint256` {#LiquidityProtection-addLiquidity-contract-IConverterAnchor-contract-IERC20Token-uint256-}

adds protected liquidity to a pool

also mints new governance tokens for the caller if the caller adds network tokens

## Parameters:

- `_poolAnchor`:      anchor of the pool

- `_reserveToken`:    reserve token to add to the pool

- `_amount`:          amount of tokens to add to the pool

## Return Values:

- new protected liquidity id

# Function `poolAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256, uint256` {#LiquidityProtection-poolAvailableSpace-contract-IConverterAnchor-}

returns the single-side staking limits of a given pool

## Parameters:

- `_poolAnchor`:   anchor of the pool

## Return Values:

- maximum amount of base tokens that can be single-side staked in the pool

- maximum amount of network tokens that can be single-side staked in the pool

# Function `baseTokenAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256` {#LiquidityProtection-baseTokenAvailableSpace-contract-IConverterAnchor-}

returns the base-token staking limits of a given pool

## Parameters:

- `_poolAnchor`:   anchor of the pool

## Return Values:

- maximum amount of base tokens that can be single-side staked in the pool

# Function `networkTokenAvailableSpace(contract IConverterAnchor _poolAnchor) → uint256` {#LiquidityProtection-networkTokenAvailableSpace-contract-IConverterAnchor-}

returns the network-token staking limits of a given pool

## Parameters:

- `_poolAnchor`:   anchor of the pool

## Return Values:

- maximum amount of network tokens that can be single-side staked in the pool

# Function `removeLiquidityReturn(uint256 _id, uint32 _portion, uint256 _removeTimestamp) → uint256, uint256, uint256` {#LiquidityProtection-removeLiquidityReturn-uint256-uint32-uint256-}

returns the expected/actual amounts the provider will receive for removing liquidity

it's also possible to provide the remove liquidity time to get an estimation

for the return at that given point

## Parameters:

- `_id`:              protected liquidity id

- `_portion`:         portion of liquidity to remove, in PPM

- `_removeTimestamp`: time at which the liquidity is removed

## Return Values:

- expected return amount in the reserve token

- actual return amount in the reserve token

- compensation in the network token

# Function `removeLiquidity(uint256 _id, uint32 _portion)` {#LiquidityProtection-removeLiquidity-uint256-uint32-}

removes protected liquidity from a pool

also burns governance tokens from the caller if the caller removes network tokens

## Parameters:

- `_id`:      id in the caller's list of protected liquidity

- `_portion`: portion of liquidity to remove, in PPM

# Function `claimBalance(uint256 _startIndex, uint256 _endIndex)` {#LiquidityProtection-claimBalance-uint256-uint256-}

allows the caller to claim network token balance that is no longer locked

note that the function can revert if the range is too large

## Parameters:

- `_startIndex`:  start index in the caller's list of locked balances

- `_endIndex`:    end index in the caller's list of locked balances (exclusive)

# Function `poolROI(contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _reserveAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _reserveRateN, uint256 _reserveRateD) → uint256` {#LiquidityProtection-poolROI-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-}

returns the ROI for removing liquidity in the current state after providing liquidity with the given args

the function assumes full protection is in effect

return value is in PPM and can be larger than PPM_RESOLUTION for positive ROI, 1M = 0% ROI

## Parameters:

- `_poolToken`:       pool token

- `_reserveToken`:    reserve token

- `_reserveAmount`:   reserve token amount that was added

- `_poolRateN`:       rate of 1 pool token in reserve token units when the liquidity was added (numerator)

- `_poolRateD`:       rate of 1 pool token in reserve token units when the liquidity was added (denominator)

- `_reserveRateN`:    rate of 1 reserve token in the other reserve token units when the liquidity was added (numerator)

- `_reserveRateD`:    rate of 1 reserve token in the other reserve token units when the liquidity was added (denominator)

## Return Values:

- ROI in PPM

# Event `EventSubscriberUpdated(contract ILiquidityProtectionEventsSubscriber _prevEventsSubscriber, contract ILiquidityProtectionEventsSubscriber _newEventsSubscriber)` {#LiquidityProtection-EventSubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

updates the event subscriber

## Parameters:

- `_prevEventsSubscriber`: the previous events subscriber

- `_newEventsSubscriber`: the new events subscriber
