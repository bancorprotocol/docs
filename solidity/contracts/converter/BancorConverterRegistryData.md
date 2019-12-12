# Functions:

- [`constructor(contract IContractRegistry _registry)`](#BancorConverterRegistryData-constructor-contract-IContractRegistry-)

- [`addSmartToken(address _smartToken)`](#BancorConverterRegistryData-addSmartToken-address-)

- [`removeSmartToken(address _smartToken)`](#BancorConverterRegistryData-removeSmartToken-address-)

- [`addLiquidityPool(address _liquidityPool)`](#BancorConverterRegistryData-addLiquidityPool-address-)

- [`removeLiquidityPool(address _liquidityPool)`](#BancorConverterRegistryData-removeLiquidityPool-address-)

- [`addConvertibleToken(address _convertibleToken, address _smartToken)`](#BancorConverterRegistryData-addConvertibleToken-address-address-)

- [`removeConvertibleToken(address _convertibleToken, address _smartToken)`](#BancorConverterRegistryData-removeConvertibleToken-address-address-)

- [`getSmartTokenCount()`](#BancorConverterRegistryData-getSmartTokenCount--)

- [`getSmartTokens()`](#BancorConverterRegistryData-getSmartTokens--)

- [`getSmartToken(uint256 _index)`](#BancorConverterRegistryData-getSmartToken-uint256-)

- [`isSmartToken(address _value)`](#BancorConverterRegistryData-isSmartToken-address-)

- [`getLiquidityPoolCount()`](#BancorConverterRegistryData-getLiquidityPoolCount--)

- [`getLiquidityPools()`](#BancorConverterRegistryData-getLiquidityPools--)

- [`getLiquidityPool(uint256 _index)`](#BancorConverterRegistryData-getLiquidityPool-uint256-)

- [`isLiquidityPool(address _value)`](#BancorConverterRegistryData-isLiquidityPool-address-)

- [`getConvertibleTokenCount()`](#BancorConverterRegistryData-getConvertibleTokenCount--)

- [`getConvertibleTokens()`](#BancorConverterRegistryData-getConvertibleTokens--)

- [`getConvertibleToken(uint256 _index)`](#BancorConverterRegistryData-getConvertibleToken-uint256-)

- [`isConvertibleToken(address _value)`](#BancorConverterRegistryData-isConvertibleToken-address-)

- [`getConvertibleTokenSmartTokenCount(address _convertibleToken)`](#BancorConverterRegistryData-getConvertibleTokenSmartTokenCount-address-)

- [`getConvertibleTokenSmartTokens(address _convertibleToken)`](#BancorConverterRegistryData-getConvertibleTokenSmartTokens-address-)

- [`getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index)`](#BancorConverterRegistryData-getConvertibleTokenSmartToken-address-uint256-)

- [`isConvertibleTokenSmartToken(address _convertibleToken, address _value)`](#BancorConverterRegistryData-isConvertibleTokenSmartToken-address-address-)

# Function `constructor(contract IContractRegistry _registry)` {#BancorConverterRegistryData-constructor-contract-IContractRegistry-}

initializes a new BancorConverterRegistryData instance

## Parameters:

- `_registry`: address of a contract registry contract

# Function `addSmartToken(address _smartToken)` {#BancorConverterRegistryData-addSmartToken-address-}

adds a smart token

## Parameters:

- `_smartToken`: smart token

# Function `removeSmartToken(address _smartToken)` {#BancorConverterRegistryData-removeSmartToken-address-}

removes a smart token

## Parameters:

- `_smartToken`: smart token

# Function `addLiquidityPool(address _liquidityPool)` {#BancorConverterRegistryData-addLiquidityPool-address-}

adds a liquidity pool

## Parameters:

- `_liquidityPool`: liquidity pool

# Function `removeLiquidityPool(address _liquidityPool)` {#BancorConverterRegistryData-removeLiquidityPool-address-}

removes a liquidity pool

## Parameters:

- `_liquidityPool`: liquidity pool

# Function `addConvertibleToken(address _convertibleToken, address _smartToken)` {#BancorConverterRegistryData-addConvertibleToken-address-address-}

adds a convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token

# Function `removeConvertibleToken(address _convertibleToken, address _smartToken)` {#BancorConverterRegistryData-removeConvertibleToken-address-address-}

removes a convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token

# Function `getSmartTokenCount() → uint256` {#BancorConverterRegistryData-getSmartTokenCount--}

returns the number of smart tokens

## Return Values:

- number of smart tokens

# Function `getSmartTokens() → address[]` {#BancorConverterRegistryData-getSmartTokens--}

returns the list of smart tokens

## Return Values:

- list of smart tokens

# Function `getSmartToken(uint256 _index) → address` {#BancorConverterRegistryData-getSmartToken-uint256-}

returns the smart token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token at the given index

# Function `isSmartToken(address _value) → bool` {#BancorConverterRegistryData-isSmartToken-address-}

checks whether or not a given value is a smart token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a smart token, false if not

# Function `getLiquidityPoolCount() → uint256` {#BancorConverterRegistryData-getLiquidityPoolCount--}

returns the number of liquidity pools

## Return Values:

- number of liquidity pools

# Function `getLiquidityPools() → address[]` {#BancorConverterRegistryData-getLiquidityPools--}

returns the list of liquidity pools

## Return Values:

- list of liquidity pools

# Function `getLiquidityPool(uint256 _index) → address` {#BancorConverterRegistryData-getLiquidityPool-uint256-}

returns the liquidity pool at a given index

## Parameters:

- `_index`: index

## Return Values:

- liquidity pool at the given index

# Function `isLiquidityPool(address _value) → bool` {#BancorConverterRegistryData-isLiquidityPool-address-}

checks whether or not a given value is a liquidity pool

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a liquidity pool, false if not

# Function `getConvertibleTokenCount() → uint256` {#BancorConverterRegistryData-getConvertibleTokenCount--}

returns the number of convertible tokens

## Return Values:

- number of convertible tokens

# Function `getConvertibleTokens() → address[]` {#BancorConverterRegistryData-getConvertibleTokens--}

returns the list of convertible tokens

## Return Values:

- list of convertible tokens

# Function `getConvertibleToken(uint256 _index) → address` {#BancorConverterRegistryData-getConvertibleToken-uint256-}

returns the convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- convertible token at the given index

# Function `isConvertibleToken(address _value) → bool` {#BancorConverterRegistryData-isConvertibleToken-address-}

checks whether or not a given value is a convertible token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a convertible token, false if not

# Function `getConvertibleTokenSmartTokenCount(address _convertibleToken) → uint256` {#BancorConverterRegistryData-getConvertibleTokenSmartTokenCount-address-}

returns the number of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- number of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartTokens(address _convertibleToken) → address[]` {#BancorConverterRegistryData-getConvertibleTokenSmartTokens-address-}

returns the list of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- list of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index) → address` {#BancorConverterRegistryData-getConvertibleTokenSmartToken-address-uint256-}

returns the smart token associated with a given convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token associated with the given convertible token at the given index

# Function `isConvertibleTokenSmartToken(address _convertibleToken, address _value) → bool` {#BancorConverterRegistryData-isConvertibleTokenSmartToken-address-address-}

checks whether or not a given value is a smart token of a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_value`: value

## Return Values:

- true if the given value is a smart token of the given convertible token, false it not
