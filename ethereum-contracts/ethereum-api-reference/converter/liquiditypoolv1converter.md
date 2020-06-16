# LiquidityPoolV1Converter

Liquidity Pool v1 Converter

The liquidity pool v1 converter is a specialized version of a converter that manages

a classic bancor liquidity pool.

Even though classic pools can have many reserves, the most common configuration of

the pool has 2 reserves with 50%/50% weights.

## Functions:

* [`constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-)
* [`converterType()`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-converterType--)
* [`acceptAnchorOwnership()`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-acceptAnchorOwnership--)
* [`rateAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-rateAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)
* [`addLiquidity(contract IERC20Token[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-addLiquidity-contract-IERC20Token---uint256---uint256-)
* [`removeLiquidity(uint256 _amount, contract IERC20Token[] _reserveTokens, uint256[] _reserveMinReturnAmounts)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-removeLiquidity-uint256-contract-IERC20Token---uint256---)
* [`fund(uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-fund-uint256-)
* [`liquidate(uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-liquidate-uint256-)
* [`decimalLength(uint256 _x)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-decimalLength-uint256-)
* [`roundDiv(uint256 _n, uint256 _d)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-roundDiv-uint256-uint256-)
* [`geometricMean(uint256[] _values)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-geometricMean-uint256---)

## Events:

* [`PriceDataUpdate(address _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-PriceDataUpdate-address-uint256-uint256-uint32-)

## Function `constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)` <a id="LiquidityPoolV1Converter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-"></a>

initializes a new LiquidityPoolV1Converter instance

### Parameters:

* `_token`: pool token governed by the converter
* `_registry`: address of a contract registry contract
* `_maxConversionFee`: maximum conversion fee, represented in ppm

## Function `converterType() → uint16` <a id="LiquidityPoolV1Converter-converterType--"></a>

returns the converter type

### Return Values:

* see the converter types in the the main contract doc

## Function `acceptAnchorOwnership()` <a id="LiquidityPoolV1Converter-acceptAnchorOwnership--"></a>

accepts ownership of the anchor after an ownership transfer

also activates the converter

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

## Function `rateAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` <a id="LiquidityPoolV1Converter-rateAndFee-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

returns the expected rate of converting one reserve to another along with the fee

### Parameters:

* `_sourceToken`: contract address of the source reserve token
* `_targetToken`: contract address of the target reserve token
* `_amount`: amount of tokens received from the user

### Return Values:

* expected rate
* expected fee

## Function `addLiquidity(contract IERC20Token[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn)` <a id="LiquidityPoolV1Converter-addLiquidity-contract-IERC20Token---uint256---uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

note that prior to version 28, you should use 'fund' instead

### Parameters:

* `_reserveTokens`: address of each reserve token
* `_reserveAmounts`: amount of each reserve token
* `_minReturn`: token minimum return-amount

## Function `removeLiquidity(uint256 _amount, contract IERC20Token[] _reserveTokens, uint256[] _reserveMinReturnAmounts)` <a id="LiquidityPoolV1Converter-removeLiquidity-uint256-contract-IERC20Token---uint256---"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

note that prior to version 28, you should use 'liquidate' instead

### Parameters:

* `_amount`: token amount
* `_reserveTokens`: address of each reserve token
* `_reserveMinReturnAmounts`: minimum return-amount of each reserve token

## Function `fund(uint256 _amount)` <a id="LiquidityPoolV1Converter-fund-uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

for example, if the caller increases the supply by 10%,

then it will cost an amount equal to 10% of each reserve token balance

note that starting from version 28, you should use 'addLiquidity' instead

### Parameters:

* `_amount`:  amount to increase the supply by \(in the pool token\)

## Function `liquidate(uint256 _amount)` <a id="LiquidityPoolV1Converter-liquidate-uint256-"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

for example, if the holder sells 10% of the supply,

then they will receive 10% of each reserve token balance in return

note that starting from version 28, you should use 'removeLiquidity' instead

### Parameters:

* `_amount`:  amount to liquidate \(in the pool token\)

## Function `decimalLength(uint256 _x) → uint256` <a id="LiquidityPoolV1Converter-decimalLength-uint256-"></a>

calculates the number of decimal digits in a given value

### Parameters:

* `_x`:   value \(assumed positive\)

### Return Values:

* the number of decimal digits in the given value

## Function `roundDiv(uint256 _n, uint256 _d) → uint256` <a id="LiquidityPoolV1Converter-roundDiv-uint256-uint256-"></a>

calculates the nearest integer to a given quotient

### Parameters:

* `_n`: quotient numerator
* `_d`: quotient denominator

### Return Values:

* the nearest integer to the given quotient

## Function `geometricMean(uint256[] _values) → uint256` <a id="LiquidityPoolV1Converter-geometricMean-uint256---"></a>

calculates the average number of decimal digits in a given list of values

### Parameters:

* `_values`:  list of values \(each of which assumed positive\)

### Return Values:

* the average number of decimal digits in the given list of values

## Event `PriceDataUpdate(address _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)` <a id="LiquidityPoolV1Converter-PriceDataUpdate-address-uint256-uint256-uint32-"></a>

triggered after a conversion with new price data

deprecated, use `TokenRateUpdate` from version 28 and up

### Parameters:

* `_connectorToken`: reserve token
* `_tokenSupply`: smart token supply
* `_connectorBalance`: reserve balance
* `_connectorWeight`: reserve weight

