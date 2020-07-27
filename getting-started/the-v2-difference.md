---
description: How Bancor's V2 Update Takes AMMs to the Next Level‌
---

# The V2 Difference

## A New Kind of AMM <a id="a-new-kind-of-amm"></a>

When Bancor introduced the first Automated Market Maker \(AMM\) on Ethereum in 2017, the notion of an on-chain, order-book-less exchange was novel and experimental. Bancor v1 was designed to solve the `liquidity problem` where sparse order books struggled to guarantee liquidity to investors on both sides of the trade. Just a few years later, v1 has spurred an ecosystem of innovative AMMs which have generated billions of dollars in trading volume.‌

But the success of the first generation of AMMs has exposed several key downsides of the initial model, affecting both traders and liquidity providers \(LPs\):‌

* `Involuntary Token Exposure`
* `Slippage`
* `Impermanent Loss`

With the interests of both traders and LPs in mind, Bancor v2 offers solutions to all three of these problems.‌

### Single Token Staking <a id="single-token-staking"></a>

Most first generation AMMs require LPs to contribute equal or determinate parts of each asset represented in the pool. This is both an inconvenience and a liability for many LPs who may hold only one of the assets and/or are only interested in exposure to that single asset. Bancor v2 breaks this paradigm, allowing LPs to contribute liquidity as they see fit. Due to single token staking, Bancor v2 now issues separate pool tokens for each asset in the pool, meaning that v2-enabled pools issue two pool tokens instead of one.‌

Most critically, when an LP stakes an asset on one side of the pool, that side's target weight is automatically adjusted upward proportionately. Absent this feature, pools with single token staking would be immediately vulnerable to reserve depletion and wouldn't offer an improvement over current solutions.‌

### Moderating Slippage <a id="moderating-slippage"></a>

For AMMs with fixed ratios, large trades likely come with high slippage, depending on the depth of the pool. However, Bancor's v2 pools - which dynamically adjust their weights when LPs add or remove liquidity - allow for much more flexibility on the pricing curve. V2 uses `liquidity amplification` to inflate the value of reserves when pricing a trade. Put another way, v2 pools can benefit from the effects of a deep pool without requiring the comparable levels of liquidity.‌

Due to this arrangement, LPs are able to attract greater trading volume and users are able to trade with less slippage.‌

### Mitigating Impermanent Loss <a id="mitigating-impermanent-loss"></a>

First generation AMMs, including Bancor v1, programmatically maintain a fixed weight of assets in a liquidity pool \(e.g. 50/50\). When the prices of the underlying assets diverge, the weights remain fixed, causing LPs to suffer from a financial deficit called `Impermanent Loss`. Typically, arbitrageurs will extract this value from the pool by trading the newly overvalued asset for the undervalued asset, resulting in a loss to LPs.‌

But what if the weight wasn't fixed? What if an AMM could set the weights of assets dynamically based on the relative value of the tokens in each reserve? With the help of oracles, Bancor v2 does exactly this.‌

V2 protects LP capital by seeking to maintain the number of tokens staked to a pool. The pool's incentives are designed to maintain the current balance of staked tokens, mitigating the undesirable byproduct of volatility common to first generation AMMs.‌

## Limitations <a id="limitations"></a>

In order to allow for the special properties of Bancor v2 pools, there are a few limitations relative to v1 pools.‌

First, v2 only works for two-asset pools. Developers are still able to deploy legacy pools with more than two assets and custom weights.‌

Second, for v2's impermanent loss solution to be effective, there must be an oracle available for the second asset in the pool \(a BNT/ETH feed is available to price the BNT side of the pool\).‌

{% hint style="danger" %}
Third, v2 pools currently DO NOT support dynamically adjusting supply tokens that can control and adjust the token balances in users' wallets.
{% endhint %}

## Risks <a id="risks"></a>

V2 is successful in mitigating the main risk of providing liquidity: impermanent loss. To do this, v2 pools require the use of an oracle operating externally to the protocol. While the team has developed a robust infrastructure to integrate with an external price feed, there is some risk that the oracle will fail from time to time. In this rare case, v2 pools have a failsafe where they regress to v1 pools and operate as before. Once the oracle corrects, the pool will update the weights to return the reserves to their proper state.‌

In v2, there is also a small risk that - at a given moment - an LP won't be able to retrieve their full stake. However, the incentives that pools offer to arbitrageurs ensure that the correct reserve balances will be restored, and LPs will soon be able to fully liquidate.  


