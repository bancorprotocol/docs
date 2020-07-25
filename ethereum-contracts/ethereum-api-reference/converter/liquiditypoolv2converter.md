# LiquidityPoolV2Converter

Liquidity Pool v2 Converter

The liquidity pool v2 converter is a specialized version of a converter that uses

price oracles to rebalance the reserve weights in such a way that the primary token

balance always strives to match the staked balance.

This type of liquidity pool always has 2 reserves and the reserve weights are dynamic.

## Functions:

* [`constructor(contract IPoolTokensContainer _poolTokensContainer, contract IContractRegistry _registry, uint32 _maxConversionFee)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-constructor-contract-IPoolTokensContainer-contract-IContractRegistry-uint32-)

* [`converterType()`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-converterType--)

* [`isActive()`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-isActive--)

* [`activate(contract IERC20Token _primaryReserveToken, contract IChainlinkPriceOracle _primaryReserveOracle, contract IChainlinkPriceOracle _secondaryReserveOracle)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-activate-contract-IERC20Token-contract-IChainlinkPriceOracle-contract-IChainlinkPriceOracle-)

* [`reserveStakedBalance(contract IERC20Token _reserveToken)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-reserveStakedBalance-contract-IERC20Token-)

* [`setReserveStakedBalance(contract IERC20Token _reserveToken, uint256 _balance)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-setReserveStakedBalance-contract-IERC20Token-uint256-)

* [`setMaxStakedBalances(uint256 _reserve1MaxStakedBalance, uint256 _reserve2MaxStakedBalance)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-setMaxStakedBalances-uint256-uint256-)

* [`disableMaxStakedBalances()`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-disableMaxStakedBalances--)

* [`poolToken(contract IERC20Token _reserveToken)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-poolToken-contract-IERC20Token-)

* [`liquidationLimit(contract ISmartToken _poolToken)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-liquidationLimit-contract-ISmartToken-)

* [`addReserve(contract IERC20Token _token, uint32 _weight)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-addReserve-contract-IERC20Token-uint32-)

* [`effectiveTokensRate()`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-effectiveTokensRate--)

* [`effectiveReserveWeights()`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-effectiveReserveWeights--)

* [`targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)

* [`addLiquidity(contract IERC20Token _reserveToken, uint256 _amount, uint256 _minReturn)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-addLiquidity-contract-IERC20Token-uint256-uint256-)

