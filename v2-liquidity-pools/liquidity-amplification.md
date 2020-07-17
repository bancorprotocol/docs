---
description: How V2 Improves Slippage for Traders and Increases Fees for LPs
---

# Liquidity Amplification

Bancor v1 introduced the `Bancor Formula`, a pricing construct designed to provide liquidity at any trade size. The formula was successful in providing continuous liquidity, however it came with the downside of progressively higher slippage as trade size grew. Bancor v2 doesn't eliminate slippage, but it significantly reduces it using an approach called `Liquidity Amplification`. This serves the interests of both parties in a trade: the investor and the liquidity provider.

### Benefits to LPs

Even if LPs aren't trading, they, too, are impaired by high slippage on large trades. The simple reason is that investors will trade on other exchanges and direct their fees elsewhere. Liquidity amplification essentially simulates a liquidity pool with 20x \(this coefficient may be made adjustable by the pool creator at deployment in the future\) the liquidity and prices trades as such. This approach wouldn't be possible on a legacy AMM, but because Bancor v2 incentivizes arbitrageurs to balance token weights by reserve value at any given time, the two sides of a pool are always converging towards their targets.

### Benefits to Traders

The benefits to traders of liquidity amplification are apparent. Instead of climbing a steep pricing curve as the size of a trade grows, traders benefit from a much more subdued formula. Slippage is still a factor and larger investors should still account for trade size, but v2 pools will be able to offer meaningfully better fills than legacy AMM pools with comparable liquidity.



