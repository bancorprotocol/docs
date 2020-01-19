# Bancor Converter Factory

## Functions:

* [`constructor()`](bancorconverterfactory.md#BancorConverterFactory-constructor--)
* [`createConverter(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee, contract IERC20Token _reserveToken, uint32 _reserveRatio)`](bancorconverterfactory.md#BancorConverterFactory-createConverter-contract-ISmartToken-contract-IContractRegistry-uint32-contract-IERC20Token-uint32-)

## Events:

* [`NewConverter(address _converter, address _owner)`](bancorconverterfactory.md#BancorConverterFactory-NewConverter-address-address-)

## Function `constructor()` <a id="BancorConverterFactory-constructor--"></a>

initializes a new BancorConverterFactory instance

## Function `createConverter(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee, contract IERC20Token _reserveToken, uint32 _reserveRatio) → address converterAddress` <a id="BancorConverterFactory-createConverter-contract-ISmartToken-contract-IContractRegistry-uint32-contract-IERC20Token-uint32-"></a>

creates a new converter with the given arguments and transfers

the ownership and management to the sender.

### Parameters:

* `_token`: smart token governed by the converter
* `_registry`: address of a contract registry contract
* `_maxConversionFee`: maximum conversion fee, represented in ppm
* `_reserveToken`: optional, initial reserve, allows defining the first reserve at deployment time
* `_reserveRatio`: optional, ratio for the initial reserve

### Return Values:

* a new converter

## Event `NewConverter(address _converter, address _owner)` <a id="BancorConverterFactory-NewConverter-address-address-"></a>

triggered when a new converter is created

### Parameters:

* `_converter`: new converter address
* `_owner`: converter owner address

