# Functions:

- [`converterType()`](#FixedRatePoolConverterFactory-converterType--)

- [`createConverter(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)`](#FixedRatePoolConverterFactory-createConverter-contract-IConverterAnchor-contract-IContractRegistry-uint32-)

## Function `converterType() → uint16` {#FixedRatePoolConverterFactory-converterType--}

returns the converter type the factory is associated with

## Return Values:

- converter type

## Function `createConverter(contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee) → contract IConverter` {#FixedRatePoolConverterFactory-createConverter-contract-IConverterAnchor-contract-IContractRegistry-uint32-}

creates a new converter with the given arguments and transfers

the ownership to the caller

## Parameters:

- `_anchor`:            anchor governed by the converter

- `_registry`:          address of a contract registry contract

- `_maxConversionFee`:  maximum conversion fee, represented in ppm

## Return Values:

- a new converter
