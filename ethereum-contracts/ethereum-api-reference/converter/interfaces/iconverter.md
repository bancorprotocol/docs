

# Functions:
- [`converterType()`](#IConverter-converterType--)
- [`anchor()`](#IConverter-anchor--)
- [`isActive()`](#IConverter-isActive--)
- [`targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](#IConverter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)
- [`convert(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](#IConverter-convert-contract-IERC20Token-contract-IERC20Token-uint256-address-address-payable-)
- [`conversionWhitelist()`](#IConverter-conversionWhitelist--)
- [`conversionFee()`](#IConverter-conversionFee--)
- [`maxConversionFee()`](#IConverter-maxConversionFee--)
- [`reserveBalance(contract IERC20Token _reserveToken)`](#IConverter-reserveBalance-contract-IERC20Token-)
- [`receive()`](#IConverter-receive--)
- [`transferAnchorOwnership(address _newOwner)`](#IConverter-transferAnchorOwnership-address-)
- [`acceptAnchorOwnership()`](#IConverter-acceptAnchorOwnership--)
- [`setConversionFee(uint32 _conversionFee)`](#IConverter-setConversionFee-uint32-)
- [`setConversionWhitelist(contract IWhitelist _whitelist)`](#IConverter-setConversionWhitelist-contract-IWhitelist-)
- [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](#IConverter-withdrawTokens-contract-IERC20Token-address-uint256-)
- [`withdrawETH(address payable _to)`](#IConverter-withdrawETH-address-payable-)
- [`addReserve(contract IERC20Token _token, uint32 _ratio)`](#IConverter-addReserve-contract-IERC20Token-uint32-)
- [`token()`](#IConverter-token--)
- [`transferTokenOwnership(address _newOwner)`](#IConverter-transferTokenOwnership-address-)
- [`acceptTokenOwnership()`](#IConverter-acceptTokenOwnership--)
- [`connectors(contract IERC20Token _address)`](#IConverter-connectors-contract-IERC20Token-)
- [`getConnectorBalance(contract IERC20Token _connectorToken)`](#IConverter-getConnectorBalance-contract-IERC20Token-)
- [`connectorTokens(uint256 _index)`](#IConverter-connectorTokens-uint256-)
- [`connectorTokenCount()`](#IConverter-connectorTokenCount--)


# Function `converterType() → uint16` {#IConverter-converterType--}
No description
# Function `anchor() → contract IConverterAnchor` {#IConverter-anchor--}
No description
# Function `isActive() → bool` {#IConverter-isActive--}
No description
# Function `targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` {#IConverter-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-}
No description
# Function `convert(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` {#IConverter-convert-contract-IERC20Token-contract-IERC20Token-uint256-address-address-payable-}
No description
# Function `conversionWhitelist() → contract IWhitelist` {#IConverter-conversionWhitelist--}
No description
# Function `conversionFee() → uint32` {#IConverter-conversionFee--}
No description
# Function `maxConversionFee() → uint32` {#IConverter-maxConversionFee--}
No description
# Function `reserveBalance(contract IERC20Token _reserveToken) → uint256` {#IConverter-reserveBalance-contract-IERC20Token-}
No description
# Function `receive()` {#IConverter-receive--}
No description
# Function `transferAnchorOwnership(address _newOwner)` {#IConverter-transferAnchorOwnership-address-}
No description
# Function `acceptAnchorOwnership()` {#IConverter-acceptAnchorOwnership--}
No description
# Function `setConversionFee(uint32 _conversionFee)` {#IConverter-setConversionFee-uint32-}
No description
# Function `setConversionWhitelist(contract IWhitelist _whitelist)` {#IConverter-setConversionWhitelist-contract-IWhitelist-}
No description
# Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` {#IConverter-withdrawTokens-contract-IERC20Token-address-uint256-}
No description
# Function `withdrawETH(address payable _to)` {#IConverter-withdrawETH-address-payable-}
No description
# Function `addReserve(contract IERC20Token _token, uint32 _ratio)` {#IConverter-addReserve-contract-IERC20Token-uint32-}
No description
# Function `token() → contract IConverterAnchor` {#IConverter-token--}
No description
# Function `transferTokenOwnership(address _newOwner)` {#IConverter-transferTokenOwnership-address-}
No description
# Function `acceptTokenOwnership()` {#IConverter-acceptTokenOwnership--}
No description
# Function `connectors(contract IERC20Token _address) → uint256, uint32, bool, bool, bool` {#IConverter-connectors-contract-IERC20Token-}
No description
# Function `getConnectorBalance(contract IERC20Token _connectorToken) → uint256` {#IConverter-getConnectorBalance-contract-IERC20Token-}
No description
# Function `connectorTokens(uint256 _index) → contract IERC20Token` {#IConverter-connectorTokens-uint256-}
No description
# Function `connectorTokenCount() → uint16` {#IConverter-connectorTokenCount--}
No description

