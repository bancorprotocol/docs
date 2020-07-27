# ConverterRegistry

The ConverterRegistry maintains a list of all active converters in the Bancor Network.

Since converters can be upgraded and thus their address can change, the registry actually keeps

converter anchors internally and not the converters themselves.

The active converter for each anchor can be easily accessed by querying the anchor's owner.

The registry exposes 3 differnet lists that can be accessed and iterated, based on the use-case of the caller:

* Anchors - can be used to get all the latest / historical data in the network
* Liquidity pools - can be used to get all liquidity pools for funding, liquidation etc.
* Convertible tokens - can be used to get all tokens that can be converted in the network \(excluding pool

  tokens\), and for each one - all anchors that hold it in their reserves

The contract fires events whenever one of the primitives is added to or removed from the registry

The contract is upgradable.

## Functions:

* [`constructor(contract IContractRegistry _registry)`](converterregistry.md#ConverterRegistry-constructor-contract-IContractRegistry-)
* [`newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IERC20Token---uint32---)
* [`addConverter(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-addConverter-contract-IConverter-)
* [`removeConverter(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-removeConverter-contract-IConverter-)
* [`getAnchorCount()`](converterregistry.md#ConverterRegistry-getAnchorCount--)
* [`getAnchors()`](converterregistry.md#ConverterRegistry-getAnchors--)
* [`getAnchor(uint256 _index)`](converterregistry.md#ConverterRegistry-getAnchor-uint256-)
* [`isAnchor(address _value)`](converterregistry.md#ConverterRegistry-isAnchor-address-)
* [`getLiquidityPoolCount()`](converterregistry.md#ConverterRegistry-getLiquidityPoolCount--)
* [`getLiquidityPools()`](converterregistry.md#ConverterRegistry-getLiquidityPools--)
* [`getLiquidityPool(uint256 _index)`](converterregistry.md#ConverterRegistry-getLiquidityPool-uint256-)
* [`isLiquidityPool(address _value)`](converterregistry.md#ConverterRegistry-isLiquidityPool-address-)
* [`getConvertibleTokenCount()`](converterregistry.md#ConverterRegistry-getConvertibleTokenCount--)
* [`getConvertibleTokens()`](converterregistry.md#ConverterRegistry-getConvertibleTokens--)
* [`getConvertibleToken(uint256 _index)`](converterregistry.md#ConverterRegistry-getConvertibleToken-uint256-)
* [`isConvertibleToken(address _value)`](converterregistry.md#ConverterRegistry-isConvertibleToken-address-)
* [`getConvertibleTokenAnchorCount(address _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchorCount-address-)
* [`getConvertibleTokenAnchors(address _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchors-address-)
* [`getConvertibleTokenAnchor(address _convertibleToken, uint256 _index)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchor-address-uint256-)
* [`isConvertibleTokenAnchor(address _convertibleToken, address _value)`](converterregistry.md#ConverterRegistry-isConvertibleTokenAnchor-address-address-)
* [`getConvertersByAnchors(address[] _anchors)`](converterregistry.md#ConverterRegistry-getConvertersByAnchors-address---)
* [`isConverterValid(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-isConverterValid-contract-IConverter-)
* [`isSimilarLiquidityPoolRegistered(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-)
* [`getLiquidityPoolByConfig(uint16 _type, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IERC20Token---uint32---)
* [`getSmartTokenCount()`](converterregistry.md#ConverterRegistry-getSmartTokenCount--)
* [`getSmartTokens()`](converterregistry.md#ConverterRegistry-getSmartTokens--)
* [`getSmartToken(uint256 _index)`](converterregistry.md#ConverterRegistry-getSmartToken-uint256-)
* [`isSmartToken(address _value)`](converterregistry.md#ConverterRegistry-isSmartToken-address-)
* [`getConvertibleTokenSmartTokenCount(address _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartTokenCount-address-)
* [`getConvertibleTokenSmartTokens(address _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartTokens-address-)
* [`getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartToken-address-uint256-)
* [`isConvertibleTokenSmartToken(address _convertibleToken, address _value)`](converterregistry.md#ConverterRegistry-isConvertibleTokenSmartToken-address-address-)
* [`getConvertersBySmartTokens(address[] _smartTokens)`](converterregistry.md#ConverterRegistry-getConvertersBySmartTokens-address---)
* [`getLiquidityPoolByReserveConfig(contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IERC20Token---uint32---)

## Events:

* [`ConverterAnchorAdded(address _anchor)`](converterregistry.md#ConverterRegistry-ConverterAnchorAdded-address-)
* [`ConverterAnchorRemoved(address _anchor)`](converterregistry.md#ConverterRegistry-ConverterAnchorRemoved-address-)
* [`LiquidityPoolAdded(address _liquidityPool)`](converterregistry.md#ConverterRegistry-LiquidityPoolAdded-address-)
* [`LiquidityPoolRemoved(address _liquidityPool)`](converterregistry.md#ConverterRegistry-LiquidityPoolRemoved-address-)
* [`ConvertibleTokenAdded(address _convertibleToken, address _smartToken)`](converterregistry.md#ConverterRegistry-ConvertibleTokenAdded-address-address-)
* [`ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)`](converterregistry.md#ConverterRegistry-ConvertibleTokenRemoved-address-address-)
* [`SmartTokenAdded(address _smartToken)`](converterregistry.md#ConverterRegistry-SmartTokenAdded-address-)
* [`SmartTokenRemoved(address _smartToken)`](converterregistry.md#ConverterRegistry-SmartTokenRemoved-address-)

## Function `constructor(contract IContractRegistry _registry)` <a id="ConverterRegistry-constructor-contract-IContractRegistry-"></a>

initializes a new ConverterRegistry instance

### Parameters:

* `_registry`: address of a contract registry contract

## Function `newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverter` <a id="ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IERC20Token---uint32---"></a>

creates a zero supply liquid token / empty liquidity pool and adds its converter to the registry

### Parameters:

* `_type`: converter type, see ConverterBase contract main doc
* `_name`: token / pool name
* `_symbol`: token / pool symbol
* `_decimals`: token / pool decimals
* `_maxConversionFee`: maximum conversion-fee
* `_reserveTokens`: reserve tokens
* `_reserveWeights`: reserve weights

### Return Values:

* new converter

## Function `addConverter(contract IConverter _converter)` <a id="ConverterRegistry-addConverter-contract-IConverter-"></a>

adds an existing converter to the registry

can only be called by the owner

### Parameters:

* `_converter`: converter

## Function `removeConverter(contract IConverter _converter)` <a id="ConverterRegistry-removeConverter-contract-IConverter-"></a>

removes a converter from the registry

anyone can remove an existing converter from the registry, as long as the converter is invalid

note that the owner can also remove valid converters

### Parameters:

* `_converter`: converter

## Function `getAnchorCount() → uint256` <a id="ConverterRegistry-getAnchorCount--"></a>

returns the number of converter anchors in the registry

### Return Values:

* number of anchors

## Function `getAnchors() → address[]` <a id="ConverterRegistry-getAnchors--"></a>

returns the list of converter anchors in the registry

### Return Values:

* list of anchors

## Function `getAnchor(uint256 _index) → address` <a id="ConverterRegistry-getAnchor-uint256-"></a>

returns the converter anchor at a given index

### Parameters:

* `_index`: index

### Return Values:

* anchor at the given index

## Function `isAnchor(address _value) → bool` <a id="ConverterRegistry-isAnchor-address-"></a>

checks whether or not a given value is a converter anchor

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is an anchor, false if not

## Function `getLiquidityPoolCount() → uint256` <a id="ConverterRegistry-getLiquidityPoolCount--"></a>

returns the number of liquidity pools in the registry

### Return Values:

* number of liquidity pools

## Function `getLiquidityPools() → address[]` <a id="ConverterRegistry-getLiquidityPools--"></a>

returns the list of liquidity pools in the registry

### Return Values:

* list of liquidity pools

## Function `getLiquidityPool(uint256 _index) → address` <a id="ConverterRegistry-getLiquidityPool-uint256-"></a>

returns the liquidity pool at a given index

### Parameters:

* `_index`: index

### Return Values:

* liquidity pool at the given index

## Function `isLiquidityPool(address _value) → bool` <a id="ConverterRegistry-isLiquidityPool-address-"></a>

checks whether or not a given value is a liquidity pool

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a liquidity pool, false if not

## Function `getConvertibleTokenCount() → uint256` <a id="ConverterRegistry-getConvertibleTokenCount--"></a>

returns the number of convertible tokens in the registry

### Return Values:

* number of convertible tokens

## Function `getConvertibleTokens() → address[]` <a id="ConverterRegistry-getConvertibleTokens--"></a>

returns the list of convertible tokens in the registry

### Return Values:

* list of convertible tokens

## Function `getConvertibleToken(uint256 _index) → address` <a id="ConverterRegistry-getConvertibleToken-uint256-"></a>

returns the convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* convertible token at the given index

## Function `isConvertibleToken(address _value) → bool` <a id="ConverterRegistry-isConvertibleToken-address-"></a>

checks whether or not a given value is a convertible token

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a convertible token, false if not

## Function `getConvertibleTokenAnchorCount(address _convertibleToken) → uint256` <a id="ConverterRegistry-getConvertibleTokenAnchorCount-address-"></a>

returns the number of converter anchors associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* number of anchors associated with the given convertible token

## Function `getConvertibleTokenAnchors(address _convertibleToken) → address[]` <a id="ConverterRegistry-getConvertibleTokenAnchors-address-"></a>

returns the list of aoncerter anchors associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* list of anchors associated with the given convertible token

## Function `getConvertibleTokenAnchor(address _convertibleToken, uint256 _index) → address` <a id="ConverterRegistry-getConvertibleTokenAnchor-address-uint256-"></a>

returns the converter anchor associated with a given convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* anchor associated with the given convertible token at the given index

## Function `isConvertibleTokenAnchor(address _convertibleToken, address _value) → bool` <a id="ConverterRegistry-isConvertibleTokenAnchor-address-address-"></a>

checks whether or not a given value is a converter anchor of a given convertible token

### Parameters:

* `_convertibleToken`: convertible token
* `_value`: value

### Return Values:

* true if the given value is an anchor of the given convertible token, false if not

## Function `getConvertersByAnchors(address[] _anchors) → address[]` <a id="ConverterRegistry-getConvertersByAnchors-address---"></a>

returns a list of converters for a given list of anchors

this is a utility function that can be used to reduce the number of calls to the contract

### Parameters:

* `_anchors`: list of converter anchors

### Return Values:

* list of converters

## Function `isConverterValid(contract IConverter _converter) → bool` <a id="ConverterRegistry-isConverterValid-contract-IConverter-"></a>

checks whether or not a given converter is valid

### Parameters:

* `_converter`: converter

### Return Values:

* true if the given converter is valid, false if not

## Function `isSimilarLiquidityPoolRegistered(contract IConverter _converter) → bool` <a id="ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-"></a>

checks if a liquidity pool with given configuration is already registered

### Parameters:

* `_converter`: converter with specific configuration

### Return Values:

* if a liquidity pool with the same configuration is already registered

## Function `getLiquidityPoolByConfig(uint16 _type, contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` <a id="ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IERC20Token---uint32---"></a>

searches for a liquidity pool with specific configuration

### Parameters:

* `_type`: converter type, see ConverterBase contract main doc
* `_reserveTokens`: reserve tokens
* `_reserveWeights`: reserve weights

### Return Values:

* the liquidity pool, or zero if no such liquidity pool exists

## Function `getSmartTokenCount() → uint256` <a id="ConverterRegistry-getSmartTokenCount--"></a>

deprecated, backward compatibility, use `getAnchorCount`

## Function `getSmartTokens() → address[]` <a id="ConverterRegistry-getSmartTokens--"></a>

deprecated, backward compatibility, use `getAnchors`

## Function `getSmartToken(uint256 _index) → address` <a id="ConverterRegistry-getSmartToken-uint256-"></a>

deprecated, backward compatibility, use `getAnchor`

## Function `isSmartToken(address _value) → bool` <a id="ConverterRegistry-isSmartToken-address-"></a>

deprecated, backward compatibility, use `isAnchor`

## Function `getConvertibleTokenSmartTokenCount(address _convertibleToken) → uint256` <a id="ConverterRegistry-getConvertibleTokenSmartTokenCount-address-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchorCount`

## Function `getConvertibleTokenSmartTokens(address _convertibleToken) → address[]` <a id="ConverterRegistry-getConvertibleTokenSmartTokens-address-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchors`

## Function `getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index) → address` <a id="ConverterRegistry-getConvertibleTokenSmartToken-address-uint256-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchor`

## Function `isConvertibleTokenSmartToken(address _convertibleToken, address _value) → bool` <a id="ConverterRegistry-isConvertibleTokenSmartToken-address-address-"></a>

deprecated, backward compatibility, use `isConvertibleTokenAnchor`

## Function `getConvertersBySmartTokens(address[] _smartTokens) → address[]` <a id="ConverterRegistry-getConvertersBySmartTokens-address---"></a>

deprecated, backward compatibility, use `getConvertersByAnchors`

## Function `getLiquidityPoolByReserveConfig(contract IERC20Token[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` <a id="ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IERC20Token---uint32---"></a>

deprecated, backward compatibility, use `getLiquidityPoolByConfig`

## Event `ConverterAnchorAdded(address _anchor)` <a id="ConverterRegistry-ConverterAnchorAdded-address-"></a>

triggered when a converter anchor is added to the registry

### Parameters:

* `_anchor`: smart token

## Event `ConverterAnchorRemoved(address _anchor)` <a id="ConverterRegistry-ConverterAnchorRemoved-address-"></a>

triggered when a converter anchor is removed from the registry

### Parameters:

* `_anchor`: smart token

## Event `LiquidityPoolAdded(address _liquidityPool)` <a id="ConverterRegistry-LiquidityPoolAdded-address-"></a>

triggered when a liquidity pool is added to the registry

### Parameters:

* `_liquidityPool`: liquidity pool

## Event `LiquidityPoolRemoved(address _liquidityPool)` <a id="ConverterRegistry-LiquidityPoolRemoved-address-"></a>

triggered when a liquidity pool is removed from the registry

### Parameters:

* `_liquidityPool`: liquidity pool

## Event `ConvertibleTokenAdded(address _convertibleToken, address _smartToken)` <a id="ConverterRegistry-ConvertibleTokenAdded-address-address-"></a>

triggered when a convertible token is added to the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated smart token

## Event `ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)` <a id="ConverterRegistry-ConvertibleTokenRemoved-address-address-"></a>

triggered when a convertible token is removed from the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated smart token

## Event `SmartTokenAdded(address _smartToken)` <a id="ConverterRegistry-SmartTokenAdded-address-"></a>

deprecated, backward compatibility, use `ConverterAnchorAdded`

## Event `SmartTokenRemoved(address _smartToken)` <a id="ConverterRegistry-SmartTokenRemoved-address-"></a>

deprecated, backward compatibility, use `ConverterAnchorRemoved`

