---
description: Digging into the mechanics of liquidity pools
---

# Balancing Mechanics

First, the basics. Liquidity pools offer three differentiating features when compared to conventional order-book exchanges:

* constant liquidity
* transparent and deterministic pricing
* democratized liquidity provision

### Walking through a Bancor V2 Scenario

As of v2, Bancor liquidity pools are much more powerful as described in **The V2 Difference**. On this page, let's walk through an example of the dynamic weighting and staking features of v2.

A v2 pool is initialized in a state of "balance" in that the price offered by the pool \("pool price"\) is equal to an external reference market price \("market price"\). The pool is designed to always push the pool price to equal the market price.

#### Step \#1: 50/50 XYZ/BNT Pool

We start with a pool with equal parts of XYZ \(a generic token\) and BNT \(the native asset of the Bancor Network\). The reserves are equal in value and the number of XYZ and BNT that have been staked by liquidity providers \(LPs\) is the number of XYZ and BNT held in the reserves. This is a key feature of v2 pools and critical to mitigating impermanent loss: the pool will always incentivize market participants to equalize the total held in the reserves \("current balance"\) with the amounts staked by liquidity providers \("staked balance"\).

Here's a snapshot of our example pool at this step:

| XYZ price | XYZ in pool | BNT price | BNT in pool | XYZ val | BNT val | XYZ weight | BNT weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$100` | `10` | `$1` | `1000` | `$1000` | `$1000` | `50%` | `50%` |

#### Step \#2: Trader Converts XYZ for BNT

After a trader executes a 1 XYZ for 99.5 BNT conversion, the number of XYZ held in reserve is now more than the number staked by LPs. This creates an imbalance and the pool will present an incentive \(discounted price\) for a trader to restore the balance of staked XYZ. We can assume that this balance will be restored in an efficient market. 

Here's a snapshot of our example pool at this step:

| XYZ price | XYZ in pool | BNT price | BNT in pool | XYZ val | BNT val | XYZ weight | BNT weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$100` | `11` | `$1` | `900.5` | `$1100` | `$900.5` | `50%` | `50%` |

As discussed, the pool presents us with an opportunity to trade 99.5 BNT for 1 XYZ, a 0.5% discount to market price \(_which is 100BNT:1XYZ_\). We can assume that a trader will come around to restore this imbalance. 

| XYZ price | XYZ in pool | BNT price | BNT in pool | XYZ val | BNT val | XYZ weight | BNT weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$100` | `10` | `$1` | `1000` | `$1000` | `$1000` | `50%` | `50%` |

#### Step \#3: LP stakes XYZ Liquidity

After the pool is rebalanced, LP can stake 2 XYZ tokens to the pool asymmetrically. Recall that in v2, LPs stake _only_ single assets to a pool. After this single asset contribution,  we now have 2 additional XYZ held in the pool's reserves and a higher XYZ value in the pool. Bancor v2 pools automatically rebalance the target weight of XYZ to 55% to reflect this added value.

| XYZ price | XYZ in pool | BNT price | BNT in pool | XYZ val | BNT val | XYZ weight | BNT weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$100` | `12` | `$1` | `1000` | `$1200` | `$1000` | `55%` | `45%` |

This isn't possible in legacy AMMs, because it would create an arbitrage opportunity that would result in impermanent loss \(due to the fact that the weight would remains fixed at 50/50\). 

In Bancor v2, the pool automatically adjusts its internal weights on all liquidity add and remove events. In this case, the target number of  tokens held in the XYZ reserve is incremented by the number added. No impermanent loss involved. 

#### Step \#4a: XYZ Price Increases Significantly

When the price of one asset diverges from the other asset in a legacy AMM pool, LPs suffer impermanent loss because the ratio between these two assets remains fixed. Arbitrageurs are quick to pick up on these imbalances and they extract value from LPs by trading the overvalued asset for the undervalued one. 

In the case of Bancor v2, oracles pick up on these changes in price and adjust the weights of each reserve accordingly. When the XYZ price increases, the target weight of XYZ in the XYZ/BNT pool will grow and there will be no opportunity for arbitrage. 

Let's rewind back to our base case from Step \#1 where the two asset balances are equal. Now let's consider the impact of a 10% increase in the price of XYZ.

| XYZ price | XYZ in pool | BNT price | BNT in pool | XYZ val | BNT val | XYZ weight | BNT weight |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `$110` | `10` | `$1` | `1000` | `$1100` | `$1000` | `52%` | `48%` |

When the **external oracle** updates, the target weight of XYZ automatically adjusts to 52%, consistent with the changes in the value of the asset reserves.

#### Step \#4b: XYZ Price Increases Marginally

External oracles capture significant movements in the prices of reserve assets and protect LPs from the vast majority of impermanent loss. However, in order to most precisely price reserve assets, our v2 pools also make sure to account for micro-changes in market sentiment. Each pool includes an **internal price feed** derived from the simple moving average \(SMA\) over the preceding ten minutes. On each update from the external oracle, the internal price feed re-anchors to the external oracle and the continuous SMA calculation restarts. 

Consider the scenario below. After one minute and one conversion, the internal price feed and reserve target weights have adjusted slightly. 

If, for example, no further trades are recorded in the following three minutes, which indicate the pool price does not reflect any deviation from market price, the internal price feed will have three more minutes of data and that information will be reflected in the pool price \(Step D\).

| Step | Pool Ratio | Conversion | Internal Price Feed | XYZ Target Weight | BNT Target Weight |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `A` | `1XYZ:100BNT` | - | - | `50%` | `50%` |
| `B` |  | `1XYZ=>99.5BNT` |  |  |  |
| `C` | `1XYZ:99BNT` |  | `1XYZ:99.9BNT` | `49.98%` | `50.02%` |
| `D` | `1XYZ:99.66BNT` |  | `1XYZ:99.66BNT` | `49.94%` | `50.06%` |

#### Step \#5: Dynamic Fees

The overarching goal for v2 pools is always to restore balance and parity between stake and current balance of each reserve token in the pool.

In certain instances, these two balances might drift away. Once the balance of the reserve token is drifting away, the conversion fee will incur a slight increase/discount to assist bringing the two balances closer together.  

### The Two Kinds of Arbitrage

By preventing arbitrage opportunities that lead to impermanent loss, Bancor v2 greatly improves the value proposition for liquidity providers. However, there is a second kind of arbitrage opportunity that must be available to assure the viability of a liquidity pool.

Recall that v2 pools aspire to always maintain the staked number of XYZ in reserve. If 100 XYZ have been staked by liquidity providers but only 95 are currently held, the pricing formula incentivizes the restoration of this balance by offering cheaper BNT-for-XYZ trades. This is the second kind of AMM arbitrage and it is an essential part of Bancor v2 pools. In order to return to 100 XYZ held in reserve, the pool pricing curve will offer a slightly better fill in the hopes that a trader will convert those 5 missing XYZ back into BNT and return the pool to balance.



