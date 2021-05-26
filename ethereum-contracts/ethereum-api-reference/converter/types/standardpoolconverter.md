# StandardPoolConverter

This contract is a specialized version of the converter, which is

optimized for a liquidity pool that has 2 reserves with 50%/50% weights.

## Functions:

* [`constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)`](standardpoolconverter.md#StandardPoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-)
* [`converterType()`](standardpoolconverter.md#StandardPoolConverter-converterType--)
* [`receive()`](standardpoolconverter.md#StandardPoolConverter-receive--)
* [`isV28OrHigher()`](standardpoolconverter.md#StandardPoolConverter-isV28OrHigher--)
* [`isActive()`](standardpoolconverter.md#StandardPoolConverter-isActive--)
* [`transferAnchorOwnership(address _newOwner)`](standardpoolconverter.md#StandardPoolConverter-transferAnchorOwnership-address-)
* [`acceptAnchorOwnership()`](standardpoolconverter.md#StandardPoolConverter-acceptAnchorOwnership--)
* [`setConversionFee(uint32 _conversionFee)`](standardpoolconverter.md#StandardPoolConverter-setConversionFee-uint32-)
* [`transferReservesOnUpgrade(address _newConverter)`](standardpoolconverter.md#StandardPoolConverter-transferReservesOnUpgrade-address-)
* [`upgrade()`](standardpoolconverter.md#StandardPoolConverter-upgrade--)
* [`onUpgradeComplete()`](standardpoolconverter.md#StandardPoolConverter-onUpgradeComplete--)
* [`reserveTokenCount()`](standardpoolconverter.md#StandardPoolConverter-reserveTokenCount--)
* [`reserveTokens()`](standardpoolconverter.md#StandardPoolConverter-reserveTokens--)
* [`addReserve(contract IReserveToken _token, uint32 _weight)`](standardpoolconverter.md#StandardPoolConverter-addReserve-contract-IReserveToken-uint32-)
* [`reserveWeight(contract IReserveToken _reserveToken)`](standardpoolconverter.md#StandardPoolConverter-reserveWeight-contract-IReserveToken-)
* [`reserveBalance(contract IReserveToken _reserveToken)`](standardpoolconverter.md#StandardPoolConverter-reserveBalance-contract-IReserveToken-)
* [`reserveBalances()`](standardpoolconverter.md#StandardPoolConverter-reserveBalances--)
* [`syncReserveBalances()`](standardpoolconverter.md#StandardPoolConverter-syncReserveBalances--)
* [`processNetworkFees()`](standardpoolconverter.md#StandardPoolConverter-processNetworkFees--)
* [`convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](standardpoolconverter.md#StandardPoolConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-)
* [`targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](standardpoolconverter.md#StandardPoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)
* [`sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](standardpoolconverter.md#StandardPoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)
* [`recentAverageRate(contract IReserveToken _token)`](standardpoolconverter.md#StandardPoolConverter-recentAverageRate-contract-IReserveToken-)
* [`addLiquidity(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn)`](standardpoolconverter.md#StandardPoolConverter-addLiquidity-contract-IReserveToken---uint256---uint256-)
* [`removeLiquidity(uint256 _amount, contract IReserveToken[] _reserveTokens, uint256[] _reserveMinReturnAmounts)`](standardpoolconverter.md#StandardPoolConverter-removeLiquidity-uint256-contract-IReserveToken---uint256---)
* [`addLiquidityCost(contract IReserveToken[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount)`](standardpoolconverter.md#StandardPoolConverter-addLiquidityCost-contract-IReserveToken---uint256-uint256-)
* [`addLiquidityReturn(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts)`](standardpoolconverter.md#StandardPoolConverter-addLiquidityReturn-contract-IReserveToken---uint256---)
* [`removeLiquidityReturn(uint256 _amount, contract IReserveToken[] _reserveTokens)`](standardpoolconverter.md#StandardPoolConverter-removeLiquidityReturn-uint256-contract-IReserveToken---)
* [`token()`](standardpoolconverter.md#StandardPoolConverter-token--)
* [`transferTokenOwnership(address _newOwner)`](standardpoolconverter.md#StandardPoolConverter-transferTokenOwnership-address-)
* [`acceptTokenOwnership()`](standardpoolconverter.md#StandardPoolConverter-acceptTokenOwnership--)
* [`connectors(contract IReserveToken _address)`](standardpoolconverter.md#StandardPoolConverter-connectors-contract-IReserveToken-)
* [`connectorTokens(uint256 _index)`](standardpoolconverter.md#StandardPoolConverter-connectorTokens-uint256-)
* [`connectorTokenCount()`](standardpoolconverter.md#StandardPoolConverter-connectorTokenCount--)
* [`getConnectorBalance(contract IReserveToken _connectorToken)`](standardpoolconverter.md#StandardPoolConverter-getConnectorBalance-contract-IReserveToken-)
* [`getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](standardpoolconverter.md#StandardPoolConverter-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-)

## Events:

* [`LiquidityAdded(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](standardpoolconverter.md#StandardPoolConverter-LiquidityAdded-address-contract-IReserveToken-uint256-uint256-uint256-)
* [`LiquidityRemoved(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](standardpoolconverter.md#StandardPoolConverter-LiquidityRemoved-address-contract-IReserveToken-uint256-uint256-uint256-)

### Function `constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)` <a id="StandardPoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-"></a>

initializes a new StandardPoolConverter instance

### Parameters:

* `_anchor`: anchor governed by the converter
* `_registry`: address of a contract registry contract
* `_maxConversionFee`: maximum conversion fee, represented in ppm

### Function `converterType() → uint16` <a id="StandardPoolConverter-converterType--"></a>

returns the converter type

### Return Values:

* see the converter types in the the main contract doc

### Function `receive()` <a id="StandardPoolConverter-receive--"></a>

deposits ether

can only be called if the converter has an ETH reserve

### Function `isV28OrHigher() → bool` <a id="StandardPoolConverter-isV28OrHigher--"></a>

checks whether or not the converter version is 28 or higher

### Return Values:

* since the converter version is 28 or higher

### Function `isActive() → bool` <a id="StandardPoolConverter-isActive--"></a>

returns true if the converter is active, false otherwise

### Return Values:

* true if the converter is active, false otherwise

### Function `transferAnchorOwnership(address _newOwner)` <a id="StandardPoolConverter-transferAnchorOwnership-address-"></a>

transfers the anchor ownership

the new owner needs to accept the transfer

can only be called by the converter upgrader while the upgrader is the owner

note that prior to version 28, you should use 'transferAnchorOwnership' instead

### Parameters:

* `_newOwner`:    new token owner

### Function `acceptAnchorOwnership()` <a id="StandardPoolConverter-acceptAnchorOwnership--"></a>

accepts ownership of the anchor after an ownership transfer

most converters are also activated as soon as they accept the anchor ownership

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

### Function `setConversionFee(uint32 _conversionFee)` <a id="StandardPoolConverter-setConversionFee-uint32-"></a>

updates the current conversion fee

can only be called by the contract owner

### Parameters:

* `_conversionFee`: new conversion fee, represented in ppm

### Function `transferReservesOnUpgrade(address _newConverter)` <a id="StandardPoolConverter-transferReservesOnUpgrade-address-"></a>

transfers reserve balances to a new converter during an upgrade

can only be called by the converter upgraded which should be set at its owner

### Parameters:

* `_newConverter`: address of the converter to receive the new amount

### Function `upgrade()` <a id="StandardPoolConverter-upgrade--"></a>

upgrades the converter to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new converter after the upgrade

### Function `onUpgradeComplete()` <a id="StandardPoolConverter-onUpgradeComplete--"></a>

executed by the upgrader at the end of the upgrade process to handle custom pool logic

### Function `reserveTokenCount() → uint16` <a id="StandardPoolConverter-reserveTokenCount--"></a>

returns the number of reserve tokens

note that prior to version 17, you should use 'connectorTokenCount' instead

### Return Values:

* number of reserve tokens

### Function `reserveTokens() → contract IReserveToken[]` <a id="StandardPoolConverter-reserveTokens--"></a>

returns the array of reserve tokens

### Return Values:

* array of reserve tokens

### Function `addReserve(contract IReserveToken _token, uint32 _weight)` <a id="StandardPoolConverter-addReserve-contract-IReserveToken-uint32-"></a>

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive

### Parameters:

* `_token`: address of the reserve token
* `_weight`: reserve weight, represented in ppm, 1-1000000

### Function `reserveWeight(contract IReserveToken _reserveToken) → uint32` <a id="StandardPoolConverter-reserveWeight-contract-IReserveToken-"></a>

returns the reserve's weight

added in version 28

### Parameters:

* `_reserveToken`: reserve token contract address

### Return Values:

* reserve weight

### Function `reserveBalance(contract IReserveToken _reserveToken) → uint256` <a id="StandardPoolConverter-reserveBalance-contract-IReserveToken-"></a>

returns the balance of a given reserve token

### Parameters:

* `_reserveToken`:    reserve token contract address

### Return Values:

* the balance of the given reserve token

### Function `reserveBalances() → uint256, uint256` <a id="StandardPoolConverter-reserveBalances--"></a>

returns the balances of both reserve tokens

### Return Values:

* the balances of both reserve tokens

### Function `syncReserveBalances()` <a id="StandardPoolConverter-syncReserveBalances--"></a>

syncs all stored reserve balances

### Function `processNetworkFees()` <a id="StandardPoolConverter-processNetworkFees--"></a>

calculates the accumulated network fee and transfers it to the network fee wallet

### Function `convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` <a id="StandardPoolConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-"></a>

converts a specific amount of source tokens to target tokens

can only be called by the bancor network contract

### Parameters:

* `_sourceToken`: source reserve token
* `_targetToken`: target reserve token
* `_amount`: amount of tokens to convert \(in units of the source token\)
* `_trader`: address of the caller who executed the conversion
* `_beneficiary`: wallet to receive the conversion result

### Return Values:

* amount of tokens received \(in units of the target token\)

### Function `targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` <a id="StandardPoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-"></a>

returns the expected amount and expected fee for converting one reserve to another

### Parameters:

* `_sourceToken`: address of the source reserve token contract
* `_targetToken`: address of the target reserve token contract
* `_amount`: amount of source reserve tokens converted

### Return Values:

* expected amount in units of the target reserve token
* expected fee in units of the target reserve token

### Function `sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` <a id="StandardPoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-"></a>

returns the required amount and expected fee for converting one reserve to another

### Parameters:

* `_sourceToken`: address of the source reserve token contract
* `_targetToken`: address of the target reserve token contract
* `_amount`: amount of target reserve tokens desired

### Return Values:

* required amount in units of the source reserve token
* expected fee in units of the target reserve token

### Function `recentAverageRate(contract IReserveToken _token) → uint256, uint256` <a id="StandardPoolConverter-recentAverageRate-contract-IReserveToken-"></a>

returns the recent average rate of 1 `_token` in the other reserve token units

### Parameters:

* `_token`: token to get the rate for

### Return Values:

* recent average rate between the reserves \(numerator\)
* recent average rate between the reserves \(denominator\)

### Function `addLiquidity(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn) → uint256` <a id="StandardPoolConverter-addLiquidity-contract-IReserveToken---uint256---uint256-"></a>

increases the pool's liquidity and mints new shares in the pool to the caller

### Parameters:

* `_reserveTokens`: address of each reserve token
* `_reserveAmounts`: amount of each reserve token
* `_minReturn`: token minimum return-amount

### Return Values:

* amount of pool tokens issued

### Function `removeLiquidity(uint256 _amount, contract IReserveToken[] _reserveTokens, uint256[] _reserveMinReturnAmounts) → uint256[]` <a id="StandardPoolConverter-removeLiquidity-uint256-contract-IReserveToken---uint256---"></a>

decreases the pool's liquidity and burns the caller's shares in the pool

### Parameters:

* `_amount`: token amount
* `_reserveTokens`: address of each reserve token
* `_reserveMinReturnAmounts`: minimum return-amount of each reserve token

### Return Values:

* the amount of each reserve token granted for the given amount of pool tokens

### Function `addLiquidityCost(contract IReserveToken[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount) → uint256[]` <a id="StandardPoolConverter-addLiquidityCost-contract-IReserveToken---uint256-uint256-"></a>

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

### Function `addLiquidityReturn(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts) → uint256` <a id="StandardPoolConverter-addLiquidityReturn-contract-IReserveToken---uint256---"></a>

returns the amount of pool tokens entitled for given amounts of reserve tokens

since an empty pool can be funded with any list of non-zero input amounts,

this function assumes that the pool is not empty \(has already been funded\)

### Parameters:

* `_reserveTokens`: address of each reserve token
* `_reserveAmounts`: amount of each reserve token

### Return Values:

* the amount of pool tokens entitled for the given amounts of reserve tokens

### Function `removeLiquidityReturn(uint256 _amount, contract IReserveToken[] _reserveTokens) → uint256[]` <a id="StandardPoolConverter-removeLiquidityReturn-uint256-contract-IReserveToken---"></a>

returns the amount of each reserve token entitled for a given amount of pool tokens

### Parameters:

* `_amount`: amount of pool tokens
* `_reserveTokens`: address of each reserve token

### Return Values:

* the amount of each reserve token entitled for the given amount of pool tokens

### Function `token() → contract IConverterAnchor` <a id="StandardPoolConverter-token--"></a>

deprecated since version 28, backward compatibility - use only for earlier versions

### Function `transferTokenOwnership(address _newOwner)` <a id="StandardPoolConverter-transferTokenOwnership-address-"></a>

deprecated, backward compatibility

### Function `acceptTokenOwnership()` <a id="StandardPoolConverter-acceptTokenOwnership--"></a>

deprecated, backward compatibility

### Function `connectors(contract IReserveToken _address) → uint256, uint32, bool, bool, bool` <a id="StandardPoolConverter-connectors-contract-IReserveToken-"></a>

deprecated, backward compatibility

### Function `connectorTokens(uint256 _index) → contract IReserveToken` <a id="StandardPoolConverter-connectorTokens-uint256-"></a>

deprecated, backward compatibility

### Function `connectorTokenCount() → uint16` <a id="StandardPoolConverter-connectorTokenCount--"></a>

deprecated, backward compatibility

### Function `getConnectorBalance(contract IReserveToken _connectorToken) → uint256` <a id="StandardPoolConverter-getConnectorBalance-contract-IReserveToken-"></a>

deprecated, backward compatibility

### Function `getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` <a id="StandardPoolConverter-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-"></a>

deprecated, backward compatibility

### Event `LiquidityAdded(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` <a id="StandardPoolConverter-LiquidityAdded-address-contract-IReserveToken-uint256-uint256-uint256-"></a>

triggered after liquidity is added

### Parameters:

* `_provider`: liquidity provider
* `_reserveToken`: reserve token address
* `_amount`: reserve token amount
* `_newBalance`: reserve token new balance
* `_newSupply`: pool token new supply

### Event `LiquidityRemoved(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` <a id="StandardPoolConverter-LiquidityRemoved-address-contract-IReserveToken-uint256-uint256-uint256-"></a>

triggered after liquidity is removed

### Parameters:

* `_provider`: liquidity provider
* `_reserveToken`: reserve token address
* `_amount`: reserve token amount
* `_newBalance`: reserve token new balance
* `_newSupply`: pool token new supply

