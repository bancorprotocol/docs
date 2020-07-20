# Removing Liquidity

Liquidity providers are the building blocks of the Bancor Network. The Bancor team and the DeFi community at large have developed a number of ways to make liquidity provision as simple as possible.‌

To add/remove liquidity using a front-end interface, here is a helpful guide [**here**](https://blog.bancor.network/how-to-stake-liquidity-earn-fees-on-bancor-bff8369274a1).‌

**The remainder of the guide below is for developers** looking to tap into the Bancor liquidity network from their dApps or smart contracts.‌

## Liquidity Provision for Developers <a id="liquidity-provision-for-developers"></a>

### Step \#1: Identify the Pool Version <a id="step-1-identify-the-pool-version"></a>

Bancor is a fast-moving protocol, while at the same time remaining permissionless and decentralized. When we push an upgrade, the owner of the converter contract must actively opt in to the new version. For that reason, developers need to check first what type of converter they're interacting with in order to know how to correctly interface with the contract.‌

We recommend that you use the Bancor SDK to query for the converter version.

```text
const BancorSDK = require('bancor-sdk').SDK;​

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

### Step \#2: Query for Converter Type \(version &gt;= 28\) <a id="step-2-query-for-converter-type-version-greater-than-28"></a>

{% hint style="info" %}
Move on to Step \#3 if your converter version is 27 or lower.‌
{% endhint %}

As of version 28:‌

* The `LiquidTokenConverter` has a single reserve and manages a liquid token
* The `LiquidityPoolV1Converter` has multiple reserves and is the base contract for converters that manage liquidity pools
* The `LiquidityPoolV2Converter` has two reserves and is the Bancor V2 base contract

Each contract has a `converterType` function that will return `0` for a `LiquidTokenConverter` , `1` for a `LiquidityPoolV1Converter` , and `2` for a `LiquidityPoolV2Converter`. You'll only be able to add liquidity for converter types 1 & 2.‌

### Step \#3a: Removing Liquidity from a V2 Pool <a id="step-3-a-removing-liquidity-from-a-v2-pool"></a>

{% hint style="warning" %}
Bancor V2 pools use a new interface for removing liquidity‌
{% endhint %}

The Bancor V2 `removeLiquidity` function is a departure from previous versions. It requires the developer to specify the pool token and, based on this input, the pool will know how to source the relevant reserve token. Recall, Bancor V2 pools issue a separate pool token for each reserve.‌

By design, Bancor V2 pools record the initial staked amount, registering this value on the contract for reference later. At liquidation time, LPs will be entitled to receive their initial stake + any fees that were collected in the pool in the interim.‌

Before calling `removeLiquidity` function, developers are advised to follow these steps:‌

#### Step \#3a.1 - Check the available pool balance‌ <a id="step-3-a-1-check-the-available-pool-balance"></a>

Bancor V2 applies a variety of incentives in order to maintain the full staked token balance in reserve. However, there might be interim periods where LPs will not be able to fully liquidate their stake. In these cases, LPs will need to wait until the balance is restored. The function below returns the maximum amount available for liquidation:

```text
function liquidationLimit(    
    address _poolToken
    ) 
public view returns (uint256);​
```

#### Step \#3a.2 - Check the pool state‌ <a id="step-3-a-2-check-the-pool-state"></a>

When the pool isn’t balanced \(i.e., when there’s an open arbitrage opportunity in the pool\), removing liquidity includes an “**exit fee**” that is designed to prevent the pool from shifting into a temporary reserve balance deficit which may increase the period of illiquidity.1‌

It is advised for LPs to wait until the arbitrage opportunity is closed \(which should generally happen relatively quickly\) or close it themselves before removing liquidity.

```text
function removeLiquidityReturn(    
    address _poolToken,     
    uint256 _amount
    ) 
public view returns (uint256);​
```

`removeLiquidityReturn` accepts the pool token address and the amount that the liquidity provider would like to remove and returns the reserve amount that the liquidity provider will receive at that given time.

{% hint style="warning" %}
LP will need to compare this returned value against the rate with no exit fee in order to calculate the exit fee.

No fee return amount can be calculated as such: `(Liquidation Amount * StakedBalance) / PoolTokenSupply`‌
{% endhint %}

#### Step \#3a.3 - Remove liquidity <a id="step-3-a-3-remove-liquidity"></a>

Once the liquidation amount available is known and the pool is confirmed to be balanced, LPs can call the `removeLiquidity` function:

```text
contract IConverter {    
    function removeLiquidity(        
        address _poolToken,         
        uint256 _amount,         
        uint256 _minReturn    
        ) 
    external payable;    
    
contract MyContract {    
IConverter converter = IContractRegistry(<your converter address>);        
    function removeLiquidity(        
    IERC20Token[] memory _poolToken,
    uint256[] memory _poolAmount,         
    uint256 _minReturn    
    ) 
external payable {        
converter.addLiquidity.value(msg.value)(            
    _poolToken,            
    _poolAmount,            
    _minReturn        
    );    
}
```

`removeLiquidity` accepts the pool token address, the liquidity amount to remove, and a `minReturn` amount.

{% hint style="info" %}
`minReturn` value indicate the absolute minimum amount LP is willing to receive back as a result of the transaction. If the calculated return amount is smaller than `minReturn`, the transaction will revert.‌
{% endhint %}

Removing liquidity will result in the emission of an event:

```text
event LiquidityRemoved(    
    address indexed _provider, // provider address    
    address indexed _reserve, // token added    
    uint256 _amount, // amount added    
    uint256 _newBalance, // new balance of reserve    
    uint256 _newSupply // new supply of reserve
    )
```

### Step \#3b: Removing Liquidity \(version &gt;= 28\) <a id="step-3-b-removing-liquidity-version-greater-than-28"></a>

You'll find the newer interface for removing liquidity below.1

```text
contract IConverter {    
    function removeLiquidity(        
    uint256 _amount,         
    IERC20Token[] memory _reserveTokens,         
    uint256[] memory _reserveMinReturnAmounts    
    ) 
    external;
}​

contract MyContract {    
    IConverter converter = IContractRegistry(<your converter address>);    
    function removeLiquidityFromPool(        
        uint256 _amount,         
        IERC20Token[] memory _reserveTokens,         
        uint256[] memory _reserveMinReturnAmounts    
        ) 
        external {        
            converter.removeLiquidity(            
                _amount,            
                _reserveTokens,            
                _reserveMinReturnAmounts        
                );    
        }
}‌
```

Removing liquidity will result in the emission of an event for each token reserve:

```text
event LiquidityRemoved(    
    address indexed _provider, // provider address    
    address indexed _reserve, // token removed    
    uint256 _amount, // amount removed    
    uint256 _newBalance, // new balance of reserve    
    uint256 _newSupply // new supply of reserve
    )
```

### Step \#3c: Removing Liquidity \(version &lt; 28\) <a id="step-3-c-removing-liquidity-version-less-than-28"></a>

When we push a new version, each converter needs to be manually upgraded by its owner. For that reason, many active converters are still using earlier versions of our code.‌

The `_amount` value in the **liquidate** functions is the number of liquidity tokens _expected_ or _requested_ on removal. This may require some math in your smart contract or Web3 code.‌

Based on the liquidity token `_amount` value, the contract will transfer the requisite amount of tokens of each reserve corresponding to the token figure. This call is made directly on the pool converter contract, unlike conversion which is triggered on the `BancorNetwork` contract.1

```text
contract IConverter {    
    function liquidate(uint256 _amount) external;
    }​
    
contract MyContract {    
    IConverter converter = IConverter(<your converter address>);
    function removeLiquidity(uint _amount) external {        
        converter.liquidate(_amount);    
        }
    }
```

## Removing Liquidity via Web3 <a id="removing-liquidity-via-web3"></a>

{% hint style="info" %}
Note that this demo assumes that you've already configured a Web3 connection via your preferred method‌
{% endhint %}

The process for adding and removing via Web3 or via smart contract is largely the same. Below is a walk-through.‌

First, you'll need to identify the converter version as outlined in Step \#1 above.‌

#### Bancor V2 pools <a id="bancor-v2-pools"></a>

First, copy the `LiquidityPoolV2Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision \(as outlined in Step \#2\).‌

Find the `LiquidityPoolV2Converter` ABI [**here**](https://github.com/bancorprotocol/contracts-solidity/tree/master/solidity/contracts/converter).‌

Your Web3 code will look something like this:1

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
    poolTokens,
    poolAmounts,
    minReturn, {
        value: <ETH value if one of reserve tokens is ETH>
    }
);
```

#### Versions 28 and Above‌ <a id="versions-28-and-above"></a>

First, copy the `LiquidityPoolV1Converter` ABI into your project. Note that converters of the `LiquidTokenConverter` type are not eligible for liquidity provision \(as outlined in Step \#2\).‌

Find the `LiquidityPoolV1Converter` ABI [**here**](https://raw.githubusercontent.com/bancorprotocol/contracts/0.6.0/solidity/build/LiquidityPoolConverter.abi).‌

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

‌

#### Versions Lower than 28 <a id="versions-lower-than-28"></a>

First, copy the `BancorConverter` ABI into your project. Found [**here**](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi).‌

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

**​**[  
](https://app.gitbook.com/@bancor-network/s/bancor-network/~/drafts/-MAQrbUpPFLOEJt0lXNj/developer-quick-start/adding-and-removing-liquidity/@archived)

