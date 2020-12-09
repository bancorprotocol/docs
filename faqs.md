---
description: Frequently asked questions about Bancor Protocol & Bancor v2.1.
---

# FAQs

## **What is impermanent loss?**

Simply put, impermanent loss is the difference between holding tokens in an automated market maker \(AMM\) liquidity pool and holding them in your wallet.

It occurs when the price of tokens inside an AMM diverge in any direction. The more divergence, the greater the impermanent loss.

Why “impermanent”? Because as long as the relative prices of tokens in the AMM return to their original state when you entered the AMM, the loss disappears and you earn 100% of the trading fees. However, this is rarely the case. More often than not, impermanent loss becomes _permanent_, eating into your trade income or leaving you with negative returns. 

## What causes impermanent loss?

Liquidity pools consist of multiple tokens paired together in a pool. If one token price changes in the pool, an arbitrage opportunity emerges, incentivizing balancing of the pool \(and resulting in a loss for liquidity providers\). 

As one token’s price is rising relative to its paired asset, the pool is re-balancing by selling the rising token while buying the token whose price is falling. Once you withdraw your liquidity, you’re left holding less of the token that mooned, and more of the token that dumped.

Swap fees may offset impermanent loss; however in many cases impermanent loss can exceed trading fees earned by an LP, leading to negative returns realized by a liquidity provider upon withdrawing their tokens from the pool. 

Bancor v2.1 is designed so that a liquidity provider always gets back the same amount of tokens he/she originally deposited plus trading fees through a novel concept called Impermanent Loss Insurance.

## What is Impermanent Loss Insurance?

Impermanent Loss Insurance is a unique feature offered by Bancor v2.1 that removes the risk of impermanent loss for liquidity providers. LPs can “set and forget” their tokens in a liquidity pool and generate fees without living in fear of volatility-induced arbitrage cutting into the value of their stake.

Even if a token moons, an LP is entitled to withdraw the full value of the tokens they staked, so long as they have accrued full protection \(if you stake 1 ETH, even if ETH price doubles, you will get 1 ETH back, plus trading fees\). Any IL incurred by your staked tokens is compensated by the Bancor protocol.

## How does Impermanent Loss Insurance work?

Impermanent loss insurance accrues over time, by 1% each day, until 100% insurance is achieved at 100 days. There is a 30-day cliff, which means that if a liquidity provider decides to withdraw their position before 30 days passes, they’d incur the same IL loss experienced in a normal, unprotected AMM. If an LP withdraws any time after 100 days, they receive 100% compensation for any loss that occurred in the first 100 days, or anytime thereafter. 

If there are not sufficient tokens in the pool to full IL compensation in the staked token, part of the insurance may be paid out in an equal value BNT.

## **Could I lose profits before I reach the 30-day cliff**?

Only if you withdraw your tokens. Impermanent loss insurance starts vesting immediately when you deposit. But you must be in the pool for at least 30 days until the cliff is reached and before the protection can be utilized.

## **Where can I track returns and see the current coverage on my liquidity pool position?**

This information can be viewed in the [”Protection” tab](https://app.bancor.network/eth/protection), on the right side \(where you can also find a countdown timer for complete elimination of impermanent loss\). Each liquidity position has its own separate coverage, depending on when you deposited. Within the same pairs, there is no relation between different liquidity positions.

## **What is the difference between “protected” and “claimable” value?**

Protected value is the amount of tokens you can withdraw with 100% protection + fees.

Claimable value is the amount of tokens you can withdraw right now \(assuming you have not earned full IL protection and there has been IL, this value will be lower than Protected Value\).

## **Where can I read more about how IL insurance works?**

**Please look into our technical explainer by clicking** [**here**](https://drive.google.com/file/d/16EY7FUeS4MXnFjSf-KCgdE-Xyj4re27G/view) **and economic explainer by clicking** [**here**](https://drive.google.com/file/d/1en044m2wchn85aQBcoVx2elmxEYd5kEA/view)**.**

## **If I have staked liquidity to a pool multiple times, will withdrawing one of my stakes cancel the other stake’s insurance?**

No. There’s no relation nor correlation between different liquidity providers positions. You can view returns on each of your individual liquidity pool positions in the bancor.network [protection tab](https://app.bancor.network/eth/protection).

## **I withdrew my position and got compensated partially with BNT. Why?**

The protocol co-invests BNT and these BNTs accrue fees. These fees are used to compensate any possible IL. In cases where the trading fees accrued by the co-invested BNT does not outweigh the IL, BNT equivalent \(calculated at the current pool rate\) will be minted from the protocol as compensation.

## **Can I lose my IL insurance somehow?**

Only if you withdraw. If you withdrew before the 30 day cliff, you are not eligible for any insurance. Withdrawing between 30 and 100 days qualifies you for the achieved percentage - for instance, if after 60 days in the pool you withdraw and there is $100 USD worth of IL, you’ll receive compensation for 60% \(or $60 USD\) of the loss.

## **Are all pools eligible for Impermanent Loss Protection?**

Only pools voted into the Bancor v2.1 whitelist by Bancor governance are eligible to receive impermanent loss protection and single-sided exposure. Currently roughly 70 tokens are listed in the Bancor v2.1 whitelist. 

[_Instructions on how to whitelist a token_](https://bancor.medium.com/how-to-whitelist-a-token-on-bancor-v2-1-c867b82675d4)_._

