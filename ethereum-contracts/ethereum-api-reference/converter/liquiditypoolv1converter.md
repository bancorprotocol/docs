# LiquidityPoolV1Converter

Liquidity Pool v1 Converter

The liquidity pool v1 converter is a specialized version of a converter that manages

a classic bancor liquidity pool.

Even though pools can have many reserves, the standard pool configuration

is 2 reserves with 50%/50% weights.

## Functions:

* [`constructor(contract IDSToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-constructor-contract-IDSToken-contract-IContractRegistry-uint32-)

* [`converterType()`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-converterType--)

* [`acceptAnchorOwnership()`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-acceptAnchorOwnership--)

* [`addReserve(contract IERC20Token _token, uint32 _weight)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-addReserve-contract-IERC20Token-uint32-)

* [`targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)

* [`recentAverageRate(contract IERC20Token _token)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-recentAverageRate-contract-IERC20Token-)

* [`addLiquidity(contract IERC20Token[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-addLiquidity-contract-IERC20Token---uint256---uint256-)

* [`removeLiquidity(uint256 _amount, contract IERC20Token[] _reserveTokens, uint256[] _reserveMinReturnAmounts)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-removeLiquidity-uint256-contract-IERC20Token---uint256---)

* [`fund(uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-fund-uint256-)

* [`liquidate(uint256 _amount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-liquidate-uint256-)

* [`addLiquidityCost(contract IERC20Token[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-addLiquidityCost-contract-IERC20Token---uint256-uint256-)

* [`addLiquidityReturn(contract IERC20Token _reserveToken, uint256 _reserveAmount)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-addLiquidityReturn-contract-IERC20Token-uint256-)

* [`removeLiquidityReturn(uint256 _amount, contract IERC20Token[] _reserveTokens)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-removeLiquidityReturn-uint256-contract-IERC20Token---)

## Events:

* [`PriceDataUpdate(contract IERC20Token _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)`](liquiditypoolv1converter.md#LiquidityPoolV1Converter-PriceDataUpdate-contract-IERC20Token-uint256-uint256-uint32-)

## Function `constructor(contract IDSToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee)` <a id="LiquidityPoolV1Converter-constructor-contract-IDSToken-contract-IContractRegistry-uint32-"></a>

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

## Function `addReserve(contract IERC20Token _token, uint32 _weight)` <a id="LiquidityPoolV1Converter-addReserve-contract-IERC20Token-uint32-"></a>

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive

### Parameters:

* `_token`: address of the reserve token

* `_weight`: reserve weight, represented in ppm, 1-1000000

## Function `targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` <a id="LiquidityPoolV1Converter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

returns the expected target amount of converting one reserve to another along with the fee

### Parameters:

* `_sourceToken`: contract address of the source reserve token

* `_targetToken`: contract address of the target reserve token

* `_amount`: amount of tokens received from the user

### Return Values:

* expected target amount

* expected fee

## Function `recentAverageRate(contract IERC20Token _token) → uint256, uint256` <a id="LiquidityPoolV1Converter-recentAverageRate-contract-IERC20Token-"></a>

returns the recent average rate of 1 `_token` in the other reserve token units

note that the rate can only be queried for reserves in a standard pool

### Parameters:

* `_token`:   token to get the rate for

### Return Values:

* recent average rate between the reserves \(numerator\)

* recent average rate between the reserves \(denominator\)

## Function `addLiquidity(contract IERC20Token[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn) → uint256` <a id="LiquidityPoolV1Converter-addLiquidity-contract-IERC20Token---uint256---uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

note that prior to version 28, you should use 'fund' instead

### Parameters:

* `_reserveTokens`: address of each reserve token

* `_reserveAmounts`: amount of each reserve token

* `_minReturn`: token minimum return-amount

### Return Values:

* amount of pool tokens issued

## Function `removeLiquidity(uint256 _amount, contract IERC20Token[] _reserveTokens, uint256[] _reserveMinReturnAmounts) → uint256[]` <a id="LiquidityPoolV1Converter-removeLiquidity-uint256-contract-IERC20Token---uint256---"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

note that prior to version 28, you should use 'liquidate' instead

### Parameters:

* `_amount`: token amount

* `_reserveTokens`: address of each reserve token

* `_reserveMinReturnAmounts`: minimum return-amount of each reserve token

### Return Values:

* the amount of each reserve token granted for the given amount of pool tokens

## Function `fund(uint256 _amount) → uint256` <a id="LiquidityPoolV1Converter-fund-uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

for example, if the caller increases the supply by 10%,

then it will cost an amount equal to 10% of each reserve token balance

note that starting from version 28, you should use 'addLiquidity' instead

### Parameters:

* `_amount`:  amount to increase the supply by \(in the pool token\)

### Return Values:

* amount of pool tokens issued

## Function `liquidate(uint256 _amount) → uint256[]` <a id="LiquidityPoolV1Converter-liquidate-uint256-"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

for example, if the holder sells 10% of the supply,

then they will receive 10% of each reserve token balance in return

note that starting from version 28, you should use 'removeLiquidity' instead

### Parameters:

* `_amount`:  amount to liquidate \(in the pool token\)

### Return Values:

* the amount of each reserve token granted for the given amount of pool tokens

## Function `addLiquidityCost(contract IERC20Token[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount) → uint256[]` <a id="LiquidityPoolV1Converter-addLiquidityCost-contract-IERC20Token---uint256-uint256-"></a>

given the amount of one of the reserve tokens to add liquidity of,

returns the required amount of each one of the other reserve tokens

since an empty pool can be funded with any list of non-zero input amounts,

this function assumes that the pool is not empty \(has already been funded\)

### Parameters:

* `_reserveTokens`: address of each reserve token

* `_reserveTokenIndex`: index of the relevant reserve token

* `_reserveAmount`: amount of the relevant reserve token

### Return Values:

* the required amount of each one of the reserve tokens

## Function `addLiquidityReturn(contract IERC20Token _reserveToken, uint256 _reserveAmount) → uint256` <a id="LiquidityPoolV1Converter-addLiquidityReturn-contract-IERC20Token-uint256-"></a>

given the amount of one of the reserve tokens to add liquidity of,

returns the amount of pool tokens entitled for it

since an empty pool can be funded with any list of non-zero input amounts,

this function assumes that the pool is not empty \(has already been funded\)

### Parameters:

* `_reserveToken`: address of the reserve token

* `_reserveAmount`: amount of the reserve token

### Return Values:

* the amount of pool tokens entitled

## Function `removeLiquidityReturn(uint256 _amount, contract IERC20Token[] _reserveTokens) → uint256[]` <a id="LiquidityPoolV1Converter-removeLiquidityReturn-uint256-contract-IERC20Token---"></a>

returns the amount of each reserve token entitled for a given amount of pool tokens

### Parameters:

* `_amount`: amount of pool tokens

* `_reserveTokens`: address of each reserve token

### Return Values:

* the amount of each reserve token entitled for the given amount of pool tokens

## Event `PriceDataUpdate(contract IERC20Token _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)` <a id="LiquidityPoolV1Converter-PriceDataUpdate-contract-IERC20Token-uint256-uint256-uint32-"></a>

triggered after a conversion with new price data

deprecated, use `TokenRateUpdate` from version 28 and up

### Parameters:

* `_connectorToken`: reserve token

* `_tokenSupply`: pool token supply

* `_connectorBalance`: reserve balance

* `_connectorWeight`: reserve weight
