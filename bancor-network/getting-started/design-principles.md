---
description: Overview of the Bancor Protocol and its guiding principles.
---

# Design Principles

At the heart of the design, Bancor Protocol relies off of conversions in a peer-to-smart contract model against liquidity pools. Bancor liquidity pools hold a Bancor network hub token and another token.

* **Liquidity Pools:** Liquidity pools are smart contracts that hold one or more token reserves. You may have come across the term Bancor Relay, which is one particular implementation of a liquidity pool that includes a Bancor network hub token and another token in 50/50 ratio.
* **Network Hub Tokens:** Bancor Network Token is the hub token that enables the interoperability of all smart contracts on the Bancor Network. USDB is the stable version of BNT, which can be used for stable use cases, and is directly bridged to USDB. USDB is developed by PEG Network, [see Github.](https://github.com/zachdoty/peg-usdb)
* **SmartToken:** SmartToken is a token that has other tokens in its reserve. A SmartToken has dynamic supply and is owned by a converter that can control its supply. In the Bancor Network, both liquid tokens and pool tokens are Smart Tokens. 
* **Automated Market Making:** Transactions are executed against a smart contract \(liquidity pool\). There is no order book that matches buyers and sellers. Automated pricing is determined according to the Bancor formula.
* **Permissionless Listing:** In order to join the Bancor Network, a smart contract must be created that holds equal value of BNT and another ERC-20 or EOS token.
* **Permissionless Liquidity Contribution:** Any individual or entity can contribute liquidity to any liquidity pool on the Bancor Network. 
* **Cross-Chain Bridge:** BancorX is the cross-chain bridge code that enables bi-direction Ethereum to EOS transactions.
* **Liquidity for All Market Cap Tokens:** The Bancor Protocol is designed to enable the liquidity of all tokens, regardless of their market capitalization.

\*\*\*\*

