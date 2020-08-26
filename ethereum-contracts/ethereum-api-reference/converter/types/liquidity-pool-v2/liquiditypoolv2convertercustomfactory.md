

# Functions:
- [`converterType()`](#LiquidityPoolV2ConverterCustomFactory-converterType--)
- [`createPriceOracle(contract IERC20Token _primaryReserveToken, contract IERC20Token _secondaryReserveToken, contract IChainlinkPriceOracle _primaryReserveOracle, contract IChainlinkPriceOracle _secondaryReserveOracle)`](#LiquidityPoolV2ConverterCustomFactory-createPriceOracle-contract-IERC20Token-contract-IERC20Token-contract-IChainlinkPriceOracle-contract-IChainlinkPriceOracle-)


# Function `converterType() → uint16` {#LiquidityPoolV2ConverterCustomFactory-converterType--}
returns the converter type the factory is associated with

## Return Values:
- converter type
# Function `createPriceOracle(contract IERC20Token _primaryReserveToken, contract IERC20Token _secondaryReserveToken, contract IChainlinkPriceOracle _primaryReserveOracle, contract IChainlinkPriceOracle _secondaryReserveOracle) → contract IPriceOracle` {#LiquidityPoolV2ConverterCustomFactory-createPriceOracle-contract-IERC20Token-contract-IERC20Token-contract-IChainlinkPriceOracle-contract-IChainlinkPriceOracle-}
creates a new price oracle
note that the oracles must have the same common denominator (USD, ETH etc.)

## Parameters:
- `_primaryReserveToken`:    primary reserve token address

- `_secondaryReserveToken`:  secondary reserve token address

- `_primaryReserveOracle`:   primary reserve oracle address

- `_secondaryReserveOracle`: secondary reserve oracle address

