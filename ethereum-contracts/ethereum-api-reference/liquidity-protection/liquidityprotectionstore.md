This contract serves as the storage of the liquidity protection mechanism.

It holds the data and tokens, and it is generally non-upgradable.

# Functions:

- [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](#LiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-)

- [`protectedLiquidityCount(address _provider)`](#LiquidityProtectionStore-protectedLiquidityCount-address-)

- [`protectedLiquidityIds(address _provider)`](#LiquidityProtectionStore-protectedLiquidityIds-address-)

- [`protectedLiquidityId(address _provider, uint256 _index)`](#LiquidityProtectionStore-protectedLiquidityId-address-uint256-)

- [`protectedLiquidity(uint256 _id)`](#LiquidityProtectionStore-protectedLiquidity-uint256-)

- [`addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp)`](#LiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)

- [`updateProtectedLiquidityAmounts(uint256 _id, uint256 _newPoolAmount, uint256 _newReserveAmount)`](#LiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-)

- [`removeProtectedLiquidity(uint256 _id)`](#LiquidityProtectionStore-removeProtectedLiquidity-uint256-)

- [`lockedBalanceCount(address _provider)`](#LiquidityProtectionStore-lockedBalanceCount-address-)

- [`lockedBalance(address _provider, uint256 _index)`](#LiquidityProtectionStore-lockedBalance-address-uint256-)

- [`lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex)`](#LiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-)

- [`addLockedBalance(address _provider, uint256 _amount, uint256 _expirationTime)`](#LiquidityProtectionStore-addLockedBalance-address-uint256-uint256-)

- [`removeLockedBalance(address _provider, uint256 _index)`](#LiquidityProtectionStore-removeLockedBalance-address-uint256-)

- [`systemBalance(contract IERC20Token _token)`](#LiquidityProtectionStore-systemBalance-contract-IERC20Token-)

- [`incSystemBalance(contract IERC20Token _token, uint256 _amount)`](#LiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-)

- [`decSystemBalance(contract IERC20Token _token, uint256 _amount)`](#LiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-)

- [`totalProtectedPoolAmount(contract IDSToken _poolToken)`](#LiquidityProtectionStore-totalProtectedPoolAmount-contract-IDSToken-)

- [`totalProtectedReserveAmount(contract IDSToken _poolToken, contract IERC20Token _reserveToken)`](#LiquidityProtectionStore-totalProtectedReserveAmount-contract-IDSToken-contract-IERC20Token-)

# Events:

- [`ProtectionAdded(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)`](#LiquidityProtectionStore-ProtectionAdded-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)

- [`ProtectionUpdated(address _provider, uint256 _prevPoolAmount, uint256 _prevReserveAmount, uint256 _newPoolAmount, uint256 _newReserveAmount)`](#LiquidityProtectionStore-ProtectionUpdated-address-uint256-uint256-uint256-uint256-)

- [`ProtectionRemoved(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)`](#LiquidityProtectionStore-ProtectionRemoved-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)

- [`BalanceLocked(address _provider, uint256 _amount, uint256 _expirationTime)`](#LiquidityProtectionStore-BalanceLocked-address-uint256-uint256-)

- [`BalanceUnlocked(address _provider, uint256 _amount)`](#LiquidityProtectionStore-BalanceUnlocked-address-uint256-)

- [`SystemBalanceUpdated(contract IERC20Token _token, uint256 _prevAmount, uint256 _newAmount)`](#LiquidityProtectionStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-)

## Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` {#LiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-}

withdraws tokens held by the contract

can only be called by the contract owner

## Parameters:

- `_token`:   token address

- `_to`:      recipient address

- `_amount`:  amount to withdraw

## Function `protectedLiquidityCount(address _provider) → uint256` {#LiquidityProtectionStore-protectedLiquidityCount-address-}

returns the number of protected liquidities for the given provider

## Parameters:

- `_provider`:    liquidity provider

## Return Values:

- number of protected liquidities

## Function `protectedLiquidityIds(address _provider) → uint256[]` {#LiquidityProtectionStore-protectedLiquidityIds-address-}

returns the list of protected liquidity ids for the given provider

## Parameters:

- `_provider`:    liquidity provider

## Return Values:

- protected liquidity ids

## Function `protectedLiquidityId(address _provider, uint256 _index) → uint256` {#LiquidityProtectionStore-protectedLiquidityId-address-uint256-}

returns the id of a protected liquidity for the given provider at a specific index

## Parameters:

- `_provider`:    liquidity provider

- `_index`:       protected liquidity index

## Return Values:

- protected liquidity id

## Function `protectedLiquidity(uint256 _id) → address, contract IDSToken, contract IERC20Token, uint256, uint256, uint256, uint256, uint256` {#LiquidityProtectionStore-protectedLiquidity-uint256-}

returns an existing protected liquidity details

## Parameters:

- `_id`:  protected liquidity id

## Return Values:

- liquidity provider

- pool token address

- reserve token address

- pool token amount

- reserve token amount

- rate of 1 protected reserve token in units of the other reserve token (numerator)

- rate of 1 protected reserve token in units of the other reserve token (denominator)

## Function `addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp) → uint256` {#LiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-}

adds protected liquidity

can only be called by the contract owner

## Parameters:

- `_provider`:        liquidity provider

- `_poolToken`:       pool token address

- `_reserveToken`:    reserve token address

- `_poolAmount`:      pool token amount

- `_reserveAmount`:   reserve token amount

- `_reserveRateN`:    rate of 1 protected reserve token in units of the other reserve token (numerator)

- `_reserveRateD`:    rate of 1 protected reserve token in units of the other reserve token (denominator)

- `_timestamp`:       timestamp

## Return Values:

- new protected liquidity id

## Function `updateProtectedLiquidityAmounts(uint256 _id, uint256 _newPoolAmount, uint256 _newReserveAmount)` {#LiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-}

updates an existing protected liquidity pool/reserve amounts

can only be called by the contract owner

## Parameters:

- `_id`:                  protected liquidity id

- `_newPoolAmount`:       new pool tokens amount

- `_newReserveAmount`:    new reserve tokens amount

## Function `removeProtectedLiquidity(uint256 _id)` {#LiquidityProtectionStore-removeProtectedLiquidity-uint256-}

removes protected liquidity

can only be called by the contract owner

## Parameters:

- `_id`:  protected liquidity id

## Function `lockedBalanceCount(address _provider) → uint256` {#LiquidityProtectionStore-lockedBalanceCount-address-}

returns the number of network token locked balances for a given provider

## Parameters:

- `_provider`:    locked balances provider

## Return Values:

- the number of network token locked balances

## Function `lockedBalance(address _provider, uint256 _index) → uint256, uint256` {#LiquidityProtectionStore-lockedBalance-address-uint256-}

returns an existing locked network token balance details

## Parameters:

- `_provider`:    locked balances provider

- `_index`:       start index

## Return Values:

- amount of network tokens

- lock expiration time

## Function `lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex) → uint256[], uint256[]` {#LiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-}

returns a range of locked network token balances for a given provider

## Parameters:

- `_provider`:    locked balances provider

- `_startIndex`:  start index

- `_endIndex`:    end index (exclusive)

## Return Values:

- locked amounts

- expiration times

## Function `addLockedBalance(address _provider, uint256 _amount, uint256 _expirationTime) → uint256` {#LiquidityProtectionStore-addLockedBalance-address-uint256-uint256-}

adds new locked network token balance

can only be called by the contract owner

## Parameters:

- `_provider`:        liquidity provider

- `_amount`:          token amount

- `_expirationTime`:  lock expiration time

## Return Values:

- new locked balance index

## Function `removeLockedBalance(address _provider, uint256 _index)` {#LiquidityProtectionStore-removeLockedBalance-address-uint256-}

removes a locked network token balance

can only be called by the contract owner

## Parameters:

- `_provider`:    liquidity provider

- `_index`:       index of the locked balance

## Function `systemBalance(contract IERC20Token _token) → uint256` {#LiquidityProtectionStore-systemBalance-contract-IERC20Token-}

returns the system balance for a given token

## Parameters:

- `_token`:   token address

## Return Values:

- system balance

## Function `incSystemBalance(contract IERC20Token _token, uint256 _amount)` {#LiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-}

increases the system balance for a given token

can only be called by the contract owner

## Parameters:

- `_token`:   token address

- `_amount`:  token amount

## Function `decSystemBalance(contract IERC20Token _token, uint256 _amount)` {#LiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-}

decreases the system balance for a given token

can only be called by the contract owner

## Parameters:

- `_token`:   token address

- `_amount`:  token amount

## Function `totalProtectedPoolAmount(contract IDSToken _poolToken) → uint256` {#LiquidityProtectionStore-totalProtectedPoolAmount-contract-IDSToken-}

returns the total protected pool token amount for a given pool

## Parameters:

- `_poolToken`:   pool token address

## Return Values:

- total protected amount

## Function `totalProtectedReserveAmount(contract IDSToken _poolToken, contract IERC20Token _reserveToken) → uint256` {#LiquidityProtectionStore-totalProtectedReserveAmount-contract-IDSToken-contract-IERC20Token-}

returns the total protected reserve amount for a given pool

## Parameters:

- `_poolToken`:       pool token address

- `_reserveToken`:    reserve token address

## Return Values:

- total protected amount

## Event `ProtectionAdded(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)` {#LiquidityProtectionStore-ProtectionAdded-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-}

triggered when liquidity protection is added

## Parameters:

- `_provider`:        liquidity provider

- `_poolToken`:       pool token address

- `_reserveToken`:    reserve token address

- `_poolAmount`:      amount of pool tokens

- `_reserveAmount`:   amount of reserve tokens

## Event `ProtectionUpdated(address _provider, uint256 _prevPoolAmount, uint256 _prevReserveAmount, uint256 _newPoolAmount, uint256 _newReserveAmount)` {#LiquidityProtectionStore-ProtectionUpdated-address-uint256-uint256-uint256-uint256-}

triggered when liquidity protection is updated

## Parameters:

- `_provider`:            liquidity provider

- `_prevPoolAmount`:      previous amount of pool tokens

- `_prevReserveAmount`:   previous amount of reserve tokens

- `_newPoolAmount`:       new amount of pool tokens

- `_newReserveAmount`:    new amount of reserve tokens

## Event `ProtectionRemoved(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)` {#LiquidityProtectionStore-ProtectionRemoved-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-}

triggered when liquidity protection is removed

## Parameters:

- `_provider`:        liquidity provider

- `_poolToken`:       pool token address

- `_reserveToken`:    reserve token address

- `_poolAmount`:      amount of pool tokens

- `_reserveAmount`:   amount of reserve tokens

## Event `BalanceLocked(address _provider, uint256 _amount, uint256 _expirationTime)` {#LiquidityProtectionStore-BalanceLocked-address-uint256-uint256-}

triggered when network tokens are locked

## Parameters:

- `_provider`:        provider of the network tokens

- `_amount`:          amount of network tokens

- `_expirationTime`:  lock expiration time

## Event `BalanceUnlocked(address _provider, uint256 _amount)` {#LiquidityProtectionStore-BalanceUnlocked-address-uint256-}

triggered when network tokens are unlocked

## Parameters:

- `_provider`:    provider of the network tokens

- `_amount`:      amount of network tokens

## Event `SystemBalanceUpdated(contract IERC20Token _token, uint256 _prevAmount, uint256 _newAmount)` {#LiquidityProtectionStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-}

triggered when the system balance for a given token is updated

## Parameters:

- `_token`:       token address

- `_prevAmount`:  previous amount

- `_newAmount`:   new amount
