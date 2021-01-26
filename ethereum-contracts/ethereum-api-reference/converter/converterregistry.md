This contract maintains a list of all active converters in the Bancor Network.

Since converters can be upgraded and thus their address can change, the registry actually keeps

converter anchors internally and not the converters themselves.

The active converter for each anchor can be easily accessed by querying the anchor's owner.

The registry exposes 3 differnet lists that can be accessed and iterated, based on the use-case of the caller:

- Anchors - can be used to get all the latest / historical data in the network

- Liquidity pools - can be used to get all liquidity pools for funding, liquidation etc.

- Convertible tokens - can be used to get all tokens that can be converted in the network (excluding pool

tokens), and for each one - all anchors that hold it in their reserves

The contract fires events whenever one of the primitives is added to or removed from the registry

The contract is upgradable.

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#ConverterRegistry-constructor-contract-IContractRegistry-)

- [`newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](#ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IERC20Token---uint32---)

- [`addConverter(contract IConverter _converter)`](#ConverterRegistry-addConverter-contract-IConverter-)

- [`removeConverter(contract IConverter _converter)`](#ConverterRegistry-removeConverter-contract-IConverter-)

- [`getAnchorCount()`](#ConverterRegistry-getAnchorCount--)

- [`getAnchors()`](#ConverterRegistry-getAnchors--)

- [`getAnchor(uint256 _index)`](#ConverterRegistry-getAnchor-uint256-)

- [`isAnchor(address _value)`](#ConverterRegistry-isAnchor-address-)

- [`getLiquidityPoolCount()`](#ConverterRegistry-getLiquidityPoolCount--)

- [`getLiquidityPools()`](#ConverterRegistry-getLiquidityPools--)

- [`getLiquidityPool(uint256 _index)`](#ConverterRegistry-getLiquidityPool-uint256-)

- [`isLiquidityPool(address _value)`](#ConverterRegistry-isLiquidityPool-address-)

- [`getConvertibleTokenCount()`](#ConverterRegistry-getConvertibleTokenCount--)

- [`getConvertibleTokens()`](#ConverterRegistry-getConvertibleTokens--)

- [`getConvertibleToken(uint256 _index)`](#ConverterRegistry-getConvertibleToken-uint256-)

- [`isConvertibleToken(address _value)`](#ConverterRegistry-isConvertibleToken-address-)

- [`getConvertibleTokenAnchorCount(contract IERC20Token _convertibleToken)`](#ConverterRegistry-getConvertibleTokenAnchorCount-contract-IERC20Token-)

- [`getConvertibleTokenAnchors(contract IERC20Token _convertibleToken)`](#ConverterRegistry-getConvertibleTokenAnchors-contract-IERC20Token-)

- [`getConvertibleTokenAnchor(contract IERC20Token _convertibleToken, uint256 _index)`](#ConverterRegistry-getConvertibleTokenAnchor-contract-IERC20Token-uint256-)

- [`isConvertibleTokenAnchor(contract IERC20Token _convertibleToken, address _value)`](#ConverterRegistry-isConvertibleTokenAnchor-contract-IERC20Token-address-)

- [`getConvertersByAnchors(address[] _anchors)`](#ConverterRegistry-getConvertersByAnchors-address---)

- [`isConverterValid(contract IConverter _converter)`](#ConverterRegistry-isConverterValid-contract-IConverter-)

- [`isSimilarLiquidityPoolRegistered(contract IConverter _converter)`](#ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-)

- [`getLiquidityPoolByConfig(uint16 _type, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](#ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IERC20Token---uint32---)

- [`getSmartTokenCount()`](#ConverterRegistry-getSmartTokenCount--)

- [`getSmartTokens()`](#ConverterRegistry-getSmartTokens--)

- [`getSmartToken(uint256 _index)`](#ConverterRegistry-getSmartToken-uint256-)

- [`isSmartToken(address _value)`](#ConverterRegistry-isSmartToken-address-)

- [`getConvertibleTokenSmartTokenCount(contract IERC20Token _convertibleToken)`](#ConverterRegistry-getConvertibleTokenSmartTokenCount-contract-IERC20Token-)

- [`getConvertibleTokenSmartTokens(contract IERC20Token _convertibleToken)`](#ConverterRegistry-getConvertibleTokenSmartTokens-contract-IERC20Token-)

- [`getConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, uint256 _index)`](#ConverterRegistry-getConvertibleTokenSmartToken-contract-IERC20Token-uint256-)

- [`isConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, address _value)`](#ConverterRegistry-isConvertibleTokenSmartToken-contract-IERC20Token-address-)

- [`getConvertersBySmartTokens(address[] _smartTokens)`](#ConverterRegistry-getConvertersBySmartTokens-address---)

- [`getLiquidityPoolByReserveConfig(contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](#ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IERC20Token---uint32---)

# Events:

- [`ConverterAnchorAdded(contract IConverterAnchor _anchor)`](#ConverterRegistry-ConverterAnchorAdded-contract-IConverterAnchor-)

- [`ConverterAnchorRemoved(contract IConverterAnchor _anchor)`](#ConverterRegistry-ConverterAnchorRemoved-contract-IConverterAnchor-)

- [`LiquidityPoolAdded(contract IConverterAnchor _liquidityPool)`](#ConverterRegistry-LiquidityPoolAdded-contract-IConverterAnchor-)

- [`LiquidityPoolRemoved(contract IConverterAnchor _liquidityPool)`](#ConverterRegistry-LiquidityPoolRemoved-contract-IConverterAnchor-)

- [`ConvertibleTokenAdded(contract IERC20Token _convertibleToken, contract IConverterAnchor _smartToken)`](#ConverterRegistry-ConvertibleTokenAdded-contract-IERC20Token-contract-IConverterAnchor-)

- [`ConvertibleTokenRemoved(contract IERC20Token _convertibleToken, contract IConverterAnchor _smartToken)`](#ConverterRegistry-ConvertibleTokenRemoved-contract-IERC20Token-contract-IConverterAnchor-)

- [`SmartTokenAdded(contract IConverterAnchor _smartToken)`](#ConverterRegistry-SmartTokenAdded-contract-IConverterAnchor-)

- [`SmartTokenRemoved(contract IConverterAnchor _smartToken)`](#ConverterRegistry-SmartTokenRemoved-contract-IConverterAnchor-)

## Function `constructor(contract IContractRegistry _registry)` {#ConverterRegistry-constructor-contract-IContractRegistry-}

initializes a new ConverterRegistry instance

## Parameters:

- `_registry`: address of a contract registry contract

## Function `newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverter` {#ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IERC20Token---uint32---}

creates a zero supply liquid token / empty liquidity pool and adds its converter to the registry

## Parameters:

- `_type`:                converter type, see ConverterBase contract main doc

- `_name`:                token / pool name

- `_symbol`:              token / pool symbol

- `_decimals`:            token / pool decimals

- `_maxConversionFee`:    maximum conversion-fee

- `_reserveTokens`:       reserve tokens

- `_reserveWeights`:      reserve weights

## Return Values:

- new converter

## Function `addConverter(contract IConverter _converter)` {#ConverterRegistry-addConverter-contract-IConverter-}

adds an existing converter to the registry

can only be called by the owner

## Parameters:

- `_converter`: converter

## Function `removeConverter(contract IConverter _converter)` {#ConverterRegistry-removeConverter-contract-IConverter-}

removes a converter from the registry

anyone can remove an existing converter from the registry, as long as the converter is invalid

note that the owner can also remove valid converters

## Parameters:

- `_converter`: converter

## Function `getAnchorCount() → uint256` {#ConverterRegistry-getAnchorCount--}

returns the number of converter anchors in the registry

## Return Values:

- number of anchors

## Function `getAnchors() → address[]` {#ConverterRegistry-getAnchors--}

returns the list of converter anchors in the registry

## Return Values:

- list of anchors

## Function `getAnchor(uint256 _index) → contract IConverterAnchor` {#ConverterRegistry-getAnchor-uint256-}

returns the converter anchor at a given index

## Parameters:

- `_index`: index

## Return Values:

- anchor at the given index

## Function `isAnchor(address _value) → bool` {#ConverterRegistry-isAnchor-address-}

checks whether or not a given value is a converter anchor

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is an anchor, false if not

## Function `getLiquidityPoolCount() → uint256` {#ConverterRegistry-getLiquidityPoolCount--}

returns the number of liquidity pools in the registry

## Return Values:

- number of liquidity pools

## Function `getLiquidityPools() → address[]` {#ConverterRegistry-getLiquidityPools--}

returns the list of liquidity pools in the registry

## Return Values:

- list of liquidity pools

## Function `getLiquidityPool(uint256 _index) → contract IConverterAnchor` {#ConverterRegistry-getLiquidityPool-uint256-}

returns the liquidity pool at a given index

## Parameters:

- `_index`: index

## Return Values:

- liquidity pool at the given index

## Function `isLiquidityPool(address _value) → bool` {#ConverterRegistry-isLiquidityPool-address-}

checks whether or not a given value is a liquidity pool

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a liquidity pool, false if not

## Function `getConvertibleTokenCount() → uint256` {#ConverterRegistry-getConvertibleTokenCount--}

returns the number of convertible tokens in the registry

## Return Values:

- number of convertible tokens

## Function `getConvertibleTokens() → address[]` {#ConverterRegistry-getConvertibleTokens--}

returns the list of convertible tokens in the registry

## Return Values:

- list of convertible tokens

## Function `getConvertibleToken(uint256 _index) → contract IERC20Token` {#ConverterRegistry-getConvertibleToken-uint256-}

returns the convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- convertible token at the given index

## Function `isConvertibleToken(address _value) → bool` {#ConverterRegistry-isConvertibleToken-address-}

checks whether or not a given value is a convertible token

## Parameters:

- `_value`: value

## Return Values:

- true if the given value is a convertible token, false if not

## Function `getConvertibleTokenAnchorCount(contract IERC20Token _convertibleToken) → uint256` {#ConverterRegistry-getConvertibleTokenAnchorCount-contract-IERC20Token-}

returns the number of converter anchors associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- number of anchors associated with the given convertible token

## Function `getConvertibleTokenAnchors(contract IERC20Token _convertibleToken) → address[]` {#ConverterRegistry-getConvertibleTokenAnchors-contract-IERC20Token-}

returns the list of aoncerter anchors associated with a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

## Return Values:

- list of anchors associated with the given convertible token

## Function `getConvertibleTokenAnchor(contract IERC20Token _convertibleToken, uint256 _index) → contract IConverterAnchor` {#ConverterRegistry-getConvertibleTokenAnchor-contract-IERC20Token-uint256-}

returns the converter anchor associated with a given convertible token at a given index

## Parameters:

- `_index`: index

## Return Values:

- anchor associated with the given convertible token at the given index

## Function `isConvertibleTokenAnchor(contract IERC20Token _convertibleToken, address _value) → bool` {#ConverterRegistry-isConvertibleTokenAnchor-contract-IERC20Token-address-}

checks whether or not a given value is a converter anchor of a given convertible token

## Parameters:

- `_convertibleToken`: convertible token

- `_value`: value

## Return Values:

- true if the given value is an anchor of the given convertible token, false if not

## Function `getConvertersByAnchors(address[] _anchors) → contract IConverter[]` {#ConverterRegistry-getConvertersByAnchors-address---}

returns a list of converters for a given list of anchors

this is a utility function that can be used to reduce the number of calls to the contract

## Parameters:

- `_anchors`: list of converter anchors

## Return Values:

- list of converters

## Function `isConverterValid(contract IConverter _converter) → bool` {#ConverterRegistry-isConverterValid-contract-IConverter-}

checks whether or not a given converter is valid

## Parameters:

- `_converter`: converter

## Return Values:

- true if the given converter is valid, false if not

## Function `isSimilarLiquidityPoolRegistered(contract IConverter _converter) → bool` {#ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-}

checks if a liquidity pool with given configuration is already registered

## Parameters:

- `_converter`: converter with specific configuration

## Return Values:

- if a liquidity pool with the same configuration is already registered

## Function `getLiquidityPoolByConfig(uint16 _type, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` {#ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IERC20Token---uint32---}

searches for a liquidity pool with specific configuration

## Parameters:

- `_type`:            converter type, see ConverterBase contract main doc

- `_reserveTokens`:   reserve tokens

- `_reserveWeights`:  reserve weights

## Return Values:

- the liquidity pool, or zero if no such liquidity pool exists

## Function `getSmartTokenCount() → uint256` {#ConverterRegistry-getSmartTokenCount--}

deprecated, backward compatibility, use `getAnchorCount`

## Function `getSmartTokens() → address[]` {#ConverterRegistry-getSmartTokens--}

deprecated, backward compatibility, use `getAnchors`

## Function `getSmartToken(uint256 _index) → contract IConverterAnchor` {#ConverterRegistry-getSmartToken-uint256-}

deprecated, backward compatibility, use `getAnchor`

## Function `isSmartToken(address _value) → bool` {#ConverterRegistry-isSmartToken-address-}

deprecated, backward compatibility, use `isAnchor`

## Function `getConvertibleTokenSmartTokenCount(contract IERC20Token _convertibleToken) → uint256` {#ConverterRegistry-getConvertibleTokenSmartTokenCount-contract-IERC20Token-}

deprecated, backward compatibility, use `getConvertibleTokenAnchorCount`

## Function `getConvertibleTokenSmartTokens(contract IERC20Token _convertibleToken) → address[]` {#ConverterRegistry-getConvertibleTokenSmartTokens-contract-IERC20Token-}

deprecated, backward compatibility, use `getConvertibleTokenAnchors`

## Function `getConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, uint256 _index) → contract IConverterAnchor` {#ConverterRegistry-getConvertibleTokenSmartToken-contract-IERC20Token-uint256-}

deprecated, backward compatibility, use `getConvertibleTokenAnchor`

## Function `isConvertibleTokenSmartToken(contract IERC20Token _convertibleToken, address _value) → bool` {#ConverterRegistry-isConvertibleTokenSmartToken-contract-IERC20Token-address-}

deprecated, backward compatibility, use `isConvertibleTokenAnchor`

## Function `getConvertersBySmartTokens(address[] _smartTokens) → contract IConverter[]` {#ConverterRegistry-getConvertersBySmartTokens-address---}

deprecated, backward compatibility, use `getConvertersByAnchors`

## Function `getLiquidityPoolByReserveConfig(contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` {#ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IERC20Token---uint32---}

deprecated, backward compatibility, use `getLiquidityPoolByConfig`

## Event `ConverterAnchorAdded(contract IConverterAnchor _anchor)` {#ConverterRegistry-ConverterAnchorAdded-contract-IConverterAnchor-}

triggered when a converter anchor is added to the registry

## Parameters:

- `_anchor`: anchor token

## Event `ConverterAnchorRemoved(contract IConverterAnchor _anchor)` {#ConverterRegistry-ConverterAnchorRemoved-contract-IConverterAnchor-}

triggered when a converter anchor is removed from the registry

## Parameters:

- `_anchor`: anchor token

## Event `LiquidityPoolAdded(contract IConverterAnchor _liquidityPool)` {#ConverterRegistry-LiquidityPoolAdded-contract-IConverterAnchor-}

triggered when a liquidity pool is added to the registry

## Parameters:

- `_liquidityPool`: liquidity pool

## Event `LiquidityPoolRemoved(contract IConverterAnchor _liquidityPool)` {#ConverterRegistry-LiquidityPoolRemoved-contract-IConverterAnchor-}

triggered when a liquidity pool is removed from the registry

## Parameters:

- `_liquidityPool`: liquidity pool

## Event `ConvertibleTokenAdded(contract IERC20Token _convertibleToken, contract IConverterAnchor _smartToken)` {#ConverterRegistry-ConvertibleTokenAdded-contract-IERC20Token-contract-IConverterAnchor-}

triggered when a convertible token is added to the registry

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated anchor token

## Event `ConvertibleTokenRemoved(contract IERC20Token _convertibleToken, contract IConverterAnchor _smartToken)` {#ConverterRegistry-ConvertibleTokenRemoved-contract-IERC20Token-contract-IConverterAnchor-}

triggered when a convertible token is removed from the registry

## Parameters:

- `_convertibleToken`: convertible token

- `_smartToken`: associated anchor token

## Event `SmartTokenAdded(contract IConverterAnchor _smartToken)` {#ConverterRegistry-SmartTokenAdded-contract-IConverterAnchor-}

deprecated, backward compatibility, use `ConverterAnchorAdded`

## Event `SmartTokenRemoved(contract IConverterAnchor _smartToken)` {#ConverterRegistry-SmartTokenRemoved-contract-IConverterAnchor-}

deprecated, backward compatibility, use `ConverterAnchorRemoved`
