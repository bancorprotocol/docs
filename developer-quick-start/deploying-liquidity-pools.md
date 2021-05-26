---
description: Creating a liquidity pool requires just one transaction as of v0.6
---

# Deploying Liquidity Pools

As of v0.6, the Bancor `ConverterRegistry` contract does most of the hard work deploying new liquidity pools. Developers can still use the manual process to test their converters \(see [`Deploying a Liquidity Pool`](../guides/deploying-a-liquidity-pool-testing.md) in the Guides section\), but the converter won't be discoverable to the rest of Bancor Network.

{% hint style="info" %}
The v0.6 release will go live in mid June. Until then, please refer to the **Deploying a Liquidity Pool for Testing** guide found [**here**](https://docs.bancor.network/guides/deploying-a-liquidity-pool-testing). The process described will be deprecated to a testing-only function once v0.6 is live.
{% endhint %}

{% hint style="info" %}
This guide is for developers integrating Bancor into their dApp or smart contract. Other pool creators can use one of the community-managed front ends \(see: [Katana Pools](https://katanapools.com/)\) to customize and deploy their pools.
{% endhint %}

## Step \#1 - Deploying a new Liquidity Pool

The **newConverter** function on the `ConverterRegistry` contract takes the following parameters:

* `_type`: converter type
* `_name`: name of your token or pool
* `_symbol`: symbol for your token or pool
* `_decimals`: number of decimals on your pool token
* `_maxConversionFee`: maximum trading fee in parts per million for transactions passing through your converter
* `_reserveTokens`: the addresses of the token reserves to be held in your pool
* `_reserveWeights`: the relative weights of each reserve token in parts per million. The sum of the values in this array must be 1,000,000.

For integration into a smart contract, use the Solidity interfaces below. You'll first need to query for the current address of the `ConverterRegistry` contract before executing the **newConverter** function.

```text
contract IContractRegistry {
    function addressOf(
        bytes32 contractName
    ) external returns(address);
}

contract IConverterRegistry {
    function newConverter (
        uint16 _type,
        string _name,
        string _symbol,
        uint8 _decimals,
        uint32 _maxConversionFee,
        IERC20Token[] memory _reserveTokens,
        uint32[] memory _reserveWeights
    ) external returns (IConverter);
}

contract MyContract {
    // mainnet
    address contractRegistry = 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4;
    bytes32 converterRegistryName = 'BancorConverterRegistry';

    function deployNewConverter(
        uint16 _type,
        string _name,
        string _symbol,
        uint8 _decimals,
        uint32 _maxConversionFee,
        IERC20Token[] memory _reserveTokens,
        uint32[] memory _reserveWeights 
    ) external returns(address) {
        IContractRegistry contractRegistry = IContractRegistry(contractRegistry);
        address converterRegistry = contractRegistry.addressOf(converterRegistryName);
        IConverter converter = IConverterRegistry(converterRegistry).newConverter(
            _type,
            _name,
            _symbol,
            _decimals,
            _maxConversionFee,
            _reserveTokens,
            _reserveWeights
        );
        return address(converter);
    }
}
```

| Network | ContractRegistry Address |
| :--- | :--- |
| `Mainnet` | `0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4` |
| `Ropsten` | `0xFD95E724962fCfC269010A0c6700Aa09D5de3074` |

If you're developing with Web3, you'll first need to copy our `ContractRegistry` ABI into your project. Find that [**here**](https://github.com/bancorprotocol/contracts-solidity/tree/master/solidity/contracts/converter).

Then you can copy our `ConverterRegistry` ABI into your project. Find that [**here**](https://github.com/bancorprotocol/contracts-solidity/tree/master/solidity/contracts/converter).

And your Web3 implementation would look something like this:

```text
const ContractRegistryABI = require('./ContractRegistry.json');
const ConverterRegistryABI = require('./ConverterRegistry.json');

const ContractRegistryAddress = '0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4';
const ContractRegistryContract = new web3.eth.Contract(
    ContractRegistryABI,
    ContractRegistryAddress
)

const getConverterRegistryAddress = async() => {
    const converterRegistryName = web3.utils.asciiToHex('ConverterRegistry');
    const address = await ContractRegistryContract.methods.addressOf(converterRegistryName).call();
    return address;
} 

const deployConverter = async() => {
    const converterRegistryAddress = await getConverterRegistryAddress();
    const ConverterRegistryContract = new web3.eth.Contract(
        ConverterRegistryABI,
        converterRegistryAddress
    );

    const type = 1;
    const name = 'XYZABC Pool Token'
    const symbol = 'XYZABC';
    const decimals = 18;
    const maxConversionFee = 30000;
    const reserveTokens = [<xyz-address>, <abc-address>];
    const reserveWeights = [300000, 700000];

    await ConverterRegistryContract.methods.newConverter(
        type,
        name,
        symbol,
        decimals,
        maxConversionFee,
        reserveTokens,
        reserveWeights
    );
}
```

## Step \#2 - Adding Oracle and Activating the pool

{% hint style="warning" %}
This step is only relevant for Bancor V2 pools
{% endhint %}

Following pool creation, Bancor V2 pools require to set the relevant price oracles. Only once this function is called, the pool will be activated and can be used.

```text
function activate(
    address _primaryReserveToken, 
    address _primaryReserveOracle, 
    address _secondaryReserveOracle
    );
```

|  |  |
| :--- | :--- |
| `_primaryReserveToken` | `address of the pool's primary reserve token` |
| `_primaryReserveOracle` | `address of a Chainlink price oracle for the primary reserve token` |
| `_secondaryReserveOracle` | `address of a Chainlink price oracle for the secondary reserve token` |

{% hint style="info" %}
Make sure you use trusted oracles that are part of the white list
{% endhint %}

{% hint style="info" %}
Oracles must use the same pair. It is recommended to use oracles with price to ETH
{% endhint %}

## Step \#3 - Accepting Ownership

As the capstone to the pool creation process, make sure to execute the `acceptOwnership` function on the new converter contract. Etherscan should have automatically verified your contract and this should be easily callable from their UI, or alternatively via your Web3 connection or smart contract interface.

