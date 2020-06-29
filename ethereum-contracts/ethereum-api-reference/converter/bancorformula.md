# Functions:

- [`purchaseTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-purchaseTargetAmount-uint256-uint256-uint32-uint256-)

- [`saleTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-saleTargetAmount-uint256-uint256-uint32-uint256-)

- [`crossReserveTargetAmount(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](#BancorFormula-crossReserveTargetAmount-uint256-uint32-uint256-uint32-uint256-)

- [`fundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-fundCost-uint256-uint256-uint32-uint256-)

- [`fundSupplyAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-fundSupplyAmount-uint256-uint256-uint32-uint256-)

- [`liquidateReserveAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-liquidateReserveAmount-uint256-uint256-uint32-uint256-)

- [`calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-)

- [`calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-)

- [`calculateCrossReserveReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](#BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-)

- [`calculateCrossConnectorReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](#BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-)

- [`calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-)

- [`calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-)

- [`purchaseRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-purchaseRate-uint256-uint256-uint32-uint256-)

- [`saleRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-saleRate-uint256-uint256-uint32-uint256-)

- [`crossReserveRate(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](#BancorFormula-crossReserveRate-uint256-uint32-uint256-uint32-uint256-)

- [`liquidateRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-liquidateRate-uint256-uint256-uint32-uint256-)

# Function `purchaseTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-purchaseTargetAmount-uint256-uint256-uint32-uint256-}

given a token supply, reserve balance, weight and a deposit amount (in the reserve token),

calculates the target amount for a given conversion (in the main token)

Formula:

return = _supply * ((1 + _amount / _reserveBalance) ^ (_reserveWeight / 1000000) - 1)

## Parameters:

- `_supply`:          smart token supply

- `_reserveBalance`:  reserve balance

- `_reserveWeight`:   reserve weight, represented in ppm (1-1000000)

- `_amount`:          amount of reserve tokens to get the target amount for

## Return Values:

- smart token amount

# Function `saleTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-saleTargetAmount-uint256-uint256-uint32-uint256-}

given a token supply, reserve balance, weight and a sell amount (in the main token),

calculates the target amount for a given conversion (in the reserve token)

Formula:

return = _reserveBalance * (1 - (1 - _amount / _supply) ^ (1000000 / _reserveWeight))

## Parameters:

- `_supply`:          smart token supply

- `_reserveBalance`:  reserve balance

- `_reserveWeight`:   reserve weight, represented in ppm (1-1000000)

- `_amount`:          amount of smart tokens to get the target amount for

## Return Values:

- reserve token amount

# Function `crossReserveTargetAmount(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` {#BancorFormula-crossReserveTargetAmount-uint256-uint32-uint256-uint32-uint256-}

given two reserve balances/weights and a sell amount (in the first reserve token),

calculates the target amount for a conversion from the source reserve token to the target reserve token

Formula:

return = _targetReserveBalance * (1 - (_sourceReserveBalance / (_sourceReserveBalance + _amount)) ^ (_sourceReserveWeight / _targetReserveWeight))

## Parameters:

- `_sourceReserveBalance`:    source reserve balance

- `_sourceReserveWeight`:     source reserve weight, represented in ppm (1-1000000)

- `_targetReserveBalance`:    target reserve balance

- `_targetReserveWeight`:     target reserve weight, represented in ppm (1-1000000)

- `_amount`:                  source reserve amount

## Return Values:

- target reserve amount

# Function `fundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-fundCost-uint256-uint256-uint32-uint256-}

given a smart token supply, reserve balance, reserve ratio and an amount of requested smart tokens,

calculates the amount of reserve tokens required for purchasing the given amount of smart tokens

Formula:

return = _reserveBalance * (((_supply + _amount) / _supply) ^ (MAX_WEIGHT / _reserveRatio) - 1)

## Parameters:

- `_supply`:          smart token supply

- `_reserveBalance`:  reserve balance

- `_reserveRatio`:    reserve ratio, represented in ppm (2-2000000)

- `_amount`:          requested amount of smart tokens

## Return Values:

- reserve token amount

# Function `fundSupplyAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-fundSupplyAmount-uint256-uint256-uint32-uint256-}

given a smart token supply, reserve balance, reserve ratio and an amount of reserve tokens to fund with,

calculates the amount of smart tokens received for purchasing with the given amount of reserve tokens

Formula:

return = _supply * ((_amount / _reserveBalance + 1) ^ (_reserveRatio / MAX_WEIGHT) - 1)

## Parameters:

- `_supply`:          smart token supply

- `_reserveBalance`:  reserve balance

- `_reserveRatio`:    reserve ratio, represented in ppm (2-2000000)

- `_amount`:          amount of reserve tokens to fund with

## Return Values:

- smart token amount

# Function `liquidateReserveAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-liquidateReserveAmount-uint256-uint256-uint32-uint256-}

given a smart token supply, reserve balance, reserve ratio and an amount of smart tokens to liquidate,

calculates the amount of reserve tokens received for selling the given amount of smart tokens

Formula:

return = _reserveBalance * (1 - ((_supply - _amount) / _supply) ^ (MAX_WEIGHT / _reserveRatio))

## Parameters:

- `_supply`:          smart token supply

- `_reserveBalance`:  reserve balance

- `_reserveRatio`:    reserve ratio, represented in ppm (2-2000000)

- `_amount`:          amount of smart tokens to liquidate

## Return Values:

- reserve token amount

# Function `calculatePurchaseReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-calculatePurchaseReturn-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `calculateSaleReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-calculateSaleReturn-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `calculateCrossReserveReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` {#BancorFormula-calculateCrossReserveReturn-uint256-uint32-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `calculateCrossConnectorReturn(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` {#BancorFormula-calculateCrossConnectorReturn-uint256-uint32-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `calculateFundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-calculateFundCost-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `calculateLiquidateReturn(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-calculateLiquidateReturn-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `purchaseRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-purchaseRate-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `saleRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount) → uint256` {#BancorFormula-saleRate-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `crossReserveRate(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount) → uint256` {#BancorFormula-crossReserveRate-uint256-uint32-uint256-uint32-uint256-}

deprecated, backward compatibility

# Function `liquidateRate(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount) → uint256` {#BancorFormula-liquidateRate-uint256-uint256-uint32-uint256-}

deprecated, backward compatibility
