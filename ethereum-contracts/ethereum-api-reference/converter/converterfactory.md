# Functions:

- [`registerTypedConverterFactory(contract ITypedConverterFactory _factory)`](#ConverterFactory-registerTypedConverterFactory-contract-ITypedConverterFactory-)

- [`registerTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory _factory)`](#ConverterFactory-registerTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-)

- [`registerTypedConverterCustomFactory(contract ITypedConverterCustomFactory _factory)`](#ConverterFactory-registerTypedConverterCustomFactory-contract-ITypedConverterCustomFactory-)

- [`createAnchor(uint16 _converterType, string _name, string _symbol, uint8 _decimals)`](#ConverterFactory-createAnchor-uint16-string-string-uint8-)

- [`createConverter(uint16 _type, contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee)`](#ConverterFactory-createConverter-uint16-contract-IConverterAnchor-contract-IContractRegistry-uint32-)

# Events:

- [`NewConverter(address _converter, address _owner)`](#ConverterFactory-NewConverter-address-address-)

# Function `registerTypedConverterFactory(contract ITypedConverterFactory _factory)` {#ConverterFactory-registerTypedConverterFactory-contract-ITypedConverterFactory-}

initializes the factory with a specific typed converter factory

can only be called by the owner

## Parameters:

- `_factory`: typed converter factory

# Function `registerTypedConverterAnchorFactory(contract ITypedConverterAnchorFactory _factory)` {#ConverterFactory-registerTypedConverterAnchorFactory-contract-ITypedConverterAnchorFactory-}

initializes the factory with a specific typed converter anchor factory

can only be called by the owner

## Parameters:

- `_factory`: typed converter anchor factory

# Function `registerTypedConverterCustomFactory(contract ITypedConverterCustomFactory _factory)` {#ConverterFactory-registerTypedConverterCustomFactory-contract-ITypedConverterCustomFactory-}

initializes the factory with a specific typed converter custom factory

can only be called by the owner

## Parameters:

- `_factory`: typed converter custom factory

# Function `createAnchor(uint16 _converterType, string _name, string _symbol, uint8 _decimals) → contract IConverterAnchor` {#ConverterFactory-createAnchor-uint16-string-string-uint8-}

creates a new converter anchor with the given arguments and transfers

the ownership to the caller

## Parameters:

- `_converterType`:   converter type, see ConverterBase contract main doc

- `_name`:            name

- `_symbol`:          symbol

- `_decimals`:        decimals

## Return Values:

- new converter anchor

# Function `createConverter(uint16 _type, contract IConverterAnchor _anchor, contract IContractRegistry _registry, uint32 _maxConversionFee) → contract IConverter` {#ConverterFactory-createConverter-uint16-contract-IConverterAnchor-contract-IContractRegistry-uint32-}

creates a new converter with the given arguments and transfers

the ownership to the caller

## Parameters:

- `_type`:              converter type, see ConverterBase contract main doc

- `_anchor`:            anchor governed by the converter

- `_registry`:          address of a contract registry contract

- `_maxConversionFee`:  maximum conversion fee, represented in ppm

## Return Values:

- new converter

# Event `NewConverter(address _converter, address _owner)` {#ConverterFactory-NewConverter-address-address-}

triggered when a new converter is created

## Parameters:

- `_converter`:   new converter address

- `_owner`:       converter owner address
