---
description: Digging into the mechanics of liquidity pools
---

# Mechanics

Liquidity pools offer three differentiating features when compared to conventional order-book exchanges:

* constant liquidity
* transparent and deterministic pricing
* democratized liquidity provision

#### Constant Liquidity

In any given pool, all liquidity is stored fully on-chain. There's no need to match a buyer with a seller as all orders are directed to the communal pool. With that in mind, traders can be less concerned with low token volume or unreliable order books. 

#### Transparent and Deterministic Pricing

Bancor's bonding curve formula is the sole determinant of price for all trades on the network. The concept is simple: as the size of the order increases, the price paid per unit of the token increases. And as the size of the liquidity pool increases, the price paid per unit decreases. 

The size of the pool and the size of the order are known quantities before a trader submits a transaction, so the cost of the trade can be calculated transparently and deterministically prior to submission. 

#### Democratized Liquidity Provision

Market-making income has historically only been available to those with 1\) privileged access to exchange operators and those with 2\) considerable capital to deploy. The beauty of decentralized liquidity provision on Bancor is that anyone with any amount of latent capital can provide their tokens to a liquidity pool and passively earn trading fees on their funds.

Read more about Bancor Liquidity Pools [**here**](https://blog.bancor.network/how-bancor-relays-work-c712a374374f). 

