---
description: The v0.6 release makes trading on Bancor simpler than ever
---

# Trading with Bancor

This document provides you with a walk through example in code -- first in Solidity and then using Web3 -- to demonstrate the streamlined developer experience.

## Trading from your Smart Contract

### Step \#1: Add Contract Interfaces

You'll need to interface with two of Bancor's smart contracts from your code.
You can copy the following code into your project or you can download [Bancor's npm package](https://www.npmjs.com/package/@bancor/contracts-solidity).

```solidity
 pragma solidity 0.6.12;
 import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IContractRegistry {
    function addressOf(bytes32 _contractName) external view returns (address);
}

interface IBancorNetwork {

function rateByPath(address[] memory path, uint256 amount) external view returns (uint256);

    function convertByPath(
        address[] memory path,
        uint256 amount,
        uint256 minReturn,
        address payable beneficiary,
        address affiliateAccount,
        uint256 affiliateFee
    ) external payable returns (uint256);


    function conversionPath(
        IERC20 _sourceToken,
        IERC20 _targetToken
    ) external view returns (address[]);
}
```

Here is an explanation for the function arguments in detail :

### `addressOf`

- **parameters**:
  - `_contractName`: bytes32 representation of the Bancor contract's name
- **return values**_:_

  - `address`: contract's address

  ### `rateByPath`

- **parameters**:
  - `path`: an array of IERC20 addresses originating with the source token and terminating with the destination token
  - `amount`: the amount of the source token
- **return values**:
  - `uint256`: the expected conversion rate

### `convertByPath`

- **parameters**:
  - `path`: an array of IERC20 addresses originating with the source token and terminating with the destination token
  - `amount`: the amount of the source token to trade
  - `minReturn`: the minimum amount of the destination token you expect to receive. The trade will fail if the return value is less than this. You must input a value greater than zero but you may want to pass a value slightly below the value returned by `getPathAndRate` on the SDK to allow for normal movement in spot prices.
  - `beneficiary`: the address that will receive the destination token from the conversion. If the beneficiary should be the sender of the transaction, use **0x0** here.
  - `affiliateAccount`: the address that will receive the affiliate fee. If no affiliate fee should be paid out, use **0x0** here.
  - `affiliateFee`: the affiliate fee in parts per million. **30000** or 0.03% is the maximum allowed.
- **return values**:
  - `uint256`: return amount in destination token

{% hint style="info" %}
Note that when sending Ether value with this function, your `msg.value` must be exactly equal to your `amount` value.
{% endhint %}

{% hint style="info" %}
Note that the example snippets below work both with trades that send Ether and trades that send ERC20s. The `msg.value` property will be passed with zero for ERC20 trades.
{% endhint %}

### `conversionPath`

- **parameters**:
  - `_sourceToken`: the IERC20 address of the source token
  - `_targetToken`: the IERC20 address of the target token
- **return values**:
  - `address[]`: an array of addresses representing the path between source and target tokens

{% hint style="info" %}
Note that we recommend using the `getPathAndRate` function on the Bancor SDK for determining the best conversion path. However, if you must calculate the path on chain, `conversionPath` is the correct approach.
{% endhint %}

### Step \#2: Link Interfaces to your Contract

The Bancor **ContractRegistry** is the entry point to the network of contracts and you should be using the `addressOf` function to identify the right interface address.

The `BancorNetwork` address may change over time.
To find the latest updated version you can follow the [Trading with Bancor General Guide](https://docs.bancor.network/guides/trading-on-bancor-general).

| Network   | ContractRegistry Address                     |
| :-------- | :------------------------------------------- |
| `Mainnet` | `0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4` |
| `Ropsten` | `0xFD95E724962fCfC269010A0c6700Aa09D5de3074` |

```solidity
contract MyContract {
    IContractRegistry contractRegistry = IContractRegistry(0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4);
    bytes32 bancorNetworkName = 0x42616e636f724e6574776f726b; // "BancorNetwork"

    function getBancorNetworkContract() public returns(IBancorNetwork){
        return IBancorNetwork(contractRegistry.addressOf(bancorNetworkName));
    }

    // path and minReturn generated via SDK
    function tradeWithInputs(
        IERC20[] memory _path,
        uint _minReturn,
        uint _amount
    ) external payable returns(uint returnAmount) {
        IBancorNetwork bancorNetwork = getBancorNetworkContract();
        returnAmount = bancorNetwork.convertByPath.value(msg.value)(
            _path,
            _amount,
            _minReturn,
            0x0,
            0x0,
            0
        );
    }

    // path and minReturn generated on chain
    function trade(
        address _sourceToken,
        address _targetToken,
        uint _amount
    ) external payable returns(uint returnAmount) {
        IBancorNetwork bancorNetwork = getBancorNetworkContract();
        IERC20[] path = bancorNetwork.conversionPath(
            _sourceToken,
            _targetToken
        );
        uint minReturn = bancorNetwork.rateByPath(
            path,
            _amount
        );

        returnAmount = bancorNetwork.convertByPath.value(msg.value)(
            path,
            _amount,
            minReturn,
            0x0,
            0x0,
            0
        );
    }

}
```

## Trading ETH

In previous versions of Bancor, traders needed to use `Ether Token` to be able to trade with Ether. Starting with v0.6, traders can transact directly in Ether using the designated ETH address:

`0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`

The Bancor contracts recognize this address internally, allowing the developer to apply the same ERC20 flow to Ether transactions \(sending Ether with the value property\) without the abstraction of an additional token.

## Trading with Web3

{% hint style="info" %}
Note that this demo assumes you've configured a Web3 connection via your preferred method.
{% endhint %}

### Step \#1: Copy Bancor ABIs into your Project

#### BancorNetwork ABI

You can find the ABIs in the docs or use the ones from here:
Copy and paste `BancorNetwork` ABI from [**here**](https://raw.githubusercontent.com/bancorprotocol/docs/master/ethereum-contracts/build/BancorNetwork.abi).

**ContractRegistry ABI**

Copy and paste `ContractRegistry` ABI from [**here**](https://raw.githubusercontent.com/bancorprotocol/docs/master/ethereum-contracts/build/ContractRegistry.abi).

### Step \#2: Trade on Bancor

Bancor's new SDK allows you to interact with the `Bancor Network`using JavaScript.

If you want to know more about [Bancor SDK](https://docs.bancor.network/sdk/using-the-bancor-sdk) you can visit this section in our documentation.

```solidity
const BancorSDK = require('@bancor/sdk').SDK;

const ContractRegistryABI = require('./ContractRegistryABI.json');
const BancorNetworkABI = require('./BancorNetworkABI.json');

const contractRegistryAddress = '0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4'; // mainnet
const ContractRegistry = new web3.eth.Contract(ContractRegistryABI, contractRegistryAddress);

const ETH_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";

const getBancorNetworkAddress = async() => {
    const bancorNetworkName = web3.utils.asciiToHex('BancorNetwork');
    const address = await ContractRegistry.methods.addressOf(bancorNetworkName).call();
    return address;
}

const initializeSDK = async() => {
    const settings = {
        // optional, mandatory when interacting with the ethereum mainnet
        ethereumNodeEndpoint: '<ethereum node endpoint>',
        // optional, mandatory when interacting with the EOS mainnet
        eosNodeEndpoint: '<eos node endpoint>'
    }

    const bancorSDK = await BancorSDK.create(settings);
    return bancorSDK;
}

const sourceToken = {
    blockchainType: 'ethereum',
    blockchainId: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
};
const targetToken = {
    blockchainType: 'ethereum',
    blockchainId: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c'
};

const trade = async(amount) => {
    const bancorNetworkAddress = await getBancorNetworkAddress();
    const BancorNetworkContract = new web3.eth.Contract(BancorNetworkABI, bancorNetworkAddress);

    const sdk = await initializeSDK();
    const path = await sdk.pricing.getPathAndRate(sourceToken, targetToken, '1.0');

    const minReturn = await BancorNetworkContract.methods.rateByPath(path, amount).call();
    const modifiedMinReturn =

    const returnAmount = await BancorNetworkContract.methods.convert(
        path,
        amount,
        minReturn,
        '0x0', // beneficiary
        '0x0', // affiliate account
        0, // affiliate fee
        {
            value: sourceToken === ETH_ADDRESS ? amount : 0
        }
    );
    return returnAmount;
}
```
