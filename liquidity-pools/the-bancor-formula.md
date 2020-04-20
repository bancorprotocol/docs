---
description: Understanding one of Bancor's key differentiating features
---

# The Bancor Formula

The Bancor Formula is at the core of Bancor's automated market making model. Bonding curves are familiar to many in the crypto space. There are variations used in prediction markets, collectible tokens and constant product market makers. Bancor's formula bears many similarities to these applications, however, there are some key differentiated features we'd like to highlight.

The limitations of the Ethereum Virtual Machine require a clever approach to compute the expected return of a trade on a bonding curve. Bancor's approach is to use a **Connector Weight** constant to elegantly represent the relationship between collateral and the market cap of the pool. With this formulation in hand, the Bancor curve can calculate a price formula for a given quantity, thus abstracting a great deal of integral calculus normally required for equations of this sort. 

Read more about the math behind the Bancor formulas [here](https://drive.google.com/file/d/0B3HPNP-GDn7aRkVaV3dkVl9NS2M/view). 

  

