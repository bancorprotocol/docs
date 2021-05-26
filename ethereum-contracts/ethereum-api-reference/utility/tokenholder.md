# TokenHolder

This contract provides a safety mechanism for allowing the owner to

send tokens that were sent to the contract by mistake back to the sender.

We consider every contract to be a 'token holder' since it's currently not possible

for a contract to deny receiving tokens.

## Functions:

* [`receive()`](tokenholder.md#TokenHolder-receive--)
* [`withdrawTokens(contract IReserveToken reserveToken, address payable to, uint256 amount)`](tokenholder.md#TokenHolder-withdrawTokens-contract-IReserveToken-address-payable-uint256-)
* [`withdrawTokensMultiple(contract IReserveToken[] reserveTokens, address payable to, uint256[] amounts)`](tokenholder.md#TokenHolder-withdrawTokensMultiple-contract-IReserveToken---address-payable-uint256---)

### Function `receive()` <a id="TokenHolder-receive--"></a>

No description

### Function `withdrawTokens(contract IReserveToken reserveToken, address payable to, uint256 amount)` <a id="TokenHolder-withdrawTokens-contract-IReserveToken-address-payable-uint256-"></a>

withdraws funds held by the contract and sends them to an account

can only be called by the owner

### Parameters:

* `reserveToken`: reserve token contract address
* `to`: account to receive the new amount
* `amount`: amount to withdraw

### Function `withdrawTokensMultiple(contract IReserveToken[] reserveTokens, address payable to, uint256[] amounts)` <a id="TokenHolder-withdrawTokensMultiple-contract-IReserveToken---address-payable-uint256---"></a>

withdraws multiple funds held by the contract and sends them to an account

can only be called by the owner

### Parameters:

* `reserveTokens`: reserve tokens contract addresses
* `to`: account to receive the new amount
* `amounts`: amounts to withdraw

