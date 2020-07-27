# LiquidTokenConverter

Liquid Token Converter

The liquid token converter is a specialized version of a converter that manages a liquid token.

The converters govern a token with a single reserve and allow converting between the two.

Liquid tokens usually have fractional reserve \(reserve ratio smaller than 100%\).

## Functions:

* [`constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)`](liquidtokenconverter.md#LiquidTokenConverter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-)
* [`converterType()`](liquidtokenconverter.md#LiquidTokenConverter-converterType--)
* [`acceptAnchorOwnership()`](liquidtokenconverter.md#LiquidTokenConverter-acceptAnchorOwnership--)
* [`addReserve(contract IERC20Token _token, uint32 _weight)`](liquidtokenconverter.md#LiquidTokenConverter-addReserve-contract-IERC20Token-uint32-)
* [`targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](liquidtokenconverter.md#LiquidTokenConverter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)

## Function `constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)` <a id="LiquidTokenConverter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-"></a>

initializes a new LiquidTokenConverter instance

### Parameters:

* `_token`: liquid token governed by the converter
* `_registry`: address of a contract registry contract
* `_maxConversionFee`: maximum conversion fee, represented in ppm

## Function `converterType() → uint16` <a id="LiquidTokenConverter-converterType--"></a>

returns the converter type

### Return Values:

* see the converter types in the the main contract doc

## Function `acceptAnchorOwnership()` <a id="LiquidTokenConverter-acceptAnchorOwnership--"></a>

accepts ownership of the anchor after an ownership transfer

also activates the converter

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

## Function `addReserve(contract IERC20Token _token, uint32 _weight)` <a id="LiquidTokenConverter-addReserve-contract-IERC20Token-uint32-"></a>

defines the reserve token for the converter

can only be called by the owner while the converter is inactive and the

reserve wasn't defined yet

### Parameters:

* `_token`: address of the reserve token
* `_weight`: reserve weight, represented in ppm, 1-1000000

## Function `targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` <a id="LiquidTokenConverter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

returns the expected target amount of converting the source token to the

target token along with the fee

### Parameters:

* `_sourceToken`: contract address of the source token
* `_targetToken`: contract address of the target token
* `_amount`: amount of tokens received from the user

### Return Values:

* expected target amount
* expected fee

