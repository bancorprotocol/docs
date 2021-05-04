# ConverterBase

This contract contains the main logic for conversions between different ERC20 tokens.

It is also the upgradable part of the mechanism \(note that upgrades are opt-in\).

The anchor must be set on construction and cannot be changed afterwards.

Wrappers are provided for some of the anchor's functions, for easier access.

Once the converter accepts ownership of the anchor, it becomes the anchor's sole controller

and can execute any of its functions.

To upgrade the converter, anchor ownership must be transferred to a new converter, along with

any relevant data.

Note that the converter can transfer anchor ownership to a new converter that

doesn't allow upgrades anymore, for finalizing the relationship between the converter

and the anchor.

Converter types \(defined as uint16 type\) -

0 = liquid token converter \(deprecated\)

1 = liquidity pool v1 converter

2 = liquidity pool v2 converter \(deprecated\)

Note that converters don't currently support tokens with transfer fees.

## Functions:

* [`converterType()`](converterbase.md#ConverterBase-converterType--)
* [`targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](converterbase.md#ConverterBase-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-)
* [`receive()`](converterbase.md#ConverterBase-receive--)
* [`isV28OrHigher()`](converterbase.md#ConverterBase-isV28OrHigher--)
* [`setConversionWhitelist(contract IWhitelist _whitelist)`](converterbase.md#ConverterBase-setConversionWhitelist-contract-IWhitelist-)
* [`isActive()`](converterbase.md#ConverterBase-isActive--)
* [`transferAnchorOwnership(address _newOwner)`](converterbase.md#ConverterBase-transferAnchorOwnership-address-)
* [`acceptAnchorOwnership()`](converterbase.md#ConverterBase-acceptAnchorOwnership--)
* [`setConversionFee(uint32 _conversionFee)`](converterbase.md#ConverterBase-setConversionFee-uint32-)
* [`transferReservesOnUpgrade(address _newConverter)`](converterbase.md#ConverterBase-transferReservesOnUpgrade-address-)
* [`upgrade()`](converterbase.md#ConverterBase-upgrade--)
* [`onUpgradeComplete()`](converterbase.md#ConverterBase-onUpgradeComplete--)
* [`reserveTokenCount()`](converterbase.md#ConverterBase-reserveTokenCount--)
* [`addReserve(contract IReserveToken _token, uint32 _weight)`](converterbase.md#ConverterBase-addReserve-contract-IReserveToken-uint32-)
* [`reserveWeight(contract IReserveToken _reserveToken)`](converterbase.md#ConverterBase-reserveWeight-contract-IReserveToken-)
* [`reserveBalance(contract IReserveToken _reserveToken)`](converterbase.md#ConverterBase-reserveBalance-contract-IReserveToken-)
* [`convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](converterbase.md#ConverterBase-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-)
* [`token()`](converterbase.md#ConverterBase-token--)
* [`transferTokenOwnership(address _newOwner)`](converterbase.md#ConverterBase-transferTokenOwnership-address-)
* [`acceptTokenOwnership()`](converterbase.md#ConverterBase-acceptTokenOwnership--)
* [`connectors(contract IReserveToken _address)`](converterbase.md#ConverterBase-connectors-contract-IReserveToken-)
* [`connectorTokens(uint256 _index)`](converterbase.md#ConverterBase-connectorTokens-uint256-)
* [`connectorTokenCount()`](converterbase.md#ConverterBase-connectorTokenCount--)
* [`getConnectorBalance(contract IReserveToken _connectorToken)`](converterbase.md#ConverterBase-getConnectorBalance-contract-IReserveToken-)
* [`getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount)`](converterbase.md#ConverterBase-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-)

### Function `converterType() → uint16` <a id="ConverterBase-converterType--"></a>

No description

### Function `targetAmountAndFee(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` <a id="ConverterBase-targetAmountAndFee-contract-IReserveToken-contract-IReserveToken-uint256-"></a>

No description

### Function `receive()` <a id="ConverterBase-receive--"></a>

deposits ether

can only be called if the converter has an ETH reserve

### Function `isV28OrHigher() → bool` <a id="ConverterBase-isV28OrHigher--"></a>

checks whether or not the converter version is 28 or higher

### Return Values:

* since the converter version is 28 or higher

### Function `setConversionWhitelist(contract IWhitelist _whitelist)` <a id="ConverterBase-setConversionWhitelist-contract-IWhitelist-"></a>

allows the owner to update & enable the conversion whitelist contract address

when set, only addresses that are whitelisted are actually allowed to use the converter

note that the whitelist check is actually done by the BancorNetwork contract

### Parameters:

* `_whitelist`:    address of a whitelist contract

### Function `isActive() → bool` <a id="ConverterBase-isActive--"></a>

returns true if the converter is active, false otherwise

### Return Values:

* true if the converter is active, false otherwise

### Function `transferAnchorOwnership(address _newOwner)` <a id="ConverterBase-transferAnchorOwnership-address-"></a>

transfers the anchor ownership

the new owner needs to accept the transfer

can only be called by the converter upgrader while the upgrader is the owner

note that prior to version 28, you should use 'transferAnchorOwnership' instead

### Parameters:

* `_newOwner`:    new token owner

### Function `acceptAnchorOwnership()` <a id="ConverterBase-acceptAnchorOwnership--"></a>

accepts ownership of the anchor after an ownership transfer

most converters are also activated as soon as they accept the anchor ownership

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

### Function `setConversionFee(uint32 _conversionFee)` <a id="ConverterBase-setConversionFee-uint32-"></a>

updates the current conversion fee

can only be called by the contract owner

### Parameters:

* `_conversionFee`: new conversion fee, represented in ppm

### Function `transferReservesOnUpgrade(address _newConverter)` <a id="ConverterBase-transferReservesOnUpgrade-address-"></a>

transfers reserve balances to a new converter during an upgrade

can only be called by the converter upgraded which should be set at its owner

### Parameters:

* `_newConverter`: address of the converter to receive the new amount

### Function `upgrade()` <a id="ConverterBase-upgrade--"></a>

upgrades the converter to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new converter after the upgrade

### Function `onUpgradeComplete()` <a id="ConverterBase-onUpgradeComplete--"></a>

executed by the upgrader at the end of the upgrade process to handle custom pool logic

### Function `reserveTokenCount() → uint16` <a id="ConverterBase-reserveTokenCount--"></a>

returns the number of reserve tokens

note that prior to version 17, you should use 'connectorTokenCount' instead

### Return Values:

* number of reserve tokens

### Function `addReserve(contract IReserveToken _token, uint32 _weight)` <a id="ConverterBase-addReserve-contract-IReserveToken-uint32-"></a>

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive

### Parameters:

* `_token`: address of the reserve token
* `_weight`: reserve weight, represented in ppm, 1-1000000

### Function `reserveWeight(contract IReserveToken _reserveToken) → uint32` <a id="ConverterBase-reserveWeight-contract-IReserveToken-"></a>

returns the reserve's weight

added in version 28

### Parameters:

* `_reserveToken`:    reserve token contract address

### Return Values:

* reserve weight

### Function `reserveBalance(contract IReserveToken _reserveToken) → uint256` <a id="ConverterBase-reserveBalance-contract-IReserveToken-"></a>

returns the reserve's balance

note that prior to version 17, you should use 'getConnectorBalance' instead

### Parameters:

* `_reserveToken`:    reserve token contract address

### Return Values:

* reserve balance

### Function `convert(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` <a id="ConverterBase-convert-contract-IReserveToken-contract-IReserveToken-uint256-address-address-payable-"></a>

converts a specific amount of source tokens to target tokens

can only be called by the bancor network contract

### Parameters:

* `_sourceToken`: source reserve token
* `_targetToken`: target reserve token
* `_amount`: amount of tokens to convert \(in units of the source token\)
* `_trader`: address of the caller who executed the conversion
* `_beneficiary`: wallet to receive the conversion result

### Return Values:

* amount of tokens received \(in units of the target token\)

### Function `token() → contract IConverterAnchor` <a id="ConverterBase-token--"></a>

deprecated since version 28, backward compatibility - use only for earlier versions

### Function `transferTokenOwnership(address _newOwner)` <a id="ConverterBase-transferTokenOwnership-address-"></a>

deprecated, backward compatibility

### Function `acceptTokenOwnership()` <a id="ConverterBase-acceptTokenOwnership--"></a>

deprecated, backward compatibility

### Function `connectors(contract IReserveToken _address) → uint256, uint32, bool, bool, bool` <a id="ConverterBase-connectors-contract-IReserveToken-"></a>

deprecated, backward compatibility

### Function `connectorTokens(uint256 _index) → contract IReserveToken` <a id="ConverterBase-connectorTokens-uint256-"></a>

deprecated, backward compatibility

### Function `connectorTokenCount() → uint16` <a id="ConverterBase-connectorTokenCount--"></a>

deprecated, backward compatibility

### Function `getConnectorBalance(contract IReserveToken _connectorToken) → uint256` <a id="ConverterBase-getConnectorBalance-contract-IReserveToken-"></a>

deprecated, backward compatibility

### Function `getReturn(contract IReserveToken _sourceToken, contract IReserveToken _targetToken, uint256 _amount) → uint256, uint256` <a id="ConverterBase-getReturn-contract-IReserveToken-contract-IReserveToken-uint256-"></a>

deprecated, backward compatibility

