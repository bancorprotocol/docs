This contract provides a safety mechanism for allowing the owner to

send tokens that were sent to the contract by mistake back to the sender.

We consider every contract to be a 'token holder' since it's currently not possible

for a contract to deny receiving tokens.

# Functions:

- [`receive()`](#TokenHolder-receive--)

- [`withdrawTokens(contract IReserveToken reserveToken, address payable to, uint256 amount)`](#TokenHolder-withdrawTokens-contract-IReserveToken-address-payable-uint256-)

- [`withdrawTokensMultiple(contract IReserveToken[] reserveTokens, address payable to, uint256[] amounts)`](#TokenHolder-withdrawTokensMultiple-contract-IReserveToken---address-payable-uint256---)

## Function `receive()` {#TokenHolder-receive--}

No description

## Function `withdrawTokens(contract IReserveToken reserveToken, address payable to, uint256 amount)` {#TokenHolder-withdrawTokens-contract-IReserveToken-address-payable-uint256-}

withdraws funds held by the contract and sends them to an account

can only be called by the owner

## Parameters:

- `reserveToken`: reserve token contract address

- `to`: account to receive the new amount

- `amount`: amount to withdraw

## Function `withdrawTokensMultiple(contract IReserveToken[] reserveTokens, address payable to, uint256[] amounts)` {#TokenHolder-withdrawTokensMultiple-contract-IReserveToken---address-payable-uint256---}

withdraws multiple funds held by the contract and sends them to an account

can only be called by the owner

## Parameters:

- `reserveTokens`: reserve tokens contract addresses

- `to`: account to receive the new amount

- `amounts`: amounts to withdraw
