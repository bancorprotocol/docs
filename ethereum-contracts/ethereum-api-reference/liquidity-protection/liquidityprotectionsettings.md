Liquidity Protection Settings contract

# Functions:

- [`constructor(contract IERC20 networkToken, contract IContractRegistry registry)`](#LiquidityProtectionSettings-constructor-contract-IERC20-contract-IContractRegistry-)

- [`networkToken()`](#LiquidityProtectionSettings-networkToken--)

- [`minNetworkTokenLiquidityForMinting()`](#LiquidityProtectionSettings-minNetworkTokenLiquidityForMinting--)

- [`defaultNetworkTokenMintingLimit()`](#LiquidityProtectionSettings-defaultNetworkTokenMintingLimit--)

- [`networkTokenMintingLimits(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSettings-networkTokenMintingLimits-contract-IConverterAnchor-)

- [`addLiquidityDisabled(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken)`](#LiquidityProtectionSettings-addLiquidityDisabled-contract-IConverterAnchor-contract-IReserveToken-)

- [`minProtectionDelay()`](#LiquidityProtectionSettings-minProtectionDelay--)

- [`maxProtectionDelay()`](#LiquidityProtectionSettings-maxProtectionDelay--)

- [`minNetworkCompensation()`](#LiquidityProtectionSettings-minNetworkCompensation--)

- [`lockDuration()`](#LiquidityProtectionSettings-lockDuration--)

- [`averageRateMaxDeviation()`](#LiquidityProtectionSettings-averageRateMaxDeviation--)

- [`addPoolToWhitelist(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSettings-addPoolToWhitelist-contract-IConverterAnchor-)

- [`removePoolFromWhitelist(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSettings-removePoolFromWhitelist-contract-IConverterAnchor-)

- [`isPoolWhitelisted(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSettings-isPoolWhitelisted-contract-IConverterAnchor-)

- [`poolWhitelist()`](#LiquidityProtectionSettings-poolWhitelist--)

- [`addSubscriber(contract ILiquidityProtectionEventsSubscriber subscriber)`](#LiquidityProtectionSettings-addSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

- [`removeSubscriber(contract ILiquidityProtectionEventsSubscriber subscriber)`](#LiquidityProtectionSettings-removeSubscriber-contract-ILiquidityProtectionEventsSubscriber-)

- [`subscribers()`](#LiquidityProtectionSettings-subscribers--)

- [`setMinNetworkTokenLiquidityForMinting(uint256 amount)`](#LiquidityProtectionSettings-setMinNetworkTokenLiquidityForMinting-uint256-)

- [`setDefaultNetworkTokenMintingLimit(uint256 amount)`](#LiquidityProtectionSettings-setDefaultNetworkTokenMintingLimit-uint256-)

- [`setNetworkTokenMintingLimit(contract IConverterAnchor poolAnchor, uint256 amount)`](#LiquidityProtectionSettings-setNetworkTokenMintingLimit-contract-IConverterAnchor-uint256-)

- [`setProtectionDelays(uint256 minDelay, uint256 maxDelay)`](#LiquidityProtectionSettings-setProtectionDelays-uint256-uint256-)

- [`setMinNetworkCompensation(uint256 amount)`](#LiquidityProtectionSettings-setMinNetworkCompensation-uint256-)

- [`setLockDuration(uint256 duration)`](#LiquidityProtectionSettings-setLockDuration-uint256-)

- [`setAverageRateMaxDeviation(uint32 deviation)`](#LiquidityProtectionSettings-setAverageRateMaxDeviation-uint32-)

- [`disableAddLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, bool disable)`](#LiquidityProtectionSettings-disableAddLiquidity-contract-IConverterAnchor-contract-IReserveToken-bool-)

- [`isPoolSupported(contract IConverterAnchor poolAnchor)`](#LiquidityProtectionSettings-isPoolSupported-contract-IConverterAnchor-)

# Events:

- [`PoolWhitelistUpdated(contract IConverterAnchor poolAnchor, bool added)`](#LiquidityProtectionSettings-PoolWhitelistUpdated-contract-IConverterAnchor-bool-)

- [`SubscriberUpdated(contract ILiquidityProtectionEventsSubscriber subscriber, bool added)`](#LiquidityProtectionSettings-SubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-bool-)

- [`MinNetworkTokenLiquidityForMintingUpdated(uint256 prevMin, uint256 newMin)`](#LiquidityProtectionSettings-MinNetworkTokenLiquidityForMintingUpdated-uint256-uint256-)

- [`DefaultNetworkTokenMintingLimitUpdated(uint256 prevDefault, uint256 newDefault)`](#LiquidityProtectionSettings-DefaultNetworkTokenMintingLimitUpdated-uint256-uint256-)

- [`NetworkTokenMintingLimitUpdated(contract IConverterAnchor poolAnchor, uint256 prevLimit, uint256 newLimit)`](#LiquidityProtectionSettings-NetworkTokenMintingLimitUpdated-contract-IConverterAnchor-uint256-uint256-)

- [`ProtectionDelaysUpdated(uint256 prevMinProtectionDelay, uint256 newMinProtectionDelay, uint256 prevMaxProtectionDelay, uint256 newMaxProtectionDelay)`](#LiquidityProtectionSettings-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-)

- [`MinNetworkCompensationUpdated(uint256 prevMinNetworkCompensation, uint256 newMinNetworkCompensation)`](#LiquidityProtectionSettings-MinNetworkCompensationUpdated-uint256-uint256-)

- [`LockDurationUpdated(uint256 prevLockDuration, uint256 newLockDuration)`](#LiquidityProtectionSettings-LockDurationUpdated-uint256-uint256-)

- [`AverageRateMaxDeviationUpdated(uint32 prevAverageRateMaxDeviation, uint32 newAverageRateMaxDeviation)`](#LiquidityProtectionSettings-AverageRateMaxDeviationUpdated-uint32-uint32-)

- [`AddLiquidityDisabled(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, bool disabled)`](#LiquidityProtectionSettings-AddLiquidityDisabled-contract-IConverterAnchor-contract-IReserveToken-bool-)

## Function `constructor(contract IERC20 networkToken, contract IContractRegistry registry)` {#LiquidityProtectionSettings-constructor-contract-IERC20-contract-IContractRegistry-}

initializes a new LiquidityProtectionSettings contract

## Parameters:

- `registry`: contract registry

- `networkToken`: the network token

## Function `networkToken() → contract IERC20` {#LiquidityProtectionSettings-networkToken--}

returns the network token

## Return Values:

- the network token

## Function `minNetworkTokenLiquidityForMinting() → uint256` {#LiquidityProtectionSettings-minNetworkTokenLiquidityForMinting--}

returns the minimum network token liquidity for minting

## Return Values:

- the minimum network token liquidity for minting

## Function `defaultNetworkTokenMintingLimit() → uint256` {#LiquidityProtectionSettings-defaultNetworkTokenMintingLimit--}

returns the default network token minting limit

## Return Values:

- the default network token minting limit

## Function `networkTokenMintingLimits(contract IConverterAnchor poolAnchor) → uint256` {#LiquidityProtectionSettings-networkTokenMintingLimits-contract-IConverterAnchor-}

returns the network token minting limit for a given pool

## Parameters:

- `poolAnchor`: pool anchor

## Return Values:

- the network token minting limit for a given pool

## Function `addLiquidityDisabled(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken) → bool` {#LiquidityProtectionSettings-addLiquidityDisabled-contract-IConverterAnchor-contract-IReserveToken-}

returns the permission of adding liquidity for a given reserve on a given pool

## Parameters:

- `poolAnchor`: pool anchor

- `reserveToken`: reserve token

## Return Values:

- true if adding liquidity is disabled, false otherwise

## Function `minProtectionDelay() → uint256` {#LiquidityProtectionSettings-minProtectionDelay--}

returns the minimum number of seconds until any protection is in effect

## Return Values:

- the minimum number of seconds until any protection is in effect

## Function `maxProtectionDelay() → uint256` {#LiquidityProtectionSettings-maxProtectionDelay--}

returns the maximum number of seconds until full protection is in effect

## Return Values:

- the maximum number of seconds until full protection is in effect

## Function `minNetworkCompensation() → uint256` {#LiquidityProtectionSettings-minNetworkCompensation--}

returns the minimum amount of network tokens that the system can mint as compensation for base token losses

## Return Values:

- the minimum amount of network tokens that the system can mint as compensation for base token losses

## Function `lockDuration() → uint256` {#LiquidityProtectionSettings-lockDuration--}

returns the number of seconds from liquidation to full network token release

## Return Values:

- the number of seconds from liquidation to full network token release

## Function `averageRateMaxDeviation() → uint32` {#LiquidityProtectionSettings-averageRateMaxDeviation--}

returns the maximum deviation of the average rate from the spot rate

## Return Values:

- the maximum deviation of the average rate from the spot rate

## Function `addPoolToWhitelist(contract IConverterAnchor poolAnchor)` {#LiquidityProtectionSettings-addPoolToWhitelist-contract-IConverterAnchor-}

adds a pool to the whitelist

can only be called by the contract owner

## Parameters:

- `poolAnchor`: pool anchor

## Function `removePoolFromWhitelist(contract IConverterAnchor poolAnchor)` {#LiquidityProtectionSettings-removePoolFromWhitelist-contract-IConverterAnchor-}

removes a pool from the whitelist

can only be called by the contract owner

## Parameters:

- `poolAnchor`: pool anchor

## Function `isPoolWhitelisted(contract IConverterAnchor poolAnchor) → bool` {#LiquidityProtectionSettings-isPoolWhitelisted-contract-IConverterAnchor-}

checks whether a given pool is whitelisted

## Parameters:

- `poolAnchor`: pool anchor

## Return Values:

- true if the given pool is whitelisted, false otherwise

## Function `poolWhitelist() → address[]` {#LiquidityProtectionSettings-poolWhitelist--}

returns pools whitelist

## Return Values:

- pools whitelist

## Function `addSubscriber(contract ILiquidityProtectionEventsSubscriber subscriber)` {#LiquidityProtectionSettings-addSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

adds a subscriber

can only be called by the contract owner

## Parameters:

- `subscriber`: subscriber address

## Function `removeSubscriber(contract ILiquidityProtectionEventsSubscriber subscriber)` {#LiquidityProtectionSettings-removeSubscriber-contract-ILiquidityProtectionEventsSubscriber-}

removes a subscriber

can only be called by the contract owner

## Parameters:

- `subscriber`:    subscriber address

## Function `subscribers() → address[]` {#LiquidityProtectionSettings-subscribers--}

returns subscribers list

## Return Values:

- subscribers list

## Function `setMinNetworkTokenLiquidityForMinting(uint256 amount)` {#LiquidityProtectionSettings-setMinNetworkTokenLiquidityForMinting-uint256-}

updates the minimum amount of network token liquidity to allow minting

can only be called by the contract owner

## Parameters:

- `amount`: the minimum amount of network token liquidity to allow minting

## Function `setDefaultNetworkTokenMintingLimit(uint256 amount)` {#LiquidityProtectionSettings-setDefaultNetworkTokenMintingLimit-uint256-}

updates the default amount of network token that the system can mint into each pool

can only be called by the contract owner

## Parameters:

- `amount`: the default amount of network token that the system can mint into each pool

## Function `setNetworkTokenMintingLimit(contract IConverterAnchor poolAnchor, uint256 amount)` {#LiquidityProtectionSettings-setNetworkTokenMintingLimit-contract-IConverterAnchor-uint256-}

updates the amount of network tokens that the system can mint into a specific pool

can only be called by the contract owner

## Parameters:

- `poolAnchor`: pool anchor

- `amount`: the amount of network tokens that the system can mint into a specific pool

## Function `setProtectionDelays(uint256 minDelay, uint256 maxDelay)` {#LiquidityProtectionSettings-setProtectionDelays-uint256-uint256-}

updates the protection delays

can only be called by the contract owner

## Parameters:

- `minDelay`: seconds until the protection starts

- `maxDelay`: seconds until full protection

## Function `setMinNetworkCompensation(uint256 amount)` {#LiquidityProtectionSettings-setMinNetworkCompensation-uint256-}

updates the minimum amount of network token compensation

can only be called by the contract owner

## Parameters:

- `amount`: the minimum amount of network token compensation

## Function `setLockDuration(uint256 duration)` {#LiquidityProtectionSettings-setLockDuration-uint256-}

updates the network token lock duration

can only be called by the contract owner

## Parameters:

- `duration`: network token lock duration, in seconds

## Function `setAverageRateMaxDeviation(uint32 deviation)` {#LiquidityProtectionSettings-setAverageRateMaxDeviation-uint32-}

sets the maximum deviation of the average rate from the spot rate

can only be called by the contract owner

## Parameters:

- `deviation`: maximum deviation of the average rate from the spot rate

## Function `disableAddLiquidity(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, bool disable)` {#LiquidityProtectionSettings-disableAddLiquidity-contract-IConverterAnchor-contract-IReserveToken-bool-}

disables or enables adding liquidity for a given reserve on a given pool

can only be called by the contract owner

## Parameters:

- `poolAnchor`: pool anchor

- `reserveToken`: reserve token

- `disable`: true to disable, false otherwise

## Function `isPoolSupported(contract IConverterAnchor poolAnchor) → bool` {#LiquidityProtectionSettings-isPoolSupported-contract-IConverterAnchor-}

checks if protection is supported for the given pool

only standard pools are supported (2 reserves, 50%/50% weights)

note that the pool should still be whitelisted

## Parameters:

- `poolAnchor`: anchor of the pool

## Return Values:

- true if the pool is supported, false otherwise

## Event `PoolWhitelistUpdated(contract IConverterAnchor poolAnchor, bool added)` {#LiquidityProtectionSettings-PoolWhitelistUpdated-contract-IConverterAnchor-bool-}

triggered when the pool whitelist is updated

## Parameters:

- `poolAnchor`: pool anchor

- `added`: true if the pool was added to the whitelist, false if it was removed

## Event `SubscriberUpdated(contract ILiquidityProtectionEventsSubscriber subscriber, bool added)` {#LiquidityProtectionSettings-SubscriberUpdated-contract-ILiquidityProtectionEventsSubscriber-bool-}

triggered when a subscriber is added or removed

## Parameters:

- `subscriber`: subscriber

- `added`: true if the subscriber was added, false if it was removed

## Event `MinNetworkTokenLiquidityForMintingUpdated(uint256 prevMin, uint256 newMin)` {#LiquidityProtectionSettings-MinNetworkTokenLiquidityForMintingUpdated-uint256-uint256-}

triggered when the minimum amount of network token liquidity to allow minting is updated

## Parameters:

- `prevMin`: previous minimum amount of network token liquidity for minting

- `newMin`: new minimum amount of network token liquidity for minting

## Event `DefaultNetworkTokenMintingLimitUpdated(uint256 prevDefault, uint256 newDefault)` {#LiquidityProtectionSettings-DefaultNetworkTokenMintingLimitUpdated-uint256-uint256-}

triggered when the default network token minting limit is updated

## Parameters:

- `prevDefault`: previous default network token minting limit

- `newDefault`: new default network token minting limit

## Event `NetworkTokenMintingLimitUpdated(contract IConverterAnchor poolAnchor, uint256 prevLimit, uint256 newLimit)` {#LiquidityProtectionSettings-NetworkTokenMintingLimitUpdated-contract-IConverterAnchor-uint256-uint256-}

triggered when a pool network token minting limit is updated

## Parameters:

- `poolAnchor`: pool anchor

- `prevLimit`: previous limit

- `newLimit`: new limit

## Event `ProtectionDelaysUpdated(uint256 prevMinProtectionDelay, uint256 newMinProtectionDelay, uint256 prevMaxProtectionDelay, uint256 newMaxProtectionDelay)` {#LiquidityProtectionSettings-ProtectionDelaysUpdated-uint256-uint256-uint256-uint256-}

triggered when the protection delays are updated

## Parameters:

- `prevMinProtectionDelay`: previous seconds until the protection starts

- `newMinProtectionDelay`: new seconds until the protection starts

- `prevMaxProtectionDelay`: previous seconds until full protection

- `newMaxProtectionDelay`: new seconds until full protection

## Event `MinNetworkCompensationUpdated(uint256 prevMinNetworkCompensation, uint256 newMinNetworkCompensation)` {#LiquidityProtectionSettings-MinNetworkCompensationUpdated-uint256-uint256-}

triggered when the minimum network token compensation is updated

## Parameters:

- `prevMinNetworkCompensation`: previous minimum network token compensation

- `newMinNetworkCompensation`: new minimum network token compensation

## Event `LockDurationUpdated(uint256 prevLockDuration, uint256 newLockDuration)` {#LiquidityProtectionSettings-LockDurationUpdated-uint256-uint256-}

triggered when the network token lock duration is updated

## Parameters:

- `prevLockDuration`: previous network token lock duration, in seconds

- `newLockDuration`: new network token lock duration, in seconds

## Event `AverageRateMaxDeviationUpdated(uint32 prevAverageRateMaxDeviation, uint32 newAverageRateMaxDeviation)` {#LiquidityProtectionSettings-AverageRateMaxDeviationUpdated-uint32-uint32-}

triggered when the maximum deviation of the average rate from the spot rate is updated

## Parameters:

- `prevAverageRateMaxDeviation`: previous maximum deviation of the average rate from the spot rate

- `newAverageRateMaxDeviation`: new maximum deviation of the average rate from the spot rate

## Event `AddLiquidityDisabled(contract IConverterAnchor poolAnchor, contract IReserveToken reserveToken, bool disabled)` {#LiquidityProtectionSettings-AddLiquidityDisabled-contract-IConverterAnchor-contract-IReserveToken-bool-}

triggered when adding liquidity is disabled or enabled for a given reserve on a given pool

## Parameters:

- `poolAnchor`: pool anchor

- `reserveToken`: reserve token

- `disabled`: true if disabled, false otherwise
