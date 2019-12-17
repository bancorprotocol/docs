The BancorConverterRegistry maintains a list of all active converters in the Bancor Network.

Since converters can be upgraded and thus their address can change, the registry actually keeps smart tokens internally and not the converters themselves.

The active converter for each smart token can be easily accessed by querying the smart token owner.

The registry exposes 3 differnet lists that can be accessed and iterated, based on the use-case of the caller:

- Smart tokens - can be used to get all the latest / historical data in the network

- Liquidity pools - can be used to get all liquidity pools for funding, liquidation etc.

- Convertible tokens - can be used to get all tokens that can be converted in the network (excluding pool

  tokens), and for each one - all smart tokens that hold it in their reserves

The contract fires events whenever one of the primitives is added to or removed from the registry

The contract is upgradable.

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#BancorConverterRegistry-constructor-contract-IContractRegistry-)

- [`addConverter(contract IBancorConverter _converter)`](#BancorConverterRegistry-addConverter-contract-IBancorConverter-)

- [`removeConverter(contract IBancorConverter _converter)`](#BancorConverterRegistry-removeConverter-contract-IBancorConverter-)

- [`getSmartTokenCount()`](#BancorConverterRegistry-getSmartTokenCount--)

- [`getSmartTokens()`](#BancorConverterRegistry-getSmartTokens--)

- [`getSmartToken(uint256 _index)`](#BancorConverterRegistry-getSmartToken-uint256-)

- [`isSmartToken(address _value)`](#BancorConverterRegistry-isSmartToken-address-)

- [`getLiquidityPoolCount()`](#BancorConverterRegistry-getLiquidityPoolCount--)

- [`getLiquidityPools()`](#BancorConverterRegistry-getLiquidityPools--)

- [`getLiquidityPool(uint256 _index)`](#BancorConverterRegistry-getLiquidityPool-uint256-)

- [`isLiquidityPool(address _value)`](#BancorConverterRegistry-isLiquidityPool-address-)

- [`getConvertibleTokenCount()`](#BancorConverterRegistry-getConvertibleTokenCount--)

- [`getConvertibleTokens()`](#BancorConverterRegistry-getConvertibleTokens--)

- [`getConvertibleToken(uint256 _index)`](#BancorConverterRegistry-getConvertibleToken-uint256-)

- [`isConvertibleToken(address _value)`](#BancorConverterRegistry-isConvertibleToken-address-)

- [`getConvertibleTokenSmartTokenCount(address _convertibleToken)`](#BancorConverterRegistry-getConvertibleTokenSmartTokenCount-address-)

- [`getConvertibleTokenSmartTokens(address _convertibleToken)`](#BancorConverterRegistry-getConvertibleTokenSmartTokens-address-)

- [`getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index)`](#BancorConverterRegistry-getConvertibleTokenSmartToken-address-uint256-)

- [`isConvertibleTokenSmartToken(address _convertibleToken, address _value)`](#BancorConverterRegistry-isConvertibleTokenSmartToken-address-address-)

- [`getConvertersBySmartTokens(address[] _smartTokens)`](#BancorConverterRegistry-getConvertersBySmartTokens-address---)

- [`isConverterValid(contract IBancorConverter _converter)`](#BancorConverterRegistry-isConverterValid-contract-IBancorConverter-)

- [`getLiquidityPoolByReserveConfig(address[] _reserveTokens, uint256[] _reserveRatios)`](#BancorConverterRegistry-getLiquidityPoolByReserveConfig-address---uint256---)

# Events:

- [`SmartTokenAdded(address _smartToken)`](#BancorConverterRegistry-SmartTokenAdded-address-)

- [`SmartTokenRemoved(address _smartToken)`](#BancorConverterRegistry-SmartTokenRemoved-address-)

- [`LiquidityPoolAdded(address _liquidityPool)`](#BancorConverterRegistry-LiquidityPoolAdded-address-)

- [`LiquidityPoolRemoved(address _liquidityPool)`](#BancorConverterRegistry-LiquidityPoolRemoved-address-)

- [`ConvertibleTokenAdded(address _convertibleToken, address _smartToken)`](#BancorConverterRegistry-ConvertibleTokenAdded-address-address-)

- [`ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)`](#BancorConverterRegistry-ConvertibleTokenRemoved-address-address-)

# Function `constructor(contract IContractRegistry _registry)` {#BancorConverterRegistry-constructor-contract-IContractRegistry-}

initializes a new BancorConverterRegistry instance

## Parameters:

- `_registry`: address of a contract registry contract

# Function `addConverter(contract IBancorConverter _converter)` {#BancorConverterRegistry-addConverter-contract-IBancorConverter-}

adds a converter to the registry

anyone can add a converter to the registry, as long as the converter is active and valid

note that a liquidity pool converter can only be added if there's no existing pool with the same reserve configuration

## Parameters:

- `_converter`: converter

# Function `removeConverter(contract IBancorConverter _converter)` {#BancorConverterRegistry-removeConverter-contract-IBancorConverter-}

removes a converter from the registry

anyone can remove invalid or inactive converters from the registry

note that the owner can also remove valid converters

## Parameters:

- `_converter`: converter

# Function `getSmartTokenCount() → uint256` {#BancorConverterRegistry-getSmartTokenCount--}

returns the number of smart tokens in the registry

## Return Values:

- number of smart tokens

# Function `getSmartTokens() → address[]` {#BancorConverterRegistry-getSmartTokens--}

returns the list of smart tokens in the registry

## Return Values:

- list of smart tokens

# Function `getSmartToken(uint256 _index) → address` {#BancorConverterRegistry-getSmartToken-uint256-}

returns the smart token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token at the given index

# Function `isSmartToken(address _value) → bool` {#BancorConverterRegistry-isSmartToken-address-}

checks whether or not a given value is a smart token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a smart token, false if not

# Function `getLiquidityPoolCount() → uint256` {#BancorConverterRegistry-getLiquidityPoolCount--}

returns the number of liquidity pools in the registry

## Return Values:

- number of liquidity pools

# Function `getLiquidityPools() → address[]` {#BancorConverterRegistry-getLiquidityPools--}

returns the list of liquidity pools in the registry

## Return Values:

- list of liquidity pools

# Function `getLiquidityPool(uint256 _index) → address` {#BancorConverterRegistry-getLiquidityPool-uint256-}

returns the liquidity pool at a given index

## Parameters:

- `_index`: index

## Return Values:

- liquidity pool at the given index

# Function `isLiquidityPool(address _value) → bool` {#BancorConverterRegistry-isLiquidityPool-address-}

checks whether or not a given value is a liquidity pool

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a liquidity pool, false if not

# Function `getConvertibleTokenCount() → uint256` {#BancorConverterRegistry-getConvertibleTokenCount--}

returns the number of convertible tokens in the registry

## Return Values:

- number of convertible tokens

# Function `getConvertibleTokens() → address[]` {#BancorConverterRegistry-getConvertibleTokens--}

returns the list of convertible tokens in the registry

## Return Values:

- list of convertible tokens

# Function `getConvertibleToken(uint256 _index) → address` {#BancorConverterRegistry-getConvertibleToken-uint256-}

returns the convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- convertible token at the given index

# Function `isConvertibleToken(address _value) → bool` {#BancorConverterRegistry-isConvertibleToken-address-}

checks whether or not a given value is a convertible token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a convertible token, false if not

# Function `getConvertibleTokenSmartTokenCount(address _convertibleToken) → uint256` {#BancorConverterRegistry-getConvertibleTokenSmartTokenCount-address-}

returns the number of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- number of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartTokens(address _convertibleToken) → address[]` {#BancorConverterRegistry-getConvertibleTokenSmartTokens-address-}

returns the list of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- list of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index) → address` {#BancorConverterRegistry-getConvertibleTokenSmartToken-address-uint256-}

returns the smart token associated with a given convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token associated with the given convertible token at the given index

# Function `isConvertibleTokenSmartToken(address _convertibleToken, address _value) → bool` {#BancorConverterRegistry-isConvertibleTokenSmartToken-address-address-}

checks whether or not a given value is a smart token of a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_value`: value

## Return Values:

- true if the given value is a smart token of the given convertible token, false if not

# Function `getConvertersBySmartTokens(address[] _smartTokens) → address[]` {#BancorConverterRegistry-getConvertersBySmartTokens-address---}

returns a list of converters for a given list of smart tokens

this is a utility function that can be used to reduce the number of calls to the contract

## Parameters:

- `_smartTokens`: list of smart tokens

## Return Values:

- list of converters

# Function `isConverterValid(contract IBancorConverter _converter) → bool` {#BancorConverterRegistry-isConverterValid-contract-IBancorConverter-}

checks whether or not a given converter is valid

## Parameters:

- `_converter`: converter

## Return Values:

- true if the given converter is valid, false if not

# Function `getLiquidityPoolByReserveConfig(address[] _reserveTokens, uint256[] _reserveRatios) → contract IBancorConverter` {#BancorConverterRegistry-getLiquidityPoolByReserveConfig-address---uint256---}

searches for a liquidity pool with specific reserve tokens / ratios

## Parameters:

- `_reserveTokens`:   reserve tokens

- `_reserveRatios`:   reserve ratios

## Return Values:

- the converter of the liquidity pool, or zero if no such liquidity pool exists

# Event `SmartTokenAdded(address _smartToken)` {#BancorConverterRegistry-SmartTokenAdded-address-}

triggered when a smart token is added to the registry

## Parameters:

- `_smartToken`: smart token

# Event `SmartTokenRemoved(address _smartToken)` {#BancorConverterRegistry-SmartTokenRemoved-address-}

triggered when a smart token is removed from the registry

## Parameters:

- `_smartToken`: smart token

# Event `LiquidityPoolAdded(address _liquidityPool)` {#BancorConverterRegistry-LiquidityPoolAdded-address-}

triggered when a liquidity pool is added to the registry

## Parameters:

- `_liquidityPool`: liquidity pool

# Event `LiquidityPoolRemoved(address _liquidityPool)` {#BancorConverterRegistry-LiquidityPoolRemoved-address-}

triggered when a liquidity pool is removed from the registry

## Parameters:

- `_liquidityPool`: liquidity pool

# Event `ConvertibleTokenAdded(address _convertibleToken, address _smartToken)` {#BancorConverterRegistry-ConvertibleTokenAdded-address-address-}

triggered when a convertible token is added to the registry

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token

# Event `ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)` {#BancorConverterRegistry-ConvertibleTokenRemoved-address-address-}

triggered when a convertible token is removed from the registry

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token
