

# Functions:
- [`converterType()`](#LiquidityPoolV2ConverterAnchorFactory-converterType--)
- [`createAnchor(string _name, string _symbol, uint8 _decimals)`](#LiquidityPoolV2ConverterAnchorFactory-createAnchor-string-string-uint8-)


# Function `converterType() → uint16` {#LiquidityPoolV2ConverterAnchorFactory-converterType--}
returns the converter type the factory is associated with

## Return Values:
- converter type
# Function `createAnchor(string _name, string _symbol, uint8 _decimals) → contract IConverterAnchor` {#LiquidityPoolV2ConverterAnchorFactory-createAnchor-string-string-uint8-}
creates a new converter anchor with the given arguments and transfers
the ownership to the caller

## Parameters:
- `_name`:        pool name

- `_symbol`:      pool symbol

- `_decimals`:    pool decimals

## Return Values:
- new anchor

