This contract contains the main logic for conversions between different ERC20 tokens.

It is also the upgradable part of the mechanism (note that upgrades are opt-in).

The anchor must be set on construction and cannot be changed afterwards.

Wrappers are provided for some of the anchor's functions, for easier access.

Once the converter accepts ownership of the anchor, it becomes the anchor's sole controller

and can execute any of its functions.

To upgrade the converter, anchor ownership must be transferred to a new converter, along with

any relevant data.

Note that the converter can transfer anchor ownership to a new converter that

doesn't allow upgrades anymore, for finalizing the relationship between the converter

and the anchor.

Converter types (defined as uint16 type) -

0 = liquid token converter

1 = liquidity pool v1 converter

2 = liquidity pool v2 converter

Note that converters don't currently support tokens with transfer fees.

# Functions:

- [`converterType()`](#ConverterBase-converterType--)

- [`targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](#ConverterBase-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-)

- [`receive()`](#ConverterBase-receive--)

- [`withdrawETH(address payable _to)`](#ConverterBase-withdrawETH-address-payable-)

- [`isV28OrHigher()`](#ConverterBase-isV28OrHigher--)

- [`setConversionWhitelist(contract IWhitelist _whitelist)`](#ConverterBase-setConversionWhitelist-contract-IWhitelist-)

- [`isActive()`](#ConverterBase-isActive--)

- [`transferAnchorOwnership(address _newOwner)`](#ConverterBase-transferAnchorOwnership-address-)

- [`acceptAnchorOwnership()`](#ConverterBase-acceptAnchorOwnership--)

- [`setConversionFee(uint32 _conversionFee)`](#ConverterBase-setConversionFee-uint32-)

- [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](#ConverterBase-withdrawTokens-contract-IERC20Token-address-uint256-)

- [`upgrade()`](#ConverterBase-upgrade--)

- [`reserveTokenCount()`](#ConverterBase-reserveTokenCount--)

- [`addReserve(contract IERC20Token _token, uint32 _weight)`](#ConverterBase-addReserve-contract-IERC20Token-uint32-)

- [`reserveWeight(contract IERC20Token _reserveToken)`](#ConverterBase-reserveWeight-contract-IERC20Token-)

- [`reserveBalance(contract IERC20Token _reserveToken)`](#ConverterBase-reserveBalance-contract-IERC20Token-)

- [`convert(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount, address _trader, address payable _beneficiary)`](#ConverterBase-convert-contract-IERC20Token-contract-IERC20Token-uint256-address-address-payable-)

- [`token()`](#ConverterBase-token--)

- [`transferTokenOwnership(address _newOwner)`](#ConverterBase-transferTokenOwnership-address-)

- [`acceptTokenOwnership()`](#ConverterBase-acceptTokenOwnership--)

- [`connectors(contract IERC20Token _address)`](#ConverterBase-connectors-contract-IERC20Token-)

- [`connectorTokens(uint256 _index)`](#ConverterBase-connectorTokens-uint256-)

- [`connectorTokenCount()`](#ConverterBase-connectorTokenCount--)

- [`getConnectorBalance(contract IERC20Token _connectorToken)`](#ConverterBase-getConnectorBalance-contract-IERC20Token-)

- [`getReturn(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount)`](#ConverterBase-getReturn-contract-IERC20Token-contract-IERC20Token-uint256-)

# Function `converterType() → uint16` {#ConverterBase-converterType--}

No description

# Function `targetAmountAndFee(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` {#ConverterBase-targetAmountAndFee-contract-IERC20Token-contract-IERC20Token-uint256-}

No description

# Function `receive()` {#ConverterBase-receive--}

deposits ether

can only be called if the converter has an ETH reserve

# Function `withdrawETH(address payable _to)` {#ConverterBase-withdrawETH-address-payable-}

withdraws ether

can only be called by the owner if the converter is inactive or by upgrader contract

can only be called after the upgrader contract has accepted the ownership of this contract

can only be called if the converter has an ETH reserve

## Parameters:

- `_to`:  address to send the ETH to

# Function `isV28OrHigher() → bool` {#ConverterBase-isV28OrHigher--}

checks whether or not the converter version is 28 or higher

## Return Values:

- since the converter version is 28 or higher

# Function `setConversionWhitelist(contract IWhitelist _whitelist)` {#ConverterBase-setConversionWhitelist-contract-IWhitelist-}

allows the owner to update & enable the conversion whitelist contract address

when set, only addresses that are whitelisted are actually allowed to use the converter

note that the whitelist check is actually done by the BancorNetwork contract

## Parameters:

- `_whitelist`:    address of a whitelist contract

# Function `isActive() → bool` {#ConverterBase-isActive--}

returns true if the converter is active, false otherwise

## Return Values:

- true if the converter is active, false otherwise

# Function `transferAnchorOwnership(address _newOwner)` {#ConverterBase-transferAnchorOwnership-address-}

transfers the anchor ownership

the new owner needs to accept the transfer

can only be called by the converter upgrder while the upgrader is the owner

note that prior to version 28, you should use 'transferAnchorOwnership' instead

## Parameters:

- `_newOwner`:    new token owner

# Function `acceptAnchorOwnership()` {#ConverterBase-acceptAnchorOwnership--}

accepts ownership of the anchor after an ownership transfer

most converters are also activated as soon as they accept the anchor ownership

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

# Function `setConversionFee(uint32 _conversionFee)` {#ConverterBase-setConversionFee-uint32-}

updates the current conversion fee

can only be called by the contract owner

## Parameters:

- `_conversionFee`: new conversion fee, represented in ppm

# Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` {#ConverterBase-withdrawTokens-contract-IERC20Token-address-uint256-}

withdraws tokens held by the converter and sends them to an account

can only be called by the owner

note that reserve tokens can only be withdrawn by the owner while the converter is inactive

unless the owner is the converter upgrader contract

## Parameters:

- `_token`:   ERC20 token contract address

- `_to`:      account to receive the new amount

- `_amount`:  amount to withdraw

# Function `upgrade()` {#ConverterBase-upgrade--}

upgrades the converter to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new converter after the upgrade

# Function `reserveTokenCount() → uint16` {#ConverterBase-reserveTokenCount--}

returns the number of reserve tokens

note that prior to version 17, you should use 'connectorTokenCount' instead

## Return Values:

- number of reserve tokens

# Function `addReserve(contract IERC20Token _token, uint32 _weight)` {#ConverterBase-addReserve-contract-IERC20Token-uint32-}

defines a new reserve token for the converter

can only be called by the owner while the converter is inactive

## Parameters:

- `_token`:   address of the reserve token

- `_weight`:  reserve weight, represented in ppm, 1-1000000

# Function `reserveWeight(contract IERC20Token _reserveToken) → uint32` {#ConverterBase-reserveWeight-contract-IERC20Token-}

returns the reserve's weight

added in version 28

## Parameters:

- `_reserveToken`:    reserve token contract address

## Return Values:

- reserve weight

# Function `reserveBalance(contract IERC20Token _reserveToken) → uint256` {#ConverterBase-reserveBalance-contract-IERC20Token-}

returns the reserve's balance

note that prior to version 17, you should use 'getConnectorBalance' instead

## Parameters:

- `_reserveToken`:    reserve token contract address

## Return Values:

- reserve balance

# Function `convert(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount, address _trader, address payable _beneficiary) → uint256` {#ConverterBase-convert-contract-IERC20Token-contract-IERC20Token-uint256-address-address-payable-}

converts a specific amount of source tokens to target tokens

can only be called by the bancor network contract

## Parameters:

- `_sourceToken`: source ERC20 token

- `_targetToken`: target ERC20 token

- `_amount`:      amount of tokens to convert (in units of the source token)

- `_trader`:      address of the caller who executed the conversion

- `_beneficiary`: wallet to receive the conversion result

## Return Values:

- amount of tokens received (in units of the target token)

# Function `token() → contract IConverterAnchor` {#ConverterBase-token--}

deprecated since version 28, backward compatibility - use only for earlier versions

# Function `transferTokenOwnership(address _newOwner)` {#ConverterBase-transferTokenOwnership-address-}

deprecated, backward compatibility

# Function `acceptTokenOwnership()` {#ConverterBase-acceptTokenOwnership--}

deprecated, backward compatibility

# Function `connectors(contract IERC20Token _address) → uint256, uint32, bool, bool, bool` {#ConverterBase-connectors-contract-IERC20Token-}

deprecated, backward compatibility

# Function `connectorTokens(uint256 _index) → contract IERC20Token` {#ConverterBase-connectorTokens-uint256-}

deprecated, backward compatibility

# Function `connectorTokenCount() → uint16` {#ConverterBase-connectorTokenCount--}

deprecated, backward compatibility

# Function `getConnectorBalance(contract IERC20Token _connectorToken) → uint256` {#ConverterBase-getConnectorBalance-contract-IERC20Token-}

deprecated, backward compatibility

# Function `getReturn(contract IERC20Token _sourceToken, contract IERC20Token _targetToken, uint256 _amount) → uint256, uint256` {#ConverterBase-getReturn-contract-IERC20Token-contract-IERC20Token-uint256-}

deprecated, backward compatibility
