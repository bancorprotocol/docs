This contract is a specialized version of the converter, which is

optimized for a liquidity pool that has 2 reserves with 50%/50% weights.

# Functions:

- [`constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)`](#StandardPoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-)

- [`converterType()`](#StandardPoolConverter-converterType--)

- [`receive()`](#StandardPoolConverter-receive--)

- [`isV28OrHigher()`](#StandardPoolConverter-isV28OrHigher--)

- [`isActive()`](#StandardPoolConverter-isActive--)

- [`transferAnchorOwnership(address _newOwner)`](#StandardPoolConverter-transferAnchorOwnership-address-)

- [`acceptAnchorOwnership()`](#StandardPoolConverter-acceptAnchorOwnership--)

- [`setConversionFee(uint32 _conversionFee)`](#StandardPoolConverter-setConversionFee-uint32-)

- [`transferReservesOnUpgrade(address _newConverter)`](#StandardPoolConverter-transferReservesOnUpgrade-address-)

- [`upgrade()`](#StandardPoolConverter-upgrade--)

- [`onUpgradeComplete()`](#StandardPoolConverter-onUpgradeComplete--)

- [`reserveTokenCount()`](#StandardPoolConverter-reserveTokenCount--)

- [`reserveTokens()`](#StandardPoolConverter-reserveTokens--)

- [`addReserve(contract IReserveToken _token, uint32 _weight)`](#StandardPoolConverter-addReserve-contract-IReserveToken-uint32-)

- [`reserveWeight(contract IReserveToken _reserveToken)`](#StandardPoolConverter-reserveWeight-contract-IReserveToken-)

- [`reserveBalance(contract IReserveToken _reserveToken)`](#StandardPoolConverter-reserveBalance-contract-IReserveToken-)

- [`reserveBalances()`](#StandardPoolConverter-reserveBalances--)

- [`syncReserveBalances()`](#StandardPoolConverter-syncReserveBalances--)

- [`processNetworkFees()`](#StandardPoolConverter-processNetworkFees--)

- [`convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](#StandardPoolConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-)

- [`targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#StandardPoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)

- [`sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#StandardPoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)

- [`recentAverageRate(contract IReserveToken _token)`](#StandardPoolConverter-recentAverageRate-contract-IReserveToken-)

- [`addLiquidity(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn)`](#StandardPoolConverter-addLiquidity-contract-IReserveToken---uint256---uint256-)

- [`removeLiquidity(uint256 _amount, contract IReserveToken[] _reserveTokens, uint256[] _reserveMinReturnAmounts)`](#StandardPoolConverter-removeLiquidity-uint256-contract-IReserveToken---uint256---)

- [`addLiquidityCost(contract IReserveToken[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount)`](#StandardPoolConverter-addLiquidityCost-contract-IReserveToken---uint256-uint256-)

- [`addLiquidityReturn(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts)`](#StandardPoolConverter-addLiquidityReturn-contract-IReserveToken---uint256---)

- [`removeLiquidityReturn(uint256 _amount, contract IReserveToken[] _reserveTokens)`](#StandardPoolConverter-removeLiquidityReturn-uint256-contract-IReserveToken---)

- [`token()`](#StandardPoolConverter-token--)

- [`transferTokenOwnership(address _newOwner)`](#StandardPoolConverter-transferTokenOwnership-address-)

- [`acceptTokenOwnership()`](#StandardPoolConverter-acceptTokenOwnership--)

- [`connectors(contract IReserveToken _address)`](#StandardPoolConverter-connectors-contract-IReserveToken-)

- [`connectorTokens(uint256 _index)`](#StandardPoolConverter-connectorTokens-uint256-)

- [`connectorTokenCount()`](#StandardPoolConverter-connectorTokenCount--)

- [`getConnectorBalance(contract IReserveToken _connectorToken)`](#StandardPoolConverter-getConnectorBalance-contract-IReserveToken-)

- [`getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#StandardPoolConverter-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-)

# Events:

- [`LiquidityAdded(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](#StandardPoolConverter-LiquidityAdded-address-contract-IReserveToken-uint256-uint256-uint256-)

- [`LiquidityRemoved(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](#StandardPoolConverter-LiquidityRemoved-address-contract-IReserveToken-uint256-uint256-uint256-)

## Function `constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)` {#StandardPoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-}

initializes a new StandardPoolConverter instance

## Parameters:

- `_anchor`:             anchor governed by the converter

- `_registry`:           address of a contract registry contract

- `_maxConversionFee`:   maximum conversion fee, represented in ppm

## Function `converterType() → uint16` {#StandardPoolConverter-converterType--}

returns the converter type

## Return Values:

- see the converter types in the the main contract doc

## Function `receive()` {#StandardPoolConverter-receive--}

deposits ether

can only be called if the converter has an ETH reserve

## Function `isV28OrHigher() → bool` {#StandardPoolConverter-isV28OrHigher--}

checks whether or not the converter version is 28 or higher

## Return Values:

- since the converter version is 28 or higher

## Function `isActive() → bool` {#StandardPoolConverter-isActive--}

returns true if the converter is active, false otherwise

## Return Values:

- true if the converter is active, false otherwise

## Function `transferAnchorOwnership(address _newOwner)` {#StandardPoolConverter-transferAnchorOwnership-address-}

transfers the anchor ownership

the new owner needs to accept the transfer

can only be called by the converter upgrader while the upgrader is the owner

note that prior to version 28, you should use 'transferAnchorOwnership' instead

## Parameters:

- `_newOwner`:    new token owner

## Function `acceptAnchorOwnership()` {#StandardPoolConverter-acceptAnchorOwnership--}

accepts ownership of the anchor after an ownership transfer

most converters are also activated as soon as they accept the anchor ownership

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

## Function `setConversionFee(uint32 _conversionFee)` {#StandardPoolConverter-setConversionFee-uint32-}

updates the current conversion fee

can only be called by the contract owner

## Parameters:

- `_conversionFee`: new conversion fee, represented in ppm

## Function `transferReservesOnUpgrade(address _newConverter)` {#StandardPoolConverter-transferReservesOnUpgrade-address-}

transfers reserve balances to a new converter during an upgrade

can only be called by the converter upgraded which should be set at its owner

## Parameters:

- `_newConverter`: address of the converter to receive the new amount

## Function `upgrade()` {#StandardPoolConverter-upgrade--}

upgrades the converter to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new converter after the upgrade

## Function `onUpgradeComplete()` {#StandardPoolConverter-onUpgradeComplete--}

executed by the upgrader at the end of the upgrade process to handle custom pool logic

## Function `reserveTokenCount() → uint16` {#StandardPoolConverter-reserveTokenCount--}

returns the number of reserve tokens

note that prior to version 17, you should use 'connectorTokenCount' instead

## Return Values:

- number of reserve tokens

## Function `reserveTokens() → contract IReserveToken[]` {#StandardPoolConverter-reserveTokens--}

returns the array of reserve tokens

## Return Values:

- array of reserve tokens

## Function `addReserve(contract IReserveToken _token, uint32 _weight)` {#StandardPoolConverter-addReserve-contract-IReserveToken-uint32-}

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive

## Parameters:

- `_token`:   address of the reserve token

- `_weight`:  reserve weight, represented in ppm, 1-1000000

## Function `reserveWeight(contract IReserveToken _reserveToken) → uint32` {#StandardPoolConverter-reserveWeight-contract-IReserveToken-}

returns the reserve's weight

added in version 28

## Parameters:

- `_reserveToken`: reserve token contract address

## Return Values:

- reserve weight

## Function `reserveBalance(contract IReserveToken _reserveToken) → uint256` {#StandardPoolConverter-reserveBalance-contract-IReserveToken-}

returns the balance of a given reserve token

## Parameters:

- `_reserveToken`:    reserve token contract address

## Return Values:

- the balance of the given reserve token

## Function `reserveBalances() → uint256, uint256` {#StandardPoolConverter-reserveBalances--}

returns the balances of both reserve tokens

## Return Values:

- the balances of both reserve tokens

## Function `syncReserveBalances()` {#StandardPoolConverter-syncReserveBalances--}

syncs all stored reserve balances

## Function `processNetworkFees()` {#StandardPoolConverter-processNetworkFees--}

calculates the accumulated network fee and transfers it to the network fee wallet

## Function `convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` {#StandardPoolConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-}

converts a specific amount of source tokens to target tokens

can only be called by the bancor network contract

## Parameters:

- `_sourceToken`: source reserve token

- `_targetToken`: target reserve token

- `_amount`:      amount of tokens to convert (in units of the source token)

- `_trader`:      address of the caller who executed the conversion

- `_beneficiary`: wallet to receive the conversion result

## Return Values:

- amount of tokens received (in units of the target token)

## Function `targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#StandardPoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-}

returns the expected amount and expected fee for converting one reserve to another

## Parameters:

- `_sourceToken`: address of the source reserve token contract

- `_targetToken`: address of the target reserve token contract

- `_amount`:      amount of source reserve tokens converted

## Return Values:

- expected amount in units of the target reserve token

- expected fee in units of the target reserve token

## Function `sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#StandardPoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-}

returns the required amount and expected fee for converting one reserve to another

## Parameters:

- `_sourceToken`: address of the source reserve token contract

- `_targetToken`: address of the target reserve token contract

- `_amount`:      amount of target reserve tokens desired

## Return Values:

- required amount in units of the source reserve token

- expected fee in units of the target reserve token

## Function `recentAverageRate(contract IReserveToken _token) → uint256, uint256` {#StandardPoolConverter-recentAverageRate-contract-IReserveToken-}

returns the recent average rate of 1 `_token` in the other reserve token units

## Parameters:

- `_token`: token to get the rate for

## Return Values:

- recent average rate between the reserves (numerator)

- recent average rate between the reserves (denominator)

## Function `addLiquidity(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts, uint256 _minReturn) → uint256` {#StandardPoolConverter-addLiquidity-contract-IReserveToken---uint256---uint256-}

increases the pool's liquidity and mints new shares in the pool to the caller

## Parameters:

- `_reserveTokens`:   address of each reserve token

- `_reserveAmounts`:  amount of each reserve token

- `_minReturn`:       token minimum return-amount

## Return Values:

- amount of pool tokens issued

## Function `removeLiquidity(uint256 _amount, contract IReserveToken[] _reserveTokens, uint256[] _reserveMinReturnAmounts) → uint256[]` {#StandardPoolConverter-removeLiquidity-uint256-contract-IReserveToken---uint256---}

decreases the pool's liquidity and burns the caller's shares in the pool

## Parameters:

- `_amount`:                  token amount

- `_reserveTokens`:           address of each reserve token

- `_reserveMinReturnAmounts`: minimum return-amount of each reserve token

## Return Values:

- the amount of each reserve token granted for the given amount of pool tokens

## Function `addLiquidityCost(contract IReserveToken[] _reserveTokens, uint256 _reserveTokenIndex, uint256 _reserveAmount) → uint256[]` {#StandardPoolConverter-addLiquidityCost-contract-IReserveToken---uint256-uint256-}

given the amount of one of the reserve tokens to add liquidity of,

returns the required amount of each one of the other reserve tokens

since an empty pool can be funded with any list of non-zero input amounts,

this function assumes that the pool is not empty (has already been funded)

## Parameters:

- `_reserveTokens`:       address of each reserve token

- `_reserveTokenIndex`:   index of the relevant reserve token

- `_reserveAmount`:       amount of the relevant reserve token

## Return Values:

- the required amount of each one of the reserve tokens

## Function `addLiquidityReturn(contract IReserveToken[] _reserveTokens, uint256[] _reserveAmounts) → uint256` {#StandardPoolConverter-addLiquidityReturn-contract-IReserveToken---uint256---}

returns the amount of pool tokens entitled for given amounts of reserve tokens

since an empty pool can be funded with any list of non-zero input amounts,

this function assumes that the pool is not empty (has already been funded)

## Parameters:

- `_reserveTokens`:   address of each reserve token

- `_reserveAmounts`:  amount of each reserve token

## Return Values:

- the amount of pool tokens entitled for the given amounts of reserve tokens

## Function `removeLiquidityReturn(uint256 _amount, contract IReserveToken[] _reserveTokens) → uint256[]` {#StandardPoolConverter-removeLiquidityReturn-uint256-contract-IReserveToken---}

returns the amount of each reserve token entitled for a given amount of pool tokens

## Parameters:

- `_amount`:          amount of pool tokens

- `_reserveTokens`:   address of each reserve token

## Return Values:

- the amount of each reserve token entitled for the given amount of pool tokens

## Function `token() → contract IConverterAnchor` {#StandardPoolConverter-token--}

deprecated since version 28, backward compatibility - use only for earlier versions

## Function `transferTokenOwnership(address _newOwner)` {#StandardPoolConverter-transferTokenOwnership-address-}

deprecated, backward compatibility

## Function `acceptTokenOwnership()` {#StandardPoolConverter-acceptTokenOwnership--}

deprecated, backward compatibility

## Function `connectors(contract IReserveToken _address) → uint256, uint32, bool, bool, bool` {#StandardPoolConverter-connectors-contract-IReserveToken-}

deprecated, backward compatibility

## Function `connectorTokens(uint256 _index) → contract IReserveToken` {#StandardPoolConverter-connectorTokens-uint256-}

deprecated, backward compatibility

## Function `connectorTokenCount() → uint16` {#StandardPoolConverter-connectorTokenCount--}

deprecated, backward compatibility

## Function `getConnectorBalance(contract IReserveToken _connectorToken) → uint256` {#StandardPoolConverter-getConnectorBalance-contract-IReserveToken-}

deprecated, backward compatibility

## Function `getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#StandardPoolConverter-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-}

deprecated, backward compatibility

## Event `LiquidityAdded(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` {#StandardPoolConverter-LiquidityAdded-address-contract-IReserveToken-uint256-uint256-uint256-}

triggered after liquidity is added

## Parameters:

- `_provider`:       liquidity provider

- `_reserveToken`:   reserve token address

- `_amount`:         reserve token amount

- `_newBalance`:     reserve token new balance

- `_newSupply`:      pool token new supply

## Event `LiquidityRemoved(address _provider, contract IReserveToken _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` {#StandardPoolConverter-LiquidityRemoved-address-contract-IReserveToken-uint256-uint256-uint256-}

triggered after liquidity is removed

## Parameters:

- `_provider`:       liquidity provider

- `_reserveToken`:   reserve token address

- `_amount`:         reserve token amount

- `_newBalance`:     reserve token new balance

- `_newSupply`:      pool token new supply