* [`removeLiquidity(contract ISmartToken _poolToken, uint256 _amount, uint256 _minReturn)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-removeLiquidity-contract-ISmartToken-uint256-uint256-)

* [`removeLiquidityReturn(contract ISmartToken _poolToken, uint256 _amount)`](liquiditypoolv2converter.md#LiquidityPoolV2Converter-removeLiquidityReturn-contract-ISmartToken-uint256-)

## Function `constructor(contract IPoolTokensContainer _poolTokensContainer, contract IContractRegistry _registry, uint32 _maxConversionFee)` <a id="LiquidityPoolV2Converter-constructor-contract-IPoolTokensContainer-contract-IContractRegistry-uint32-"></a>

initializes a new LiquidityPoolV2Converter instance

### Parameters:

* `_poolTokensContainer`: pool tokens container governed by the converter

* `_registry`: address of a contract registry contract

* `_maxConversionFee`: maximum conversion fee, represented in ppm

## Function `converterType() → uint16` <a id="LiquidityPoolV2Converter-converterType--"></a>

returns the converter type

### Return Values:

* see the converter types in the the main contract doc

## Function `isActive() → bool` <a id="LiquidityPoolV2Converter-isActive--"></a>

returns true if the converter is active, false otherwise

## Function `activate(contract IERC20Token _primaryReserveToken, contract IChainlinkPriceOracle _primaryReserveOracle, contract IChainlinkPriceOracle _secondaryReserveOracle)` <a id="LiquidityPoolV2Converter-activate-contract-IERC20Token-contract-IChainlinkPriceOracle-contract-IChainlinkPriceOracle-"></a>

sets the pool's primary reserve token / price oracles and activates the pool

each oracle must be able to provide the rate for each reserve token

note that the oracle must be whitelisted prior to the call

can only be called by the owner while the pool is inactive

### Parameters:

* `_primaryReserveToken`: address of the pool's primary reserve token

* `_primaryReserveOracle`: address of a chainlink price oracle for the primary reserve token

* `_secondaryReserveOracle`: address of a chainlink price oracle for the secondary reserve token

## Function `reserveStakedBalance(contract IERC20Token _reserveToken) → uint256` <a id="LiquidityPoolV2Converter-reserveStakedBalance-contract-IERC20Token-"></a>

returns the reserve's staked balance

### Parameters:

* `_reserveToken`:    reserve's staked balance

## Function `setReserveStakedBalance(contract IERC20Token _reserveToken, uint256 _balance)` <a id="LiquidityPoolV2Converter-setReserveStakedBalance-contract-IERC20Token-uint256-"></a>

sets the reserve's staked balance

can only be called by the upgrader contract while the upgrader is the owner

### Parameters:

* `_reserveToken`: reserve token address

* `_balance`: new reserve staked balance

## Function `setMaxStakedBalances(uint256 _reserve1MaxStakedBalance, uint256 _reserve2MaxStakedBalance)` <a id="LiquidityPoolV2Converter-setMaxStakedBalances-uint256-uint256-"></a>

sets the max staked balance for both reserves

available as a temporary mechanism during the pilot

can only be called by the owner

### Parameters:

* `_reserve1MaxStakedBalance`: max staked balance for reserve 1

* `_reserve2MaxStakedBalance`: max staked balance for reserve 2

## Function `disableMaxStakedBalances()` <a id="LiquidityPoolV2Converter-disableMaxStakedBalances--"></a>

disables the max staked balance mechanism

available as a temporary mechanism during the pilot

once disabled, it cannot be re-enabled

can only be called by the owner

## Function `poolToken(contract IERC20Token _reserveToken) → contract ISmartToken` <a id="LiquidityPoolV2Converter-poolToken-contract-IERC20Token-"></a>

returns the pool token address by the reserve token address

### Parameters:

* `_reserveToken`:    reserve token address

### Return Values:

* pool token address

## Function `liquidationLimit(contract ISmartToken _poolToken) → uint256` <a id="LiquidityPoolV2Converter-liquidationLimit-contract-ISmartToken-"></a>

returns the maximum number of pool tokens that can currently be liquidated

### Parameters:

* `_poolToken`:   address of the pool token

### Return Values:

* liquidation limit

## Function `addReserve(contract IERC20Token _token, uint32 _weight)` <a id="LiquidityPoolV2Converter-addReserve-contract-IERC20Token-uint32-"></a>

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive and

2 reserves aren't defined yet

### Parameters:

* `_token`: address of the reserve token

* `_weight`: reserve weight, represented in ppm, 1-1000000

## Function `effectiveTokensRate() → uint256, uint256` <a id="LiquidityPoolV2Converter-effectiveTokensRate--"></a>

returns the effective rate of 1 primary token in secondary tokens

### Return Values:

* rate of 1 primary token in secondary tokens \(numerator\)

* rate of 1 primary token in secondary tokens \(denominator\)

## Function `effectiveReserveWeights() → uint256, uint256` <a id="LiquidityPoolV2Converter-effectiveReserveWeights--"></a>

returns the effective reserve tokens weights

### Return Values:

* reserve1 weight

* reserve2 weight

## Function `targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256 targetAmount, uint256 fee` <a id="LiquidityPoolV2Converter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

returns the expected target amount of converting one reserve to another along with the fee

### Parameters:

* `_sourceToken`: contract address of the source reserve token

* `_targetToken`: contract address of the target reserve token

* `_amount`: amount of tokens received from the user

### Return Values:

* expected target amount

* expected fee

## Function `addLiquidity(contract IERC20Token _reserveToken, uint256 _amount, uint256 _minReturn) → uint256` <a id="LiquidityPoolV2Converter-addLiquidity-contract-IERC20Token-uint256-uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

### Parameters:

* `_reserveToken`: address of the reserve token to add liquidity to

* `_amount`: amount of liquidity to add

* `_minReturn`: minimum return-amount of pool tokens

### Return Values:

* amount of pool tokens minted

## Function `removeLiquidity(contract ISmartToken _poolToken, uint256 _amount, uint256 _minReturn) → uint256` <a id="LiquidityPoolV2Converter-removeLiquidity-contract-ISmartToken-uint256-uint256-"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

### Parameters:

* `_poolToken`: address of the pool token

* `_amount`: amount of pool tokens to burn

* `_minReturn`: minimum return-amount of reserve tokens

### Return Values:

* amount of liquidity removed

## Function `removeLiquidityReturn(contract ISmartToken _poolToken, uint256 _amount) → uint256` <a id="LiquidityPoolV2Converter-removeLiquidityReturn-contract-ISmartToken-uint256-"></a>

calculates the amount of reserve tokens entitled for a given amount of pool tokens

### Parameters:

* `_poolToken`: address of the pool token

* `_amount`: amount of pool tokens

### Return Values:

* amount of reserve tokens
