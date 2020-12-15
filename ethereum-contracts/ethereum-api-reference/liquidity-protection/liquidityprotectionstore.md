# LiquidityProtectionStore

The Liquidity Protection Store contract serves as the storage of the liquidity protection

mechanism. It holds the data and tokens and is non upgradable.

## Functions:

* [`addPoolToWhitelist(contract IConverterAnchor _poolAnchor)`](liquidityprotectionstore.md#LiquidityProtectionStore-addPoolToWhitelist-contract-IConverterAnchor-)
* [`removePoolFromWhitelist(contract IConverterAnchor _poolAnchor)`](liquidityprotectionstore.md#LiquidityProtectionStore-removePoolFromWhitelist-contract-IConverterAnchor-)
* [`whitelistedPoolCount()`](liquidityprotectionstore.md#LiquidityProtectionStore-whitelistedPoolCount--)
* [`whitelistedPools()`](liquidityprotectionstore.md#LiquidityProtectionStore-whitelistedPools--)
* [`whitelistedPool(uint256 _index)`](liquidityprotectionstore.md#LiquidityProtectionStore-whitelistedPool-uint256-)
* [`isPoolWhitelisted(contract IConverterAnchor _poolAnchor)`](liquidityprotectionstore.md#LiquidityProtectionStore-isPoolWhitelisted-contract-IConverterAnchor-)
* [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](liquidityprotectionstore.md#LiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-)
* [`protectedLiquidityCount(address _provider)`](liquidityprotectionstore.md#LiquidityProtectionStore-protectedLiquidityCount-address-)
* [`protectedLiquidityIds(address _provider)`](liquidityprotectionstore.md#LiquidityProtectionStore-protectedLiquidityIds-address-)
* [`protectedLiquidityId(address _provider, uint256 _index)`](liquidityprotectionstore.md#LiquidityProtectionStore-protectedLiquidityId-address-uint256-)
* [`protectedLiquidity(uint256 _id)`](liquidityprotectionstore.md#LiquidityProtectionStore-protectedLiquidity-uint256-)
* [`addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp)`](liquidityprotectionstore.md#LiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-)
* [`updateProtectedLiquidityAmounts(uint256 _id, uint256 _newPoolAmount, uint256 _newReserveAmount)`](liquidityprotectionstore.md#LiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-)
* [`removeProtectedLiquidity(uint256 _id)`](liquidityprotectionstore.md#LiquidityProtectionStore-removeProtectedLiquidity-uint256-)
* [`lockedBalanceCount(address _provider)`](liquidityprotectionstore.md#LiquidityProtectionStore-lockedBalanceCount-address-)
* [`lockedBalance(address _provider, uint256 _index)`](liquidityprotectionstore.md#LiquidityProtectionStore-lockedBalance-address-uint256-)
* [`lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex)`](liquidityprotectionstore.md#LiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-)
* [`addLockedBalance(address _provider, uint256 _amount, uint256 _expirationTime)`](liquidityprotectionstore.md#LiquidityProtectionStore-addLockedBalance-address-uint256-uint256-)
* [`removeLockedBalance(address _provider, uint256 _index)`](liquidityprotectionstore.md#LiquidityProtectionStore-removeLockedBalance-address-uint256-)
* [`systemBalance(contract IERC20Token _token)`](liquidityprotectionstore.md#LiquidityProtectionStore-systemBalance-contract-IERC20Token-)
* [`incSystemBalance(contract IERC20Token _token, uint256 _amount)`](liquidityprotectionstore.md#LiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-)
* [`decSystemBalance(contract IERC20Token _token, uint256 _amount)`](liquidityprotectionstore.md#LiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-)
* [`totalProtectedPoolAmount(contract IDSToken _poolToken)`](liquidityprotectionstore.md#LiquidityProtectionStore-totalProtectedPoolAmount-contract-IDSToken-)
* [`totalProtectedReserveAmount(contract IDSToken _poolToken, contract IERC20Token _reserveToken)`](liquidityprotectionstore.md#LiquidityProtectionStore-totalProtectedReserveAmount-contract-IDSToken-contract-IERC20Token-)

## Events:

* [`PoolWhitelistUpdated(contract IConverterAnchor _poolAnchor, bool _added)`](liquidityprotectionstore.md#LiquidityProtectionStore-PoolWhitelistUpdated-contract-IConverterAnchor-bool-)
* [`ProtectionAdded(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)`](liquidityprotectionstore.md#LiquidityProtectionStore-ProtectionAdded-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)
* [`ProtectionUpdated(address _provider, uint256 _prevPoolAmount, uint256 _prevReserveAmount, uint256 _newPoolAmount, uint256 _newReserveAmount)`](liquidityprotectionstore.md#LiquidityProtectionStore-ProtectionUpdated-address-uint256-uint256-uint256-uint256-)
* [`ProtectionRemoved(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)`](liquidityprotectionstore.md#LiquidityProtectionStore-ProtectionRemoved-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-)
* [`BalanceLocked(address _provider, uint256 _amount, uint256 _expirationTime)`](liquidityprotectionstore.md#LiquidityProtectionStore-BalanceLocked-address-uint256-uint256-)
* [`BalanceUnlocked(address _provider, uint256 _amount)`](liquidityprotectionstore.md#LiquidityProtectionStore-BalanceUnlocked-address-uint256-)
* [`SystemBalanceUpdated(contract IERC20Token _token, uint256 _prevAmount, uint256 _newAmount)`](liquidityprotectionstore.md#LiquidityProtectionStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-)

## Function `addPoolToWhitelist(contract IConverterAnchor _poolAnchor)` <a id="LiquidityProtectionStore-addPoolToWhitelist-contract-IConverterAnchor-"></a>

adds a pool to the whitelist

can only be called by the contract owner

### Parameters:

* `_poolAnchor`: pool anchor

## Function `removePoolFromWhitelist(contract IConverterAnchor _poolAnchor)` <a id="LiquidityProtectionStore-removePoolFromWhitelist-contract-IConverterAnchor-"></a>

removes a pool from the whitelist

can only be called by the contract owner

### Parameters:

* `_poolAnchor`: pool anchor

## Function `whitelistedPoolCount() → uint256` <a id="LiquidityProtectionStore-whitelistedPoolCount--"></a>

returns the number of whitelisted pools

### Return Values:

* number of whitelisted pools

## Function `whitelistedPools() → contract IConverterAnchor[]` <a id="LiquidityProtectionStore-whitelistedPools--"></a>

returns the list of whitelisted pools

### Return Values:

* list of whitelisted pools

## Function `whitelistedPool(uint256 _index) → contract IConverterAnchor` <a id="LiquidityProtectionStore-whitelistedPool-uint256-"></a>

returns the whitelisted pool at a given index

### Parameters:

* `_index`: index

### Return Values:

* whitelisted pool anchor

## Function `isPoolWhitelisted(contract IConverterAnchor _poolAnchor) → bool` <a id="LiquidityProtectionStore-isPoolWhitelisted-contract-IConverterAnchor-"></a>

checks whether a given pool is whitelisted

### Parameters:

* `_poolAnchor`: pool anchor

### Return Values:

* true if the given pool is whitelisted, false otherwise

## Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` <a id="LiquidityProtectionStore-withdrawTokens-contract-IERC20Token-address-uint256-"></a>

withdraws tokens held by the contract

can only be called by the contract owner

### Parameters:

* `_token`: token address
* `_to`: recipient address
* `_amount`: amount to withdraw

## Function `protectedLiquidityCount(address _provider) → uint256` <a id="LiquidityProtectionStore-protectedLiquidityCount-address-"></a>

returns the number of protected liquidities for the given provider

### Parameters:

* `_provider`:    liquidity provider

### Return Values:

* number of protected liquidities

## Function `protectedLiquidityIds(address _provider) → uint256[]` <a id="LiquidityProtectionStore-protectedLiquidityIds-address-"></a>

returns the list of protected liquidity ids for the given provider

### Parameters:

* `_provider`:    liquidity provider

### Return Values:

* protected liquidity ids

## Function `protectedLiquidityId(address _provider, uint256 _index) → uint256` <a id="LiquidityProtectionStore-protectedLiquidityId-address-uint256-"></a>

returns the id of a protected liquidity for the given provider at a specific index

### Parameters:

* `_provider`: liquidity provider
* `_index`: protected liquidity index

### Return Values:

* protected liquidity id

## Function `protectedLiquidity(uint256 _id) → address, contract IDSToken, contract IERC20Token, uint256, uint256, uint256, uint256, uint256` <a id="LiquidityProtectionStore-protectedLiquidity-uint256-"></a>

returns an existing protected liquidity details

### Parameters:

* `_id`:  protected liquidity id

### Return Values:

* liquidity provider
* pool token address
* reserve token address
* pool token amount
* reserve token amount
* rate of 1 protected reserve token in units of the other reserve token \(numerator\)
* rate of 1 protected reserve token in units of the other reserve token \(denominator\)

## Function `addProtectedLiquidity(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount, uint256 _reserveRateN, uint256 _reserveRateD, uint256 _timestamp) → uint256` <a id="LiquidityProtectionStore-addProtectedLiquidity-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-uint256-uint256-uint256-"></a>

adds protected liquidity

can only be called by the contract owner

### Parameters:

* `_provider`: liquidity provider
* `_poolToken`: pool token address
* `_reserveToken`: reserve token address
* `_poolAmount`: pool token amount
* `_reserveAmount`: reserve token amount
* `_reserveRateN`: rate of 1 protected reserve token in units of the other reserve token \(numerator\)
* `_reserveRateD`: rate of 1 protected reserve token in units of the other reserve token \(denominator\)
* `_timestamp`: timestamp

### Return Values:

* new protected liquidity id

## Function `updateProtectedLiquidityAmounts(uint256 _id, uint256 _newPoolAmount, uint256 _newReserveAmount)` <a id="LiquidityProtectionStore-updateProtectedLiquidityAmounts-uint256-uint256-uint256-"></a>

updates an existing protected liquidity pool/reserve amounts

can only be called by the contract owner

### Parameters:

* `_id`: protected liquidity id
* `_newPoolAmount`: new pool tokens amount
* `_newReserveAmount`: new reserve tokens amount

## Function `removeProtectedLiquidity(uint256 _id)` <a id="LiquidityProtectionStore-removeProtectedLiquidity-uint256-"></a>

removes protected liquidity

can only be called by the contract owner

### Parameters:

* `_id`:  protected liquidity id

## Function `lockedBalanceCount(address _provider) → uint256` <a id="LiquidityProtectionStore-lockedBalanceCount-address-"></a>

returns the number of network token locked balances for a given provider

### Parameters:

* `_provider`:    locked balances provider

### Return Values:

* the number of network token locked balances

## Function `lockedBalance(address _provider, uint256 _index) → uint256, uint256` <a id="LiquidityProtectionStore-lockedBalance-address-uint256-"></a>

returns an existing locked network token balance details

### Parameters:

* `_provider`: locked balances provider
* `_index`: start index

### Return Values:

* amount of network tokens
* lock expiration time

## Function `lockedBalanceRange(address _provider, uint256 _startIndex, uint256 _endIndex) → uint256[], uint256[]` <a id="LiquidityProtectionStore-lockedBalanceRange-address-uint256-uint256-"></a>

returns a range of locked network token balances for a given provider

### Parameters:

* `_provider`: locked balances provider
* `_startIndex`: start index
* `_endIndex`: end index \(exclusive\)

### Return Values:

* locked amounts
* expiration times

## Function `addLockedBalance(address _provider, uint256 _amount, uint256 _expirationTime) → uint256` <a id="LiquidityProtectionStore-addLockedBalance-address-uint256-uint256-"></a>

adds new locked network token balance

can only be called by the contract owner

### Parameters:

* `_provider`: liquidity provider
* `_amount`: token amount
* `_expirationTime`: lock expiration time

### Return Values:

* new locked balance index

## Function `removeLockedBalance(address _provider, uint256 _index)` <a id="LiquidityProtectionStore-removeLockedBalance-address-uint256-"></a>

removes a locked network token balance

can only be called by the contract owner

### Parameters:

* `_provider`: liquidity provider
* `_index`: index of the locked balance

## Function `systemBalance(contract IERC20Token _token) → uint256` <a id="LiquidityProtectionStore-systemBalance-contract-IERC20Token-"></a>

returns the system balance for a given token

### Parameters:

* `_token`:   token address

### Return Values:

* system balance

## Function `incSystemBalance(contract IERC20Token _token, uint256 _amount)` <a id="LiquidityProtectionStore-incSystemBalance-contract-IERC20Token-uint256-"></a>

increases the system balance for a given token

can only be called by the contract owner

### Parameters:

* `_token`: token address
* `_amount`: token amount

## Function `decSystemBalance(contract IERC20Token _token, uint256 _amount)` <a id="LiquidityProtectionStore-decSystemBalance-contract-IERC20Token-uint256-"></a>

decreases the system balance for a given token

can only be called by the contract owner

### Parameters:

* `_token`: token address
* `_amount`: token amount

## Function `totalProtectedPoolAmount(contract IDSToken _poolToken) → uint256` <a id="LiquidityProtectionStore-totalProtectedPoolAmount-contract-IDSToken-"></a>

returns the total protected pool token amount for a given pool

### Parameters:

* `_poolToken`:   pool token address

### Return Values:

* total protected amount

## Function `totalProtectedReserveAmount(contract IDSToken _poolToken, contract IERC20Token _reserveToken) → uint256` <a id="LiquidityProtectionStore-totalProtectedReserveAmount-contract-IDSToken-contract-IERC20Token-"></a>

returns the total protected reserve amount for a given pool

### Parameters:

* `_poolToken`: pool token address
* `_reserveToken`: reserve token address

### Return Values:

* total protected amount

## Event `PoolWhitelistUpdated(contract IConverterAnchor _poolAnchor, bool _added)` <a id="LiquidityProtectionStore-PoolWhitelistUpdated-contract-IConverterAnchor-bool-"></a>

triggered when the pool whitelist is updated

### Parameters:

* `_poolAnchor`: pool anchor
* `_added`: true if the pool was added to the whitelist, false if it was removed

## Event `ProtectionAdded(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)` <a id="LiquidityProtectionStore-ProtectionAdded-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-"></a>

triggered when liquidity protection is added

### Parameters:

* `_provider`: liquidity provider
* `_poolToken`: pool token address
* `_reserveToken`: reserve token address
* `_poolAmount`: amount of pool tokens
* `_reserveAmount`: amount of reserve tokens

## Event `ProtectionUpdated(address _provider, uint256 _prevPoolAmount, uint256 _prevReserveAmount, uint256 _newPoolAmount, uint256 _newReserveAmount)` <a id="LiquidityProtectionStore-ProtectionUpdated-address-uint256-uint256-uint256-uint256-"></a>

triggered when liquidity protection is updated

### Parameters:

* `_provider`: liquidity provider
* `_prevPoolAmount`: previous amount of pool tokens
* `_prevReserveAmount`: previous amount of reserve tokens
* `_newPoolAmount`: new amount of pool tokens
* `_newReserveAmount`: new amount of reserve tokens

## Event `ProtectionRemoved(address _provider, contract IDSToken _poolToken, contract IERC20Token _reserveToken, uint256 _poolAmount, uint256 _reserveAmount)` <a id="LiquidityProtectionStore-ProtectionRemoved-address-contract-IDSToken-contract-IERC20Token-uint256-uint256-"></a>

triggered when liquidity protection is removed

### Parameters:

* `_provider`: liquidity provider
* `_poolToken`: pool token address
* `_reserveToken`: reserve token address
* `_poolAmount`: amount of pool tokens
* `_reserveAmount`: amount of reserve tokens

## Event `BalanceLocked(address _provider, uint256 _amount, uint256 _expirationTime)` <a id="LiquidityProtectionStore-BalanceLocked-address-uint256-uint256-"></a>

triggered when network tokens are locked

### Parameters:

* `_provider`: provider of the network tokens
* `_amount`: amount of network tokens
* `_expirationTime`: lock expiration time

## Event `BalanceUnlocked(address _provider, uint256 _amount)` <a id="LiquidityProtectionStore-BalanceUnlocked-address-uint256-"></a>

triggered when network tokens are unlocked

### Parameters:

* `_provider`: provider of the network tokens
* `_amount`: amount of network tokens

## Event `SystemBalanceUpdated(contract IERC20Token _token, uint256 _prevAmount, uint256 _newAmount)` <a id="LiquidityProtectionStore-SystemBalanceUpdated-contract-IERC20Token-uint256-uint256-"></a>

triggered when the system balance for a given token is updated

### Parameters:

* `_token`: token address
* `_prevAmount`: previous amount
* `_newAmount`: new amount

