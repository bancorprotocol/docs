# Functions:

- [`constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)`](#TestLiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-)

- [`protectedAmountPlusFeeTest(uint256 poolAmount, uint256 poolRateN, uint256 poolRateD, uint256 addRateN, uint256 addRateD, uint256 removeRateN, uint256 removeRateD)`](#TestLiquidityProtection-protectedAmountPlusFeeTest-uint256-uint256-uint256-uint256-uint256-uint256-uint256-)

- [`impLossTest(uint256 initialRateN, uint256 initialRateD, uint256 currentRateN, uint256 currentRateD)`](#TestLiquidityProtection-impLossTest-uint256-uint256-uint256-uint256-)

- [`compensationAmountTest(uint256 amount, uint256 total, uint256 lossN, uint256 lossD, uint256 levelN, uint256 levelD)`](#TestLiquidityProtection-compensationAmountTest-uint256-uint256-uint256-uint256-uint256-uint256-)

- [`averageRateTest(contract IDSToken poolToken, contract IReserveToken reserveToken)`](#TestLiquidityProtection-averageRateTest-contract-IDSToken-contract-IReserveToken-)

- [`removeLiquidityTargetAmountTest(uint256 poolTokenRateN, uint256 poolTokenRateD, uint256 poolAmount, uint256 reserveAmount, uint128 addSpotRateN, uint128 addSpotRateD, uint128 removeSpotRateN, uint128 removeSpotRateD, uint128 removeAverageRateN, uint128 removeAverageRateD, uint256 addTimestamp, uint256 removeTimestamp)`](#TestLiquidityProtection-removeLiquidityTargetAmountTest-uint256-uint256-uint256-uint256-uint128-uint128-uint128-uint128-uint128-uint128-uint256-uint256-)

## Function `constructor(contract ILiquidityProtectionSettings settings, contract ILiquidityProtectionStore store, contract ILiquidityProtectionStats stats, contract ILiquidityProtectionSystemStore systemStore, contract ITokenHolder wallet, contract ITokenGovernance networkTokenGovernance, contract ITokenGovernance govTokenGovernance, contract ICheckpointStore lastRemoveCheckpointStore)` {#TestLiquidityProtection-constructor-contract-ILiquidityProtectionSettings-contract-ILiquidityProtectionStore-contract-ILiquidityProtectionStats-contract-ILiquidityProtectionSystemStore-contract-ITokenHolder-contract-ITokenGovernance-contract-ITokenGovernance-contract-ICheckpointStore-}

No description

## Function `protectedAmountPlusFeeTest(uint256 poolAmount, uint256 poolRateN, uint256 poolRateD, uint256 addRateN, uint256 addRateD, uint256 removeRateN, uint256 removeRateD) → uint256` {#TestLiquidityProtection-protectedAmountPlusFeeTest-uint256-uint256-uint256-uint256-uint256-uint256-uint256-}

No description

## Function `impLossTest(uint256 initialRateN, uint256 initialRateD, uint256 currentRateN, uint256 currentRateD) → uint256, uint256` {#TestLiquidityProtection-impLossTest-uint256-uint256-uint256-uint256-}

No description

## Function `compensationAmountTest(uint256 amount, uint256 total, uint256 lossN, uint256 lossD, uint256 levelN, uint256 levelD) → uint256` {#TestLiquidityProtection-compensationAmountTest-uint256-uint256-uint256-uint256-uint256-uint256-}

No description

## Function `averageRateTest(contract IDSToken poolToken, contract IReserveToken reserveToken) → uint256, uint256` {#TestLiquidityProtection-averageRateTest-contract-IDSToken-contract-IReserveToken-}

No description

## Function `removeLiquidityTargetAmountTest(uint256 poolTokenRateN, uint256 poolTokenRateD, uint256 poolAmount, uint256 reserveAmount, uint128 addSpotRateN, uint128 addSpotRateD, uint128 removeSpotRateN, uint128 removeSpotRateD, uint128 removeAverageRateN, uint128 removeAverageRateD, uint256 addTimestamp, uint256 removeTimestamp) → uint256` {#TestLiquidityProtection-removeLiquidityTargetAmountTest-uint256-uint256-uint256-uint256-uint128-uint128-uint128-uint128-uint128-uint128-uint256-uint256-}

No description
