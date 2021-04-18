---
description: How Bancor's V2 Update Takes AMMs to the Next Level‌
---

# The V2.1 Difference

## A New Kind of AMM <a id="a-new-kind-of-amm"></a>

When Bancor introduced the first Automated Market Maker \(AMM\) on Ethereum in 2017, the notion of an on-chain, order-book-less exchange was novel and experimental. Bancor v1 was designed to solve the `liquidity problem` where sparse order books struggled to guarantee liquidity to investors on both sides of the trade. Just a few years later, v1 has spurred an ecosystem of innovative AMMs which have generated billions of dollars in trading volume.‌

But the success of the first generation of AMMs has exposed several key downsides of the initial model, affecting both traders and liquidity providers \(LPs\):‌

* `Involuntary Token Exposure`
* `Impermanent Loss`

With the interests of both traders and LPs in mind, Bancor v2.1 offers solutions to these problems.‌

Contrary to other AMM protocols, Bancor uses its protocol token, BNT, as the counterpart asset in every pool. Using an elastic BNT supply, the v2.1 protocol co-invests in pools alongside LPs to support single-sided AMM exposure and to cover the cost of impermanent loss with swap fees earned from its co-investments. 

[_**Bancor v2.1 Economic Analysis**_](https://drive.google.com/file/d/1en044m2wchn85aQBcoVx2elmxEYd5kEA/view) _**\(**_[_**TopazeBlue**_](https://topaze.blue/)_**\)**_

### Single-Sided Exposure <a id="single-token-staking"></a>

Most first generation AMMs require LPs to contribute equal or determinate parts of each asset represented in the pool. This is both an inconvenience and a liability for many LPs who may hold only one of the assets and/or are only interested in exposure to that single asset. Bancor v2.1 breaks this paradigm, allowing LPs to contribute and maintain 100% exposure in a single token.

LPs can provide liquidity to a pool with single-sided exposure, either in an ERC20 token \(“TKN”\) or in BNT.

### Impermanent Loss Insurance <a id="mitigating-impermanent-loss"></a>

Impermanent loss is a well-known side-effect of AMMs that are subject to arbitrage opportunities. When two assets are paired in a constant-product AMM \(for example, with a 50:50 ratio\), the product of the cardinal values of each asset reserve in the AMM is kept constant. So reserve\(TKN\) \* reserve\(BNT\) = Constant. This means that price variations lead to liquidating the asset that rises in value into the asset that drops in value. 

Swap fees may offset impermanent loss; however in many cases impermanent loss can exceed swap fees earned by an LP, leading to negative returns realized by a liquidity provider upon withdrawing their tokens from the pool.

Bancor v2.1 is designed so that a liquidity provider always gets back the same value he/she originally deposits plus trading fees through a novel concept called Impermanent Loss Insurance.

Impermanent Loss Insurance accrues over time, by 1% each day, until 100% protection is achieved after 100 days in the pool. There is a 30-day cliff, which means that if a liquidity provider decides to withdraw their position before 30 days passes, they’d incur the same IL loss experienced in a normal, unprotected AMM. If an LP withdraws any time after 100 days, they receive 100% compensation for any loss that occurred in the first 100 days, or anytime thereafter. 

If there are not sufficient tokens in the pool to fully pay out IL compensation in the staked token, part of the insurance may be paid out in an equivalent value of BNT.

## Limitations <a id="limitations"></a>

In order to allow for the special properties of Bancor v2.1, there are a few limitations.‌

First, v2.1 only works for two-asset pools. Developers are still able to deploy legacy v1 pools with more than two assets and custom weights.‌

Second, v2.1 currently DOES NOT support dynamically adjusting supply tokens \(i.e., "rebase" tokens\) that can control and adjust the token balances in users' wallets.

Third, when being withdrawn from the system, BNTs are locked for a pre-set time \(default 24 hr\) to prevent panic liquidation.

## **Whitelisting Requirements**

### **Transparency**

1. The token contract needs to be verified on Etherscan.
2. The token contract should have an audit from a known security auditor or explain why it wasn’t audited \(for example, if it’s a standard token from the OpenZeppelin library\).
3. The project should have a publicly visible test suite with decent test coverage.

### **Administrative Risk**

Administrative privileges over the protocol \(ownership, upgradability, emergency powers, etc.\) should be restricted:

1. They should not be owned by EOA.
2. They can be governed by multisigs.
3. They can enforce timelock or similar restrictions.

**Protocols that don’t comply with this should provide an explanation why.**

### **Technical**

1. The token contract should not be upgradable. 
2. Only the token holders themselves can burn their tokens. It shouldn’t be possible for any other account \(including owners/admins\) to burn tokens.
3. Minting of new tokens should be restricted and conform to the whitepaper and the security audit. 
4. Rebasing tokens or tokens with elastic supply aren’t currently supported.
5. Tokens that apply transfer fees aren’t currently supported. Please note that tokens that have the fee mechanism in place but haven’t activated it yet are exempt. 
6. Token transfers shouldn’t be pausable unless a reasonable explanation is provided.

### **Economic Requirements**

1. The token should be fairly distributed \(e.g., it can’t be concentrated in a few addresses\). 

