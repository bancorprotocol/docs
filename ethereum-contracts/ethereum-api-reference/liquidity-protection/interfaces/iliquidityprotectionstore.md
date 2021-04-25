# Functions:

- [`withdrawTokens(contract IReserveToken _token, address _to, uint256 _amount)`](#ILiquidityProtectionStore-withdrawTokens-contract-IReserveToken-address-uint256-)

- [`protectedLiquidity(uint256 _id)`](#ILiquidityProtectionStore-protectedLiquidity-uint256-)

- [`addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IReserveToken _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp)`](#ILiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-)

- [`updateProtectedLiquidityAmounts(uint256 _id, uint256 _poolNewAmount, uint256 _reserveNewAmount)`](#ILiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-)

- [`removeProtectedLiquidity(uint256 _id)`](#ILiquidityProtectionStore-removeProtectedLiquidity-uint256-)

- [`lockedBalance(address _provider, uint256 _index)`](#ILiquidityProtectionStore-lockedBalance-address-uint256-)

- [`lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex)`](#ILiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-)

- [`addLockedBalance(address _provider, uint256 _reserveAmount, uint256 _expirationTime)`](#ILiquidityProtectionStore-addLockedBalance-address-uint256-uint256-)

- [`removeLockedBalance(address _provider, uint256 _index)`](#ILiquidityProtectionStore-removeLockedBalance-address-uint256-)

- [`systemBalance(contract IReserveToken _poolToken)`](#ILiquidityProtectionStore-systemBalance-contract-IReserveToken-)

- [`incSystemBalance(contract IReserveToken _poolToken, uint256 _poolAmount)`](#ILiquidityProtectionStore-incSystemBalance-contract-IReserveToken-uint256-)

- [`decSystemBalance(contract IReserveToken _poolToken, uint256 _poolAmount)`](#ILiquidityProtectionStore-decSystemBalance-contract-IReserveToken-uint256-)

## Function `withdrawTokens(contract IReserveToken _token, address _to, uint256 _amount)` {#ILiquidityProtectionStore-withdrawTokens-contract-IReserveToken-address-uint256-}

No description

## Function `protectedLiquidity(uint256 _id) → address, contract IDSToken, contract IReserveToken, uint256, uint256, uint256, uint256, uint256` {#ILiquidityProtectionStore-protectedLiquidity-uint256-}

No description

## Function `addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IReserveToken _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp) → uint256` {#ILiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IReserveToken-uint256-uint256-uint256-uint256-uint256-}

No description

## Function `updateProtectedLiquidityAmounts(uint256 _id, uint256 _poolNewAmount, uint256 _reserveNewAmount)` {#ILiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-}

No description

## Function `removeProtectedLiquidity(uint256 _id)` {#ILiquidityProtectionStore-removeProtectedLiquidity-uint256-}

No description

## Function `lockedBalance(address _provider, uint256 _index) → uint256, uint256` {#ILiquidityProtectionStore-lockedBalance-address-uint256-}

No description

## Function `lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex) → uint256[], uint256[]` {#ILiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-}

No description

## Function `addLockedBalance(address _provider, uint256 _reserveAmount, uint256 _expirationTime) → uint256` {#ILiquidityProtectionStore-addLockedBalance-address-uint256-uint256-}

No description

## Function `removeLockedBalance(address _provider, uint256 _index)` {#ILiquidityProtectionStore-removeLockedBalance-address-uint256-}

No description

## Function `systemBalance(contract IReserveToken _poolToken) → uint256` {#ILiquidityProtectionStore-systemBalance-contract-IReserveToken-}

No description

## Function `incSystemBalance(contract IReserveToken _poolToken, uint256 _poolAmount)` {#ILiquidityProtectionStore-incSystemBalance-contract-IReserveToken-uint256-}

No description

## Function `decSystemBalance(contract IReserveToken _poolToken, uint256 _poolAmount)` {#ILiquidityProtectionStore-decSystemBalance-contract-IReserveToken-uint256-}

No description
