# BancorConverter

Bancor Converter

The Bancor converter allows for conversions between a Smart Token and other ERC20 tokens and between different ERC20 tokens and themselves.

This mechanism opens the possibility to create different financial tools \(for example, lower slippage in conversions\).

The converter is upgradable \(just like any SmartTokenController\) and all upgrades are opt-in.

WARNING: It is NOT RECOMMENDED to use the converter with Smart Tokens that have less than 8 decimal digits or with very small numbers because of precision loss

Open issues:

* Front-running attacks are currently mitigated by the following mechanisms:
  * minimum return argument for each conversion provides a way to define a minimum/maximum price for the transaction
  * gas price limit prevents users from having control over the order of execution
  * gas price limit check can be skipped if the transaction comes from a trusted, whitelisted signer

Other potential solutions might include a commit/reveal based schemes

* Possibly add getters for the reserve fields so that the client won't need to rely on the order in the struct

## Functions:

* [`constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee, contract IERC20Token _reserveToken, uint32 _reserveRatio)`](bancorconverter.md#BancorConverter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-contract-IERC20Token-uint32-)
* [`reserveTokenCount()`](bancorconverter.md#BancorConverter-reserveTokenCount--)
* [`setConversionWhitelist(contract IWhitelist _whitelist)`](bancorconverter.md#BancorConverter-setConversionWhitelist-contract-IWhitelist-)
* [`transferTokenOwnership(address _newOwner)`](bancorconverter.md#BancorConverter-transferTokenOwnership-address-)
* [`acceptTokenOwnership()`](bancorconverter.md#BancorConverter-acceptTokenOwnership--)
* [`setConversionFee(uint32 _conversionFee)`](bancorconverter.md#BancorConverter-setConversionFee-uint32-)
* [`getFinalAmount(uint256 _amount, uint8 _magnitude)`](bancorconverter.md#BancorConverter-getFinalAmount-uint256-uint8-)
* [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](bancorconverter.md#BancorConverter-withdrawTokens-contract-IERC20Token-address-uint256-)
* [`upgrade()`](bancorconverter.md#BancorConverter-upgrade--)
* [`addReserve(contract IERC20Token _token, uint32 _ratio)`](bancorconverter.md#BancorConverter-addReserve-contract-IERC20Token-uint32-)
* [`updateReserveVirtualBalance(contract IERC20Token _reserveToken, uint256 _virtualBalance)`](bancorconverter.md#BancorConverter-updateReserveVirtualBalance-contract-IERC20Token-uint256-)
* [`getReserveRatio(contract IERC20Token _reserveToken)`](bancorconverter.md#BancorConverter-getReserveRatio-contract-IERC20Token-)
* [`getReserveBalance(contract IERC20Token _reserveToken)`](bancorconverter.md#BancorConverter-getReserveBalance-contract-IERC20Token-)
* [`getReturn(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount)`](bancorconverter.md#BancorConverter-getReturn-contract-IERC20Token-contract-IERC20Token-uint256-)
* [`getPurchaseReturn(contract IERC20Token _reserveToken, uint256 _depositAmount)`](bancorconverter.md#BancorConverter-getPurchaseReturn-contract-IERC20Token-uint256-)
* [`getSaleReturn(contract IERC20Token _reserveToken, uint256 _sellAmount)`](bancorconverter.md#BancorConverter-getSaleReturn-contract-IERC20Token-uint256-)
* [`getCrossReserveReturn(contract IERC20Token _fromReserveToken, contract IERC20Token _toReserveToken, uint256 _amount)`](bancorconverter.md#BancorConverter-getCrossReserveReturn-contract-IERC20Token-contract-IERC20Token-uint256-)
* [`convertInternal(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn)`](bancorconverter.md#BancorConverter-convertInternal-contract-IERC20Token-contract-IERC20Token-uint256-uint256-)
* [`convert2(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](bancorconverter.md#BancorConverter-convert2-contract-IERC20Token-contract-IERC20Token-uint256-uint256-address-uint256-)
* [`quickConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](bancorconverter.md#BancorConverter-quickConvert2-contract-IERC20Token---uint256-uint256-address-uint256-)
* [`completeXConversion2(contract IERC20Token[] _path, uint256 _minReturn, uint256 _conversionId)`](bancorconverter.md#BancorConverter-completeXConversion2-contract-IERC20Token---uint256-uint256-)
* [`fund(uint256 _amount)`](bancorconverter.md#BancorConverter-fund-uint256-)
* [`liquidate(uint256 _amount)`](bancorconverter.md#BancorConverter-liquidate-uint256-)
* [`change(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn)`](bancorconverter.md#BancorConverter-change-contract-IERC20Token-contract-IERC20Token-uint256-uint256-)
* [`convert(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn)`](bancorconverter.md#BancorConverter-convert-contract-IERC20Token-contract-IERC20Token-uint256-uint256-)
* [`quickConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](bancorconverter.md#BancorConverter-quickConvert-contract-IERC20Token---uint256-uint256-)
* [`quickConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, uint256[], address _affiliateAccount, uint256 _affiliateFee)`](bancorconverter.md#BancorConverter-quickConvertPrioritized2-contract-IERC20Token---uint256-uint256-uint256---address-uint256-)
* [`quickConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, uint256, uint8, bytes32, bytes32)`](bancorconverter.md#BancorConverter-quickConvertPrioritized-contract-IERC20Token---uint256-uint256-uint256-uint8-bytes32-bytes32-)
* [`completeXConversion(contract IERC20Token[] _path, uint256 _minReturn, uint256 _conversionId, uint256, uint8, bytes32, bytes32)`](bancorconverter.md#BancorConverter-completeXConversion-contract-IERC20Token---uint256-uint256-uint256-uint8-bytes32-bytes32-)
* [`connectors(address _address)`](bancorconverter.md#BancorConverter-connectors-address-)
* [`connectorTokens(uint256 _index)`](bancorconverter.md#BancorConverter-connectorTokens-uint256-)
* [`connectorTokenCount()`](bancorconverter.md#BancorConverter-connectorTokenCount--)
* [`addConnector(contract IERC20Token _token, uint32 _weight, bool)`](bancorconverter.md#BancorConverter-addConnector-contract-IERC20Token-uint32-bool-)
* [`updateConnector(contract IERC20Token _connectorToken, uint32, bool, uint256 _virtualBalance)`](bancorconverter.md#BancorConverter-updateConnector-contract-IERC20Token-uint32-bool-uint256-)
* [`getConnectorBalance(contract IERC20Token _connectorToken)`](bancorconverter.md#BancorConverter-getConnectorBalance-contract-IERC20Token-)
* [`getCrossConnectorReturn(contract IERC20Token _fromConnectorToken, contract IERC20Token _toConnectorToken, uint256 _amount)`](bancorconverter.md#BancorConverter-getCrossConnectorReturn-contract-IERC20Token-contract-IERC20Token-uint256-)

## Events:

* [`Conversion(address _fromToken, address _toToken, address _trader, uint256 _amount, uint256 _return, int256 _conversionFee)`](bancorconverter.md#BancorConverter-Conversion-address-address-address-uint256-uint256-int256-)
* [`PriceDataUpdate(address _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)`](bancorconverter.md#BancorConverter-PriceDataUpdate-address-uint256-uint256-uint32-)
* [`ConversionFeeUpdate(uint32 _prevFee, uint32 _newFee)`](bancorconverter.md#BancorConverter-ConversionFeeUpdate-uint32-uint32-)

## Function `constructor(contract ISmartToken _token, contract IContractRegistry _registry, uint32 _maxConversionFee, contract IERC20Token _reserveToken, uint32 _reserveRatio)` <a id="BancorConverter-constructor-contract-ISmartToken-contract-IContractRegistry-uint32-contract-IERC20Token-uint32-"></a>

initializes a new BancorConverter instance

### Parameters:

* `_token`: smart token governed by the converter
* `_registry`: address of a contract registry contract
* `_maxConversionFee`: maximum conversion fee, represented in ppm
* `_reserveToken`: optional, initial reserve, allows defining the first reserve at deployment time
* `_reserveRatio`: optional, ratio for the initial reserve

## Function `reserveTokenCount() → uint16` <a id="BancorConverter-reserveTokenCount--"></a>

returns the number of reserve tokens defined

note that prior to version 17, you should use 'connectorTokenCount' instead

### Return Values:

* number of reserve tokens

## Function `setConversionWhitelist(contract IWhitelist _whitelist)` <a id="BancorConverter-setConversionWhitelist-contract-IWhitelist-"></a>

allows the owner to update & enable the conversion whitelist contract address

when set, only addresses that are whitelisted are actually allowed to use the converter

note that the whitelist check is actually done by the BancorNetwork contract

### Parameters:

* `_whitelist`:    address of a whitelist contract

## Function `transferTokenOwnership(address _newOwner)` <a id="BancorConverter-transferTokenOwnership-address-"></a>

allows transferring the token ownership

the new owner needs to accept the transfer

can only be called by the contract owner

note that token ownership can only be transferred while the owner is the converter upgrader contract

### Parameters:

* `_newOwner`:    new token owner

## Function `acceptTokenOwnership()` <a id="BancorConverter-acceptTokenOwnership--"></a>

used by a new owner to accept a token ownership transfer

can only be called by the contract owner

note that token ownership can only be accepted if its total-supply is greater than zero

## Function `setConversionFee(uint32 _conversionFee)` <a id="BancorConverter-setConversionFee-uint32-"></a>

updates the current conversion fee

can only be called by the contract owner

### Parameters:

* `_conversionFee`: new conversion fee, represented in ppm

## Function `getFinalAmount(uint256 _amount, uint8 _magnitude) → uint256` <a id="BancorConverter-getFinalAmount-uint256-uint8-"></a>

given a return amount, returns the amount minus the conversion fee

### Parameters:

* `_amount`: return amount
* `_magnitude`: 1 for standard conversion, 2 for cross reserve conversion

### Return Values:

* return amount minus conversion fee

## Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` <a id="BancorConverter-withdrawTokens-contract-IERC20Token-address-uint256-"></a>

withdraws tokens held by the converter and sends them to an account

can only be called by the owner

note that reserve tokens can only be withdrawn by the owner while the converter is inactive

unless the owner is the converter upgrader contract

### Parameters:

* `_token`: ERC20 token contract address
* `_to`: account to receive the new amount
* `_amount`: amount to withdraw

## Function `upgrade()` <a id="BancorConverter-upgrade--"></a>

upgrades the converter to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new converter after the upgrade

## Function `addReserve(contract IERC20Token _token, uint32 _ratio)` <a id="BancorConverter-addReserve-contract-IERC20Token-uint32-"></a>

defines a new reserve for the token

can only be called by the owner while the converter is inactive

note that prior to version 17, you should use 'addConnector' instead

### Parameters:

* `_token`: address of the reserve token
* `_ratio`: constant reserve ratio, represented in ppm, 1-1000000

## Function `updateReserveVirtualBalance(contract IERC20Token _reserveToken, uint256 _virtualBalance)` <a id="BancorConverter-updateReserveVirtualBalance-contract-IERC20Token-uint256-"></a>

updates a reserve's virtual balance

only used during an upgrade process

can only be called by the contract owner while the owner is the converter upgrader contract

note that prior to version 17, you should use 'updateConnector' instead

### Parameters:

* `_reserveToken`: address of the reserve token
* `_virtualBalance`: new reserve virtual balance, or 0 to disable virtual balance

## Function `getReserveRatio(contract IERC20Token _reserveToken) → uint256` <a id="BancorConverter-getReserveRatio-contract-IERC20Token-"></a>

returns the reserve's ratio

added in version 22

### Parameters:

* `_reserveToken`:    reserve token contract address

### Return Values:

* reserve ratio

## Function `getReserveBalance(contract IERC20Token _reserveToken) → uint256` <a id="BancorConverter-getReserveBalance-contract-IERC20Token-"></a>

returns the reserve's balance

note that prior to version 17, you should use 'getConnectorBalance' instead

### Parameters:

* `_reserveToken`:    reserve token contract address

### Return Values:

* reserve balance

## Function `getReturn(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount) → uint256, uint256` <a id="BancorConverter-getReturn-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

calculates the expected return of converting a given amount of tokens

### Parameters:

* `_fromToken`: contract address of the token to convert from
* `_toToken`: contract address of the token to convert to
* `_amount`: amount of tokens received from the user

### Return Values:

* amount of tokens that the user will receive
* amount of tokens that the user will pay as fee

## Function `getPurchaseReturn(contract IERC20Token _reserveToken, uint256 _depositAmount) → uint256, uint256` <a id="BancorConverter-getPurchaseReturn-contract-IERC20Token-uint256-"></a>

calculates the expected return of buying with a given amount of tokens

### Parameters:

* `_reserveToken`: contract address of the reserve token
* `_depositAmount`: amount of reserve-tokens received from the user

### Return Values:

* amount of supply-tokens that the user will receive
* amount of supply-tokens that the user will pay as fee

## Function `getSaleReturn(contract IERC20Token _reserveToken, uint256 _sellAmount) → uint256, uint256` <a id="BancorConverter-getSaleReturn-contract-IERC20Token-uint256-"></a>

calculates the expected return of selling a given amount of tokens

### Parameters:

* `_reserveToken`: contract address of the reserve token
* `_sellAmount`: amount of supply-tokens received from the user

### Return Values:

* amount of reserve-tokens that the user will receive
* amount of reserve-tokens that the user will pay as fee

## Function `getCrossReserveReturn(contract IERC20Token _fromReserveToken, contract IERC20Token _toReserveToken, uint256 _amount) → uint256, uint256` <a id="BancorConverter-getCrossReserveReturn-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

calculates the expected return of converting a given amount from one reserve to another

note that prior to version 17, you should use 'getCrossConnectorReturn' instead

### Parameters:

* `_fromReserveToken`: contract address of the reserve token to convert from
* `_toReserveToken`: contract address of the reserve token to convert to
* `_amount`: amount of tokens received from the user

### Return Values:

* amount of tokens that the user will receive
* amount of tokens that the user will pay as fee

## Function `convertInternal(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorConverter-convertInternal-contract-IERC20Token-contract-IERC20Token-uint256-uint256-"></a>

converts a specific amount of \_fromToken to \_toToken

can only be called by the bancor network contract

### Parameters:

* `_fromToken`: ERC20 token to convert from
* `_toToken`: ERC20 token to convert to
* `_amount`: amount to convert, in fromToken
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero

### Return Values:

* conversion return amount

## Function `convert2(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorConverter-convert2-contract-IERC20Token-contract-IERC20Token-uint256-uint256-address-uint256-"></a>

converts a specific amount of \_fromToken to \_toToken

note that prior to version 16, you should use 'convert' instead

### Parameters:

* `_fromToken`: ERC20 token to convert from
* `_toToken`: ERC20 token to convert to
* `_amount`: amount to convert, in fromToken
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* conversion return amount

## Function `quickConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorConverter-quickConvert2-contract-IERC20Token---uint256-uint256-address-uint256-"></a>

converts the token to any other token in the bancor network by following a predefined conversion path

note that when converting from an ERC20 token \(as opposed to a smart token\), allowance must be set beforehand

note that prior to version 16, you should use 'quickConvert' instead

### Parameters:

* `_path`: conversion path, see conversion path format in the BancorNetwork contract
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values:

* tokens issued in return

## Function `completeXConversion2(contract IERC20Token[] _path, uint256 _minReturn, uint256 _conversionId) → uint256` <a id="BancorConverter-completeXConversion2-contract-IERC20Token---uint256-uint256-"></a>

allows a user to convert BNT that was sent from another blockchain into any other

token on the BancorNetwork without specifying the amount of BNT to be converted, but

rather by providing the xTransferId which allows us to get the amount from BancorX.

note that prior to version 16, you should use 'completeXConversion' instead

### Parameters:

* `_path`: conversion path, see conversion path format in the BancorNetwork contract
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_conversionId`: pre-determined unique \(if non zero\) id which refers to this transaction

### Return Values:

* tokens issued in return

## Function `fund(uint256 _amount)` <a id="BancorConverter-fund-uint256-"></a>

buys the token with all reserve tokens using the same percentage

for example, if the caller increases the supply by 10%,

then it will cost an amount equal to 10% of each reserve token balance

note that the function can be called only when conversions are enabled

### Parameters:

* `_amount`:  amount to increase the supply by \(in the smart token\)

## Function `liquidate(uint256 _amount)` <a id="BancorConverter-liquidate-uint256-"></a>

sells the token for all reserve tokens using the same percentage

for example, if the holder sells 10% of the supply,

then they will receive 10% of each reserve token balance in return

note that the function can be called also when conversions are disabled

### Parameters:

* `_amount`:  amount to liquidate \(in the smart token\)

## Function `change(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorConverter-change-contract-IERC20Token-contract-IERC20Token-uint256-uint256-"></a>

deprecated, backward compatibility

## Function `convert(contract IERC20Token _fromToken, contract IERC20Token _toToken, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorConverter-convert-contract-IERC20Token-contract-IERC20Token-uint256-uint256-"></a>

deprecated, backward compatibility

## Function `quickConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256` <a id="BancorConverter-quickConvert-contract-IERC20Token---uint256-uint256-"></a>

deprecated, backward compatibility

## Function `quickConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, uint256[], address _affiliateAccount, uint256 _affiliateFee) → uint256` <a id="BancorConverter-quickConvertPrioritized2-contract-IERC20Token---uint256-uint256-uint256---address-uint256-"></a>

deprecated, backward compatibility

## Function `quickConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorConverter-quickConvertPrioritized-contract-IERC20Token---uint256-uint256-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Function `completeXConversion(contract IERC20Token[] _path, uint256 _minReturn, uint256 _conversionId, uint256, uint8, bytes32, bytes32) → uint256` <a id="BancorConverter-completeXConversion-contract-IERC20Token---uint256-uint256-uint256-uint8-bytes32-bytes32-"></a>

deprecated, backward compatibility

## Function `connectors(address _address) → uint256, uint32, bool, bool, bool` <a id="BancorConverter-connectors-address-"></a>

deprecated, backward compatibility

## Function `connectorTokens(uint256 _index) → contract IERC20Token` <a id="BancorConverter-connectorTokens-uint256-"></a>

deprecated, backward compatibility

## Function `connectorTokenCount() → uint16` <a id="BancorConverter-connectorTokenCount--"></a>

deprecated, backward compatibility

## Function `addConnector(contract IERC20Token _token, uint32 _weight, bool)` <a id="BancorConverter-addConnector-contract-IERC20Token-uint32-bool-"></a>

deprecated, backward compatibility

## Function `updateConnector(contract IERC20Token _connectorToken, uint32, bool, uint256 _virtualBalance)` <a id="BancorConverter-updateConnector-contract-IERC20Token-uint32-bool-uint256-"></a>

deprecated, backward compatibility

## Function `getConnectorBalance(contract IERC20Token _connectorToken) → uint256` <a id="BancorConverter-getConnectorBalance-contract-IERC20Token-"></a>

deprecated, backward compatibility

## Function `getCrossConnectorReturn(contract IERC20Token _fromConnectorToken, contract IERC20Token _toConnectorToken, uint256 _amount) → uint256, uint256` <a id="BancorConverter-getCrossConnectorReturn-contract-IERC20Token-contract-IERC20Token-uint256-"></a>

deprecated, backward compatibility

## Event `Conversion(address _fromToken, address _toToken, address _trader, uint256 _amount, uint256 _return, int256 _conversionFee)` <a id="BancorConverter-Conversion-address-address-address-uint256-uint256-int256-"></a>

triggered when a conversion between two tokens occurs

### Parameters:

* `_fromToken`: ERC20 token converted from
* `_toToken`: ERC20 token converted to
* `_trader`: wallet that initiated the trade
* `_amount`: amount converted, in fromToken
* `_return`: amount returned, minus conversion fee
* `_conversionFee`: conversion fee

## Event `PriceDataUpdate(address _connectorToken, uint256 _tokenSupply, uint256 _connectorBalance, uint32 _connectorWeight)` <a id="BancorConverter-PriceDataUpdate-address-uint256-uint256-uint32-"></a>

triggered after a conversion with new price data

### Parameters:

* `_connectorToken`: reserve token
* `_tokenSupply`: smart token supply
* `_connectorBalance`: reserve balance
* `_connectorWeight`: reserve ratio

## Event `ConversionFeeUpdate(uint32 _prevFee, uint32 _newFee)` <a id="BancorConverter-ConversionFeeUpdate-uint32-uint32-"></a>

triggered when the conversion fee is updated

### Parameters:

* `_prevFee`: previous fee percentage, represented in ppm
* `_newFee`: new fee percentage, represented in ppm

