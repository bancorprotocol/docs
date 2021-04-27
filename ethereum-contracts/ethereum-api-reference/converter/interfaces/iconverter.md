# Functions:

- [`converterType()`](#IConverter-converterType--)

- [`anchor()`](#IConverter-anchor--)

- [`isActive()`](#IConverter-isActive--)

- [`targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](#IConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)

- [`convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](#IConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-)

- [`conversionFee()`](#IConverter-conversionFee--)

- [`maxConversionFee()`](#IConverter-maxConversionFee--)

- [`reserveBalance(contract IReserveToken _reserveToken)`](#IConverter-reserveBalance-contract-IReserveToken-)

- [`receive()`](#IConverter-receive--)

- [`transferAnchorOwnership(address _newOwner)`](#IConverter-transferAnchorOwnership-address-)

- [`acceptAnchorOwnership()`](#IConverter-acceptAnchorOwnership--)

- [`setConversionFee(uint32 _conversionFee)`](#IConverter-setConversionFee-uint32-)

- [`addReserve(contract IReserveToken _token, uint32 _weight)`](#IConverter-addReserve-contract-IReserveToken-uint32-)

- [`transferReservesOnUpgrade(address _newConverter)`](#IConverter-transferReservesOnUpgrade-address-)

- [`onUpgradeComplete()`](#IConverter-onUpgradeComplete--)

- [`token()`](#IConverter-token--)

- [`transferTokenOwnership(address _newOwner)`](#IConverter-transferTokenOwnership-address-)

- [`acceptTokenOwnership()`](#IConverter-acceptTokenOwnership--)

- [`connectors(contract IReserveToken _address)`](#IConverter-connectors-contract-IReserveToken-)

- [`getConnectorBalance(contract IReserveToken _connectorToken)`](#IConverter-getConnectorBalance-contract-IReserveToken-)

- [`connectorTokens(uint256 _index)`](#IConverter-connectorTokens-uint256-)

- [`connectorTokenCount()`](#IConverter-connectorTokenCount--)

# Events:

- [`Activation(uint16 _type, contract IConverterAnchor _anchor, bool _activated)`](#IConverter-Activation-uint16-contract-IConverterAnchor-bool-)

- [`Conversion(contract IReserveToken _fromToken, contract IReserveToken _toToken, address _trader, uint256 _amount, uint256 _return, int256 _conversionFee)`](#IConverter-Conversion-contract-IReserveToken-contract-IReserveToken-address-uint256-uint256-int256-)

- [`TokenRateUpdate(address _token1, address _token2, uint256 _rateN, uint256 _rateD)`](#IConverter-TokenRateUpdate-address-address-uint256-uint256-)

- [`ConversionFeeUpdate(uint32 _prevFee, uint32 _newFee)`](#IConverter-ConversionFeeUpdate-uint32-uint32-)

## Function `converterType() → uint16` {#IConverter-converterType--}

No description

## Function `anchor() → contract IConverterAnchor` {#IConverter-anchor--}

No description

## Function `isActive() → bool` {#IConverter-isActive--}

No description

## Function `targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` {#IConverter-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-}

No description

## Function `convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` {#IConverter-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-}

No description

## Function `conversionFee() → uint32` {#IConverter-conversionFee--}

No description

## Function `maxConversionFee() → uint32` {#IConverter-maxConversionFee--}

No description

## Function `reserveBalance(contract IReserveToken _reserveToken) → uint256` {#IConverter-reserveBalance-contract-IReserveToken-}

No description

## Function `receive()` {#IConverter-receive--}

No description

## Function `transferAnchorOwnership(address _newOwner)` {#IConverter-transferAnchorOwnership-address-}

No description

## Function `acceptAnchorOwnership()` {#IConverter-acceptAnchorOwnership--}

No description

## Function `setConversionFee(uint32 _conversionFee)` {#IConverter-setConversionFee-uint32-}

No description

## Function `addReserve(contract IReserveToken _token, uint32 _weight)` {#IConverter-addReserve-contract-IReserveToken-uint32-}

No description

## Function `transferReservesOnUpgrade(address _newConverter)` {#IConverter-transferReservesOnUpgrade-address-}

No description

## Function `onUpgradeComplete()` {#IConverter-onUpgradeComplete--}

No description

## Function `token() → contract IConverterAnchor` {#IConverter-token--}

No description

## Function `transferTokenOwnership(address _newOwner)` {#IConverter-transferTokenOwnership-address-}

No description

## Function `acceptTokenOwnership()` {#IConverter-acceptTokenOwnership--}

No description

## Function `connectors(contract IReserveToken _address) → uint256, uint32, bool, bool, bool` {#IConverter-connectors-contract-IReserveToken-}

No description

## Function `getConnectorBalance(contract IReserveToken _connectorToken) → uint256` {#IConverter-getConnectorBalance-contract-IReserveToken-}

No description

## Function `connectorTokens(uint256 _index) → contract IReserveToken` {#IConverter-connectorTokens-uint256-}

No description

## Function `connectorTokenCount() → uint16` {#IConverter-connectorTokenCount--}

No description

## Event `Activation(uint16 _type, contract IConverterAnchor _anchor, bool _activated)` {#IConverter-Activation-uint16-contract-IConverterAnchor-bool-}

triggered when the converter is activated

## Parameters:

- `_type`:        converter type

- `_anchor`:      converter anchor

- `_activated`:   true if the converter was activated, false if it was deactivated

## Event `Conversion(contract IReserveToken _fromToken, contract IReserveToken _toToken, address _trader, uint256 _amount, uint256 _return, int256 _conversionFee)` {#IConverter-Conversion-contract-IReserveToken-contract-IReserveToken-address-uint256-uint256-int256-}

triggered when a conversion between two tokens occurs

## Parameters:

- `_fromToken`:       source reserve token

- `_toToken`:         target reserve token

- `_trader`:          wallet that initiated the trade

- `_amount`:          input amount in units of the source token

- `_return`:          output amount minus conversion fee in units of the target token

- `_conversionFee`:   conversion fee in units of the target token

## Event `TokenRateUpdate(address _token1, address _token2, uint256 _rateN, uint256 _rateD)` {#IConverter-TokenRateUpdate-address-address-uint256-uint256-}

triggered when the rate between two tokens in the converter changes

note that the event might be dispatched for rate updates between any two tokens in the converter

## Parameters:

- `_token1`: address of the first token

- `_token2`: address of the second token

- `_rateN`:  rate of 1 unit of `_token1` in `_token2` (numerator)

- `_rateD`:  rate of 1 unit of `_token1` in `_token2` (denominator)

## Event `ConversionFeeUpdate(uint32 _prevFee, uint32 _newFee)` {#IConverter-ConversionFeeUpdate-uint32-uint32-}

triggered when the conversion fee is updated

## Parameters:

- `_prevFee`:    previous fee percentage, represented in ppm

- `_newFee`:     new fee percentage, represented in ppm
