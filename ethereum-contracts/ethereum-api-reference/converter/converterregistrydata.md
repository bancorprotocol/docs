This contract is an integral part of the converter registry,

and it serves as the database contract that holds all registry data.

The registry is separated into two different contracts for upgradability - the data contract

is harder to upgrade as it requires migrating all registry data into a new contract, while

the registry contract itself can be easily upgraded.

For that same reason, the data contract is simple and contains no logic beyond the basic data

access utilities that it exposes.

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#ConverterRegistryData-constructor-contract-IContractRegistry-)

- [`addSmartToken(contract IConverterAnchor _anchor)`](#ConverterRegistryData-addSmartToken-contract-IConverterAnchor-)

- [`removeSmartToken(contract IConverterAnchor _anchor)`](#ConverterRegistryData-removeSmartToken-contract-IConverterAnchor-)

- [`addLiquidityPool(contract IConverterAnchor _liquidityPoolAnchor)`](#ConverterRegistryData-addLiquidityPool-contract-IConverterAnchor-)

- [`removeLiquidityPool(contract IConverterAnchor _liquidityPoolAnchor)`](#ConverterRegistryData-removeLiquidityPool-contract-IConverterAnchor-)

- [`addConvertibleToken(contract IERC20Token _convertibleToken, contract IConverterAnchor _anchor)`](#ConverterRegistryData-addConvertibleToken-contract-IERC20Token-contract-IConverterAnchor-)

- [`removeConvertibleToken(contract IERC20Token _convertibleToken, contract IConverterAnchor _anchor)`](#ConverterRegistryData-removeConvertibleToken-contract-IERC20Token-contract-IConverterAnchor-)

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

- [`getConvertibleTokenSmartTokenCount(contract IERC20Token _convertibleToken)`](#ConverterRegistryData-getConvertibleTokenSmartTokenCount-contract-IERC20Token-)

- [`getConvertibleTokenSmartTokens(contract IERC20Token _convertibleToken)`](#ConverterRegistryData-getConvertibleTokenSmartTokens-contract-IERC20Token-)

- [`getConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, uint256 _index)`](#ConverterRegistryData-getConvertibleTokenSmartToken-contract-IERC20Token-uint256-)

- [`isConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, address _value)`](#ConverterRegistryData-isConvertibleTokenSmartToken-contract-IERC20Token-address-)

## Function `constructor(contract IContractRegistry _registry)` {#ConverterRegistryData-constructor-contract-IContractRegistry-}

initializes a new ConverterRegistryData instance

## Parameters:

- `_registry`: address of a contract registry contract

## Function `addSmartToken(contract IConverterAnchor _anchor)` {#ConverterRegistryData-addSmartToken-contract-IConverterAnchor-}

adds an anchor

## Parameters:

- `_anchor`: anchor

## Function `removeSmartToken(contract IConverterAnchor _anchor)` {#ConverterRegistryData-removeSmartToken-contract-IConverterAnchor-}

removes an anchor

## Parameters:

- `_anchor`: anchor

## Function `addLiquidityPool(contract IConverterAnchor _liquidityPoolAnchor)` {#ConverterRegistryData-addLiquidityPool-contract-IConverterAnchor-}

adds a liquidity pool

## Parameters:

- `_liquidityPoolAnchor`: liquidity pool

## Function `removeLiquidityPool(contract IConverterAnchor _liquidityPoolAnchor)` {#ConverterRegistryData-removeLiquidityPool-contract-IConverterAnchor-}

removes a liquidity pool

## Parameters:

- `_liquidityPoolAnchor`: liquidity pool

## Function `addConvertibleToken(contract IERC20Token _convertibleToken, contract IConverterAnchor _anchor)` {#ConverterRegistryData-addConvertibleToken-contract-IERC20Token-contract-IConverterAnchor-}

adds a convertible token

## Parameters:

- `_convertibleToken`:    convertible token

- `_anchor`:              associated anchor

## Function `removeConvertibleToken(contract IERC20Token _convertibleToken, contract IConverterAnchor _anchor)` {#ConverterRegistryData-removeConvertibleToken-contract-IERC20Token-contract-IConverterAnchor-}

removes a convertible token

## Parameters:

- `_convertibleToken`:    convertible token

- `_anchor`:              associated anchor

## Function `getSmartTokenCount() → uint256` {#ConverterRegistryData-getSmartTokenCount--}

returns the number of anchors

## Return Values:

- number of anchors

## Function `getSmartTokens() → address[]` {#ConverterRegistryData-getSmartTokens--}

returns the list of anchors

## Return Values:

- list of anchors

## Function `getSmartToken(uint256 _index) → contract IConverterAnchor` {#ConverterRegistryData-getSmartToken-uint256-}

returns the anchor at a given index

## Parameters:

- `_index`: index

## Return Values:

- anchor at the given index

## Function `isSmartToken(address _value) → bool` {#ConverterRegistryData-isSmartToken-address-}

checks whether or not a given value is an anchor

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is an anchor, false if not

## Function `getLiquidityPoolCount() → uint256` {#ConverterRegistryData-getLiquidityPoolCount--}

returns the number of liquidity pools

## Return Values:

- number of liquidity pools

## Function `getLiquidityPools() → address[]` {#ConverterRegistryData-getLiquidityPools--}

returns the list of liquidity pools

## Return Values:

- list of liquidity pools

## Function `getLiquidityPool(uint256 _index) → contract IConverterAnchor` {#ConverterRegistryData-getLiquidityPool-uint256-}

returns the liquidity pool at a given index

## Parameters:

- `_index`: index

## Return Values:

- liquidity pool at the given index

## Function `isLiquidityPool(address _value) → bool` {#ConverterRegistryData-isLiquidityPool-address-}

checks whether or not a given value is a liquidity pool

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a liquidity pool, false if not

## Function `getConvertibleTokenCount() → uint256` {#ConverterRegistryData-getConvertibleTokenCount--}

returns the number of convertible tokens

## Return Values:

- number of convertible tokens

## Function `getConvertibleTokens() → address[]` {#ConverterRegistryData-getConvertibleTokens--}

returns the list of convertible tokens

## Return Values:

- list of convertible tokens

## Function `getConvertibleToken(uint256 _index) → contract IERC20Token` {#ConverterRegistryData-getConvertibleToken-uint256-}

returns the convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- convertible token at the given index

## Function `isConvertibleToken(address _value) → bool` {#ConverterRegistryData-isConvertibleToken-address-}

checks whether or not a given value is a convertible token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a convertible token, false if not

## Function `getConvertibleTokenSmartTokenCount(contract IERC20Token _convertibleToken) → uint256` {#ConverterRegistryData-getConvertibleTokenSmartTokenCount-contract-IERC20Token-}

returns the number of anchors associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- number of anchors

## Function `getConvertibleTokenSmartTokens(contract IERC20Token _convertibleToken) → address[]` {#ConverterRegistryData-getConvertibleTokenSmartTokens-contract-IERC20Token-}

returns the list of anchors associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- list of anchors

## Function `getConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, uint256 _index) → contract IConverterAnchor` {#ConverterRegistryData-getConvertibleTokenSmartToken-contract-IERC20Token-uint256-}

returns the anchor associated with a given convertible token at a given index

## Parameters:

- `_index`: index

## Function `isConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, address _value) → bool` {#ConverterRegistryData-isConvertibleTokenSmartToken-contract-IERC20Token-address-}

checks whether or not a given value is an anchor of a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_value`: value

## Return Values:

- true if the given value is an anchor of the given convertible token, false it not
