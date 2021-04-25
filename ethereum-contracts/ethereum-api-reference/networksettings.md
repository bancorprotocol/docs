This contract maintains the network settings.

# Functions:

- [`constructor(contract ITokenHolder initialNetworkFeeWallet, uint32 initialNetworkFee)`](#NetworkSettings-constructor-contract-ITokenHolder-uint32-)

- [`networkFeeParams()`](#NetworkSettings-networkFeeParams--)

- [`networkFeeWallet()`](#NetworkSettings-networkFeeWallet--)

- [`networkFee()`](#NetworkSettings-networkFee--)

- [`setNetworkFeeWallet(contract ITokenHolder newNetworkFeeWallet)`](#NetworkSettings-setNetworkFeeWallet-contract-ITokenHolder-)

- [`setNetworkFee(uint32 newNetworkFee)`](#NetworkSettings-setNetworkFee-uint32-)

# Events:

- [`NetworkFeeWalletUpdated(contract ITokenHolder prevNetworkFeeWallet, contract ITokenHolder newNetworkFeeWallet)`](#NetworkSettings-NetworkFeeWalletUpdated-contract-ITokenHolder-contract-ITokenHolder-)

- [`NetworkFeeUpdated(uint32 prevNetworkFee, uint32 newNetworkFee)`](#NetworkSettings-NetworkFeeUpdated-uint32-uint32-)

## Function `constructor(contract ITokenHolder initialNetworkFeeWallet, uint32 initialNetworkFee)` {#NetworkSettings-constructor-contract-ITokenHolder-uint32-}

initializes a new NetworkSettings contract

## Parameters:

- `initialNetworkFeeWallet`: initial network fee wallet

- `initialNetworkFee`: initial network fee in ppm units

## Function `networkFeeParams() → contract ITokenHolder, uint32` {#NetworkSettings-networkFeeParams--}

returns the network fee parameters

## Return Values:

- network fee wallet

- network fee in ppm units

## Function `networkFeeWallet() → contract ITokenHolder` {#NetworkSettings-networkFeeWallet--}

returns the wallet that receives the global network fees

## Return Values:

- network fee wallet

## Function `networkFee() → uint32` {#NetworkSettings-networkFee--}

returns the global network fee

the network fee is a portion of the total fees from each pool

## Return Values:

- network fee in ppm units

## Function `setNetworkFeeWallet(contract ITokenHolder newNetworkFeeWallet)` {#NetworkSettings-setNetworkFeeWallet-contract-ITokenHolder-}

sets the network fee wallet

can be executed only by the owner

## Parameters:

- `newNetworkFeeWallet`: new network fee wallet

## Function `setNetworkFee(uint32 newNetworkFee)` {#NetworkSettings-setNetworkFee-uint32-}

sets the network fee

can be executed only by the owner

## Parameters:

- `newNetworkFee`: new network fee in ppm units

## Event `NetworkFeeWalletUpdated(contract ITokenHolder prevNetworkFeeWallet, contract ITokenHolder newNetworkFeeWallet)` {#NetworkSettings-NetworkFeeWalletUpdated-contract-ITokenHolder-contract-ITokenHolder-}

triggered when the network fee wallet is updated

## Parameters:

- `prevNetworkFeeWallet`:  previous network fee wallet

- `newNetworkFeeWallet`:   new network fee wallet

## Event `NetworkFeeUpdated(uint32 prevNetworkFee, uint32 newNetworkFee)` {#NetworkSettings-NetworkFeeUpdated-uint32-uint32-}

triggered when the network fee is updated

## Parameters:

- `prevNetworkFee`:    previous network fee

- `newNetworkFee`:     new network fee
