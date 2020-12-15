# Functions:

- [`addPoolToWhitelist(contract IConverterAnchor _anchor)`](#ILiquidityProtectionStore-addPoolToWhitelist-contract-IConverterAnchor-)

- [`removePoolFromWhitelist(contract IConverterAnchor _anchor)`](#ILiquidityProtectionStore-removePoolFromWhitelist-contract-IConverterAnchor-)

- [`isPoolWhitelisted(contract IConverterAnchor _anchor)`](#ILiquidityProtectionStore-isPoolWhitelisted-contract-IConverterAnchor-)

- [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](#ILiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-)

- [`protectedLiquidity(uint256 _id)`](#ILiquidityProtectionStore-protectedLiquidity-uint256-)

- [`addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp)`](#ILiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)

- [`updateProtectedLiquidityAmounts(uint256 _id, uint256 _poolNewAmount, uint256 _reserveNewAmount)`](#ILiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-)

- [`removeProtectedLiquidity(uint256 _id)`](#ILiquidityProtectionStore-removeProtectedLiquidity-uint256-)

- [`lockedBalance(address _provider, uint256 _index)`](#ILiquidityProtectionStore-lockedBalance-address-uint256-)

- [`lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex)`](#ILiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-)

- [`addLockedBalance(address _provider, uint256 _reserveAmount, uint256 _expirationTime)`](#ILiquidityProtectionStore-addLockedBalance-address-uint256-uint256-)

- [`removeLockedBalance(address _provider, uint256 _index)`](#ILiquidityProtectionStore-removeLockedBalance-address-uint256-)

- [`systemBalance(contract IERC20Token _poolToken)`](#ILiquidityProtectionStore-systemBalance-contract-IERC20Token-)

- [`incSystemBalance(contract IERC20Token _poolToken, uint256 _poolAmount)`](#ILiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-)

- [`decSystemBalance(contract IERC20Token _poolToken, uint256 _poolAmount)`](#ILiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-)

# Function `addPoolToWhitelist(contract IConverterAnchor _anchor)` {#ILiquidityProtectionStore-addPoolToWhitelist-contract-IConverterAnchor-}

No description

# Function `removePoolFromWhitelist(contract IConverterAnchor _anchor)` {#ILiquidityProtectionStore-removePoolFromWhitelist-contract-IConverterAnchor-}

No description

# Function `isPoolWhitelisted(contract IConverterAnchor _anchor) → bool` {#ILiquidityProtectionStore-isPoolWhitelisted-contract-IConverterAnchor-}

No description

# Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` {#ILiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-}

No description

# Function `protectedLiquidity(uint256 _id) → address, contract IDSToken, contract IERC20Token, uint256, uint256, uint256, uint256, uint256` {#ILiquidityProtectionStore-protectedLiquidity-uint256-}

No description

# Function `addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp) → uint256` {#ILiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-}

No description

# Function `updateProtectedLiquidityAmounts(uint256 _id, uint256 _poolNewAmount, uint256 _reserveNewAmount)` {#ILiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-}

No description

# Function `removeProtectedLiquidity(uint256 _id)` {#ILiquidityProtectionStore-removeProtectedLiquidity-uint256-}

No description

# Function `lockedBalance(address _provider, uint256 _index) → uint256, uint256` {#ILiquidityProtectionStore-lockedBalance-address-uint256-}

No description

# Function `lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex) → uint256[], uint256[]` {#ILiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-}

No description

# Function `addLockedBalance(address _provider, uint256 _reserveAmount, uint256 _expirationTime) → uint256` {#ILiquidityProtectionStore-addLockedBalance-address-uint256-uint256-}

No description

# Function `removeLockedBalance(address _provider, uint256 _index)` {#ILiquidityProtectionStore-removeLockedBalance-address-uint256-}

No description

# Function `systemBalance(contract IERC20Token _poolToken) → uint256` {#ILiquidityProtectionStore-systemBalance-contract-IERC20Token-}

No description

# Function `incSystemBalance(contract IERC20Token _poolToken, uint256 _poolAmount)` {#ILiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-}

No description

# Function `decSystemBalance(contract IERC20Token _poolToken, uint256 _poolAmount)` {#ILiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-}

No description
