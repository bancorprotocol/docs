---
description: Interacting with Bancor in your JavaScript code
---

# Using the Bancor SDK

Bancor's new SDK allows you to interact with the Bancor Network using JavaScript. It can be used independently of the network smart contracts for grabbing data or \(soon\) submitting a transaction. Or it can be used as an accessory to the smart contract logic in your Dapp, generating smart contract inputs off-chain in a convenient, user-friendly way.

To **initialize** the Bancor SDK in your JavaScript code:

```text
const BancorSDK = require('bancor-sdk').SDK;

const settings = {
    // optional, mandatory when interacting with the ethereum mainnet
    ethereumNodeEndpoint: '<ethereum node endpoint>',
    // optional, mandatory when interacting with the EOS mainnet
    eosNodeEndpoint: '<eos node endpoint>'
};

let bancorSDK = await BancorSDK.create(settings);
```

To **generate a conversion path** and the **expected rate of return** of a trade:

```text
// get the path/rate between DAI and ENJ
const sourceToken = {
    blockchainType: 'ethereum',
    blockchainId: '0x6B175474E89094C44Da98b954EedeAC495271d0F'
};
const targetToken = {
    blockchainType: 'ethereum',
    blockchainId: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c'
};
const res = await bancorSDK.pricing.getPathAndRate(sourceToken, targetToken, "1.0");

// output:
{
    path: [
        { blockchainType: 'ethereum', blockchainId: '0x6B175474E89094C44Da98b954EedeAC495271d0F' },
        { blockchainType: 'ethereum', blockchainId: '0xcb913ED43e43cc7Cec1D77243bA381615101E7E4' },
        { blockchainType: 'ethereum', blockchainId: '0x309627af60F0926daa6041B8279484312f2bf060' },
        { blockchainType: 'ethereum', blockchainId: '0xd1146B08e8104EeDBa44a73B7bda1d102c6ceDC9' },
        { blockchainType: 'ethereum', blockchainId: '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C' },
        { blockchainType: 'ethereum', blockchainId: '0xf3aD2cBc4276eb4B0fb627Af0059CfcE094E20a1' },
        { blockchainType: 'ethereum', blockchainId: '0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c' } 
    ],
    rate: '7.640578979520041176'
}
```

See full documentation on our [Github](https://github.com/bancorprotocol/bancor-sdk).

