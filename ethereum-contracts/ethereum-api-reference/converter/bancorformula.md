# BancorFormula

## Functions:

* [`purchaseRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-purchaseRate-uint256-uint256-uint32-uint256-)
* [`saleRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-saleRate-uint256-uint256-uint32-uint256-)
* [`crossReserveRate(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-crossReserveRate-uint256-uint32-uint256-uint32-uint256-)
* [`fundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](bancorformula.md#BancorFormula-fundCost-uint256-uint256-uint32-uint256-)
* [`liquidateRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](bancorformula.md#BancorFormula-liquidateRate-uint256-uint256-uint32-uint256-)
* [`calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-)
* [`calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-)
* [`calculateCrossReserveReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-)
* [`calculateCrossConnectorReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](bancorformula.md#BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-)
* [`calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](bancorformula.md#BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-)
* [`calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](bancorformula.md#BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-)

## Function `purchaseRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-purchaseRate-uint256-uint256-uint32-uint256-"></a>

given a token supply, reserve balance, weight and a deposit amount \(in the reserve token\),

calculates the rate for a given conversion \(in the main token\)

Formula:

return = \_supply \* \(\(1 + \_amount / \_reserveBalance\) ^ \(\_reserveWeight / 1000000\) - 1\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve balance
* `_reserveWeight`: reserve weight, represented in ppm \(1-1000000\)
* `_amount`: amount of reserve tokens to get the rate for

### Return Values:

* smart token amount

## Function `saleRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-saleRate-uint256-uint256-uint32-uint256-"></a>

given a token supply, reserve balance, weight and a sell amount \(in the main token\),

calculates the rate for a given conversion \(in the reserve token\)

Formula:

return = \_reserveBalance \* \(1 - \(1 - \_amount / \_supply\) ^ \(1000000 / \_reserveWeight\)\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve balance
* `_reserveWeight`: reserve weight, represented in ppm \(1-1000000\)
* `_amount`: amount of smart tokens to get the rate for

### Return Values:

* reserve token amount

## Function `crossReserveRate(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-crossReserveRate-uint256-uint32-uint256-uint32-uint256-"></a>

given two reserve balances/weights and a sell amount \(in the first reserve token\),

calculates the rate for a conversion from the source reserve token to the target reserve token

Formula:

return = \_targetReserveBalance \* \(1 - \(\_sourceReserveBalance / \(\_sourceReserveBalance + \_amount\)\) ^ \(\_sourceReserveWeight / \_targetReserveWeight\)\)

### Parameters:

* `_sourceReserveBalance`: source reserve balance
* `_sourceReserveWeight`: source reserve weight, represented in ppm \(1-1000000\)
* `_targetReserveBalance`: target reserve balance
* `_targetReserveWeight`: target reserve weight, represented in ppm \(1-1000000\)
* `_amount`: source reserve amount

### Return Values:

* target reserve amount

## Function `fundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` <a id="BancorFormula-fundCost-uint256-uint256-uint32-uint256-"></a>

given a smart token supply, reserve balance, reserve ratio and an amount of requested smart tokens,

calculates the amount of reserve tokens required for purchasing the given amount of smart tokens

Formula:

return = \_reserveBalance \* \(\(\(\_supply + \_amount\) / \_supply\) ^ \(MAX\_WEIGHT / \_reserveRatio\) - 1\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve balance
* `_reserveRatio`: reserve ratio, represented in ppm \(2-2000000\)
* `_amount`: requested amount of smart tokens

### Return Values:

* reserve token amount

## Function `liquidateRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` <a id="BancorFormula-liquidateRate-uint256-uint256-uint32-uint256-"></a>

given a smart token supply, reserve balance, reserve ratio and an amount of smart tokens to liquidate,

calculates the amount of reserve tokens received for selling the given amount of smart tokens

Formula:

return = \_reserveBalance \* \(1 - \(\(\_supply - \_amount\) / \_supply\) ^ \(MAX\_WEIGHT / \_reserveRatio\)\)

### Parameters:

* `_supply`: smart token supply
* `_reserveBalance`: reserve balance
* `_reserveRatio`: reserve ratio, represented in ppm \(2-2000000\)
* `_amount`: amount of smart tokens to liquidate

### Return Values:

* reserve token amount

## Function `calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

## Function `calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

## Function `calculateCrossReserveReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

## Function `calculateCrossConnectorReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` <a id="BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

## Function `calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` <a id="BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

## Function `calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` <a id="BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-"></a>

deprecated, backward compatibility

