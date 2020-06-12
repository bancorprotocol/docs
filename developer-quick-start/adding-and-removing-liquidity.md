---
description: Bancor liquidity provision is now more powerful as of v0.6
---

# Adding and Removing Liquidity

Liquidity providers the building blocks of the Bancor Network. The Bancor team and the DeFi community at large have developed a number of ways to make liquidity provision as simple as possible.

* [**Add liquidity to any type of pool using 1Inch**](https://blog.bancor.network/bancor-zaps-%EF%B8%8F-b038eb425e02). All you need is some ETH. 
* [**Add liquidity with the component assets of a pool using Zerion**](https://app.zerion.io/). 
* \*\*\*\*[**Add to various pools using Paraswap**](https://paraswap.io/#/earn).

The team wrote a helpful guide to adding and removing liquidity. Check it out [**here**](https://blog.bancor.network/how-to-stake-liquidity-earn-fees-on-bancor-bff8369274a1).

**The remainder of this guide is for developers** looking to tap into the Bancor liquidity network from their dApps or smart contracts.

## Liquidity Provision for Developers

{% hint style="info" %}
Note that you'll need to `approve` all underlying ERC20 transfers before adding liquidity on Bancor.
{% endhint %}

### Step \#1: Identify the Pool Version

Bancor is a fast-moving protocol, while at the same time remaining permissionless and decentralized. When we push an upgrade, the owner of the converter contract must actively opt in to the new version. For that reason, developers need to check first what type of converter they're interacting with in order to know how to correctly interface with the contract.

We recommend that you use the Bancor SDK to query for the converter version.

```text
const BancorSDK = require('bancor-sdk').SDK;

const settings = {
    // optional, mandatory when interacting with the ethereum mainnet
    ethereumNodeEndpoint: '<ethereum node endpoint>',
    // optional, mandatory when interacting with the EOS mainnet
    eosNodeEndpoint: '<eos node endpoint>'
};

const bancorSDK = await BancorSDK.create(settings);

const converter = {
    blockchainType: 'ethereum', // or 'eos'
    blockchainId: '<your converter address>'
}

const version = await bancorSDK.utils.getConverterVersion(converter);
```

### Step \#2: Query for Converter Type \(version &gt;= 28\)

{% hint style="info" %}
Move on to Step \#3 if your converter version is 27 or lower.
{% endhint %}

As of version 28, there will be. 

* The `LiquidTokenConverter` has single reserve and manages a liquid token
* The `LiquidityPoolConverter` has multiple reserves and is the base contract for converters that manage liquidity pools

Each contract has a `converterType` function that will return `0` for a `LiquidTokenConverter` and `1` for a `LiquidityPoolConverter`. You'll only be able to add liquidity for the latter.

### Step \#3a: Adding and Removing Liquidity \(version &gt;= 28\)

You'll find the newer interface for adding and removing liquidity below. In contrast to older versions, liquidity providers \(LPs\) can now specify the exact number of tokens of each underlying reserve they'd like to contribute. Previously, LPs needed to calculate the number of liquidity tokens they expected to be issued. LPs will still need to roughly estimate expected issuance in order to input the `_minReturn` of liquidity tokens they would accept, but overall the new process leaves less room for error and confusion. 

Recall that starting with version 28, LPs can directly contribute ETH using the address `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`.

```text
contract IConverter {
    function addLiquidity(
        IERC20Token[] memory _reserveTokens, 
        uint256[] memory _reserveAmounts, 
        uint256 _minReturn
    ) external payable;
    
    function removeLiquidity(
        uint256 _amount, 
        IERC20Token[] memory _reserveTokens, 
        uint256[] memory _reserveMinReturnAmounts
    ) external;
}

contract MyContract {
    IConverter converter = IContractRegistry(<your converter address>);
    
    function addLiquidityToPool(
        IERC20Token[] memory _reserveTokens, 
        uint256[] memory _reserveAmounts, 
        uint256 _minReturn
    ) external payable {
        converter.addLiquidity.value(msg.value)(
            _reserveTokens,
            _reserveAmounts,
            _minReturn
        );
    }
    
    function removeLiquidityFromPool(
        uint256 _amount, 
        IERC20Token[] memory _reserveTokens, 
        uint256[] memory _reserveMinReturnAmounts
    ) external {
        converter.removeLiquidity(
            _amount,
            _reserveTokens,
            _reserveMinReturnAmounts
        );
    }
}
```

{% hint style="info" %}
Note that while the `addLiquidityToPool` function is **payable**, it works just the same for ERC20 liquidity provision.
{% endhint %}

Adding and removing liquidity will result in the emission of an event for each token reserve.

```text
event LiquidityAdded(
    address indexed _provider, // provider address
    address indexed _reserve, // token added
    uint256 _amount, // amount added
    uint256 _newBalance, // new balance of reserve
    uint256 _newSupply // new supply of reserve
)

event LiquidityRemoved(
    address indexed _provider, // provider address
    address indexed _reserve, // token removed
    uint256 _amount, // amount removed
    uint256 _newBalance, // new balance of reserve
    uint256 _newSupply // new supply of reserve
)
```

### Step \#3b: Adding and Removing Liquidity \(version &lt; 28\)

When we push a new version, each converter needs to be manually upgraded by its owner. For that reason, many active converters are still using earlier versions of our code.

The `_amount` value in both the **fund** and **liquidate** functions is the number of liquidity tokens _expected_ on liquidity contribution or _requested_ on removal. This may require some math in your smart contract or Web3 code.

Based on the liquidity token `_amount` value, the contract will transfer the requisite amount of tokens of each reserve corresponding to the token figure. This call is made directly on the pool converter contract, unlike conversion that is triggered on the BancorNetwork contract.

```text
contract IConverter {
    function fund(uint256 _amount) external;
    function liquidate(uint256 _amount) external;
}

contract MyContract {
    IConverter converter = IConverter(<your converter address>);
    
    function addLiquidity(uint _amount) external {
        converter.fund(_amount);
    }
    
    function removeLiquidity(uint _amount) external {
        converter.liquidate(_amount);
    }
}
```

## Adding and Removing Liquidity via Web3

{% hint style="info" %}
Note that this demo assumes that you've already configured a Web3 connection via your preferred method
{% endhint %}

The process for adding and removing via Web3, as opposed to via smart contract is largely the same. Here is a walkthrough.

First, you'll need to identify the converter version as outlined in Step \#1 above.

#### Versions 28 and Above

First, copy the `LiquidityPoolConverter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision \(as outlined in Step \#2\). 

Find the `LiquidityPoolConverter` ABI [**here**](https://raw.githubusercontent.com/bancorprotocol/contracts/0.6.0/solidity/build/LiquidityPoolConverter.abi).

Your Web3 code will look something like this:

```text
const LiquidTokenConverterABI = require('./LiquidTokenConverterABI.json')
const LiquidTokenConverterAdress = '<your converter address>';
const LiquidTokenConverterContract = new web3.eth.Contract(
    LiquidTokenConverterABI,
    LiquidTokenConverterAdress
);

const reserveTokens = [<token-address-1>, <token-address-2>]
const reserveAmounts [<token-1-amount>, <token-2-amount>]
const minReturn = 3000000000000000000;

await LiquidTokenConverterContract.methods.addLiquidity(
    reserveTokens,
    reserveAmounts,
    minReturn, {
        value: <ETH value if one of reserve tokens is ETH>
    }
);
```

#### Versions Lower than 28

First, copy the `BancorConverter` ABI into your project. Found [**here**](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi).

Your Web3 code will look something like this:

```text
const BancorConverterABI = require('./BancorConverterABI.json')
const BancorConverterAdress = '<your converter address>';
const BancorConverterContract = new web3.eth.Contract(
    BancorConverterABI,
    BancorConverterAdress
);

const liquidityTokensToIssue = 3000000000000000000;

await BancorConverterContract.methods.fund(
   liquidityTokensToIssue
);
```

\*\*\*\*

