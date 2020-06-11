---
description: Access Bancor features from your smart contract
---

# Interfacing with Bancor Contracts

While many users benefit from the Bancor Network by using the Bancor App or a Bancor Widget, developers can also access Bancor's many features from their own smart contracts. The API reference section provides a detailed look into the full functionality of each contract in the system. This section will provide a quick look into some more common features and should contain sufficient information for most use cases.

### Adding/Removing Liquidity

{% hint style="info" %}
If you're drawing liquidity from users, note that adding liquidity to Bancor pools requires ERC20 approvals of the underlying token reserves. You'll need to have the user submit an approval transaction for each reserve \(e.g. BNT or DAI\) previously with your Converter contract address as the `_spender` field and the amount they would like to contribute __in the __`_amount` field .
{% endhint %}

This is the Converter interface for adding \(fund\) or removing \(liquidate\) liquidity. In the case of adding liquidity, the `_amount` value is the number of pool tokens that you want to create. Based on the contributor's token reserves and the current state of the liquidity pool, you'll have to calculate this value either on-chain or off-chain. This number is capped by the reserves owned by the contributor and the amount of ERC20 approved for transfer. 

In the case of removing liquidity, the `_amount` value is the number of pool tokens to burn for the underlying liquidity reserves. This number is capped by the number of tokens owned by the contributor's address.

```text
contract IBancorConverter {
    function fund(uint256 _amount) external;
    function liquidate(uint256 _amount) external;
}

contract MyContract {
    IBancorConverter converter = IBancorConverter(<converter-address>);
    
    function addLiquidity(uint _tokensToMint) public {
        ...
        converter.fund(_tokensToMint);
        ...
    }
}
```

### Trading With Bancor

* `_path`: Network path between sourceToken and toToken

  * The `getPathAndRate` function on the [Bancor SDK](https://github.com/bancorprotocol/bancor-sdk) will generate the optimal path for this parameter

* `_amount`: Source token input amount
* `_minReturn`: To token minimum return
* `_affiliateAccount`: Address to direct affiliate fees
* `_affiliateFee`: Fee amount \(1000 would be equal to 0.1%\)

```text
contract IBancorNetwork {
    // call when sending eth
    function convert(
        IERC20Token[] _path, 
        uint256 _amount, 
        uint256 _minReturn
    ) external payable returns(uint256 returnAmount);
    
    // call when sending tokens
    function claimAndConvert(
        IERC20Token[] _path,
        uint256 _amount, 
        uint256 _minReturn
    ) external returns(uint256 returnAmount);
}

contract IContractRegistry {
    function addressOf(bytes32 contractName) public view returns(address);    
}

contract MyContract {
    address contractRegistryAddress = 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4;
    bytes32 contractName = 0x42616e636f724e6574776f726b; // "BancorNetwork"
        
    function trade(
        IERC20Token[] _path,
        uint256 _minReturn
    ) external payable {
        IContractRegistry contractRegistry = IContractRegistry(contractRegistryAddress);
        address bancorNetworkAddress = IContractRegistry.addressOf(contractName);
        IBancorNetwork bancorNetwork = IBancorNetwork(bancorNetworkAddress);
        
        bancorNetwork.convert(_path, msg.value, _minReturn);
    }    
    
    function tradeToken(
        IERC20Token[] _path,
        uint256 _amount, 
        uint256 _minReturn
    ) external payable {
        IContractRegistry contractRegistry = IContractRegistry(contractRegistryAddress);
        address bancorNetworkAddress = IContractRegistry.addressOf(contractName);
        IBancorNetwork bancorNetwork = IBancorNetwork(bancorNetworkAddress);
        
        bancorNetwork.convert(_path, _amount, _minReturn);
    }   
    
}
```

