# Bancor Network



The BancorNetwork contract is the main entry point for Bancor token conversions.

It also allows for the conversion of any token in the Bancor Network to any other token in a single transaction by providing a conversion path.

A note on Conversion Path: Conversion path is a data structure that is used when converting a token to another token in the Bancor Network,

when the conversion cannot necessarily be done by a single converter and might require multiple 'hops'.

The path defines which converters should be used and what kind of conversion should be done in each step.

The path format doesn't include complex structure; instead, it is represented by a single array in which each 'hop' is represented by a 2-tuple - smart token & to token.

In addition, the first element is always the source token.

The smart token is only used as a pointer to a converter \(since converter addresses are more likely to change as opposed to smart token addresses\).

Format:

\[source token, smart token, to token, smart token, to token...\]

## Functions: <a id="functions"></a>

* [`constructor(contract IContractRegistry _registry)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-constructor-contract-icontractregistry)
* [`setMaxAffiliateFee(uint256 _maxAffiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-setmaxaffiliatefee-uint256)
* [`setSignerAddress(address _signerAddress)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-setsigneraddress-address)
* [`registerEtherToken(contract IEtherToken _token, bool _register)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-registerethertoken-contract-iethertoken-bool)
* [`convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertfor2-contract-ierc20token---uint256-uint256-address-address-uint256)
* [`convertForPrioritized4(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256[] _signature, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertforprioritized4-contract-ierc20token---uint256-uint256-address-uint256---address-uint256)
* [`xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-xconvert2-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-address-uint256)
* [`xConvertPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[] _signature, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-xconvertprioritized3-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256---address-uint256)
* [`getReturnByPath(contract IERC20Token[] _path, uint256 _amount)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-getreturnbypath-contract-ierc20token---uint256)
* [`claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-claimandconvertfor2-contract-ierc20token---uint256-uint256-address-address-uint256)
* [`convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convert2-contract-ierc20token---uint256-uint256-address-uint256)
* [`claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-claimandconvert2-contract-ierc20token---uint256-uint256-address-uint256)
* [`convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convert-contract-ierc20token---uint256-uint256)
* [`claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-claimandconvert-contract-ierc20token---uint256-uint256)
* [`convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertfor-contract-ierc20token---uint256-uint256-address)
* [`claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-claimandconvertfor-contract-ierc20token---uint256-uint256-address)
* [`xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-xconvert-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256)
* [`xConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[] _signature)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-xconvertprioritized2-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256)
* [`xConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-xconvertprioritized-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256-uint8-bytes32-bytes32)
* [`convertForPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _customVal, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertforprioritized3-contract-ierc20token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32)
* [`convertForPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertforprioritized2-contract-ierc20token---uint256-uint256-address-uint256-uint8-bytes32-bytes32)
* [`convertForPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _block, uint256 _nonce, uint8 _v, bytes32 _r, bytes32 _s)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-convertforprioritized-contract-ierc20token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32)

## Events: <a id="events"></a>

