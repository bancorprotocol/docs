# Removing Liquidity

To add/remove liquidity using a front-end interface, here is a helpful guide [**here**](https://blog.bancor.network/how-to-stake-liquidity-earn-fees-on-bancor-bff8369274a1).‌

**The remainder of the guide below is for developers** looking to tap into the Bancor liquidity network from their dApps or smart contracts.‌

## Liquidity Provision for Developers <a href="#liquidity-provision-for-developers" id="liquidity-provision-for-developers"></a>

### Step #1: Identify the Pool Version <a href="#step-1-identify-the-pool-version" id="step-1-identify-the-pool-version"></a>

Bancor is a fast-moving protocol, while at the same time remaining permissionless and decentralized. When we push an upgrade, the owner of the converter contract must actively opt in to the new version. For that reason, developers need to check first what type of converter they're interacting with in order to know how to correctly interface with the contract.‌

We recommend that you use the Bancor SDK to query for the converter version.

```
const BancorSDK = require('@bancor/sdk').SDK;​

const settings = {    
    // optional, mandatory when interacting with the ethereum mainnet    
    ethereumNodeEndpoint: '<ethereum node endpoint>',    
    // optional, mandatory when interacting with the EOS mainnet    
    eosNodeEndpoint: '<eos node endpoint>'};​

const bancorSDK = await BancorSDK.create(settings);​

const converter = {    
    blockchainType: 'ethereum', 
    // or 'eos'    
    blockchainId: '<your converter address>'
    }​

const version = await bancorSDK.utils.getConverterVersion(converter);
```

### Step #2: Query for Converter Type (version >= 28) <a href="#step-2-query-for-converter-type-version-greater-than-28" id="step-2-query-for-converter-type-version-greater-than-28"></a>

{% hint style="info" %}
Move on to Step #3 if your converter version is 27 or lower.‌
{% endhint %}

As of version 28:‌

* The `LiquidTokenConverter` has a single reserve and manages a liquid token
* The `LiquidityPoolV1Converter` has multiple reserves and is the base contract for converters that manage liquidity pools
* The `LiquidityPoolV2Converter` has two reserves and is the Bancor V2 base contract

Each contract has a `converterType` function that will return `0` for a `LiquidTokenConverter` , `1` for a `LiquidityPoolV1Converter` , and `2` for a `LiquidityPoolV2Converter`. You'll only be able to add liquidity for converter types 1 & 2.‌

### Step #3a: Removing Liquidity from a V2 Pool <a href="#step-3-a-removing-liquidity-from-a-v2-pool" id="step-3-a-removing-liquidity-from-a-v2-pool"></a>

{% hint style="warning" %}
Bancor V2 pools use a new interface for removing liquidity‌
{% endhint %}

The Bancor V2 `removeLiquidity` function is a departure from previous versions. It requires the developer to specify the pool token and, based on this input, the pool will know how to source the relevant reserve token. Recall, Bancor V2 pools issue a separate pool token for each reserve.‌

By design, Bancor V2 pools record the initial staked amount, registering this value on the contract for reference later. At liquidation time, LPs will be entitled to receive their initial stake + any fees that were collected in the pool in the interim.‌

Before calling `removeLiquidity` function, developers are advised to follow these steps:‌

#### Step #3a.1 - Check the available pool balance‌ <a href="#step-3-a-1-check-the-available-pool-balance" id="step-3-a-1-check-the-available-pool-balance"></a>

Bancor V2 applies a variety of incentives in order to maintain the full staked token balance in reserve. However, there might be interim periods where LPs will not be able to fully liquidate their stake. In these cases, LPs will need to wait until the balance is restored. The function below returns the maximum amount available for liquidation:

```
function liquidationLimit(    
    address poolToken
) public view returns (uint256);​
```

#### Step #3a.2 - Check the pool state‌ <a href="#step-3-a-2-check-the-pool-state" id="step-3-a-2-check-the-pool-state"></a>

When the pool isn’t balanced (i.e., when there’s an open arbitrage opportunity in the pool), removing liquidity includes an “**exit fee**” that is designed to prevent the pool from shifting into a temporary reserve balance deficit which may increase the period of illiquidity.1‌

It is advised for LPs to wait until the arbitrage opportunity is closed (which should generally happen relatively quickly) or close it themselves before removing liquidity.

```
function removeLiquidityReturn(    
    address poolToken,     
    uint256 amount
) public view returns (uint256);​
```

`removeLiquidityReturn` accepts the pool token address and the amount that the liquidity provider would like to remove and returns the reserve amount that the liquidity provider will receive at that given time.

{% hint style="warning" %}
How to calculate the exit fee?\
![](../.gitbook/assets/image.png)

Where:\
`XYZ staked balance amp =`  \
`XYZ staked balance * liquidity amplification`  \
`XYZ current balance amp =`  \
`XYZ staked balance amp - (XYZ staked balance - XYZ current balance)`
{% endhint %}

#### Step #3a.3 - Remove liquidity <a href="#step-3-a-3-remove-liquidity" id="step-3-a-3-remove-liquidity"></a>

Once the liquidation amount available is known and the pool is confirmed to be balanced, LPs can call the `removeLiquidity` function:

```
contract IConverter {    
    function removeLiquidity(        
        ISmartToken poolToken         
        uint256 amount,         
        uint256 minReturn    
    ) external;    
}

contract MyContract {    
    IConverter converter = IContractRegistry(<your converter address>);        
    function removeLiquidity(        
        ISmartToken poolToken,
        uint256 poolAmount,         
        uint256 minReturn    
    ) external {        
        converter.removeLiquidity(            
            poolToken,            
            poolAmount,            
            minReturn        
        ); 
    }   
}
```

`removeLiquidity` accepts the pool token address, the liquidity amount to remove, and a `minReturn` amount.

{% hint style="info" %}
`minReturn` value indicate the absolute minimum amount LP is willing to receive back as a result of the transaction. If the calculated return amount is smaller than `minReturn`, the transaction will revert.‌
{% endhint %}

Removing liquidity will result in the emission of an event:

```
event LiquidityRemoved(    
    address indexed provider, // provider address    
    address indexed reserve, // token added    
    uint256 amount, // amount added    
    uint256 newBalance, // new balance of reserve    
    uint256 newSupply // new supply of reserve
    )
```

### Step #3b: Removing Liquidity (version >= 28) <a href="#step-3-b-removing-liquidity-version-greater-than-28" id="step-3-b-removing-liquidity-version-greater-than-28"></a>

You'll find the newer interface for removing liquidity below.1

```
contract IConverter {
    function removeLiquidity(
        uint256 amount,
        IERC20Token[] memory reserveTokens,
        uint256[] memory reserveMinReturnAmounts
    ) external;
}​

contract MyContract {
    IConverter converter = IContractRegistry(<your converter address>);
    function removeLiquidityFromPool(
        uint256 amount,
        IERC20Token[] memory reserveTokens,
        uint256[] memory reserveMinReturnAmounts
    ) external {
        converter.removeLiquidity(
            amount,
            reserveTokens,
            reserveMinReturnAmounts
        );
    }
}‌
```

Removing liquidity will result in the emission of an event for each token reserve:

```
event LiquidityRemoved(
    address indexed provider, // provider address
    address indexed reserve, // token removed
    uint256 amount, // amount removed
    uint256 newBalance, // new balance of reserve
    uint256 newSupply // new supply of reserve
)
```

### Step #3c: Removing Liquidity (version < 28) <a href="#step-3-c-removing-liquidity-version-less-than-28" id="step-3-c-removing-liquidity-version-less-than-28"></a>

When we push a new version, each converter needs to be manually upgraded by its owner. For that reason, many active converters are still using earlier versions of our code.‌

The `amount` value in the **liquidate** functions is the number of liquidity tokens _expected_ or _requested_ on removal. This may require some math in your smart contract or Web3 code.‌

Based on the liquidity token `amount` value, the contract will transfer the requisite amount of tokens of each reserve corresponding to the token figure. This call is made directly on the pool converter contract, unlike conversion which is triggered on the `BancorNetwork` contract.

```
contract IConverter {
    function liquidate(uint256 amount) external;
}​

contract MyContract {
    IConverter converter = IConverter(<your converter address>);
    function removeLiquidity(uint amount) external {
        converter.liquidate(amount);
    }
}
```

## Removing Liquidity via Web3 <a href="#removing-liquidity-via-web3" id="removing-liquidity-via-web3"></a>

{% hint style="info" %}
Note that this demo assumes that you've already configured a Web3 connection via your preferred method‌
{% endhint %}

The process for adding and removing via Web3 or via smart contract is largely the same. Below is a walk-through.‌

First, you'll need to identify the converter version as outlined in Step #1 above.‌

#### Bancor V2 pools <a href="#bancor-v2-pools" id="bancor-v2-pools"></a>

First, copy the `LiquidityPoolV2Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision (as outlined in Step #2).‌

Find the `LiquidityPoolV2Converter` ABI [**here**](https://github.com/bancorprotocol/contracts-solidity/tree/master/solidity/contracts/converter).‌

Your Web3 code will look something like this:1

```
const LiquidityPoolV2ConverterABI = require('./LiquidityPoolV2ConverterABI.json')
const LiquidityPoolV2ConverterAdress = '<your converter address>';
const LiquidityPoolV2ConverterContract = new web3.eth.Contract(
    LiquidityPoolV2ConverterABI,
    LiquidityPoolV2ConverterAdress
);

const poolToken = '<token-address>';
const amount = <token-amount>;
const minReturn = 3000000000000000000;

await LiquidityPoolV2ConverterContract.methods.removeLiquidity(
    poolToken,
    amount,
    minReturn
);
```

#### Versions 28 and Above‌ <a href="#versions-28-and-above" id="versions-28-and-above"></a>

First, copy the `LiquidityPoolV1Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision (as outlined in Step #2).‌

Find the `LiquidityPoolV1Converter` ABI [**here**](https://raw.githubusercontent.com/bancorprotocol/docs/master/ethereum-contracts/build/LiquidityPoolConverter.abi).‌

Your Web3 code will look something like this:

```
const LiquidityPoolV1ConverterABI = require('./LiquidityPoolV1ConverterABI.json')
const LiquidityPoolV1ConverterAdress = '<your converter address>';
const LiquidityPoolV1ConverterContract = new web3.eth.Contract(
    LiquidityPoolV1ConverterABI,
    LiquidityPoolV1ConverterAdress
);

const amount = <pool-token-amount>;
const reserveTokens = ['<token-1-address>', '<token-2-address>'];
const minReturn = 3000000000000000000;

await LiquidityPoolV1ConverterContract.methods.removeLiquidity(
    amount,
    reserveTokens,
    minReturn
);
```

‌

#### Versions Lower than 28 <a href="#versions-lower-than-28" id="versions-lower-than-28"></a>

First, copy the `ConverterBase` ABI into your project. Found [**here**](https://raw.githubusercontent.com/bancorprotocol/docs/master/ethereum-contracts/build/ConverterBase.abi).‌

Your Web3 code will look something like this:

```
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

**​**[  \
](https://app.gitbook.com/@bancor-network/s/bancor-network/\~/drafts/-MAQrbUpPFLOEJt0lXNj/developer-quick-start/adding-and-removing-liquidity/@archived)
