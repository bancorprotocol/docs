# ContractRegistry Contracts

ContractRegistry contains key contracts which will be described below for relevancy.

### ContractRegistry

Main contract that serves as an easy mapping for all key addresses. 

### BancorConverterFactory

From time to time, a new verified pool converter is introduced and is being referenced as the latest version you should use in any pool creation process.

### BancorConverterUpgrader

This will always indicate the most relevant pool upgrader contract and will know to upgrade to the latest pool converter showing in BancorConverterFactory.

This will be used when you are required to upgrade your pool to a newer version.

### BNTToken

This will return the current address of the BNT token.

### BancorNetwork

This is the main contract in Bancor Network which handles all conversions. Basically, if you wish to interact with the Bancor Network, you will need to send conversions to this address and make sure the approval \(allowance\) is set for this contract. 

### BancorGasPriceLimit

{% hint style="danger" %}
Phased out.
{% endhint %}

### BancorFormula

For scaling reasons, the BancorFormula is deployed outside each pool. This will point to the current address of the contract. This is used internally during conversions.

### ContractFeatures

### BNTConverter

### BancorX

BancorX contract is the contract used for moving BNT across blockchains. 

### NonStandardTokenRegistry

### BancorConverterRegistry

This is probably the most used contract on the network as it hold a list of all supported pools and tokens that make the Bancor Network.

### EtherToken

Because contracts cannot interact with ETH directly, there is a need for "tokenized" representation of ETH. This is the address of the EtherToken used in the Bancor Network.

### BancorNetworkPathFinder

Due to the nature of the Bancor Network and the ability to convert any token to any token, we have deployed a contract that can provide easier access to the different available paths between two tokens. 

### BancorConverterRegistryData