* [`Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)`](vscode-resource://file///Users/yudi/git/docs/solidity/contracts/BancorNetwork.md#bancornetwork-conversion-address-address-address-uint256-uint256-address)

## Function `constructor(contract IContractRegistry _registry)` {\#BancorNetwork-constructor-contract-IContractRegistry-} <a id="function-constructorcontract-icontractregistry-registry-bancornetwork-constructor-contract-icontractregistry"></a>

initializes a new BancorNetwork instance

### Parameters: <a id="parameters"></a>

* `_registry`: address of a contract registry contract

## Function `setMaxAffiliateFee(uint256 _maxAffiliateFee)`{\#BancorNetwork-setMaxAffiliateFee-uint256-} <a id="function-setmaxaffiliatefeeuint256-maxaffiliatefee-bancornetwork-setmaxaffiliatefee-uint256"></a>

allows the owner to update the maximum affiliate-fee

### Parameters: <a id="parameters-1"></a>

* `_maxAffiliateFee`: maximum affiliate-fee

## Function `setSignerAddress(address _signerAddress)`{\#BancorNetwork-setSignerAddress-address-} <a id="function-setsigneraddressaddress-signeraddress-bancornetwork-setsigneraddress-address"></a>

allows the owner to update the signer address

### Parameters: <a id="parameters-2"></a>

* `_signerAddress`: new signer address

## Function `registerEtherToken(contract IEtherToken _token, bool _register)` {\#BancorNetwork-registerEtherToken-contract-IEtherToken-bool-} <a id="function-registerethertokencontract-iethertoken-token-bool-register-bancornetwork-registerethertoken-contract-iethertoken-bool"></a>

allows the owner to register/unregister ether tokens

### Parameters: <a id="parameters-3"></a>

* `_token`: ether token contract address
* `_register`: true to register, false to unregister

## Function `convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee) → uint256` {\#BancorNetwork-convertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-} <a id="function-convertfor2contract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-convertfor2-contract-ierc20token---uint256-uint256-address-address-uint256"></a>

converts the token to any other token in the bancor network by following

a predefined conversion path and transfers the result tokens to a target account

note that the network should already own the source tokens

### Parameters: <a id="parameters-4"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_for`: account that will receive the conversion result
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values"></a>

* tokens issued in return

## Function `convertForPrioritized4(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256[] _signature, address _affiliateAccount, uint256 _affiliateFee) → uint256` {\#BancorNetwork-convertForPrioritized4-contract-IERC20Token---uint256-uint256-address-uint256---address-uint256-} <a id="function-convertforprioritized4contract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-uint256-signature-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-convertforprioritized4-contract-ierc20token---uint256-uint256-address-uint256---address-uint256"></a>

converts the token to any other token in the bancor network

by following a predefined conversion path and transfers the result

tokens to a target account.

this version of the function also allows the verified signer

to bypass the universal gas price limit.

note that the network should already own the source tokens

### Parameters: <a id="parameters-5"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_for`: account that will receive the conversion result
* `_signature`: an array of the following elements:

  \[0\] uint256 custom value that was signed for prioritized conversion

  \[1\] uint256 if the current block exceeded the given parameter - it is cancelled

  \[2\] uint8 \(signature\[128:130\]\) associated with the signer address and helps to validate if the signature is legit

  \[3\] bytes32 \(signature\[0:64\]\) associated with the signer address and helps to validate if the signature is legit

  \[4\] bytes32 \(signature\[64:128\]\) associated with the signer address and helps to validate if the signature is legit

if the array is empty \(length == 0\), then the gas-price limit is verified instead of the signature

* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-1"></a>

* tokens issued in return

## Function `xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee) → uint256` {\#BancorNetwork-xConvert2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-address-uint256-} <a id="function-xconvert2contract-ierc20token-path-uint256-amount-uint256-minreturn-bytes32-toblockchain-bytes32-to-uint256-conversionid-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-xconvert2-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-address-uint256"></a>

converts any other token to BNT in the bancor network

by following a predefined conversion path and transfers the resulting

tokens to BancorX.

note that the network should already have been given allowance of the source token \(if not ETH\)

### Parameters: <a id="parameters-6"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_toBlockchain`: blockchain BNT will be issued on
* `_to`: address/account on \_toBlockchain to send the BNT to
* `_conversionId`: pre-determined unique \(if non zero\) id which refers to this transaction
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-2"></a>

* the amount of BNT received from this conversion

## Function `xConvertPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[] _signature, address _affiliateAccount, uint256 _affiliateFee) → uint256` {\#BancorNetwork-xConvertPrioritized3-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---address-uint256-} <a id="function-xconvertprioritized3contract-ierc20token-path-uint256-amount-uint256-minreturn-bytes32-toblockchain-bytes32-to-uint256-conversionid-uint256-signature-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-xconvertprioritized3-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256---address-uint256"></a>

converts any other token to BNT in the bancor network

by following a predefined conversion path and transfers the resulting

tokens to BancorX.

this version of the function also allows the verified signer

to bypass the universal gas price limit.

note that the network should already have been given allowance of the source token \(if not ETH\)

### Parameters: <a id="parameters-7"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_toBlockchain`: blockchain BNT will be issued on
* `_to`: address/account on \_toBlockchain to send the BNT to
* `_conversionId`: pre-determined unique \(if non zero\) id which refers to this transaction
* `_signature`: an array of the following elements:

  \[0\] uint256 custom value that was signed for prioritized conversion; must be equal to \_amount

  \[1\] uint256 if the current block exceeded the given parameter - it is cancelled

  \[2\] uint8 \(signature\[128:130\]\) associated with the signer address and helps to validate if the signature is legit

  \[3\] bytes32 \(signature\[0:64\]\) associated with the signer address and helps to validate if the signature is legit

  \[4\] bytes32 \(signature\[64:128\]\) associated with the signer address and helps to validate if the signature is legit

if the array is empty \(length == 0\), then the gas-price limit is verified instead of the signature

* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-3"></a>

* the amount of BNT received from this conversion

## Function `getReturnByPath(contract IERC20Token[] _path, uint256 _amount) → uint256, uint256` {\#BancorNetwork-getReturnByPath-contract-IERC20Token---uint256-} <a id="function-getreturnbypathcontract-ierc20token-path-uint256-amount-%E2%86%92-uint256-uint256-bancornetwork-getreturnbypath-contract-ierc20token---uint256"></a>

calculates the expected return of converting a given amount on a given path

note that there is no support for circular paths

### Parameters: <a id="parameters-8"></a>

* `_path`: conversion path \(see conversion path format above\)
* `_amount`: amount of \_path\[0\] tokens received from the user

### Return Values: <a id="return-values-4"></a>

* amount of \_path\[\_path.length - 1\] tokens that the user will receive
* amount of \_path\[\_path.length - 1\] tokens that the user will pay as fee

## Function `claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, address _affiliateAccount, uint256 _affiliateFee) → uint256` {\#BancorNetwork-claimAndConvertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-} <a id="function-claimandconvertfor2contract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-claimandconvertfor2-contract-ierc20token---uint256-uint256-address-address-uint256"></a>

claims the caller's tokens, converts them to any other token in the bancor network

by following a predefined conversion path and transfers the result tokens to a target account

note that allowance must be set beforehand

### Parameters: <a id="parameters-9"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_for`: account that will receive the conversion result
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-5"></a>

* tokens issued in return

## Function `convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256`{\#BancorNetwork-convert2-contract-IERC20Token---uint256-uint256-address-uint256-} <a id="function-convert2contract-ierc20token-path-uint256-amount-uint256-minreturn-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-convert2-contract-ierc20token---uint256-uint256-address-uint256"></a>

converts the token to any other token in the bancor network by following

a predefined conversion path and transfers the result tokens back to the sender

note that the network should already own the source tokens

### Parameters: <a id="parameters-10"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-6"></a>

* tokens issued in return

## Function `claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256`{\#BancorNetwork-claimAndConvert2-contract-IERC20Token---uint256-uint256-address-uint256-} <a id="function-claimandconvert2contract-ierc20token-path-uint256-amount-uint256-minreturn-address-affiliateaccount-uint256-affiliatefee-%E2%86%92-uint256-bancornetwork-claimandconvert2-contract-ierc20token---uint256-uint256-address-uint256"></a>

claims the caller's tokens, converts them to any other token in the bancor network

by following a predefined conversion path and transfers the result tokens back to the sender

note that allowance must be set beforehand

### Parameters: <a id="parameters-11"></a>

* `_path`: conversion path, see conversion path format above
* `_amount`: amount to convert from \(in the initial source token\)
* `_minReturn`: if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero
* `_affiliateAccount`: affiliate account
* `_affiliateFee`: affiliate fee in PPM

### Return Values: <a id="return-values-7"></a>

* tokens issued in return

## Function `convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256`{\#BancorNetwork-convert-contract-IERC20Token---uint256-uint256-} <a id="function-convertcontract-ierc20token-path-uint256-amount-uint256-minreturn-%E2%86%92-uint256-bancornetwork-convert-contract-ierc20token---uint256-uint256"></a>

deprecated, backward compatibility

## Function `claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256`{\#BancorNetwork-claimAndConvert-contract-IERC20Token---uint256-uint256-} <a id="function-claimandconvertcontract-ierc20token-path-uint256-amount-uint256-minreturn-%E2%86%92-uint256-bancornetwork-claimandconvert-contract-ierc20token---uint256-uint256"></a>

deprecated, backward compatibility

## Function `convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) → uint256` {\#BancorNetwork-convertFor-contract-IERC20Token---uint256-uint256-address-} <a id="function-convertforcontract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-%E2%86%92-uint256-bancornetwork-convertfor-contract-ierc20token---uint256-uint256-address"></a>

deprecated, backward compatibility

## Function `claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for) → uint256` {\#BancorNetwork-claimAndConvertFor-contract-IERC20Token---uint256-uint256-address-} <a id="function-claimandconvertforcontract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-%E2%86%92-uint256-bancornetwork-claimandconvertfor-contract-ierc20token---uint256-uint256-address"></a>

deprecated, backward compatibility

## Function `xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId) → uint256` {\#BancorNetwork-xConvert-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-} <a id="function-xconvertcontract-ierc20token-path-uint256-amount-uint256-minreturn-bytes32-toblockchain-bytes32-to-uint256-conversionid-%E2%86%92-uint256-bancornetwork-xconvert-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256"></a>

deprecated, backward compatibility

## Function `xConvertPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256[] _signature) → uint256` {\#BancorNetwork-xConvertPrioritized2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256---} <a id="function-xconvertprioritized2contract-ierc20token-path-uint256-amount-uint256-minreturn-bytes32-toblockchain-bytes32-to-uint256-conversionid-uint256-signature-%E2%86%92-uint256-bancornetwork-xconvertprioritized2-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256"></a>

deprecated, backward compatibility

## Function `xConvertPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _toBlockchain, bytes32 _to, uint256 _conversionId, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s) → uint256` {\#BancorNetwork-xConvertPrioritized-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-uint256-uint8-bytes32-bytes32-} <a id="function-xconvertprioritizedcontract-ierc20token-path-uint256-amount-uint256-minreturn-bytes32-toblockchain-bytes32-to-uint256-conversionid-uint256-block-uint8-v-bytes32-r-bytes32-s-%E2%86%92-uint256-bancornetwork-xconvertprioritized-contract-ierc20token---uint256-uint256-bytes32-bytes32-uint256-uint256-uint8-bytes32-bytes32"></a>

deprecated, backward compatibility

## Function `convertForPrioritized3(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _customVal, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s) → uint256`{\#BancorNetwork-convertForPrioritized3-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-} <a id="function-convertforprioritized3contract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-uint256-customval-uint256-block-uint8-v-bytes32-r-bytes32-s-%E2%86%92-uint256-bancornetwork-convertforprioritized3-contract-ierc20token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32"></a>

deprecated, backward compatibility

## Function `convertForPrioritized2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _block, uint8 _v, bytes32 _r, bytes32 _s) → uint256` {\#BancorNetwork-convertForPrioritized2-contract-IERC20Token---uint256-uint256-address-uint256-uint8-bytes32-bytes32-} <a id="function-convertforprioritized2contract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-uint256-block-uint8-v-bytes32-r-bytes32-s-%E2%86%92-uint256-bancornetwork-convertforprioritized2-contract-ierc20token---uint256-uint256-address-uint256-uint8-bytes32-bytes32"></a>

deprecated, backward compatibility

## Function `convertForPrioritized(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _for, uint256 _block, uint256 _nonce, uint8 _v, bytes32 _r, bytes32 _s) → uint256`{\#BancorNetwork-convertForPrioritized-contract-IERC20Token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32-} <a id="function-convertforprioritizedcontract-ierc20token-path-uint256-amount-uint256-minreturn-address-for-uint256-block-uint256-nonce-uint8-v-bytes32-r-bytes32-s-%E2%86%92-uint256-bancornetwork-convertforprioritized-contract-ierc20token---uint256-uint256-address-uint256-uint256-uint8-bytes32-bytes32"></a>

deprecated, backward compatibility

## Event `Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)`{\#BancorNetwork-Conversion-address-address-address-uint256-uint256-address-} <a id="event-conversionaddress-smarttoken-address-fromtoken-address-totoken-uint256-fromamount-uint256-toamount-address-trader-bancornetwork-conversion-address-address-address-uint256-uint256-address"></a>

triggered when a conversion between two tokens occurs

### Parameters: <a id="parameters-12"></a>

* `_smartToken`: smart token governed by the converter
* `_fromToken`: ERC20 token converted from
* `_toToken`: ERC20 token converted to
* `_fromAmount`: amount converted, in fromToken
* `_toAmount`: amount returned, minus conversion fee
* `_trader`: wallet that initiated the trade

