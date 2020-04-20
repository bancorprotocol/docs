---
description: The risk of providing liquidity
---

# Impermanent Loss

When a participant in the network contributes liquidity to a pool, they're required to add determinate amounts of each of the underlying assets in the pool \(two or more\). While liquidity providers \(LPs\) benefit from the fees investors pay to trade, they are exposed to a downside risk called impermanent loss. 

Bancor's bonding curve formula -- the underlying logic for asset pricing in a liquidity pool -- dictates that the value of the pool's holdings in each asset are equal in value to the original asset distribution of the pool. In a hypothetical 50/50 pool with 10 ABC and 20 XYZ, the implicit valuation of 1 ABC token is 2 XYZ tokens. 

If, over time, the relative price of the assets diverge from the price when liquidity was provided, the LP could be exposed to `impermanent loss`. If the growth in price of token XYZ far outpaces the price of token ABC, the value of the assets the LP can withdraw when they come to retrieve their assets may be less than the combined value when the liquidity was provisioned. Recall, just as a provider must contribute in determinate parts when they provide liquidity, they receive the same parts of the assets at time of withdrawal.

{% hint style="info" %}
In an upcoming 2Q20 Bancor release, the team will introduce a new liquidity pool design that will eliminate impermanent loss arising from regular fluctuations in the pool's assets. 
{% endhint %}

