---
description: >-
  Overview of Bancor's cross-chain bridge, BancorX, and instructions for how to
  add a new blockchain.
---

# BancorX

BancorX is the cross-blockchain bridge that enables bi-directional cross-blockchain interoperability between the Ethereum ad EOS blockchains via BNT, the Bancor Network Token. BNT is what enables the peer-to-smart contract interoperability across the Ethereum and EOS protocol. BNT connects all other blockchain-based tokens that can be converted on the Bancor Network across different blockchains and is therefore the standard measure for all conversions. 

### **Framework**

* The BancorX System is currently comprised of two frameworks: Oracles and Gate Contracts: 
  * Oracles: local \(off chain\) network of servers running the BancorX software. The system is currently comprised of 3 servers.
  * Gate Contracts: smart contract operated on the Ethereum and EOS blockchains that transact with the Oracles.     
  * The Oracles \(running the BancorX software\) continuously observe the Gate Contracts on each blockchain, and relay the information from one Gate Contract to the other.
  * To enable a cross-blockchain transaction all three Oracles must validate a transaction together, meaning that the Gate Contracts on each blockchain will only react if commanded by all three Oracles.

#### ETH Gate Contract

* ETH Gate Contract is to be deployed on Ethereum blockchain and facilitates the transfer of BNT from and to Ethereum, as follows:
* Outbound ➠ If a user wishes to move BNT from ETH to EOS: the user transfers the BNT to the ETH Gate Contract with instructions \(transaction memo\) detailing the user’s receiving account on EOS. The ETH Gate Contract receives the BNT and holds it \(out of circulation\).

The system then recognizes the BNT held in the ETH Gate Contract and sends a command to the EOS BNT Contract \(the corresponding Smart Contract on EOS\) to issue BNT\(EOS\) to the receiving account.  

* Inbound ⬅ If a user wishes to move BNT from EOS back to ETH, the user sends the BNT the EOS BNT Contract as detailed below. The system sends a command to the ETH Gate Contract, which releases the applicable amount of BNT back to the user’s account on Ethereum.

#### EOS Gate Contract

* EOS Gate Contract is to be deployed on EOS and fills two functions:
  * It manages the supply of the supported token \(currently BNT\) on EOS by creating and destroying BNT on EOS
  * It acts as the “Gate” smart contract facilitating transfer of BNT from and to EOS, as follows:
* Outbound ➠ If a user wishes to move BNT from EOS back to ETH: the user transfers the BNT to the EOSBNT Contract with instructions \(transaction memo\) detailing  the users receiving account on ETH. The EOS BNT Contract receives the BNT and destroys it.

The system then recognizes the BNT destroyed by the EOS BNT Contract and sends a command to the ETH Gate Contract to release BNT to the receiving account.  

* Inbound ⬅ If a user wishes to move BNT from ETH to EOS, the user sends the BNT the ETH Gate Contract which locks and holds the BNT as detailed above. The system sends a command to the EOSBNT Contract, which issues the applicable amount of BNT to the user’s account on EOS.

BancorX - How to add support for another blockchain:  \(requirements, limitations, implications etc.\)  


### Adding BancorX Support for Another Blockchain

The core architecture of BancorX is generic and can be extended to support other blockchains.

The process of extending BancorX to support new blockchains consists of porting the smart contract to the new blockchain as well as adding support for that blockchain in the oracle system.

Deployments on existing blockchains should generally not require any change.

BancorX smart contracts on the various blockchains define the source/target blockchains as a string that uniquely identifies each blockchain \(or side chain\). The same is true for the target wallet.

The format and values of these parameters should be defined and remain consistent across the different components.  


#### BancorX Smart Contracts

Extending BancorX on the blockchain level is a fairly simple process.

In terms of development, it requires porting the BancorX gate contract to the new blockchain.

In addition, the token contract should support:

* Minting new tokens by a permissioned account
* Burning tokens by any token holder

If the standard token on the target blockchain doesn’t natively support those features, then a new token contract should be implemented as well.  


Once the contracts are ported and implemented, the BNT token should be deployed on the new blockchain as well as the new BancorX gate contract.

The BancorX gate contract should have the permission to mint/burn the BNT token on demand.  


#### BancorX Oracle

The BancorX oracle should be able to recognize transactions sent to the BancorX gate contract on the source blockchain as well as send new transactions to the target blockchain.

The oracle code requires the following changes:

* Ability to monitor transactions on the new blockchain, usually done through a blockchain node endpoint that supports reading historical data
* Ability to generate and transmit transactions to the new target blockchain

In addition, a new wallet / private key should be generated for each oracle.

Once the keys are available, the environment variables for each oracle should be extended with  the new BancorX gate contract as well as the new oracle key.

As the last step, the new oracle code should be deployed.  


