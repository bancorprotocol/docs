# BancorGasPriceLimit

The BancorGasPriceLimit contract serves as an extra front-running attack mitigation mechanism.

It sets a maximum gas price on all bancor conversions, which prevents users from "cutting in line"

in order to front-run other transactions.

The gas price limit is universal to all converters and it can be updated by the owner to be in line

with the network's current gas price.

## Functions:

* [`constructor(uint256 _gasPrice)`](bancorgaspricelimit.md#BancorGasPriceLimit-constructor-uint256-)
* [`setGasPrice(uint256 _gasPrice)`](bancorgaspricelimit.md#BancorGasPriceLimit-setGasPrice-uint256-)
* [`validateGasPrice(uint256 _gasPrice)`](bancorgaspricelimit.md#BancorGasPriceLimit-validateGasPrice-uint256-)

## Function `constructor(uint256 _gasPrice)` <a id="BancorGasPriceLimit-constructor-uint256-"></a>

initializes a new BancorGasPriceLimit instance

### Parameters:

* `_gasPrice`:    gas price limit

## Function `setGasPrice(uint256 _gasPrice)` <a id="BancorGasPriceLimit-setGasPrice-uint256-"></a>

allows the owner to update the gas price limit

### Parameters:

* `_gasPrice`:    new gas price limit

## Function `validateGasPrice(uint256 _gasPrice)` <a id="BancorGasPriceLimit-validateGasPrice-uint256-"></a>

validate that the given gas price is equal to the current network gas price

### Parameters:

* `_gasPrice`:    tested gas price

