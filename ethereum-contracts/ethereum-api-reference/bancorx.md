# BancorX

The BancorX contract allows cross chain token transfers.

There are two processes that take place in the contract -

* Initiate a cross chain transfer to a target blockchain \(locks tokens from the caller account on Ethereum\)
* Report a cross chain transfer initiated on a source blockchain \(releases tokens to an account on Ethereum\)

Reporting cross chain transfers works similar to standard multisig contracts, meaning that multiple

callers are required to report a transfer before tokens are released to the target account.

## Functions:

* [`constructor(uint256 _maxLockLimit, uint256 _maxReleaseLimit, uint256 _minLimit, uint256 _limitIncPerBlock, uint8 _minRequiredReports, contract IContractRegistry _registry, contract IERC20Token _token)`](bancorx.md#BancorX-constructor-uint256-uint256-uint256-uint256-uint8-contract-IContractRegistry-contract-IERC20Token-)
* [`setMaxLockLimit(uint256 _maxLockLimit)`](bancorx.md#BancorX-setMaxLockLimit-uint256-)
* [`setMaxReleaseLimit(uint256 _maxReleaseLimit)`](bancorx.md#BancorX-setMaxReleaseLimit-uint256-)
* [`setMinLimit(uint256 _minLimit)`](bancorx.md#BancorX-setMinLimit-uint256-)
* [`setLimitIncPerBlock(uint256 _limitIncPerBlock)`](bancorx.md#BancorX-setLimitIncPerBlock-uint256-)
* [`setMinRequiredReports(uint8 _minRequiredReports)`](bancorx.md#BancorX-setMinRequiredReports-uint8-)
* [`setReporter(address _reporter, bool _active)`](bancorx.md#BancorX-setReporter-address-bool-)
* [`enableXTransfers(bool _enable)`](bancorx.md#BancorX-enableXTransfers-bool-)
* [`enableReporting(bool _enable)`](bancorx.md#BancorX-enableReporting-bool-)
* [`upgrade(address[] _reporters)`](bancorx.md#BancorX-upgrade-address---)
* [`xTransfer(bytes32 _toBlockchain, bytes32 _to, uint256 _amount)`](bancorx.md#BancorX-xTransfer-bytes32-bytes32-uint256-)
* [`xTransfer(bytes32 _toBlockchain, bytes32 _to, uint256 _amount, uint256 _id)`](bancorx.md#BancorX-xTransfer-bytes32-bytes32-uint256-uint256-)
* [`reportTx(bytes32 _fromBlockchain, uint256 _txId, address _to, uint256 _amount, uint256 _xTransferId)`](bancorx.md#BancorX-reportTx-bytes32-uint256-address-uint256-uint256-)
* [`getXTransferAmount(uint256 _xTransferId, address _for)`](bancorx.md#BancorX-getXTransferAmount-uint256-address-)
* [`getCurrentLockLimit()`](bancorx.md#BancorX-getCurrentLockLimit--)
* [`getCurrentReleaseLimit()`](bancorx.md#BancorX-getCurrentReleaseLimit--)

## Events:

* [`TokensLock(address _from, uint256 _amount)`](bancorx.md#BancorX-TokensLock-address-uint256-)
* [`TokensRelease(address _to, uint256 _amount)`](bancorx.md#BancorX-TokensRelease-address-uint256-)
* [`XTransfer(address _from, bytes32 _toBlockchain, bytes32 _to, uint256 _amount, uint256 _id)`](bancorx.md#BancorX-XTransfer-address-bytes32-bytes32-uint256-uint256-)
* [`TxReport(address _reporter, bytes32 _fromBlockchain, uint256 _txId, address _to, uint256 _amount, uint256 _xTransferId)`](bancorx.md#BancorX-TxReport-address-bytes32-uint256-address-uint256-uint256-)
* [`XTransferComplete(address _to, uint256 _id)`](bancorx.md#BancorX-XTransferComplete-address-uint256-)

## Function `constructor(uint256 _maxLockLimit, uint256 _maxReleaseLimit, uint256 _minLimit, uint256 _limitIncPerBlock, uint8 _minRequiredReports, contract IContractRegistry _registry, contract IERC20Token _token)` <a id="BancorX-constructor-uint256-uint256-uint256-uint256-uint8-contract-IContractRegistry-contract-IERC20Token-"></a>

initializes a new BancorX instance

### Parameters:

* `_maxLockLimit`: maximum amount of tokens that can be locked in one transaction
* `_maxReleaseLimit`: maximum amount of tokens that can be released in one transaction
* `_minLimit`: minimum amount of tokens that can be transferred in one transaction
* `_limitIncPerBlock`: how much the limit increases per block
* `_minRequiredReports`: minimum number of reporters to report transaction before tokens can be released
* `_registry`: address of contract registry
* `_token`: erc20 token

## Function `setMaxLockLimit(uint256 _maxLockLimit)` <a id="BancorX-setMaxLockLimit-uint256-"></a>

setter

### Parameters:

* `_maxLockLimit`:    new maxLockLimit

## Function `setMaxReleaseLimit(uint256 _maxReleaseLimit)` <a id="BancorX-setMaxReleaseLimit-uint256-"></a>

setter

### Parameters:

* `_maxReleaseLimit`:    new maxReleaseLimit

## Function `setMinLimit(uint256 _minLimit)` <a id="BancorX-setMinLimit-uint256-"></a>

setter

### Parameters:

* `_minLimit`:    new minLimit

## Function `setLimitIncPerBlock(uint256 _limitIncPerBlock)` <a id="BancorX-setLimitIncPerBlock-uint256-"></a>

setter

### Parameters:

* `_limitIncPerBlock`:    new limitIncPerBlock

## Function `setMinRequiredReports(uint8 _minRequiredReports)` <a id="BancorX-setMinRequiredReports-uint8-"></a>

setter

### Parameters:

* `_minRequiredReports`:    new minRequiredReports

## Function `setReporter(address _reporter, bool _active)` <a id="BancorX-setReporter-address-bool-"></a>

allows the owner to set/remove reporters

### Parameters:

* `_reporter`: reporter whos status is to be set
* `_active`: true if the reporter is approved, false otherwise

## Function `enableXTransfers(bool _enable)` <a id="BancorX-enableXTransfers-bool-"></a>

allows the owner enable/disable the xTransfer method

### Parameters:

* `_enable`:     true to enable, false to disable

## Function `enableReporting(bool _enable)` <a id="BancorX-enableReporting-bool-"></a>

allows the owner enable/disable the reportTransaction method

### Parameters:

* `_enable`:     true to enable, false to disable

## Function `upgrade(address[] _reporters)` <a id="BancorX-upgrade-address---"></a>

upgrades the contract to the latest version

can only be called by the owner

note that the owner needs to call acceptOwnership on the new contract after the upgrade

### Parameters:

* `_reporters`:    new list of reporters

## Function `xTransfer(bytes32 _toBlockchain, bytes32 _to, uint256 _amount)` <a id="BancorX-xTransfer-bytes32-bytes32-uint256-"></a>

claims tokens from msg.sender to be converted to tokens on another blockchain

### Parameters:

* `_toBlockchain`: blockchain on which tokens will be issued
* `_to`: address to send the tokens to
* `_amount`: the amount of tokens to transfer

## Function `xTransfer(bytes32 _toBlockchain, bytes32 _to, uint256 _amount, uint256 _id)` <a id="BancorX-xTransfer-bytes32-bytes32-uint256-uint256-"></a>

claims tokens from msg.sender to be converted to tokens on another blockchain

### Parameters:

* `_toBlockchain`: blockchain on which tokens will be issued
* `_to`: address to send the tokens to
* `_amount`: the amount of tokens to transfer
* `_id`: pre-determined unique \(if non zero\) id which refers to this transaction

## Function `reportTx(bytes32 _fromBlockchain, uint256 _txId, address _to, uint256 _amount, uint256 _xTransferId)` <a id="BancorX-reportTx-bytes32-uint256-address-uint256-uint256-"></a>

allows reporter to report transaction which occured on another blockchain

### Parameters:

* `_fromBlockchain`: blockchain in which tokens were destroyed
* `_txId`: transactionId of transaction thats being reported
* `_to`: address to receive tokens
* `_amount`: amount of tokens destroyed on another blockchain
* `_xTransferId`: unique \(if non zero\) pre-determined id \(unlike \_txId which is determined after the transactions been mined\)

## Function `getXTransferAmount(uint256 _xTransferId, address _for) → uint256` <a id="BancorX-getXTransferAmount-uint256-address-"></a>

gets x transfer amount by xTransferId \(not txId\)

### Parameters:

* `_xTransferId`: unique \(if non zero\) pre-determined id \(unlike \_txId which is determined after the transactions been broadcasted\)
* `_for`: address corresponding to xTransferId

### Return Values:

* amount that was sent in xTransfer corresponding to \_xTransferId

## Function `getCurrentLockLimit() → uint256` <a id="BancorX-getCurrentLockLimit--"></a>

method for calculating current lock limit

### Return Values:

* the current maximum limit of tokens that can be locked

## Function `getCurrentReleaseLimit() → uint256` <a id="BancorX-getCurrentReleaseLimit--"></a>

method for calculating current release limit

### Return Values:

* the current maximum limit of tokens that can be released

## Event `TokensLock(address _from, uint256 _amount)` <a id="BancorX-TokensLock-address-uint256-"></a>

triggered when tokens are locked in smart contract

### Parameters:

* `_from`: wallet address that the tokens are locked from
* `_amount`: amount locked

## Event `TokensRelease(address _to, uint256 _amount)` <a id="BancorX-TokensRelease-address-uint256-"></a>

triggered when tokens are released by the smart contract

### Parameters:

* `_to`: wallet address that the tokens are released to
* `_amount`: amount released

## Event `XTransfer(address _from, bytes32 _toBlockchain, bytes32 _to, uint256 _amount, uint256 _id)` <a id="BancorX-XTransfer-address-bytes32-bytes32-uint256-uint256-"></a>

triggered when xTransfer is successfully called

### Parameters:

* `_from`: wallet address that initiated the xtransfer
* `_toBlockchain`: target blockchain
* `_to`: target wallet
* `_amount`: transfer amount
* `_id`: xtransfer id

## Event `TxReport(address _reporter, bytes32 _fromBlockchain, uint256 _txId, address _to, uint256 _amount, uint256 _xTransferId)` <a id="BancorX-TxReport-address-bytes32-uint256-address-uint256-uint256-"></a>

triggered when report is successfully submitted

### Parameters:

* `_reporter`: reporter wallet
* `_fromBlockchain`: source blockchain
* `_txId`: tx id on the source blockchain
* `_to`: target wallet
* `_amount`: transfer amount
* `_xTransferId`: xtransfer id

## Event `XTransferComplete(address _to, uint256 _id)` <a id="BancorX-XTransferComplete-address-uint256-"></a>

triggered when final report is successfully submitted

### Parameters:

* `_to`: target wallet
* `_id`: xtransfer id

