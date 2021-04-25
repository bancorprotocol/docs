This contract is a specialized version of the converter, which implements

a constant conversion-rate (configurable by the owner of the converter).

# Functions:

- [`constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)`](#FixedRatePoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-)

- [`converterType()`](#FixedRatePoolConverter-converterType--)

- [`rate()`](#FixedRatePoolConverter-rate--)

- [`setRate(uint256 rateN, uint256 rateD)`](#FixedRatePoolConverter-setRate-uint256-uint256-)

- [`targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#FixedRatePoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)

- [`sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#FixedRatePoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)

## Function `constructor(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)` {#FixedRatePoolConverter-constructor-contract-IConverterAnchor-contract-IContractRegistry-uint32-}

initializes a new FixedRatePoolConverter instance

## Parameters:

- `_anchor`:             anchor governed by the converter

- `_registry`:           address of a contract registry contract

- `_maxConversionFee`:   maximum conversion fee, represented in ppm

## Function `converterType() → uint16` {#FixedRatePoolConverter-converterType--}

returns the converter type

## Return Values:

- see the converter types in the the main contract doc

## Function `rate() → uint256, uint256` {#FixedRatePoolConverter-rate--}

returns the worth of the 1st reserve token in units of the 2nd reserve token

## Return Values:

- the numerator of the rate between the 1st reserve token and the 2nd reserve token

- the denominator of the rate between the 1st reserve token and the 2nd reserve token

## Function `setRate(uint256 rateN, uint256 rateD)` {#FixedRatePoolConverter-setRate-uint256-uint256-}

sets the worth of the 1st reserve token in units of the 2nd reserve token

can be executed only by the owner of the converter

## Parameters:

- `rateN`: the numerator of the rate between the 1st reserve token and the 2nd reserve token

- `rateD`: the denominator of the rate between the 1st reserve token and the 2nd reserve token

## Function `targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#FixedRatePoolConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-}

returns the expected amount and expected fee for converting one reserve to another

## Parameters:

- `_sourceToken`: address of the source reserve token contract

- `_targetToken`: address of the target reserve token contract

- `_amount`:      amount of source reserve tokens converted

## Return Values:

- expected amount in units of the target reserve token

- expected fee in units of the target reserve token

## Function `sourceAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#FixedRatePoolConverter-sourceAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-}

returns the required amount and expected fee for converting one reserve to another

## Parameters:

- `_sourceToken`: address of the source reserve token contract

- `_targetToken`: address of the target reserve token contract

- `_amount`:      amount of target reserve tokens desired

## Return Values:

- required amount in units of the source reserve token

- expected fee in units of the target reserve token
