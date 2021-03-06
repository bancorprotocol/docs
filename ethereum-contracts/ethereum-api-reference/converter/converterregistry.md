# ConverterRegistry

This contract maintains a list of all active converters in the Bancor Network.

Since converters can be upgraded and thus their address can change, the registry actually keeps

converter anchors internally and not the converters themselves.

The active converter for each anchor can be easily accessed by querying the anchor's owner.

The registry exposes 3 different lists that can be accessed and iterated, based on the use-case of the caller:

* Anchors - can be used to get all the latest / historical data in the network
* Liquidity pools - can be used to get all liquidity pools for funding, liquidation etc.
* Convertible tokens - can be used to get all tokens that can be converted in the network \(excluding pool

tokens\), and for each one - all anchors that hold it in their reserves

The contract fires events whenever one of the primitives is added to or removed from the registry

The contract is upgradable.

## Functions:

* [`constructor(contract IContractRegistry _registry)`](converterregistry.md#ConverterRegistry-constructor-contract-IContractRegistry-)
* [`newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IReserveToken---uint32---)
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
* [`getConvertibleTokenAnchorCount(contract IReserveToken _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchorCount-contract-IReserveToken-)
* [`getConvertibleTokenAnchors(contract IReserveToken _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchors-contract-IReserveToken-)
* [`getConvertibleTokenAnchor(contract IReserveToken _convertibleToken, uint256 _index)`](converterregistry.md#ConverterRegistry-getConvertibleTokenAnchor-contract-IReserveToken-uint256-)
* [`isConvertibleTokenAnchor(contract IReserveToken _convertibleToken, address _value)`](converterregistry.md#ConverterRegistry-isConvertibleTokenAnchor-contract-IReserveToken-address-)
* [`getConvertersByAnchors(address[] _anchors)`](converterregistry.md#ConverterRegistry-getConvertersByAnchors-address---)
* [`isConverterValid(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-isConverterValid-contract-IConverter-)
* [`isSimilarLiquidityPoolRegistered(contract IConverter _converter)`](converterregistry.md#ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-)
* [`getLiquidityPoolByConfig(uint16 _type, contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IReserveToken---uint32---)
* [`getSmartTokenCount()`](converterregistry.md#ConverterRegistry-getSmartTokenCount--)
* [`getSmartTokens()`](converterregistry.md#ConverterRegistry-getSmartTokens--)
* [`getSmartToken(uint256 _index)`](converterregistry.md#ConverterRegistry-getSmartToken-uint256-)
* [`isSmartToken(address _value)`](converterregistry.md#ConverterRegistry-isSmartToken-address-)
* [`getConvertibleTokenSmartTokenCount(contract IReserveToken _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartTokenCount-contract-IReserveToken-)
* [`getConvertibleTokenSmartTokens(contract IReserveToken _convertibleToken)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartTokens-contract-IReserveToken-)
* [`getConvertibleTokenSmartToken(contract IReserveToken _convertibleToken, uint256 _index)`](converterregistry.md#ConverterRegistry-getConvertibleTokenSmartToken-contract-IReserveToken-uint256-)
* [`isConvertibleTokenSmartToken(contract IReserveToken _convertibleToken, address _value)`](converterregistry.md#ConverterRegistry-isConvertibleTokenSmartToken-contract-IReserveToken-address-)
* [`getConvertersBySmartTokens(address[] _smartTokens)`](converterregistry.md#ConverterRegistry-getConvertersBySmartTokens-address---)
* [`getLiquidityPoolByReserveConfig(contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights)`](converterregistry.md#ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IReserveToken---uint32---)

## Events:

* [`ConverterAnchorAdded(contract IConverterAnchor _anchor)`](converterregistry.md#ConverterRegistry-ConverterAnchorAdded-contract-IConverterAnchor-)
* [`ConverterAnchorRemoved(contract IConverterAnchor _anchor)`](converterregistry.md#ConverterRegistry-ConverterAnchorRemoved-contract-IConverterAnchor-)
* [`LiquidityPoolAdded(contract IConverterAnchor _liquidityPool)`](converterregistry.md#ConverterRegistry-LiquidityPoolAdded-contract-IConverterAnchor-)
* [`LiquidityPoolRemoved(contract IConverterAnchor _liquidityPool)`](converterregistry.md#ConverterRegistry-LiquidityPoolRemoved-contract-IConverterAnchor-)
* [`ConvertibleTokenAdded(contract IReserveToken _convertibleToken, contract IConverterAnchor _smartToken)`](converterregistry.md#ConverterRegistry-ConvertibleTokenAdded-contract-IReserveToken-contract-IConverterAnchor-)
* [`ConvertibleTokenRemoved(contract IReserveToken _convertibleToken, contract IConverterAnchor _smartToken)`](converterregistry.md#ConverterRegistry-ConvertibleTokenRemoved-contract-IReserveToken-contract-IConverterAnchor-)
* [`SmartTokenAdded(contract IConverterAnchor _smartToken)`](converterregistry.md#ConverterRegistry-SmartTokenAdded-contract-IConverterAnchor-)
* [`SmartTokenRemoved(contract IConverterAnchor _smartToken)`](converterregistry.md#ConverterRegistry-SmartTokenRemoved-contract-IConverterAnchor-)

### Function `constructor(contract IContractRegistry _registry)` <a id="ConverterRegistry-constructor-contract-IContractRegistry-"></a>

initializes a new ConverterRegistry instance

### Parameters:

* `_registry`: address of a contract registry contract

### Function `newConverter(uint16 _type, string _name, string _symbol, uint8 _decimals, uint32 _maxConversionFee, contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights) → contract IConverter` <a id="ConverterRegistry-newConverter-uint16-string-string-uint8-uint32-contract-IReserveToken---uint32---"></a>

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

### Function `addConverter(contract IConverter _converter)` <a id="ConverterRegistry-addConverter-contract-IConverter-"></a>

adds an existing converter to the registry

can only be called by the owner

### Parameters:

* `_converter`: converter

### Function `removeConverter(contract IConverter _converter)` <a id="ConverterRegistry-removeConverter-contract-IConverter-"></a>

removes a converter from the registry

anyone can remove an existing converter from the registry, as long as the converter is invalid

note that the owner can also remove valid converters

### Parameters:

* `_converter`: converter

### Function `getAnchorCount() → uint256` <a id="ConverterRegistry-getAnchorCount--"></a>

returns the number of converter anchors in the registry

### Return Values:

* number of anchors

### Function `getAnchors() → address[]` <a id="ConverterRegistry-getAnchors--"></a>

returns the list of converter anchors in the registry

### Return Values:

* list of anchors

### Function `getAnchor(uint256 _index) → contract IConverterAnchor` <a id="ConverterRegistry-getAnchor-uint256-"></a>

returns the converter anchor at a given index

### Parameters:

* `_index`: index

### Return Values:

* anchor at the given index

### Function `isAnchor(address _value) → bool` <a id="ConverterRegistry-isAnchor-address-"></a>

checks whether or not a given value is a converter anchor

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is an anchor, false if not

### Function `getLiquidityPoolCount() → uint256` <a id="ConverterRegistry-getLiquidityPoolCount--"></a>

returns the number of liquidity pools in the registry

### Return Values:

* number of liquidity pools

### Function `getLiquidityPools() → address[]` <a id="ConverterRegistry-getLiquidityPools--"></a>

returns the list of liquidity pools in the registry

### Return Values:

* list of liquidity pools

### Function `getLiquidityPool(uint256 _index) → contract IConverterAnchor` <a id="ConverterRegistry-getLiquidityPool-uint256-"></a>

returns the liquidity pool at a given index

### Parameters:

* `_index`: index

### Return Values:

* liquidity pool at the given index

### Function `isLiquidityPool(address _value) → bool` <a id="ConverterRegistry-isLiquidityPool-address-"></a>

checks whether or not a given value is a liquidity pool

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a liquidity pool, false if not

### Function `getConvertibleTokenCount() → uint256` <a id="ConverterRegistry-getConvertibleTokenCount--"></a>

returns the number of convertible tokens in the registry

### Return Values:

* number of convertible tokens

### Function `getConvertibleTokens() → address[]` <a id="ConverterRegistry-getConvertibleTokens--"></a>

returns the list of convertible tokens in the registry

### Return Values:

* list of convertible tokens

### Function `getConvertibleToken(uint256 _index) → contract IReserveToken` <a id="ConverterRegistry-getConvertibleToken-uint256-"></a>

returns the convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* convertible token at the given index

### Function `isConvertibleToken(address _value) → bool` <a id="ConverterRegistry-isConvertibleToken-address-"></a>

checks whether or not a given value is a convertible token

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a convertible token, false if not

### Function `getConvertibleTokenAnchorCount(contract IReserveToken _convertibleToken) → uint256` <a id="ConverterRegistry-getConvertibleTokenAnchorCount-contract-IReserveToken-"></a>

returns the number of converter anchors associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* number of anchors associated with the given convertible token

### Function `getConvertibleTokenAnchors(contract IReserveToken _convertibleToken) → address[]` <a id="ConverterRegistry-getConvertibleTokenAnchors-contract-IReserveToken-"></a>

returns the list of converter anchors associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* list of anchors associated with the given convertible token

### Function `getConvertibleTokenAnchor(contract IReserveToken _convertibleToken, uint256 _index) → contract IConverterAnchor` <a id="ConverterRegistry-getConvertibleTokenAnchor-contract-IReserveToken-uint256-"></a>

returns the converter anchor associated with a given convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* anchor associated with the given convertible token at the given index

### Function `isConvertibleTokenAnchor(contract IReserveToken _convertibleToken, address _value) → bool` <a id="ConverterRegistry-isConvertibleTokenAnchor-contract-IReserveToken-address-"></a>

checks whether or not a given value is a converter anchor of a given convertible token

### Parameters:

* `_convertibleToken`: convertible token
* `_value`: value

### Return Values:

* true if the given value is an anchor of the given convertible token, false if not

### Function `getConvertersByAnchors(address[] _anchors) → contract IConverter[]` <a id="ConverterRegistry-getConvertersByAnchors-address---"></a>

returns a list of converters for a given list of anchors

this is a utility function that can be used to reduce the number of calls to the contract

### Parameters:

* `_anchors`: list of converter anchors

### Return Values:

* list of converters

### Function `isConverterValid(contract IConverter _converter) → bool` <a id="ConverterRegistry-isConverterValid-contract-IConverter-"></a>

checks whether or not a given converter is valid

### Parameters:

* `_converter`: converter

### Return Values:

* true if the given converter is valid, false if not

### Function `isSimilarLiquidityPoolRegistered(contract IConverter _converter) → bool` <a id="ConverterRegistry-isSimilarLiquidityPoolRegistered-contract-IConverter-"></a>

checks if a liquidity pool with given configuration is already registered

### Parameters:

* `_converter`: converter with specific configuration

### Return Values:

* if a liquidity pool with the same configuration is already registered

### Function `getLiquidityPoolByConfig(uint16 _type, contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` <a id="ConverterRegistry-getLiquidityPoolByConfig-uint16-contract-IReserveToken---uint32---"></a>

searches for a liquidity pool with specific configuration

### Parameters:

* `_type`: converter type, see ConverterBase contract main doc
* `_reserveTokens`: reserve tokens
* `_reserveWeights`: reserve weights

### Return Values:

* the liquidity pool, or zero if no such liquidity pool exists

### Function `getSmartTokenCount() → uint256` <a id="ConverterRegistry-getSmartTokenCount--"></a>

deprecated, backward compatibility, use `getAnchorCount`

### Function `getSmartTokens() → address[]` <a id="ConverterRegistry-getSmartTokens--"></a>

deprecated, backward compatibility, use `getAnchors`

### Function `getSmartToken(uint256 _index) → contract IConverterAnchor` <a id="ConverterRegistry-getSmartToken-uint256-"></a>

deprecated, backward compatibility, use `getAnchor`

### Function `isSmartToken(address _value) → bool` <a id="ConverterRegistry-isSmartToken-address-"></a>

deprecated, backward compatibility, use `isAnchor`

### Function `getConvertibleTokenSmartTokenCount(contract IReserveToken _convertibleToken) → uint256` <a id="ConverterRegistry-getConvertibleTokenSmartTokenCount-contract-IReserveToken-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchorCount`

### Function `getConvertibleTokenSmartTokens(contract IReserveToken _convertibleToken) → address[]` <a id="ConverterRegistry-getConvertibleTokenSmartTokens-contract-IReserveToken-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchors`

### Function `getConvertibleTokenSmartToken(contract IReserveToken _convertibleToken, uint256 _index) → contract IConverterAnchor` <a id="ConverterRegistry-getConvertibleTokenSmartToken-contract-IReserveToken-uint256-"></a>

deprecated, backward compatibility, use `getConvertibleTokenAnchor`

### Function `isConvertibleTokenSmartToken(contract IReserveToken _convertibleToken, address _value) → bool` <a id="ConverterRegistry-isConvertibleTokenSmartToken-contract-IReserveToken-address-"></a>

deprecated, backward compatibility, use `isConvertibleTokenAnchor`

### Function `getConvertersBySmartTokens(address[] _smartTokens) → contract IConverter[]` <a id="ConverterRegistry-getConvertersBySmartTokens-address---"></a>

deprecated, backward compatibility, use `getConvertersByAnchors`

### Function `getLiquidityPoolByReserveConfig(contract IReserveToken[] _reserveTokens, uint32[] _reserveWeights) → contract IConverterAnchor` <a id="ConverterRegistry-getLiquidityPoolByReserveConfig-contract-IReserveToken---uint32---"></a>

deprecated, backward compatibility, use `getLiquidityPoolByConfig`

### Event `ConverterAnchorAdded(contract IConverterAnchor _anchor)` <a id="ConverterRegistry-ConverterAnchorAdded-contract-IConverterAnchor-"></a>

triggered when a converter anchor is added to the registry

### Parameters:

* `_anchor`: anchor token

### Event `ConverterAnchorRemoved(contract IConverterAnchor _anchor)` <a id="ConverterRegistry-ConverterAnchorRemoved-contract-IConverterAnchor-"></a>

triggered when a converter anchor is removed from the registry

### Parameters:

* `_anchor`: anchor token

### Event `LiquidityPoolAdded(contract IConverterAnchor _liquidityPool)` <a id="ConverterRegistry-LiquidityPoolAdded-contract-IConverterAnchor-"></a>

triggered when a liquidity pool is added to the registry

### Parameters:

* `_liquidityPool`: liquidity pool

### Event `LiquidityPoolRemoved(contract IConverterAnchor _liquidityPool)` <a id="ConverterRegistry-LiquidityPoolRemoved-contract-IConverterAnchor-"></a>

triggered when a liquidity pool is removed from the registry

### Parameters:

* `_liquidityPool`: liquidity pool

### Event `ConvertibleTokenAdded(contract IReserveToken _convertibleToken, contract IConverterAnchor _smartToken)` <a id="ConverterRegistry-ConvertibleTokenAdded-contract-IReserveToken-contract-IConverterAnchor-"></a>

triggered when a convertible token is added to the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated anchor token

### Event `ConvertibleTokenRemoved(contract IReserveToken _convertibleToken, contract IConverterAnchor _smartToken)` <a id="ConverterRegistry-ConvertibleTokenRemoved-contract-IReserveToken-contract-IConverterAnchor-"></a>

triggered when a convertible token is removed from the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated anchor token

### Event `SmartTokenAdded(contract IConverterAnchor _smartToken)` <a id="ConverterRegistry-SmartTokenAdded-contract-IConverterAnchor-"></a>

deprecated, backward compatibility, use `ConverterAnchorAdded`

### Event `SmartTokenRemoved(contract IConverterAnchor _smartToken)` <a id="ConverterRegistry-SmartTokenRemoved-contract-IConverterAnchor-"></a>

deprecated, backward compatibility, use `ConverterAnchorRemoved`

