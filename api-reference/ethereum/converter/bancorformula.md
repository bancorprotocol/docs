# Bancor Formula

## Functions:

* [`calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _depositAmount)`](bancorformula.md#BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-)
* [`calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _sellAmount)`](bancorformula.md#BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-)
* [`calculateCrossReserveReturn(uint256 _fromReserveBalance, uint32 _fromReserveRatio, uint256 _toReserveBalance, uint32 _toReserveRatio, uint256 _amount)`](bancorformula.md#BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-)
* [`calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _totalRatio, uint256 _amount)`](bancorformula.md#BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-)
* [`calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _totalRatio, uint256 _amount)`](bancorformula.md#BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-)
* [`calculateCrossConnectorReturn(uint256 _fromConnectorBalance, uint32 _fromConnectorWeight, uint256 _toConnectorBalance, uint32 _toConnectorWeight, uint256 _amount)`](bancorformula.md#BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-)

## Function `calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _depositAmount) → uint256` <a id="BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-"></a>

given a token supply, reserve balance, ratio and a deposit amount \(in the reserve token\),

calculates the return for a given conversion \(in the main token\)

Formula:

Return = \_supply \* \(\(1 + \_depositAmount / \_reserveBalance\) ^ \(\_reserveRatio / 1000000\) - 1\)

### Parameters:

* `_supply`: token total supply
* `_reserveBalance`: total reserve balance
* `_reserveRatio`: reserve ratio, represented in ppm, 1-1000000
* `_depositAmount`: deposit amount, in reserve token

### Return Values:

* purchase return amount

## Function `calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _sellAmount) → uint256` <a id="BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-"></a>

given a token supply, reserve balance, ratio and a sell amount \(in the main token\),

calculates the return for a given conversion \(in the reserve token\)

Formula:

Return = \_reserveBalance \* \(1 - \(1 - \_sellAmount / \_supply\) ^ \(1 / \(\_reserveRatio / 1000000\)\)\)

### Parameters:

* `_supply`: token total supply
* `_reserveBalance`: total reserve
* `_reserveRatio`: constant reserve Ratio, represented in ppm, 1-1000000
* `_sellAmount`: sell amount, in the token itself

### Return Values:

* sale return amount

## Function `calculateCrossReserveReturn(uint256 _fromReserveBalance, uint32 _fromReserveRatio, uint256 _toReserveBalance, uint32 _toReserveRatio, uint256 _amount) → uint256` <a id="BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-"></a>

given two reserve balances/ratios and a sell amount \(in the first reserve token\),

calculates the return for a conversion from the first reserve token to the second reserve token \(in the second reserve token\)

note that prior to version 4, you should use 'calculateCrossConnectorReturn' instead

Formula:

Return = \_toReserveBalance \* \(1 - \(\_fromReserveBalance / \(\_fromReserveBalance + \_amount\)\) ^ \(\_fromReserveRatio / \_toReserveRatio\)\)

### Parameters:

* `_fromReserveBalance`: input reserve balance
* `_fromReserveRatio`: input reserve ratio, represented in ppm, 1-1000000
* `_toReserveBalance`: output reserve balance
* `_toReserveRatio`: output reserve ratio, represented in ppm, 1-1000000
* `_amount`: input reserve amount

### Return Values:

* second reserve amount

## Function `calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _totalRatio, uint256 _amount) → uint256` <a id="BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-"></a>

given a smart token supply, reserve balance, total ratio and an amount of requested smart tokens,

calculates the amount of reserve tokens required for purchasing the given amount of smart tokens

Formula:

Return = \_reserveBalance \* \(\(\(\_supply + \_amount\) / \_supply\) ^ \(MAX\_RATIO / \_totalRatio\) - 1\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve token balance
* `_totalRatio`: total ratio, represented in ppm, 2-2000000
* `_amount`: requested amount of smart tokens

### Return Values:

* amount of reserve tokens

## Function `calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _totalRatio, uint256 _amount) → uint256` <a id="BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-"></a>

given a smart token supply, reserve balance, total ratio and an amount of smart tokens to liquidate,

calculates the amount of reserve tokens received for selling the given amount of smart tokens

Formula:

Return = \_reserveBalance \* \(\(\_supply / \(\_supply - \_amount\)\) ^ \(MAX\_RATIO / \_totalRatio\) - 1\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve token balance
* `_totalRatio`: total ratio, represented in ppm, 2-2000000
* `_amount`: amount of smart tokens to liquidate

### Return Values:

* amount of reserve tokens

## Function `calculateCrossConnectorReturn(uint256 _fromConnectorBalance, uint32 _fromConnectorWeight, uint256 _toConnectorBalance, uint32 _toConnectorWeight, uint256 _amount) → uint256` <a id="BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

