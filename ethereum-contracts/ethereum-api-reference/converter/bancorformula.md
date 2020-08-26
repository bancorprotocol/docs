

# Functions:
- [`init()`](#BancorFormula-init--)
- [`purchaseTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-purchaseTargetAmount-uint256-uint256-uint32-uint256-)
- [`saleTargetAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveWeight, uint256 _amount)`](#BancorFormula-saleTargetAmount-uint256-uint256-uint32-uint256-)
- [`crossReserveTargetAmount(uint256 _sourceReserveBalance, uint32 _sourceReserveWeight, uint256 _targetReserveBalance, uint32 _targetReserveWeight, uint256 _amount)`](#BancorFormula-crossReserveTargetAmount-uint256-uint32-uint256-uint32-uint256-)
- [`fundCost(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-fundCost-uint256-uint256-uint32-uint256-)
- [`fundSupplyAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-fundSupplyAmount-uint256-uint256-uint32-uint256-)
- [`liquidateReserveAmount(uint256 _supply, uint256 _reserveBalance, uint32 _reserveRatio, uint256 _amount)`](#BancorFormula-liquidateReserveAmount-uint256-uint256-uint32-uint256-)
- [`balancedWeights(uint256 _primaryReserveStakedBalance, uint256 _primaryReserveBalance, uint256 _secondaryReserveBalance, uint256 _reserveRateNumerator, uint256 _reserveRateDenominator)`](#BancorFormula-balancedWeights-uint256-uint256-uint256-uint256-uint256-)
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


# Function `init()` {#BancorFormula-init--}
should be executed after construction (too large for the constructor)
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
# Function `balancedWeights(uint256 _primaryReserveStakedBalance, uint256 _primaryReserveBalance, uint256 _secondaryReserveBalance, uint256 _reserveRateNumerator, uint256 _reserveRateDenominator) → uint32, uint32` {#BancorFormula-balancedWeights-uint256-uint256-uint256-uint256-uint256-}
The arbitrage incentive is to convert to the point where the on-chain price is equal to the off-chain price.
We want this operation to also impact the primary reserve balance becoming equal to the primary reserve staked balance.
In other words, we want the arbitrager to convert the difference between the reserve balance and the reserve staked balance.
Formula input:
- let t denote the primary reserve token staked balance
- let s denote the primary reserve token balance
- let r denote the secondary reserve token balance
- let q denote the numerator of the rate between the tokens
- let p denote the denominator of the rate between the tokens
Where p primary tokens are equal to q secondary tokens
Formula output:
- compute x = W(t / r * q / p * log(s / t)) / log(s / t)
- return x / (1 + x) as the weight of the primary reserve token
- return 1 / (1 + x) as the weight of the secondary reserve token
Where W is the Lambert W Function
If the rate-provider provides the rates for a common unit, for example:
- P = 2 ==> 2 primary reserve tokens = 1 ether
- Q = 3 ==> 3 secondary reserve tokens = 1 ether
Then you can simply use p = P and q = Q
If the rate-provider provides the rates for a single unit, for example:
- P = 2 ==> 1 primary reserve token = 2 ethers
- Q = 3 ==> 1 secondary reserve token = 3 ethers
Then you can simply use p = Q and q = P

## Parameters:
- `_primaryReserveStakedBalance`: the primary reserve token staked balance

- `_primaryReserveBalance`:       the primary reserve token balance

- `_secondaryReserveBalance`:     the secondary reserve token balance

- `_reserveRateNumerator`:        the numerator of the rate between the tokens

- `_reserveRateDenominator`:      the denominator of the rate between the tokens
Note that `numerator / denominator` should represent the amount of secondary tokens equal to one primary token

## Return Values:
- the weight of the primary reserve token and the weight of the secondary reserve token, both in ppm (0-1000000)
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

