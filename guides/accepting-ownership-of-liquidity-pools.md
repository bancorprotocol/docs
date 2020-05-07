---
description: >-
  This guide instructs how a new owner can accept or transfer ownership of a
  Bancor liquidity pool.
---

# Managing Ownership of Liquidity Pools

### Accepting Ownership

{% hint style="info" %}
Note that only the address that has been transferred ownership will be able to accept.
{% endhint %}

From time to time, you may need to upgrade your **Converter** contract. In order to upgrade, you'll need to transfer ownership from the wallet that previously deployed the token contract. Once ownership has been transferred, the target address will have to accept it. 

* Navigate to the converter contract on Etherscan
* Execute the `acceptOwnership` function

### Transferring Ownership

In some cases, you may want to transfer ownership of your **Converter** contract. Most likely, you'll be doing this during the converter upgrade process. 

* Navigate to the converter contract on Etherscan
* In the `WriteContract` section, execute the `transferOwnership` function with the following parameter:
  * `_newOwner`: This is the address of the new owner or the **BancorConverterUpgrader** contract in the case of an upgrade

