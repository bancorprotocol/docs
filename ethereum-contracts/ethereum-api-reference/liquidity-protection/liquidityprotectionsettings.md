Liquidity Protection Settings contract

# Functions:

- [`constructor(contract IERC20Token _networkToken, contract IContractRegistry _registry)`](#LiquidityProtectionSettings-constructor-contract-IERC20Token-contract-IContractRegistry-)

- [`addPoolToWhitelist(contract IConverterAnchor _poolAnchor)`](#LiquidityProtectionSettings-addPoolToWhitelist-contract-IConverterAnchor-)

- [`removePoolFromWhitelist(contract IConverterAnchor _poolAnchor)`](#LiquidityProtectionSettings-removePoolFromWhitelist-contract-IConverterAnchor-)

- [`isPoolWhitelisted(contract IConverterAnchor _poolAnchor)`](#LiquidityProtectionSettings-isPoolWhitelisted-contract-IConverterAnchor-)

- [`poolWhitelist()`](#LiquidityProtectionSettings-poolWhitelist--)

- [`addSubscriber(contract ILiquidityProtectionEventsSubscriber _subscriber)`](#LiquidityProtectionSettings-addSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

- [`removeSubscriber(contract ILiquidityProtectionEventsSubscriber _subscriber)`](#LiquidityProtectionSettings-removeSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

- [`subscribers()`](#LiquidityProtectionSettings-subscribers--)

- [`setMinNetworkTokenLiquidityForMinting(uint256 _minimum)`](#LiquidityProtectionSettings-setMinNetworkTokenLiquidityForMinting-uint256-)

- [`setDefaultNetworkTokenMintingLimit(uint256 _limit)`](#LiquidityProtectionSettings-setDefaultNetworkTokenMintingLimit-uint256-)

- [`setNetworkTokenMintingLimit(contract IConverterAnchor _poolAnchor, uint256 _limit)`](#LiquidityProtectionSettings-setNetworkTokenMintingLimit-contract-IConverterAnchor-uint256-)

- [`setProtectionDelays(uint256 _minProtectionDelay, uint256 _maxProtectionDelay)`](#LiquidityProtectionSettings-setProtectionDelays-uint256-uint256-)

- [`setMinNetworkCompensation(uint256 _minCompensation)`](#LiquidityProtectionSettings-setMinNetworkCompensation-uint256-)

- [`setLockDuration(uint256 _lockDuration)`](#LiquidityProtectionSettings-setLockDuration-uint256-)

- [`setAverageRateMaxDeviation(uint32 _averageRateMaxDeviation)`](#LiquidityProtectionSettings-setAverageRateMaxDeviation-uint32-)

- [`disableAddLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, bool _disable)`](#LiquidityProtectionSettings-disableAddLiquidity-contract-IConverterAnchor-contract-IERC20Token-bool-)

- [`isPoolSupported(contract IConverterAnchor _poolAnchor)`](#LiquidityProtectionSettings-isPoolSupported-contract-IConverterAnchor-)

# Events:

- [`PoolWhitelistUpdated(contract IConverterAnchor _poolAnchor, bool _added)`](#LiquidityProtectionSettings-PoolWhitelistUpdated-contract-IConverterAnchor-bool-)

- [`SubscriberUpdated(contract ILiquidityProtectionEventsSubscriber _subscriber, bool _added)`](#LiquidityProtectionSettings-SubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-bool-)

- [`MinNetworkTokenLiquidityForMintingUpdated(uint256 _prevMin, uint256 _newMin)`](#LiquidityProtectionSettings-MinNetworkTokenLiquidityForMintingUpdated-uint256-uint256-)

- [`DefaultNetworkTokenMintingLimitUpdated(uint256 _prevDefault, uint256 _newDefault)`](#LiquidityProtectionSettings-DefaultNetworkTokenMintingLimitUpdated-uint256-uint256-)

- [`NetworkTokenMintingLimitUpdated(contract IConverterAnchor _poolAnchor, uint256 _prevLimit, uint256 _newLimit)`](#LiquidityProtectionSettings-NetworkTokenMintingLimitUpdated-contract-IConverterAnchor-uint256-uint256-)

- [`ProtectionDelaysUpdated(uint256 _prevMinProtectionDelay, uint256 _newMinProtectionDelay, uint256 _prevMaxProtectionDelay, uint256 _newMaxProtectionDelay)`](#LiquidityProtectionSettings-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-)

- [`MinNetworkCompensationUpdated(uint256 _prevMinNetworkCompensation, uint256 _newMinNetworkCompensation)`](#LiquidityProtectionSettings-MinNetworkCompensationUpdated-uint256-uint256-)

- [`LockDurationUpdated(uint256 _prevLockDuration, uint256 _newLockDuration)`](#LiquidityProtectionSettings-LockDurationUpdated-uint256-uint256-)

- [`AverageRateMaxDeviationUpdated(uint32 _prevAverageRateMaxDeviation, uint32 _newAverageRateMaxDeviation)`](#LiquidityProtectionSettings-AverageRateMaxDeviationUpdated-uint32-uint32-)

- [`AddLiquidityDisabled(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, bool _disabled)`](#LiquidityProtectionSettings-AddLiquidityDisabled-contract-IConverterAnchor-contract-IERC20Token-bool-)

## Function `constructor(contract IERC20Token _networkToken, contract IContractRegistry _registry)` {#LiquidityProtectionSettings-constructor-contract-IERC20Token-contract-IContractRegistry-}

initializes a new LiquidityProtectionSettings contract

## Parameters:

- `_registry`: contract registry

- `_networkToken`: the network token

## Function `addPoolToWhitelist(contract IConverterAnchor _poolAnchor)` {#LiquidityProtectionSettings-addPoolToWhitelist-contract-IConverterAnchor-}

adds a pool to the whitelist

can only be called by the contract owner

## Parameters:

- `_poolAnchor`: pool anchor

## Function `removePoolFromWhitelist(contract IConverterAnchor _poolAnchor)` {#LiquidityProtectionSettings-removePoolFromWhitelist-contract-IConverterAnchor-}

removes a pool from the whitelist

can only be called by the contract owner

## Parameters:

- `_poolAnchor`: pool anchor

## Function `isPoolWhitelisted(contract IConverterAnchor _poolAnchor) → bool` {#LiquidityProtectionSettings-isPoolWhitelisted-contract-IConverterAnchor-}

checks whether a given pool is whitelisted

## Parameters:

- `_poolAnchor`: pool anchor

## Return Values:

- true if the given pool is whitelisted, false otherwise

## Function `poolWhitelist() → address[]` {#LiquidityProtectionSettings-poolWhitelist--}

returns pools whitelist

## Return Values:

- pools whitelist

## Function `addSubscriber(contract ILiquidityProtectionEventsSubscriber _subscriber)` {#LiquidityProtectionSettings-addSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

adds a subscriber

can only be called by the contract owner

## Parameters:

- `_subscriber`: subscriber

## Function `removeSubscriber(contract ILiquidityProtectionEventsSubscriber _subscriber)` {#LiquidityProtectionSettings-removeSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

removes a subscriber

can only be called by the contract owner

## Parameters:

- `_subscriber`: subscriber

## Function `subscribers() → address[]` {#LiquidityProtectionSettings-subscribers--}

returns subscribers list

## Return Values:

- subscribers list

## Function `setMinNetworkTokenLiquidityForMinting(uint256 _minimum)` {#LiquidityProtectionSettings-setMinNetworkTokenLiquidityForMinting-uint256-}

updates the minimum amount of network token liquidity to allow minting

can only be called by the contract owner

## Parameters:

- `_minimum`:    new minimum

## Function `setDefaultNetworkTokenMintingLimit(uint256 _limit)` {#LiquidityProtectionSettings-setDefaultNetworkTokenMintingLimit-uint256-}

updates the default network token amount the system can mint into each pool

can only be called by the contract owner

## Parameters:

- `_limit`:    new limit

## Function `setNetworkTokenMintingLimit(contract IConverterAnchor _poolAnchor, uint256 _limit)` {#LiquidityProtectionSettings-setNetworkTokenMintingLimit-contract-IConverterAnchor-uint256-}

updates the amount of network tokens that the system can mint into a specific pool

can only be called by the contract owner

## Parameters:

- `_poolAnchor`:   pool anchor

- `_limit`:        new limit

## Function `setProtectionDelays(uint256 _minProtectionDelay, uint256 _maxProtectionDelay)` {#LiquidityProtectionSettings-setProtectionDelays-uint256-uint256-}

updates the protection delays

can only be called by the contract owner

## Parameters:

- `_minProtectionDelay`:  seconds until the protection starts

- `_maxProtectionDelay`:  seconds until full protection

## Function `setMinNetworkCompensation(uint256 _minCompensation)` {#LiquidityProtectionSettings-setMinNetworkCompensation-uint256-}

updates the minimum network token compensation

can only be called by the contract owner

## Parameters:

- `_minCompensation`: new minimum compensation

## Function `setLockDuration(uint256 _lockDuration)` {#LiquidityProtectionSettings-setLockDuration-uint256-}

updates the network token lock duration

can only be called by the contract owner

## Parameters:

- `_lockDuration`:    network token lock duration, in seconds

## Function `setAverageRateMaxDeviation(uint32 _averageRateMaxDeviation)` {#LiquidityProtectionSettings-setAverageRateMaxDeviation-uint32-}

sets the maximum deviation of the average rate from the spot rate

can only be called by the contract owner

## Parameters:

- `_averageRateMaxDeviation`: maximum deviation of the average rate from the spot rate

## Function `disableAddLiquidity(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, bool _disable)` {#LiquidityProtectionSettings-disableAddLiquidity-contract-IConverterAnchor-contract-IERC20Token-bool-}

disables or enables adding liquidity for a given reserve on a given pool

can only be called by the contract owner

## Parameters:

- `_poolAnchor`:   pool anchor

- `_reserveToken`: reserve token

- `_disable`:      true to disable, false otherwise

## Function `isPoolSupported(contract IConverterAnchor _poolAnchor) → bool` {#LiquidityProtectionSettings-isPoolSupported-contract-IConverterAnchor-}

checks if protection is supported for the given pool

only standard pools are supported (2 reserves, 50%/50% weights)

note that the pool should still be whitelisted

## Parameters:

- `_poolAnchor`:  anchor of the pool

## Return Values:

- true if the pool is supported, false otherwise

## Event `PoolWhitelistUpdated(contract IConverterAnchor _poolAnchor, bool _added)` {#LiquidityProtectionSettings-PoolWhitelistUpdated-contract-IConverterAnchor-bool-}

triggered when the pool whitelist is updated

## Parameters:

- `_poolAnchor`:  pool anchor

- `_added`:       true if the pool was added to the whitelist, false if it was removed

## Event `SubscriberUpdated(contract ILiquidityProtectionEventsSubscriber _subscriber, bool _added)` {#LiquidityProtectionSettings-SubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-bool-}

triggered when a subscriber is added or removed

## Parameters:

- `_subscriber`:  subscriber

- `_added`:       true if the subscriber was added, false if it was removed

## Event `MinNetworkTokenLiquidityForMintingUpdated(uint256 _prevMin, uint256 _newMin)` {#LiquidityProtectionSettings-MinNetworkTokenLiquidityForMintingUpdated-uint256-uint256-}

triggered when the minimum amount of network token liquidity to allow minting is updated

## Parameters:

- `_prevMin`:  previous minimum amount of network token liquidity for minting

- `_newMin`:   new minimum amount of network token liquidity for minting

## Event `DefaultNetworkTokenMintingLimitUpdated(uint256 _prevDefault, uint256 _newDefault)` {#LiquidityProtectionSettings-DefaultNetworkTokenMintingLimitUpdated-uint256-uint256-}

triggered when the default network token minting limit is updated

## Parameters:

- `_prevDefault`:  previous default network token minting limit

- `_newDefault`:   new default network token minting limit

## Event `NetworkTokenMintingLimitUpdated(contract IConverterAnchor _poolAnchor, uint256 _prevLimit, uint256 _newLimit)` {#LiquidityProtectionSettings-NetworkTokenMintingLimitUpdated-contract-IConverterAnchor-uint256-uint256-}

triggered when a pool network token minting limit is updated

## Parameters:

- `_poolAnchor`:   pool anchor

- `_prevLimit`:    previous limit

- `_newLimit`:     new limit

## Event `ProtectionDelaysUpdated(uint256 _prevMinProtectionDelay, uint256 _newMinProtectionDelay, uint256 _prevMaxProtectionDelay, uint256 _newMaxProtectionDelay)` {#LiquidityProtectionSettings-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-}

triggered when the protection delays are updated

## Parameters:

- `_prevMinProtectionDelay`:  previous seconds until the protection starts

- `_newMinProtectionDelay`:   new seconds until the protection starts

- `_prevMaxProtectionDelay`:  previous seconds until full protection

- `_newMaxProtectionDelay`:   new seconds until full protection

## Event `MinNetworkCompensationUpdated(uint256 _prevMinNetworkCompensation, uint256 _newMinNetworkCompensation)` {#LiquidityProtectionSettings-MinNetworkCompensationUpdated-uint256-uint256-}

triggered when the minimum network token compensation is updated

## Parameters:

- `_prevMinNetworkCompensation`:  previous minimum network token compensation

- `_newMinNetworkCompensation`:   new minimum network token compensation

## Event `LockDurationUpdated(uint256 _prevLockDuration, uint256 _newLockDuration)` {#LiquidityProtectionSettings-LockDurationUpdated-uint256-uint256-}

triggered when the network token lock duration is updated

## Parameters:

- `_prevLockDuration`:  previous network token lock duration, in seconds

- `_newLockDuration`:   new network token lock duration, in seconds

## Event `AverageRateMaxDeviationUpdated(uint32 _prevAverageRateMaxDeviation, uint32 _newAverageRateMaxDeviation)` {#LiquidityProtectionSettings-AverageRateMaxDeviationUpdated-uint32-uint32-}

triggered when the maximum deviation of the average rate from the spot rate is updated

## Parameters:

- `_prevAverageRateMaxDeviation`: previous maximum deviation of the average rate from the spot rate

- `_newAverageRateMaxDeviation`:  new maximum deviation of the average rate from the spot rate

## Event `AddLiquidityDisabled(contract IConverterAnchor _poolAnchor, contract IERC20Token _reserveToken, bool _disabled)` {#LiquidityProtectionSettings-AddLiquidityDisabled-contract-IConverterAnchor-contract-IERC20Token-bool-}

triggered when adding liquidity is disabled or enabled for a given reserve on a given pool

## Parameters:

- `_poolAnchor`:   pool anchor

- `_reserveToken`: reserve token

- `_disabled`:     true if disabled, false otherwise
