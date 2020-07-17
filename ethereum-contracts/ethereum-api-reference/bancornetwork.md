The BancorNetwork contract is the main entry point for Bancor token conversions.

It also allows for the conversion of any token in the Bancor Network to any other token in a single

transaction by providing a conversion path.

A note on Conversion Path: Conversion path is a data structure that is used when converting a token

to another token in the Bancor Network, when the conversion cannot necessarily be done by a single

converter and might require multiple 'hops'.

The path defines which converters should be used and what kind of conversion should be done in each step.

The path format doesn't include complex structure; instead, it is represented by a single array

in which each 'hop' is represented by a 2-tuple - converter anchor & target token.

In addition, the first element is always the source token.

The converter anchor is only used as a pointer to a converter (since converter addresses are more

likely to change as opposed to anchor addresses).

Format:

[source token, converter anchor, target token, converter anchor, target token...]

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#BancorNetwork-constructor-contract-IContractRegistry-)

- [`setMaxAffiliateFee(uint256 _maxAffiliateFee)`](#BancorNetwork-setMaxAffiliateFee-uint256-)

- [`registerEtherToken(contract IEtherToken _token, bool _register)`](#BancorNetwork-registerEtherToken-contract-IEtherToken-bool-)

- [`conversionPath(contract IERC20Token _sourceToken, contract IERC20Token _targetToken)`](#BancorNetwork-conversionPath-contract-IERC20Token-contract-IERC20Token-)

- [`rateByPath(contract IERC20Token[] _path, uint256 _amount)`](#BancorNetwork-rateByPath-contract-IERC20Token---uint256-)

- [`convertByPath(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-convertByPath-contract-IERC20Token---uint256-uint256-address-address-uint256-)

- [`xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _targetBlockchain, bytes32 _targetAccount, uint256 _conversionId)`](#BancorNetwork-xConvert-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-)

- [`xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _targetBlockchain, bytes32 _targetAccount, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-xConvert2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-address-uint256-)

- [`completeXConversion(contract IERC20Token[] _path, contract IBancorX _bancorX, uint256 _conversionId, uint256 _minReturn, address _beneficiary)`](#BancorNetwork-completeXConversion-contract-IERC20Token---contract-IBancorX-uint256-uint256-address-)

- [`getReturnByPath(contract IERC20Token[] _path, uint256 _amount)`](#BancorNetwork-getReturnByPath-contract-IERC20Token---uint256-)

- [`convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](#BancorNetwork-convert-contract-IERC20Token---uint256-uint256-)

- [`convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-convert2-contract-IERC20Token---uint256-uint256-address-uint256-)

- [`convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary)`](#BancorNetwork-convertFor-contract-IERC20Token---uint256-uint256-address-)

- [`convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-convertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-)

- [`claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn)`](#BancorNetwork-claimAndConvert-contract-IERC20Token---uint256-uint256-)

- [`claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-claimAndConvert2-contract-IERC20Token---uint256-uint256-address-uint256-)

- [`claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary)`](#BancorNetwork-claimAndConvertFor-contract-IERC20Token---uint256-uint256-address-)

- [`claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee)`](#BancorNetwork-claimAndConvertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-)

# Events:

- [`Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)`](#BancorNetwork-Conversion-address-address-address-uint256-uint256-address-)

# Function `constructor(contract IContractRegistry _registry)` {#BancorNetwork-constructor-contract-IContractRegistry-}

initializes a new BancorNetwork instance

## Parameters:

- `_registry`:    address of a contract registry contract

# Function `setMaxAffiliateFee(uint256 _maxAffiliateFee)` {#BancorNetwork-setMaxAffiliateFee-uint256-}

allows the owner to update the maximum affiliate-fee

## Parameters:

- `_maxAffiliateFee`:   maximum affiliate-fee

# Function `registerEtherToken(contract IEtherToken _token, bool _register)` {#BancorNetwork-registerEtherToken-contract-IEtherToken-bool-}

allows the owner to register/unregister ether tokens

## Parameters:

- `_token`:       ether token contract address

- `_register`:    true to register, false to unregister

# Function `conversionPath(contract IERC20Token _sourceToken, contract IERC20Token _targetToken) → address[]` {#BancorNetwork-conversionPath-contract-IERC20Token-contract-IERC20Token-}

returns the conversion path between two tokens in the network

note that this method is quite expensive in terms of gas and should generally be called off-chain

## Parameters:

- `_sourceToken`: source token address

- `_targetToken`: target token address

## Return Values:

- conversion path between the two tokens

# Function `rateByPath(contract IERC20Token[] _path, uint256 _amount) → uint256` {#BancorNetwork-rateByPath-contract-IERC20Token---uint256-}

returns the expected target amount of converting a given amount on a given path

note that there is no support for circular paths

## Parameters:

- `_path`:        conversion path (see conversion path format above)

- `_amount`:      amount of _path[0] tokens received from the sender

## Return Values:

- expected target amount

# Function `convertByPath(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-convertByPath-contract-IERC20Token---uint256-uint256-address-address-uint256-}

converts the token to any other token in the bancor network by following

a predefined conversion path and transfers the result tokens to a target account

affiliate account/fee can also be passed in to receive a conversion fee (on top of the liquidity provider fees)

note that the network should already have been given allowance of the source token (if not ETH)

## Parameters:

- `_path`:                conversion path, see conversion path format above

- `_amount`:              amount to convert from, in the source token

- `_minReturn`:           if the conversion results in an amount smaller than the minimum return - it is cancelled, must be greater than zero

- `_beneficiary`:         account that will receive the conversion result or 0x0 to send the result to the sender account

- `_affiliateAccount`:    wallet address to receive the affiliate fee or 0x0 to disable affiliate fee

- `_affiliateFee`:        affiliate fee in PPM or 0 to disable affiliate fee

## Return Values:

- amount of tokens received from the conversion

# Function `xConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _targetBlockchain, bytes32 _targetAccount, uint256 _conversionId) → uint256` {#BancorNetwork-xConvert-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-}

converts any other token to BNT in the bancor network by following

a predefined conversion path and transfers the result to an account on a different blockchain

note that the network should already have been given allowance of the source token (if not ETH)

## Parameters:

- `_path`:                conversion path, see conversion path format above

- `_amount`:              amount to convert from, in the source token

- `_minReturn`:           if the conversion results in an amount smaller than the minimum return - it is cancelled, must be greater than zero

- `_targetBlockchain`:    blockchain BNT will be issued on

- `_targetAccount`:       address/account on the target blockchain to send the BNT to

- `_conversionId`:        pre-determined unique (if non zero) id which refers to this transaction

## Return Values:

- the amount of BNT received from this conversion

# Function `xConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, bytes32 _targetBlockchain, bytes32 _targetAccount, uint256 _conversionId, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-xConvert2-contract-IERC20Token---uint256-uint256-bytes32-bytes32-uint256-address-uint256-}

converts any other token to BNT in the bancor network by following

a predefined conversion path and transfers the result to an account on a different blockchain

note that the network should already have been given allowance of the source token (if not ETH)

## Parameters:

- `_path`:                conversion path, see conversion path format above

- `_amount`:              amount to convert from, in the source token

- `_minReturn`:           if the conversion results in an amount smaller than the minimum return - it is cancelled, must be greater than zero

- `_targetBlockchain`:    blockchain BNT will be issued on

- `_targetAccount`:       address/account on the target blockchain to send the BNT to

- `_conversionId`:        pre-determined unique (if non zero) id which refers to this transaction

- `_affiliateAccount`:    affiliate account

- `_affiliateFee`:        affiliate fee in PPM

## Return Values:

- the amount of BNT received from this conversion

# Function `completeXConversion(contract IERC20Token[] _path, contract IBancorX _bancorX, uint256 _conversionId, uint256 _minReturn, address _beneficiary) → uint256` {#BancorNetwork-completeXConversion-contract-IERC20Token---contract-IBancorX-uint256-uint256-address-}

allows a user to convert a token that was sent from another blockchain into any other

token on the BancorNetwork

ideally this transaction is created before the previous conversion is even complete, so

so the input amount isn't known at that point - the amount is actually take from the

BancorX contract directly by specifying the conversion id

## Parameters:

- `_path`:            conversion path

- `_bancorX`:         address of the BancorX contract for the source token

- `_conversionId`:    pre-determined unique (if non zero) id which refers to this conversion

- `_minReturn`:       if the conversion results in an amount smaller than the minimum return - it is cancelled, must be nonzero

- `_beneficiary`:     wallet to receive the conversion result

## Return Values:

- amount of tokens received from the conversion

# Function `getReturnByPath(contract IERC20Token[] _path, uint256 _amount) → uint256, uint256` {#BancorNetwork-getReturnByPath-contract-IERC20Token---uint256-}

deprecated, backward compatibility

# Function `convert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256` {#BancorNetwork-convert-contract-IERC20Token---uint256-uint256-}

deprecated, backward compatibility

# Function `convert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-convert2-contract-IERC20Token---uint256-uint256-address-uint256-}

deprecated, backward compatibility

# Function `convertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary) → uint256` {#BancorNetwork-convertFor-contract-IERC20Token---uint256-uint256-address-}

deprecated, backward compatibility

# Function `convertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-convertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-}

deprecated, backward compatibility

# Function `claimAndConvert(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn) → uint256` {#BancorNetwork-claimAndConvert-contract-IERC20Token---uint256-uint256-}

deprecated, backward compatibility

# Function `claimAndConvert2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-claimAndConvert2-contract-IERC20Token---uint256-uint256-address-uint256-}

deprecated, backward compatibility

# Function `claimAndConvertFor(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary) → uint256` {#BancorNetwork-claimAndConvertFor-contract-IERC20Token---uint256-uint256-address-}

deprecated, backward compatibility

# Function `claimAndConvertFor2(contract IERC20Token[] _path, uint256 _amount, uint256 _minReturn, address _beneficiary, address _affiliateAccount, uint256 _affiliateFee) → uint256` {#BancorNetwork-claimAndConvertFor2-contract-IERC20Token---uint256-uint256-address-address-uint256-}

deprecated, backward compatibility

# Event `Conversion(address _smartToken, address _fromToken, address _toToken, uint256 _fromAmount, uint256 _toAmount, address _trader)` {#BancorNetwork-Conversion-address-address-address-uint256-uint256-address-}

triggered when a conversion between two tokens occurs

## Parameters:

- `_smartToken`:  anchor governed by the converter

- `_fromToken`:   source ERC20 token

- `_toToken`:     target ERC20 token

- `_fromAmount`:  amount converted, in the source token

- `_toAmount`:    amount returned, minus conversion fee

- `_trader`:      wallet that initiated the trade