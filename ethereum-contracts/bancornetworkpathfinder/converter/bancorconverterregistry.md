# Bancor Converter Registry

The BancorConverterRegistry maintains a list of all active converters in the Bancor Network.

Since converters can be upgraded and thus their address can change, the registry actually keeps smart tokens internally and not the converters themselves.

The active converter for each smart token can be easily accessed by querying the smart token owner.

The registry exposes 3 differnet lists that can be accessed and iterated, based on the use-case of the caller:

* Smart tokens - can be used to get all the latest / historical data in the network
* Liquidity pools - can be used to get all liquidity pools for funding, liquidation etc.
* Convertible tokens - can be used to get all tokens that can be converted in the network \(excluding pool

  tokens\), and for each one - all smart tokens that hold it in their reserves

The contract fires events whenever one of the primitives is added to or removed from the registry

The contract is upgradable.

## Functions:

* [`constructor(contract IContractRegistry _registry)`](bancorconverterregistry.md#BancorConverterRegistry-constructor-contract-IContractRegistry-)
* [`addConverter(contract IBancorConverter _converter)`](bancorconverterregistry.md#BancorConverterRegistry-addConverter-contract-IBancorConverter-)
* [`removeConverter(contract IBancorConverter _converter)`](bancorconverterregistry.md#BancorConverterRegistry-removeConverter-contract-IBancorConverter-)
* [`getSmartTokenCount()`](bancorconverterregistry.md#BancorConverterRegistry-getSmartTokenCount--)
* [`getSmartTokens()`](bancorconverterregistry.md#BancorConverterRegistry-getSmartTokens--)
* [`getSmartToken(uint256 _index)`](bancorconverterregistry.md#BancorConverterRegistry-getSmartToken-uint256-)
* [`isSmartToken(address _value)`](bancorconverterregistry.md#BancorConverterRegistry-isSmartToken-address-)
* [`getLiquidityPoolCount()`](bancorconverterregistry.md#BancorConverterRegistry-getLiquidityPoolCount--)
* [`getLiquidityPools()`](bancorconverterregistry.md#BancorConverterRegistry-getLiquidityPools--)
* [`getLiquidityPool(uint256 _index)`](bancorconverterregistry.md#BancorConverterRegistry-getLiquidityPool-uint256-)
* [`isLiquidityPool(address _value)`](bancorconverterregistry.md#BancorConverterRegistry-isLiquidityPool-address-)
* [`getConvertibleTokenCount()`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleTokenCount--)
* [`getConvertibleTokens()`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleTokens--)
* [`getConvertibleToken(uint256 _index)`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleToken-uint256-)
* [`isConvertibleToken(address _value)`](bancorconverterregistry.md#BancorConverterRegistry-isConvertibleToken-address-)
* [`getConvertibleTokenSmartTokenCount(address _convertibleToken)`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleTokenSmartTokenCount-address-)
* [`getConvertibleTokenSmartTokens(address _convertibleToken)`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleTokenSmartTokens-address-)
* [`getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index)`](bancorconverterregistry.md#BancorConverterRegistry-getConvertibleTokenSmartToken-address-uint256-)
* [`isConvertibleTokenSmartToken(address _convertibleToken, address _value)`](bancorconverterregistry.md#BancorConverterRegistry-isConvertibleTokenSmartToken-address-address-)
* [`getConvertersBySmartTokens(address[] _smartTokens)`](bancorconverterregistry.md#BancorConverterRegistry-getConvertersBySmartTokens-address---)
* [`isConverterValid(contract IBancorConverter _converter)`](bancorconverterregistry.md#BancorConverterRegistry-isConverterValid-contract-IBancorConverter-)
* [`getLiquidityPoolByReserveConfig(address[] _reserveTokens, uint256[] _reserveRatios)`](bancorconverterregistry.md#BancorConverterRegistry-getLiquidityPoolByReserveConfig-address---uint256---)

## Events:

* [`SmartTokenAdded(address _smartToken)`](bancorconverterregistry.md#BancorConverterRegistry-SmartTokenAdded-address-)
* [`SmartTokenRemoved(address _smartToken)`](bancorconverterregistry.md#BancorConverterRegistry-SmartTokenRemoved-address-)
* [`LiquidityPoolAdded(address _liquidityPool)`](bancorconverterregistry.md#BancorConverterRegistry-LiquidityPoolAdded-address-)
* [`LiquidityPoolRemoved(address _liquidityPool)`](bancorconverterregistry.md#BancorConverterRegistry-LiquidityPoolRemoved-address-)
* [`ConvertibleTokenAdded(address _convertibleToken, address _smartToken)`](bancorconverterregistry.md#BancorConverterRegistry-ConvertibleTokenAdded-address-address-)
* [`ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)`](bancorconverterregistry.md#BancorConverterRegistry-ConvertibleTokenRemoved-address-address-)

## Function `constructor(contract IContractRegistry _registry)` <a id="BancorConverterRegistry-constructor-contract-IContractRegistry-"></a>

initializes a new BancorConverterRegistry instance

### Parameters:

* `_registry`: address of a contract registry contract

## Function `addConverter(contract IBancorConverter _converter)` <a id="BancorConverterRegistry-addConverter-contract-IBancorConverter-"></a>

adds a converter to the registry

anyone can add a converter to the registry, as long as the converter is active and valid

note that a liquidity pool converter can only be added if there's no existing pool with the same reserve configuration

### Parameters:

* `_converter`: converter

## Function `removeConverter(contract IBancorConverter _converter)` <a id="BancorConverterRegistry-removeConverter-contract-IBancorConverter-"></a>

removes a converter from the registry

anyone can remove invalid or inactive converters from the registry

note that the owner can also remove valid converters

### Parameters:

* `_converter`: converter

## Function `getSmartTokenCount() → uint256` <a id="BancorConverterRegistry-getSmartTokenCount--"></a>

returns the number of smart tokens in the registry

### Return Values:

* number of smart tokens

## Function `getSmartTokens() → address[]` <a id="BancorConverterRegistry-getSmartTokens--"></a>

returns the list of smart tokens in the registry

### Return Values:

* list of smart tokens

## Function `getSmartToken(uint256 _index) → address` <a id="BancorConverterRegistry-getSmartToken-uint256-"></a>

returns the smart token at a given index

### Parameters:

* `_index`: index

### Return Values:

* smart token at the given index

## Function `isSmartToken(address _value) → bool` <a id="BancorConverterRegistry-isSmartToken-address-"></a>

checks whether or not a given value is a smart token

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a smart token, false if not

## Function `getLiquidityPoolCount() → uint256` <a id="BancorConverterRegistry-getLiquidityPoolCount--"></a>

returns the number of liquidity pools in the registry

### Return Values:

* number of liquidity pools

## Function `getLiquidityPools() → address[]` <a id="BancorConverterRegistry-getLiquidityPools--"></a>

returns the list of liquidity pools in the registry

### Return Values:

* list of liquidity pools

## Function `getLiquidityPool(uint256 _index) → address` <a id="BancorConverterRegistry-getLiquidityPool-uint256-"></a>

returns the liquidity pool at a given index

### Parameters:

* `_index`: index

### Return Values:

* liquidity pool at the given index

## Function `isLiquidityPool(address _value) → bool` <a id="BancorConverterRegistry-isLiquidityPool-address-"></a>

checks whether or not a given value is a liquidity pool

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a liquidity pool, false if not

## Function `getConvertibleTokenCount() → uint256` <a id="BancorConverterRegistry-getConvertibleTokenCount--"></a>

returns the number of convertible tokens in the registry

### Return Values:

* number of convertible tokens

## Function `getConvertibleTokens() → address[]` <a id="BancorConverterRegistry-getConvertibleTokens--"></a>

returns the list of convertible tokens in the registry

### Return Values:

* list of convertible tokens

## Function `getConvertibleToken(uint256 _index) → address` <a id="BancorConverterRegistry-getConvertibleToken-uint256-"></a>

returns the convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* convertible token at the given index

## Function `isConvertibleToken(address _value) → bool` <a id="BancorConverterRegistry-isConvertibleToken-address-"></a>

checks whether or not a given value is a convertible token

### Parameters:

* `_value`: value

### Return Values:

* true if the given value is a convertible token, false if not

## Function `getConvertibleTokenSmartTokenCount(address _convertibleToken) → uint256` <a id="BancorConverterRegistry-getConvertibleTokenSmartTokenCount-address-"></a>

returns the number of smart tokens associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* number of smart tokens associated with the given convertible token

## Function `getConvertibleTokenSmartTokens(address _convertibleToken) → address[]` <a id="BancorConverterRegistry-getConvertibleTokenSmartTokens-address-"></a>

returns the list of smart tokens associated with a given convertible token

### Parameters:

* `_convertibleToken`: convertible token

### Return Values:

* list of smart tokens associated with the given convertible token

## Function `getConvertibleTokenSmartToken(address _convertibleToken, uint256 _index) → address` <a id="BancorConverterRegistry-getConvertibleTokenSmartToken-address-uint256-"></a>

returns the smart token associated with a given convertible token at a given index

### Parameters:

* `_index`: index

### Return Values:

* smart token associated with the given convertible token at the given index

## Function `isConvertibleTokenSmartToken(address _convertibleToken, address _value) → bool` <a id="BancorConverterRegistry-isConvertibleTokenSmartToken-address-address-"></a>

checks whether or not a given value is a smart token of a given convertible token

### Parameters:

* `_convertibleToken`: convertible token
* `_value`: value

### Return Values:

* true if the given value is a smart token of the given convertible token, false if not

## Function `getConvertersBySmartTokens(address[] _smartTokens) → address[]` <a id="BancorConverterRegistry-getConvertersBySmartTokens-address---"></a>

returns a list of converters for a given list of smart tokens

this is a utility function that can be used to reduce the number of calls to the contract

### Parameters:

* `_smartTokens`: list of smart tokens

### Return Values:

* list of converters

## Function `isConverterValid(contract IBancorConverter _converter) → bool` <a id="BancorConverterRegistry-isConverterValid-contract-IBancorConverter-"></a>

checks whether or not a given converter is valid

### Parameters:

* `_converter`: converter

### Return Values:

* true if the given converter is valid, false if not

## Function `getLiquidityPoolByReserveConfig(address[] _reserveTokens, uint256[] _reserveRatios) → contract ISmartToken` <a id="BancorConverterRegistry-getLiquidityPoolByReserveConfig-address---uint256---"></a>

searches for a liquidity pool with specific reserve tokens / ratios

### Parameters:

* `_reserveTokens`: reserve tokens
* `_reserveRatios`: reserve ratios

### Return Values:

* the liquidity pool, or zero if no such liquidity pool exists

## Event `SmartTokenAdded(address _smartToken)` <a id="BancorConverterRegistry-SmartTokenAdded-address-"></a>

triggered when a smart token is added to the registry

### Parameters:

* `_smartToken`: smart token

## Event `SmartTokenRemoved(address _smartToken)` <a id="BancorConverterRegistry-SmartTokenRemoved-address-"></a>

triggered when a smart token is removed from the registry

### Parameters:

* `_smartToken`: smart token

## Event `LiquidityPoolAdded(address _liquidityPool)` <a id="BancorConverterRegistry-LiquidityPoolAdded-address-"></a>

triggered when a liquidity pool is added to the registry

### Parameters:

* `_liquidityPool`: liquidity pool

## Event `LiquidityPoolRemoved(address _liquidityPool)` <a id="BancorConverterRegistry-LiquidityPoolRemoved-address-"></a>

triggered when a liquidity pool is removed from the registry

### Parameters:

* `_liquidityPool`: liquidity pool

## Event `ConvertibleTokenAdded(address _convertibleToken, address _smartToken)` <a id="BancorConverterRegistry-ConvertibleTokenAdded-address-address-"></a>

triggered when a convertible token is added to the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated smart token

## Event `ConvertibleTokenRemoved(address _convertibleToken, address _smartToken)` <a id="BancorConverterRegistry-ConvertibleTokenRemoved-address-address-"></a>

triggered when a convertible token is removed from the registry

### Parameters:

* `_convertibleToken`: convertible token
* `_smartToken`: associated smart token

