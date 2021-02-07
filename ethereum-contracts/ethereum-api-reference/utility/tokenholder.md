This contract provides a safety mechanism for allowing the owner to

send tokens that were sent to the contract by mistake back to the sender.

We consider every contract to be a 'token holder' since it's currently not possible

for a contract to deny receiving tokens.

Note that we use the non standard ERC-20 interface which has no return value for transfer

in order to support both non standard as well as standard token contracts.

see https://github.com/ethereum/solidity/issues/4116

# Functions:

- [`withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)`](#TokenHolder-withdrawTokens-contract-IERC20Token-address-uint256-)

## Function `withdrawTokens(contract IERC20Token _token, address _to, uint256 _amount)` {#TokenHolder-withdrawTokens-contract-IERC20Token-address-uint256-}

withdraws tokens held by the contract and sends them to an account

can only be called by the owner

## Parameters:

- `_token`:   ERC20 token contract address

- `_to`:      account to receive the new amount

- `_amount`:  amount to withdraw
