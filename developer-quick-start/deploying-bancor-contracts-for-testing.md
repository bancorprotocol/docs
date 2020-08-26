---
description: >-
  Developers can deploy Bancor contracts locally or on a testnet with custom
  configuration
---

# Deploying Bancor Contracts for Testing

### Prerequisites

* `node 10.16.0`
* `npm 6.9.0`
* `python 3.7.3`
* `web3.py 4.9.2`

### Setup

* Clone the [Contracts Repo](https://github.com/bancorprotocol/contracts)
* Run `npm install` 
* Run `npm test 1` to ensure contracts are operating as expected
* Optional: run `npm test 2` for more thorough testing
* Run `cd solidity/utils` 

### Deploy

In the current directory, create a file named `config.json` . Add the token info and reserve settings necessary for your deployment \(find an example of the config file [here](https://github.com/bancorprotocol/contracts/blob/master/solidity/utils/README.md#deploy-network-emulation)\).

Run `node test_deployment.js './config.json YOUR_NODE_ADDRESS YOUR_PRIVATE_KEY`

Your node address would likely be an Infura url or the the url of a local node.



