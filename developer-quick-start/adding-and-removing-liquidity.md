# Adding Liquidity

Liquidity providers are the building blocks of the Bancor Network. The Bancor team and the DeFi community at large have developed a number of ways to make liquidity provision as simple as possible.

To add/remove liquidity using a front-end interface, ****[**here is a step-by-step guide**](https://blog.bancor.network/how-to-stake-liquidity-earn-fees-on-bancor-bff8369274a1).

**The remainder of the guide below is for developers** looking to tap into the Bancor liquidity network from their dApps or smart contracts.

## Liquidity Provision for Developers

{% hint style="info" %}
Note that you'll need to `approve` all underlying ERC20 transfers before adding liquidity on Bancor.
{% endhint %}

### Step \#1: Identify the Pool Version

Bancor is a fast-moving protocol, while at the same time remaining permissionless and decentralized. When we push an upgrade, the owner of the converter contract must opt in to the new version. For that reason, developers need to check first what type of converter they're interacting with in order to know how to correctly interface with the contract.

We recommend that you use the [Bancor SDK](../sdk/using-the-bancor-sdk.md) to query for the converter version.

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

As of version 28: 

* The `LiquidTokenConverter` has a single reserve and manages a liquid token
* The `LiquidityPoolV1Converter` has multiple reserves and is the base contract for converters that manage liquidity pools
* The `LiquidityPoolV2Converter` has two reserves and is the Bancor v2 base contract

Each contract has a `converterType` function that will return `0` for a `LiquidTokenConverter` , `1` for a `LiquidityPoolV1Converter` , and `2` for a `LiquidityPoolV2Converter`You'll only be able to add liquidity for converter types 1 & 2.

### Step \#3a: Adding Liquidity Bancor V2

{% hint style="warning" %}
Adding liquidity to bancor V2 pools is using a new interface
{% endhint %}

The Bancor V2 `AddLiquidity` function is different from other types in that it requires you to specify only one reserve, as the process of adding liquidity is designed for single token staking. LPs can now specify the exact number of tokens of each underlying reserve they'd like to contribute. LPs will still need to roughly estimate expected issuance in order to input the `_minReturn` of liquidity tokens they would accept, but overall the new process leaves less room for error and confusion.

{% hint style="info" %}
Calculating expected pool tokens:`addLiquidity Amount * (StakedBalance / PoolTokenSupply)`
{% endhint %}

Recall that starting with version 28, LPs can directly contribute ETH using the address `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`.

```text
contract IConverter {
    function addLiquidity(
        IERC20Token _reserveToken, 
        uint256 _amount, 
        uint256 _minReturn
    ) external payable;
    
contract MyContract {
    IConverter converter = IContractRegistry(<your converter address>);
    
    function addLiquidity(
        IERC20Token _reserveToken, 
        uint256[] memory _reserveAmount, 
        uint256 _minReturn
    ) external payable {
        converter.addLiquidity.value(msg.value)(
            _reserveToken,
            _reserveAmount,
            _minReturn
        );
    }
```

Adding liquidity will result in the emission of an event:

```text
event LiquidityAdded(
    address indexed _provider, // provider address
    address indexed _reserve, // token added
    uint256 _amount, // amount added
    uint256 _newBalance, // new balance of reserve
    uint256 _newSupply // new supply of reserve
)
```

### Step \#3b: Adding Liquidity \(version &gt;= 28\)

You'll find the newer interface for adding liquidity below. In contrast to older versions, liquidity providers can now specify the exact number of tokens of each underlying reserve they'd like to contribute. Previously, LPs needed to calculate the number of liquidity tokens they expected to be issued. LPs will still need to roughly estimate expected issuance in order to input the `_minReturn` of liquidity tokens they would accept, but overall the new process leaves less room for error and confusion. 

Recall that starting with version 28, LPs can directly contribute ETH using the address `0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE`.

```text
contract IConverter {
    function addLiquidity(
        IERC20Token[] memory _reserveTokens, 
        uint256[] memory _reserveAmounts, 
        uint256 _minReturn
    ) external payable;
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
}
```

{% hint style="info" %}
Note that while the `addLiquidityToPool` function is **payable**, it works just the same for ERC20 liquidity provision.
{% endhint %}

Adding liquidity will result in the emission of an event for each token reserve:

```text
event LiquidityAdded(
    address indexed _provider, // provider address
    address indexed _reserve, // token added
    uint256 _amount, // amount added
    uint256 _newBalance, // new balance of reserve
    uint256 _newSupply // new supply of reserve
)
```

### Step \#3c: Adding Liquidity \(version &lt; 28\)

When we push a new version, each converter needs to be manually upgraded by its owner. For that reason, many active converters are still using earlier versions of our code.

The `_amount` value in the **fund** function is the number of liquidity tokens _expected_ on liquidity contribution. This may require some math in your smart contract or Web3 code.

Based on the liquidity token `_amount` value, the contract will transfer the requisite amount of tokens of each reserve corresponding to the token figure. This call is made directly on the pool converter contract, unlike conversion which is triggered on the `BancorNetwork` contract.

```text
contract IConverter {
    function fund(uint256 _amount) external;
}

contract MyContract {
    IConverter converter = IConverter(<your converter address>);
    
    function addLiquidity(uint _amount) external {
        converter.fund(_amount);
    }
}
```

## Adding Liquidity via Web3

{% hint style="info" %}
Note that this demo assumes that you've already configured a Web3 connection via your preferred method
{% endhint %}

The process for adding liquidity via Web3 or via smart contract is largely the same. Here is a walk-through:

First, you'll need to identify the converter version as outlined in Step \#1 above.

#### Bancor V2 pools

First, copy the `LiquidityPoolV2Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision \(as outlined in Step \#2\). 

Find the `LiquidityPoolV2Converter` ABI [**here**](https://github.com/bancorprotocol/contracts-solidity/tree/master/solidity/contracts/converter).

Your Web3 code will look something like this:

```text
const LiquidityPoolV2ConverterABI = require('./LiquidityPoolV2ConverterABI.json')
const LiquidityPoolV2ConverterAdress = '<your converter address>';
const LiquidityPoolV2ConverterContract = new web3.eth.Contract(
    LiquidityPoolV2ConverterABI,
    LiquidityPoolV2ConverterAdress
);

const reserveToken = '<token-address>';
const reserveAmount = <token-amount>;
const minReturn = 3000000000000000000;

await LiquidityPoolV2ConverterContract.methods.addLiquidity(
    reserveToken,
    reserveAmount,
    minReturn, {
        value: <ETH value if the reserve token is ETH>
    }
);
```

#### Versions 28 and Above

First, copy the `LiquidityPoolV1Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision \(as outlined in Step \#2\). 

Find the `LiquidityPoolV1Converter` ABI [**here**](https://raw.githubusercontent.com/bancorprotocol/contracts/0.6.0/solidity/build/LiquidityPoolConverter.abi).

Your Web3 code will look something like this:

```text
const LiquidityPoolV1ConverterABI = require('./LiquidityPoolV1ConverterABI.json')
const LiquidityPoolV1ConverterAdress = '<your converter address>';
const LiquidityPoolV1ConverterContract = new web3.eth.Contract(
    LiquidityPoolV1ConverterABI,
    LiquidityPoolV1ConverterAdress
);

const reserveTokens = ['<token-1-address>', '<token-2-address>'];
const reserveAmount = [<token-1-amount>, <token-2-amount>];
const minReturn = 3000000000000000000;

await LiquidityPoolV1ConverterContract.methods.addLiquidity(
    reserveTokens,
    reserveAmounts,
    minReturn, {
        value: <ETH value if one of the reserve tokens is ETH>
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

\*\*\*\*

