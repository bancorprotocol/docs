# Functions:

- [`converterFactories(uint16 converterType)`](#ConverterFactory-converterFactories-uint16-)

- [`anchorFactories(uint16 converterType)`](#ConverterFactory-anchorFactories-uint16-)

- [`registerTypedConverterFactory(contract ITypedConverterFactory factory)`](#ConverterFactory-registerTypedConverterFactory-contract-ITypedConverterFactory-)

- [`registerTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory factory)`](#ConverterFactory-registerTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-)

- [`unregisterTypedConverterFactory(contract ITypedConverterFactory factory)`](#ConverterFactory-unregisterTypedConverterFactory-contract-ITypedConverterFactory-)

- [`unregisterTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory factory)`](#ConverterFactory-unregisterTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-)

- [`createAnchor(uint16 converterType, string name, string symbol, uint8 decimals)`](#ConverterFactory-createAnchor-uint16-string-string-uint8-)

- [`createConverter(uint16 converterType, contract IConverterAnchor anchor, contract IContractRegistry registry, uint32 maxConversionFee)`](#ConverterFactory-createConverter-uint16-contract-IConverterAnchor-contract-IContractRegistry-uint32-)

# Events:

- [`NewConverter(uint16 converterType, contract IConverter converter, address converterOwner)`](#ConverterFactory-NewConverter-uint16-contract-IConverter-address-)

## Function `converterFactories(uint16 converterType) → contract ITypedConverterFactory` {#ConverterFactory-converterFactories-uint16-}

returns the converter factory of a given converter type

## Parameters:

- `converterType`: converter type, see ConverterBase contract main doc

## Return Values:

- the converter factory of the given converter type

## Function `anchorFactories(uint16 converterType) → contract ITypedConverterAnchorFactory` {#ConverterFactory-anchorFactories-uint16-}

returns the anchor factory of a given converter type

## Parameters:

- `converterType`: converter type, see ConverterBase contract main doc

## Return Values:

- the anchor factory of the given converter type

## Function `registerTypedConverterFactory(contract ITypedConverterFactory factory)` {#ConverterFactory-registerTypedConverterFactory-contract-ITypedConverterFactory-}

registers a specific typed converter factory

can only be called by the owner

## Parameters:

- `factory`: typed converter factory

## Function `registerTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory factory)` {#ConverterFactory-registerTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-}

registers a specific typed converter anchor factory

can only be called by the owner

## Parameters:

- `factory`: typed converter anchor factory

## Function `unregisterTypedConverterFactory(contract ITypedConverterFactory factory)` {#ConverterFactory-unregisterTypedConverterFactory-contract-ITypedConverterFactory-}

unregisters a specific typed converter factory

can only be called by the owner

## Parameters:

- `factory`: typed converter factory

## Function `unregisterTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory factory)` {#ConverterFactory-unregisterTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-}

unregisters a specific typed converter anchor factory

can only be called by the owner

## Parameters:

- `factory`: typed converter anchor factory

## Function `createAnchor(uint16 converterType, string name, string symbol, uint8 decimals) → contract IConverterAnchor` {#ConverterFactory-createAnchor-uint16-string-string-uint8-}

creates a new converter anchor with the given arguments and transfers

the ownership to the caller

## Parameters:

- `converterType`: converter type, see ConverterBase contract main doc

- `name`: name

- `symbol`: symbol

- `decimals`: decimals

## Return Values:

- new converter anchor

## Function `createConverter(uint16 converterType, contract IConverterAnchor anchor, contract IContractRegistry registry, uint32 maxConversionFee) → contract IConverter` {#ConverterFactory-createConverter-uint16-contract-IConverterAnchor-contract-IContractRegistry-uint32-}

creates a new converter with the given arguments and transfers

the ownership to the caller

## Parameters:

- `converterType`: converter type, see ConverterBase contract main doc

- `anchor`: anchor governed by the converter

- `registry`: address of a contract registry contract

- `maxConversionFee`: maximum conversion fee, represented in ppm

## Return Values:

- new converter

## Event `NewConverter(uint16 converterType, contract IConverter converter, address converterOwner)` {#ConverterFactory-NewConverter-uint16-contract-IConverter-address-}

triggered when a new converter is created

## Parameters:

- `converterType`: converter type, see ConverterBase contract main doc

- `converter`: new converter address

- `converterOwner`: converter owner address
