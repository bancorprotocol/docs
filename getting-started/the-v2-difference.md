---
description: How Bancor's V2 Update Takes AMMs to the Next Level‌
---

# The V2.1 Difference

## A New Kind of AMM <a href="#a-new-kind-of-amm" id="a-new-kind-of-amm"></a>

When Bancor introduced the first Automated Market Maker (AMM) on Ethereum in 2017, the notion of an on-chain, order-book-less exchange was novel and experimental. Bancor v1 was designed to solve the `liquidity problem` where sparse order books struggled to guarantee liquidity to investors on both sides of a trade. Just a few years later, Bancor has inspired a new form of automated asset exchange which generates billions of dollars in cryptocurrency trading volume per day.‌

But the success of legacy AMMs has exposed key downsides of the initial model, affecting both traders and liquidity providers (LPs):‌

* `Involuntary Token Exposure`
* `Impermanent Loss`

With the interests of both traders and LPs in mind, Bancor v2.1 offers solutions to these problems.‌

Contrary to other AMMs, Bancor uses its protocol token, BNT, as the counterpart asset in every pool. Using an elastic BNT supply, the v2.1 protocol is able to provide liquidity in its pools to support single-sided token deposits and to cover the cost of impermanent loss incurred by depositors using swap fees earned from protocol-provisioned liquidity.

[_**Bancor v2.1 Economic Analysis**_](https://drive.google.com/file/d/1en044m2wchn85aQBcoVx2elmxEYd5kEA/view) _**(**_[_**TopazeBlue**_](https://topaze.blue)_**)**_

### Single-Sided Exposure <a href="#single-token-staking" id="single-token-staking"></a>

Most first generation AMMs require LPs to contribute two tokens (e.g., LINK and ETH) representing the component parts of the liquidity pool. This is both an inconvenience and a liability for many LPs who may hold only one of the assets and/or are only interested in exposure to that single asset.&#x20;

Bancor v2.1 breaks this paradigm, allowing LPs to contribute and maintain 100% exposure in a single token. As an LP, the user remains 100% exposed to the price of the token they deposited, while accruing yield from auto-compounding fees (paid in the token staked) and, when active, liquidity mining rewards (paid in BNT in Bancor v2.1, and in Bancor 3, rewards can be paid in both BNT and third-party protocol tokens).

LPs can provide liquidity to Bancor either entirely in their preferred asset or entirely in BNT.

### Impermanent Loss Insurance <a href="#mitigating-impermanent-loss" id="mitigating-impermanent-loss"></a>

Impermanent or divergence loss is a well-known side-effect of AMMs that are subject to arbitrage opportunities. When two assets are paired in a constant-product AMM (for example, with a 50:50 ratio), the product of the cardinal values of each asset reserve in the AMM is kept constant. So reserve(TKN) \* reserve(BNT) = Constant. This means that price variations lead to liquidating the asset that rises in value into the asset that drops in value.&#x20;

Swap fees earned by liquidity providers may offset impermanent loss; however in many cases impermanent loss can exceed swap fees earned, leading to negative returns realized by a liquidity provider upon withdrawing their tokens from the pool.

On Bancor, we designed a system that fully protects liquidity providers against the risk of impermanent loss.

Bancor uses its dynamic supply of BNT to jointly fund pools alongside user deposits. When a user deposits $100,000 in a supported token ("TKN"), the protocol matches the user's deposit by providing $100,000 worth of BNT to the pool. In return, both the user and the protocol receive fee-accruing LP tokens (pool tokens).

When a user withdraws their liquidity, the user's pool tokens and protocol's pool tokens are both burned. If the user has suffered any impermanent loss, fees earned by the protocol's pool tokens are used to compensate for the user's loss, and the remaining pool tokens are burned for BNT.

The amount of BNT offered by the protocol to support trading in a given token is governed by the Bancor DAO. The DAO aims to offer protocol liquidity in amounts that are profitable for the network, i.e., where trading fee income exceeds the cost of impermanent loss compensation.

## Limitations <a href="#limitations" id="limitations"></a>

In order to allow for the special properties of Bancor v2.1, there are a few limitations.‌

**100-Day Impermanent Loss Protection Vesting**

Impermanent Loss Insurance accrues over time, by 1% each day, until 100% protection is achieved after 100 days in the pool. There is a 30-day cliff, which means that if a liquidity provider decides to withdraw their position before 30 days passes, they incur the same IL loss experienced in a normal, unprotected AMM. If an LP holds their liquidity in the pool for 100 days or more, they receive 100% compensation for any loss incurred in the first 100 days, or anytime thereafter.&#x20;

In Bancor 3,  it is proposed that [100% Impermanent Loss Protection be offered instantly from day one](https://gov.bancor.network/t/bip15-proposing-bancor-3/3445), with a 7-day cool down, adjustable by the DAO.

**Withdrawn stakes may be received partially in BNT, subject to a 24-hour lockup**

If there are not sufficient tokens in the pool to fully pay out the impermanent loss compensation in the staked token, part of the insurance may be paid out in an equivalent value of BNT.

When BNT is being withdrawn from the system (included BNT paid out as part of IL compensation), it is locked for a pre-set time (default 24 hr) as a means of preventing protocol abuse.

**No Rebase Tokens**

v2.1 currently DOES NOT support dynamically adjusting supply tokens (i.e., "rebase" tokens) that can control and adjust the token balances in users' wallets.

## **Token Whitelisting Requirements**

****[**See the most up to date technical requirements for whitelisting.**](https://gov.bancor.network/t/whitelisting-requirements/1849)****

_**Requirements:**_

### Transparency&#x20;

1. The token contract needs to be verified on Etherscan.&#x20;
2. The token contract should have an audit from a known security auditor or explain why it wasn’t audited (for example, if it’s a standard token from the OpenZeppelin library).&#x20;
3. The project should have a publicly visible test suite with decent test coverage.

### Administrative Risk&#x20;

Special administrative privileges over the protocol - such as minting privileges - should be restricted:

1. They **should not** be owned by EOA.&#x20;
2. They can be governed by multisigs.&#x20;
3. They can enforce timelock or similar restrictions.

Protocols that don’t comply with this should provide an explanation why (the DAO reserves the right to decide whether to accept the explanation or not).

The above **may not** contradict with the technical requirements - e.g. an upgradable token can not be whitelisted regardless of the reasoning.

### Technical&#x20;

1. The token contract should not be upgradable.&#x20;
2. Only the token holders themselves should be able to transfer or burn their tokens. It shouldn’t be possible for any other account (including owners/admins) to transfer or burn tokens belonging to other users, without their explicit permission.&#x20;
3. Minting of new tokens should be restricted and conform to the whitepaper and the security audit.&#x20;
4. Rebasing tokens or tokens with elastic supply aren’t currently supported.&#x20;
5. Tokens that apply transfer fees aren’t currently supported. Please note that tokens that have the fee mechanism in place but haven’t activated it yet are exempt.&#x20;
6. Token transfers shouldn’t be pausable or subjected to a whitelist unless a reasonable explanation is provided.&#x20;
7. There should not be any restrictions on transferring or trading (e.g., restricting how many blocks you have to hold a token before you can transfer it, fees/taxes on transfers, including to/from trading pools, etc.)&#x20;

### Economic Requirements&#x20;

1. The token should be fairly distributed (e.g., it can’t be concentrated in a few addresses).
