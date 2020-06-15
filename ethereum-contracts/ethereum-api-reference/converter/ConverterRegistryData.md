The ConverterRegistryData contract is an integral part of the converter registry

as it serves as the database contract that holds all registry data.

The registry is separated into two different contracts for upgradability - the data contract

is harder to upgrade as it requires migrating all registry data into a new contract, while

the registry contract itself can be easily upgraded.

For that same reason, the data contract is simple and contains no logic beyond the basic data

access utilities that it exposes.

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#ConverterRegistryData-constructor-contract-IContractRegistry-)

- [`addSmartToken(address _smartToken)`](#ConverterRegistryData-addSmartToken-address-)

- [`removeSmartToken(address _smartToken)`](#ConverterRegistryData-removeSmartToken-address-)

- [`addLiquidityPool(address _liquidityPool)`](#ConverterRegistryData-addLiquidityPool-address-)

- [`removeLiquidityPool(address _liquidityPool)`](#ConverterRegistryData-removeLiquidityPool-address-)

- [`addConvertibleToken(address _convertibleToken, address _smartToken)`](#ConverterRegistryData-addConvertibleToken-address-address-)

- [`removeConvertibleToken(address _convertibleToken, address _smartToken)`](#ConverterRegistryData-removeConvertibleToken-address-address-)

- [`getSmartTokenCount()`](#ConverterRegistryData-getSmartTokenCount--)

- [`getSmartTokens()`](#ConverterRegistryData-getSmartTokens--)

- [`getSmartToken(uint256 _index)`](#ConverterRegistryData-getSmartToken-uint256-)

- [`isSmartToken(address _value)`](#ConverterRegistryData-isSmartToken-address-)

- [`getLiquidityPoolCount()`](#ConverterRegistryData-getLiquidityPoolCount--)

- [`getLiquidityPools()`](#ConverterRegistryData-getLiquidityPools--)

- [`getLiquidityPool(uint256 _index)`](#ConverterRegistryData-getLiquidityPool-uint256-)

- [`isLiquidityPool(address _value)`](#ConverterRegistryData-isLiquidityPool-address-)

- [`getConvertibleTokenCount()`](#ConverterRegistryData-getConvertibleTokenCount--)

- [`getConvertibleTokens()`](#ConverterRegistryData-getConvertibleTokens--)

- [`getConvertibleToken(uint256 _index)`](#ConverterRegistryData-getConvertibleToken-uint256-)

- [`isConvertibleToken(address _value)`](#ConverterRegistryData-isConvertibleToken-address-)

- [`getConvertibleTokenSmartTokenCount(address _convertibleToken)`](#ConverterRegistryData-getConvertibleTokenSmartTokenCount-address-)

- [`getConvertibleTokenSmartTokens(address _convertibleToken)`](#ConverterRegistryData-getConvertibleTokenSmartTokens-address-)

- [`getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index)`](#ConverterRegistryData-getConvertibleTokenSmartToken-address-uint256-)

- [`isConvertibleTokenSmartToken(address _convertibleToken, address _value)`](#ConverterRegistryData-isConvertibleTokenSmartToken-address-address-)

# Function `constructor(contract IContractRegistry _registry)` {#ConverterRegistryData-constructor-contract-IContractRegistry-}

initializes a new ConverterRegistryData instance

## Parameters:

- `_registry`: address of a contract registry contract

# Function `addSmartToken(address _smartToken)` {#ConverterRegistryData-addSmartToken-address-}

adds a smart token

## Parameters:

- `_smartToken`: smart token

# Function `removeSmartToken(address _smartToken)` {#ConverterRegistryData-removeSmartToken-address-}

removes a smart token

## Parameters:

- `_smartToken`: smart token

# Function `addLiquidityPool(address _liquidityPool)` {#ConverterRegistryData-addLiquidityPool-address-}

adds a liquidity pool

## Parameters:

- `_liquidityPool`: liquidity pool

# Function `removeLiquidityPool(address _liquidityPool)` {#ConverterRegistryData-removeLiquidityPool-address-}

removes a liquidity pool

## Parameters:

- `_liquidityPool`: liquidity pool

# Function `addConvertibleToken(address _convertibleToken, address _smartToken)` {#ConverterRegistryData-addConvertibleToken-address-address-}

adds a convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token

# Function `removeConvertibleToken(address _convertibleToken, address _smartToken)` {#ConverterRegistryData-removeConvertibleToken-address-address-}

removes a convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated smart token

# Function `getSmartTokenCount() → uint256` {#ConverterRegistryData-getSmartTokenCount--}

returns the number of smart tokens

## Return Values:

- number of smart tokens

# Function `getSmartTokens() → address[]` {#ConverterRegistryData-getSmartTokens--}

returns the list of smart tokens

## Return Values:

- list of smart tokens

# Function `getSmartToken(uint256 _index) → address` {#ConverterRegistryData-getSmartToken-uint256-}

returns the smart token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token at the given index

# Function `isSmartToken(address _value) → bool` {#ConverterRegistryData-isSmartToken-address-}

checks whether or not a given value is a smart token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a smart token, false if not

# Function `getLiquidityPoolCount() → uint256` {#ConverterRegistryData-getLiquidityPoolCount--}

returns the number of liquidity pools

## Return Values:

- number of liquidity pools

# Function `getLiquidityPools() → address[]` {#ConverterRegistryData-getLiquidityPools--}

returns the list of liquidity pools

## Return Values:

- list of liquidity pools

# Function `getLiquidityPool(uint256 _index) → address` {#ConverterRegistryData-getLiquidityPool-uint256-}

returns the liquidity pool at a given index

## Parameters:

- `_index`: index

## Return Values:

- liquidity pool at the given index

# Function `isLiquidityPool(address _value) → bool` {#ConverterRegistryData-isLiquidityPool-address-}

checks whether or not a given value is a liquidity pool

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a liquidity pool, false if not

# Function `getConvertibleTokenCount() → uint256` {#ConverterRegistryData-getConvertibleTokenCount--}

returns the number of convertible tokens

## Return Values:

- number of convertible tokens

# Function `getConvertibleTokens() → address[]` {#ConverterRegistryData-getConvertibleTokens--}

returns the list of convertible tokens

## Return Values:

- list of convertible tokens

# Function `getConvertibleToken(uint256 _index) → address` {#ConverterRegistryData-getConvertibleToken-uint256-}

returns the convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- convertible token at the given index

# Function `isConvertibleToken(address _value) → bool` {#ConverterRegistryData-isConvertibleToken-address-}

checks whether or not a given value is a convertible token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a convertible token, false if not

# Function `getConvertibleTokenSmartTokenCount(address _convertibleToken) → uint256` {#ConverterRegistryData-getConvertibleTokenSmartTokenCount-address-}

returns the number of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- number of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartTokens(address _convertibleToken) → address[]` {#ConverterRegistryData-getConvertibleTokenSmartTokens-address-}

returns the list of smart tokens associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- list of smart tokens associated with the given convertible token

# Function `getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index) → address` {#ConverterRegistryData-getConvertibleTokenSmartToken-address-uint256-}

returns the smart token associated with a given convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- smart token associated with the given convertible token at the given index

# Function `isConvertibleTokenSmartToken(address _convertibleToken, address _value) → bool` {#ConverterRegistryData-isConvertibleTokenSmartToken-address-address-}

checks whether or not a given value is a smart token of a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_value`: value

## Return Values:

- true if the given value is a smart token of the given convertible token, false it not
