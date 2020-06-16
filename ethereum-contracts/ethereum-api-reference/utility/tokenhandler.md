# TokenHandler

## Functions:

* [`safeApprove(contract IERC20Token _token, address _spender, uint256 _value)`](tokenhandler.md#TokenHandler-safeApprove-contract-IERC20Token-address-uint256-)
* [`safeTransfer(contract IERC20Token _token, address _to, uint256 _value)`](tokenhandler.md#TokenHandler-safeTransfer-contract-IERC20Token-address-uint256-)
* [`safeTransferFrom(contract IERC20Token _token, address _from, address _to, uint256 _value)`](tokenhandler.md#TokenHandler-safeTransferFrom-contract-IERC20Token-address-address-uint256-)

## Function `safeApprove(contract IERC20Token _token, address _spender, uint256 _value)` <a id="TokenHandler-safeApprove-contract-IERC20Token-address-uint256-"></a>

executes the ERC20 token's `approve` function and reverts upon failure

the main purpose of this function is to prevent a non standard ERC20 token

from failing silently

### Parameters:

* `_token`: ERC20 token address
* `_spender`: approved address
* `_value`: allowance amount

## Function `safeTransfer(contract IERC20Token _token, address _to, uint256 _value)` <a id="TokenHandler-safeTransfer-contract-IERC20Token-address-uint256-"></a>

executes the ERC20 token's `transfer` function and reverts upon failure

the main purpose of this function is to prevent a non standard ERC20 token

from failing silently

### Parameters:

* `_token`: ERC20 token address
* `_to`: target address
* `_value`: transfer amount

## Function `safeTransferFrom(contract IERC20Token _token, address _from, address _to, uint256 _value)` <a id="TokenHandler-safeTransferFrom-contract-IERC20Token-address-address-uint256-"></a>

executes the ERC20 token's `transferFrom` function and reverts upon failure

the main purpose of this function is to prevent a non standard ERC20 token

from failing silently

### Parameters:

* `_token`: ERC20 token address
* `_from`: source address
* `_to`: target address
* `_value`: transfer amount

