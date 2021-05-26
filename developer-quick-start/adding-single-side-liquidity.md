# Adding Single-Sided Liquidity

One of the innovations of Bancor 2.1 was the Liquidity Protection contract. This contract allows liquidity providers to provide liquidity even by providing only one asset in a pool \(single-side\), and also provides protection from impermanent loss, mitigating the largest risk liquidity providers today face.

**This guide is meant for developers** looking to tap into the Bancor liquidity network from their dApps or smart contracts. If you are a non-developer looking to add single-side liquidity using Bancor's interface, [here is a step-by-step guide](https://blog.bancor.network/bancor-v2-1-staking-for-defi-dummies-f104a6a8281e).

Some of the steps below are also detailed in other places in the documentation, and are repeated here in order to give a clear, full step-by step process.

## Single-Side Liquidity Provision with Liquidity Protection for Developers

{% hint style="info" %}
Note that you'll need to`approve`all underlying ERC20 transfers before adding liquidity on Bancor.
{% endhint %}

### Prerequisites

You'll need a few addresses in order to make use of adding liquidity through the Liquidity Protection contract:

* the address of the token you wish to add
* the address of the `LiquidityProtection` contract
* the pool anchor address \(explained below\)

We'll walk through how to get the pool anchor and liquidity protection addresses. For the token address, if you're having trouble finding it, go to [Etherscan](https://etherscan.io) and input the symbol of the token \(DAI, for example\).

You'll need the ABIs of the contracts in order to interact with them. You can find the full ABIs on Etherscan as you find the addresses for the contracts you need in this guide by inputting the address of the contract you are looking for, and then clicking on the "Contract" tab \(underneath the contract source code\) on the contract's page.

If you're writing a smart contract that will add liquidity through the Liquidity Protection contract, then you'll also need interfaces for the `LiquidityProtection`, `ConverterAnchor` and `ReserveToken` contracts. These are available through Bancor's contract package [@bancor/contracts-solidity](https://www.npmjs.com/package/@bancor/contracts-solidity), and the imports in the Solidity code snippets will assume you're using this package.

You'll also need a connection to a blockchain node. This guide will assume you're using an [Infura](https://infura.io) endpoint.

### Step 1: Find the Addresses

In order to find the addresses of the pool anchor and liquidity protection contracts, we need to make use of the Bancor Contract Registry. You can find the address for the registry in the [addresses](https://docs.bancor.network/ethereum-contracts/addresses) section of the docs. The code snippets assume you have this address stored as a variable named `CONTRACT_REGISTRY_ADDRESS`

#### Step 1a: Getting the Liquidity Protection and Converter Registry Addresses

The following snippet will provide two addresses: the Liquidity Protection contract and the Converter Registry. You'll need the latter in order to find the pool anchor address:

{% tabs %}
{% tab title="Web3.js" %}
```javascript
const Web3 = require("web3");

const NODE_ADDRESS = "https://mainnet.infura.io/v3/<INFURA_ID>";
const web3 = new Web3(NODE_ADDRESS);

const contractRegistry = new web3.eth.Contract(CONTRACT_REGISTRY_ABI, CONTRACT_REGISTRY_ADDRESS);

const getLiquidityProtectionAddress = async () => (
    await contractRegistry.methods.addressOf(Web3.utils.asciiToHex("LiquidityProtection")).call();
)

const getConverterRegistryAddress = async () => (
    await contractRegistry.methods.addressOf(Web3.utils.asciiToHex("BancorConverterRegistry")).call();
)

// if you're interested in saving the variable locally:
const liquidityProtectionAddress = getLiquidityProtectionAddress();
const converterRegistryAddress = getConverterRegistryAddress();

// if you want to log it to the console:
console.log(`Liquidity Protection address: ${liquidityProtectionAddress}`);
console.log(`Converter Registry address: ${converterRegistryAddress}`);
```
{% endtab %}

{% tab title="Ethers" %}
```javascript
const { ethers } = require("ethers");

const INFURA_PROJECT_ID = "<INFURA_ID>";
const provider = ethers.getDefaultProvider("mainnet", INFURA_PROJECT_ID);

const contractRegistry = new ethers.Contract(CONTRACT_REGISTRY_ADDRESS, CONTRACT_REGISTRY_ABI, provider);

const getLiquidityProtectionAddress = async () => (
    await contractRegistry.addressOf(ethers.utils.formatBytes32String("LiquidityProtection"));
)

const getConverterRegistryAddress = async () => (
    await contractRegistry.addressOf(ethers.utils.formatBytes32String("BancorConverterRegistry"));
)

// if you're interested in saving the variables locally:
const liquidityProtectionAddress = getLiquidityProtectionAddress();
const converterRegistryAddress = getConverterRegistryAddress();

// if you want to log it to the console:
console.log(`Liquidity Protection address: ${liquidityProtectionAddress}`);
console.log(`Converter Registry address: ${converterRegistryAddress}`);
```
{% endtab %}
{% endtabs %}

Once you have the Liquidity Protection and Contract Registry addresses, get their ABIs from [Etherscan](https://etherscan.io) by clicking on the "Contract" tab \(underneath the contract source code\). You'll need them to connect with these contracts further on.

#### Step 1b: Getting the Pool Anchor Address

Each Converter \(liquidity pool\) has a pool anchor - these are the tokens you receive for adding liquidity to a Converter. Pool addresses can change over time, and do at every upgrade. The anchor for that pool is permanent, which is why it's called an anchor. As such, knowing the address of a pool anchor is often a fundamental piece of knowledge.

In order to get a specific pool anchor address, you'll first need to query the Converter Registry \(the method for obtaining the Converter Registry's address is detailed above\). Once we have that, you can get a list of _all_ pool anchor addresses for the asset being provided, which can then be filtered for the specific pool the asset is being added to. This snippet will use the DAIBNT Converter as an example, and can be easily modified for any Converter on the Bancor network.

You will need the Converter Registry ABI for this. You retrieved the address of the Converter Registry above, and can retrieve the ABI from [Etherscan](https://etherscan.io) using the address by clicking on the "Contract" tab \(underneath the contract source code\).

{% hint style="info" %}
This snippet assumes you have a working Web3 or Ethers provider \(see above if you don't\)
{% endhint %}

{% hint style="info" %}
You can search for Ether using the address `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`
{% endhint %}

{% tabs %}
{% tab title="Web3.js" %}
```javascript
const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f"; // the Dai contract address
const converterRegistry = new web3.eth.Contract(CONVERTER_REGISTRY_ABI, converterRegistryAddress);

const getDaibntAddress = async () => {
    // this will return an array of all Converters with Dai
    const anchorAddresses = await converterRegistry.methods.getConvertibleTokenAnchors(DAI_ADDRESS).call();
    // there should only be one DAIBNT pool, so we can automatically grab the first item in the array
    return await anchorAddresses.filter(async address => {
        const contract = new web3.eth.Contract(TOKEN_ABI, address);
        return await contract.methods.symbol().call() === "DAIBNT"
    })[0];
}

const daibntAddress = getDaibntAddress();
console.log(`DAIBNT address: ${daibntAddress}`);
```
{% endtab %}

{% tab title="Ethers" %}
```javascript
const DAI_ADDRESS = "0x6b175474e89094c44da98b954eedeac495271d0f"; // the Dai contract address
const converterRegistry = new ethers.Contract(converterRegistryAddress, CONVERTER_REGISTRY_ABI);

const getDaibntAddress = async () => {
    // this will return an array of all Converters with Dai
    const anchorAddresses = await converterRegistry.getConvertibleTokenAnchors(DAI_ADDRESS);
    // there should only be one DAIBNT pool, so we can automatically grab the first item in the array
    return await anchorAddresses.filter(async address => {
        const contract = new ethers.Contract(address, TOKEN_ABI);
        return await contract.symbol() === "DAIBNT"
    })[0];
}
const daibntAddress = getDaibntAddress();
console.log(`DAIBNT address: ${daibntAddress}`);
```
{% endtab %}
{% endtabs %}

Now you have the pool anchor address!

### Step 2: Adding Liquidity

Now that you have all the addresses you need, you can add single-sided liquidity via the Liquidity Protection contract.

#### 2a: via Smart Contract

You'll need the interfaces for the liquidity protection contract \(`LiquidityProtection`\), the pool anchor \(`IConverterAnchor`\) and the token being added \(`IReserveToken`\). Both are in the [@bancor/contracts-solidity](https://www.npmjs.com/package/@bancor/contracts-solidity) package, and the code here assumes that package is being used. A more lightweight interface could be made by making interfaces containing only the necessary functions, this method was selected for its simplicity.

```text
pragma solidity ^0.8.4;

import "@bancor/contracts-solidity/contracts/liquidity-protection/interfaces/ILiquidityProtection.sol";
import "@bancor/contracts-solidity/solidity/contracts/converter/interfaces/IConverterAnchor.sol";
import "@bancor/contracts-solidity/contracts/token/interfaces/IReserveToken.sol";

contract LiquidityAdder {
    ILiquidityProtection liquidityProtection = ILiquidityProtection(LIQUIDITY_PROTECTION_ADDRESS);

    function addLiquidity(
        address _poolAnchor,
        address _reserveToken,
        uint256 _amount
    ) external payable {
        liquidityProtection.addLiquidity.value(msg.value)(
            IConverterAnchor(_poolAnchor_),
            IReserveToken(_reserveToken),
            _amount
        );
    }
}
```

#### 2b: via web3

This snippet assumes that in addition to the addresses provided by the previous steps \(and their ABIs\), you have the ABIs for a `ConverterAnchor` contract and a token \(ERC20\) contract. If you do not have the ABIs, they can be found on [Etherscan](https://etherscan.io) using the address of the contract you wish to find the ABI of by clicking on the "Contract" tab \(underneath the contract source code\).

{% hint style="info" %}
Since this snippet sends a transaction to the blockchain, you must have a working Web3 or Ethers provider with access to a signer that in turn has the necessary tokens and gas for this transaction
{% endhint %}

{% tabs %}
{% tab title="Web3.js" %}
```javascript
const liquidityProtection = new web3.eth.Contract(LIQUIDITY_PROTECTION_ABI, LIQUIDITY_PROTECTION_ADDRESS);
const converterAnchor = new web3.eth.Contract(POOL_ANCHOR_ABI, POOL_ANCHOR_ADDRESS);
const reserveToken = new web3.eth.Contract(RESERVE_TOKEN_ABI, RESERVE_TOKEN_ADDRESS)

// we'll use an example of 100 tokens, assuming the token has 18 decimal places
const amount = web3.utils.toWei(100, "ether");

const addLiquidity = async () => {
    await liquidityProtection.methods.addLiquidity(
        converterAnchor,
        reserveToken,
        amount
        //, { value: amount } // only use this line if you are sending ether
    );
}

addLiquidity();
```
{% endtab %}

{% tab title="Ethers" %}
```javascript
const liquidityProtection = new ethers.Contract(LIQUIDITY_PROTECTION_ADDRESS, LIQUIDITY_PROTECTION_ABI, provider);
const converterAnchor = new ethers.Contract(POOL_ANCHOR_ADDRESS, POOL_ANCHOR_ABI, provider);
const reserveToken = new ethers.Contract(RESERVE_TOKEN_ADDRESS, RESERVE_TOKEN_ABI, provider);

const signer = provider.getSigner();

// we'll use an example of 100 tokens, assuming the token has 18 decimal places
const amount = ethers.utils.parseUnits("100");

const addLiquidity = async () => {
    await liquidityProtection
        .connect(signer)
        .addLiquidity(
            converterAnchor,
            reserveToken,
            amount
            //, { value: amount } // only use this line if you are sending ether
        );
}

addLiquidity();
```
{% endtab %}
{% endtabs %}

#### Event

Whether interacting via contract or web3, the transaction should trigger an event from the `LiquidityProtectionStore` contract. \(This is not the same contract as the `LiquidityProtection` contract, though its address can be found in a similar manner to the addresses above, by querying the contract registry for the address of `"LiquidityProtectionStore"`.\) The event is of the following structure:

```text
event ProtectionAdded(
    address indexed _provider,
    IDSToken indexed _poolToken,
    IReserveToken indexed _reserveToken,
    uint256 _poolAmount,
    uint256 _reserveAmount
);
```

These parameters are:

* `_provider`: the address that provided the liquidity
* `_poolToken`: the pool token of the pool liquidity is being added to
* `_reserveToken`: the token added by the user
* `_poolAmount`: the amount of pool tokens added
* `_reserveAmount`: the amount of tokens added by the user

### Conclusion

Whether the liquidity was added using web3 or through a smart contract, you won't be able to see the balance of the liquidity deposited through the Liquidity Protection contract. This is because the funds are not deposited _in_ the Liquidity Protection contract. Rather, the Liquidity Protection contract deposits them in the pool.

How to view a balance in a particular pool \(whether it is deposited through the Liquidity Protection contract or by other means\), along with how to withdraw from a pool, will be explained in detail in another section.

