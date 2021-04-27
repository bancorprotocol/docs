This contract provides any user to trigger a network fee burning event

# Functions:

- [`constructor(contract IERC20 networkToken, contract ITokenGovernance govTokenGovernance, contract IContractRegistry registry)`](#VortexBurner-constructor-contract-IERC20-contract-ITokenGovernance-contract-IContractRegistry-)

- [`receive()`](#VortexBurner-receive--)

- [`burnReward()`](#VortexBurner-burnReward--)

- [`setBurnReward(uint32 newBurnReward, uint256 newMaxBurnRewardAmount)`](#VortexBurner-setBurnReward-uint32-uint256-)

- [`totalBurnedAmount()`](#VortexBurner-totalBurnedAmount--)

- [`burn(contract IReserveToken[] reserveTokens)`](#VortexBurner-burn-contract-IReserveToken---)

- [`transferNetworkFeeWalletOwnership(address newOwner)`](#VortexBurner-transferNetworkFeeWalletOwnership-address-)

- [`acceptNetworkFeeOwnership()`](#VortexBurner-acceptNetworkFeeOwnership--)

# Events:

- [`BurnRewardUpdated(uint32 prevBurnReward, uint32 newBurnReward, uint256 prevMaxBurnRewardAmount, uint256 newMaxBurnRewardAmount)`](#VortexBurner-BurnRewardUpdated-uint32-uint32-uint256-uint256-)

- [`Converted(contract IReserveToken reserveToken, uint256 sourceAmount, uint256 targetAmount)`](#VortexBurner-Converted-contract-IReserveToken-uint256-uint256-)

- [`Burned(contract IReserveToken[] reserveTokens, uint256 sourceAmount, uint256 burnedAmount)`](#VortexBurner-Burned-contract-IReserveToken---uint256-uint256-)

## Function `constructor(contract IERC20 networkToken, contract ITokenGovernance govTokenGovernance, contract IContractRegistry registry)` {#VortexBurner-constructor-contract-IERC20-contract-ITokenGovernance-contract-IContractRegistry-}

initializes a new VortexBurner contract

## Parameters:

- `networkToken`: the address of the network token

- `govTokenGovernance`: the address of the governance token security module

- `registry`: the address of the contract registry

## Function `receive()` {#VortexBurner-receive--}

ETH receive callback

## Function `burnReward() → uint32, uint256` {#VortexBurner-burnReward--}

returns the burn reward percentage and its maximum amount

## Return Values:

- the burn reward percentage and its maximum amount

## Function `setBurnReward(uint32 newBurnReward, uint256 newMaxBurnRewardAmount)` {#VortexBurner-setBurnReward-uint32-uint256-}

allows the owner to set the burn reward percentage and its maximum amount

## Parameters:

- `newBurnReward`: the percentage of the converted network tokens to be sent to the caller of the burning event (in units of PPM)

- `newMaxBurnRewardAmount`: the maximum burn reward to be sent to the caller of the burning event

## Function `totalBurnedAmount() → uint256` {#VortexBurner-totalBurnedAmount--}

returns the total amount of the burned governance tokens

## Return Values:

- total amount of the burned governance tokens

## Function `burn(contract IReserveToken[] reserveTokens)` {#VortexBurner-burn-contract-IReserveToken---}

converts the provided tokens to governance tokens and burns them

## Parameters:

- `reserveTokens`: the reserve tokens to convert

## Function `transferNetworkFeeWalletOwnership(address newOwner)` {#VortexBurner-transferNetworkFeeWalletOwnership-address-}

transfers the ownership of the network fee wallet

## Parameters:

- `newOwner`: the new owner of the network fee wallet

## Function `acceptNetworkFeeOwnership()` {#VortexBurner-acceptNetworkFeeOwnership--}

accepts the ownership of he network fee wallet

## Event `BurnRewardUpdated(uint32 prevBurnReward, uint32 newBurnReward, uint256 prevMaxBurnRewardAmount, uint256 newMaxBurnRewardAmount)` {#VortexBurner-BurnRewardUpdated-uint32-uint32-uint256-uint256-}

triggered when the burn reward has been changed

## Parameters:

- `prevBurnReward`: the previous burn reward (in units of PPM)

- `newBurnReward`: the new burn reward (in units of PPM)

- `prevMaxBurnRewardAmount`: the previous maximum burn reward

- `newMaxBurnRewardAmount`: the new maximum burn reward

## Event `Converted(contract IReserveToken reserveToken, uint256 sourceAmount, uint256 targetAmount)` {#VortexBurner-Converted-contract-IReserveToken-uint256-uint256-}

triggered during conversion of a single token during the burning event

## Parameters:

- `reserveToken`: the converted reserve token

- `sourceAmount`: the amount of the converted reserve token

- `targetAmount`: the network token amount the token were converted to

## Event `Burned(contract IReserveToken[] reserveTokens, uint256 sourceAmount, uint256 burnedAmount)` {#VortexBurner-Burned-contract-IReserveToken---uint256-uint256-}

triggered after a completed burning event

## Parameters:

- `reserveTokens`: the converted reserve tokens

- `sourceAmount`: the total network token amount the tokens were converted to

- `burnedAmount`: the total burned amount in the burning event
