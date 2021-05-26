---
description: Access Bancor features from your smart contract
---

# Interfacing with Bancor Contracts

While many users benefit from the Bancor Network by using the Bancor App or a Bancor Widget, developers can also access Bancor's many features from their own smart contracts. The API reference section provides a detailed look into the full functionality of each contract in the system. This section will provide a quick look into some more common features and should contain sufficient information for most use cases.

## Adding/Removing Liquidity

{% hint style="info" %}
If you're drawing liquidity from users, note that adding liquidity to Bancor pools requires ERC20 approvals of the underlying token reserves. You'll need to have the user submit an approval transaction for each reserve \(e.g. BNT or DAI\) previously with your Converter contract address as the `spender` field and the amount they would like to contribute **in the** `amount` field .
{% endhint %}

This is the Converter interface for adding \(fund\) or removing \(liquidate\) liquidity. In the case of adding liquidity, the `amount` value is the number of pool tokens that you want to create. Based on the contributor's token reserves and the current state of the liquidity pool, you'll have to calculate this value either on-chain or off-chain. This number is capped by the reserves owned by the contributor and the amount of ERC20 approved for transfer.

In the case of removing liquidity, the `amount` value is the number of pool tokens to burn for the underlying liquidity reserves. This number is capped by the number of tokens owned by the contributor's address.

```text
contract IBancorConverter {
    function fund(uint256 amount) external;
    function liquidate(uint256 amount) external;
}

contract MyContract {
    IBancorConverter converter = IBancorConverter(<converter-address>);

    function addLiquidity(uint tokensToMint) public {
        ...
        converter.fund(tokensToMint);
        ...
    }
}
```

## Trading With Bancor

* `path`: Network path between sourceToken and toToken
  * The `getPathAndRate` function on the [Bancor SDK](https://github.com/bancorprotocol/bancor-sdk) will generate the optimal path for this parameter
* `amount`: Source token input amount
* `minReturn`: To token minimum return
* `affiliateAccount`: Address to direct affiliate fees
* `affiliateFee`: Fee amount \(1000 would be equal to 0.1%\)

```text
contract IBancorNetwork {
    // call when sending eth
    function convert(
        IERC20Token[] path,
        uint256 amount,
        uint256 minReturn
    ) external payable returns(uint256 returnAmount);

    // call when sending tokens
    function claimAndConvert(
        IERC20Token[] path,
        uint256 amount,
        uint256 minReturn
    ) external returns(uint256 returnAmount);
}

contract IContractRegistry {
    function addressOf(bytes32 contractName) public view returns(address);    
}

contract MyContract {
    address private constant CONTRACT_REGISTRY_ADDRESS = 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4;
    bytes32 private constant BANCOR_NETWORK = "BancorNetwork";

    function trade(
        IERC20Token[] path,
        uint256 minReturn
    ) external payable {
        IContractRegistry contractRegistry = IContractRegistry(CONTRACT_REGISTRY_ADDRESS);
        address bancorNetworkAddress = IContractRegistry.addressOf(BANCOR_NETWORK);
        IBancorNetwork bancorNetwork = IBancorNetwork(bancorNetworkAddress);
        bancorNetwork.convert(path, msg.value, minReturn);
    }

    function tradeToken(
        IERC20Token[] path,
        uint256 amount,
        uint256 minReturn
    ) external payable {
        IContractRegistry contractRegistry = IContractRegistry(CONTRACT_REGISTRY_ADDRESS);
        address bancorNetworkAddress = IContractRegistry.addressOf(BANCOR_NETWORK);
        IBancorNetwork bancorNetwork = IBancorNetwork(bancorNetworkAddress);
        bancorNetwork.convert(path, amount, minReturn);
    }
}
```

