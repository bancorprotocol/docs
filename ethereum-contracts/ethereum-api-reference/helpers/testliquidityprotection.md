# Functions:

- [`constructor(contract ILiquidityProtectionSettings _settings, contract ILiquidityProtectionStore _store, contract ITokenGovernance _networkTokenGovernance, contract ITokenGovernance _govTokenGovernance, contract ICheckpointStore _lastRemoveCheckpointStore)`](#TestLiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-)

- [`protectedAmountPlusFeeTest(uint256 _poolAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _addRateN, uint256 _addRateD, uint256 _removeRateN, uint256 _removeRateD)`](#TestLiquidityProtection-protectedAmountPlusFeeTest-uint256-uint256-uint256-uint256-uint256-uint256-uint256-)

- [`impLossTest(uint256 _initialRateN, uint256 _initialRateD, uint256 _currentRateN, uint256 _currentRateD)`](#TestLiquidityProtection-impLossTest-uint256-uint256-uint256-uint256-)

- [`compensationAmountTest(uint256 _amount, uint256 _total, uint256 _lossN, uint256 _lossD, uint256 _levelN, uint256 _levelD)`](#TestLiquidityProtection-compensationAmountTest-uint256-uint256-uint256-uint256-uint256-uint256-)

- [`averageRateTest(contract IDSToken _poolToken, contract IERC20Token _reserveToken)`](#TestLiquidityProtection-averageRateTest-contract-IDSToken-contract-IERC20Token-)

- [`removeLiquidityTargetAmountTest(uint256 _poolTokenRateN, uint256 _poolTokenRateD, uint256 _poolAmount, uint256 _reserveAmount, uint128 _addSpotRateN, uint128 _addSpotRateD, uint128 _removeSpotRateN, uint128 _removeSpotRateD, uint128 _removeAverageRateN, uint128 _removeAverageRateD, uint256 _addTimestamp, uint256 _removeTimestamp)`](#TestLiquidityProtection-removeLiquidityTargetAmountTest-uint256-uint256-uint256-uint256-uint128-uint128-uint128-uint128-uint128-uint128-uint256-uint256-)

# Function `constructor(contract ILiquidityProtectionSettings _settings, contract ILiquidityProtectionStore _store, contract ITokenGovernance _networkTokenGovernance, contract ITokenGovernance _govTokenGovernance, contract ICheckpointStore _lastRemoveCheckpointStore)` {#TestLiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-}

No description

# Function `protectedAmountPlusFeeTest(uint256 _poolAmount, uint256 _poolRateN, uint256 _poolRateD, uint256 _addRateN, uint256 _addRateD, uint256 _removeRateN, uint256 _removeRateD) → uint256` {#TestLiquidityProtection-protectedAmountPlusFeeTest-uint256-uint256-uint256-uint256-uint256-uint256-uint256-}

No description

# Function `impLossTest(uint256 _initialRateN, uint256 _initialRateD, uint256 _currentRateN, uint256 _currentRateD) → uint256, uint256` {#TestLiquidityProtection-impLossTest-uint256-uint256-uint256-uint256-}

No description

# Function `compensationAmountTest(uint256 _amount, uint256 _total, uint256 _lossN, uint256 _lossD, uint256 _levelN, uint256 _levelD) → uint256` {#TestLiquidityProtection-compensationAmountTest-uint256-uint256-uint256-uint256-uint256-uint256-}

No description

# Function `averageRateTest(contract IDSToken _poolToken, contract IERC20Token _reserveToken) → uint256, uint256` {#TestLiquidityProtection-averageRateTest-contract-IDSToken-contract-IERC20Token-}

No description

# Function `removeLiquidityTargetAmountTest(uint256 _poolTokenRateN, uint256 _poolTokenRateD, uint256 _poolAmount, uint256 _reserveAmount, uint128 _addSpotRateN, uint128 _addSpotRateD, uint128 _removeSpotRateN, uint128 _removeSpotRateD, uint128 _removeAverageRateN, uint128 _removeAverageRateD, uint256 _addTimestamp, uint256 _removeTimestamp) → uint256` {#TestLiquidityProtection-removeLiquidityTargetAmountTest-uint256-uint256-uint256-uint256-uint128-uint128-uint128-uint128-uint128-uint128-uint256-uint256-}

No description
