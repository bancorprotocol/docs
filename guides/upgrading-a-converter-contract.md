---
description: This guide outlines how to upgrade the converter of a liquidity pool
---

# Upgrading a Converter Contract

For ERC-20 Tokens, we have created a smart contract that can be used to upgrade the converter of a Bancor liquidity pool in a single atomic action. All smart contract functions are public and all upgrades are opt-in. We highly recommend you upgrade your converters regularly for security reasons, and to support any other product improvements that could lead to gas cost reduction, etc.

New converter upgrades will be announced in the [Bancor Developers Telegram Group.](https://t.me/BancorDevelopers)

{% hint style="info" %}
Note that only the current owner of a pool will be able to upgrade the contract.
{% endhint %}

### Step \#1: Transfer Ownership

First, you'll need to find your current **Converter** contract address.

* Navigate to your **Pool Token** contract on Etherscan
* Under the `Read Contract` tab, find the return value under the `owner` function. This is your converter address

Next, you'll need to find the current address of the **BancorConverterUpgrader** contract.

* Navigate to our **ContractRegistry** contract [here](https://etherscan.io/address/0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4#readContract)
* Enter **0x42616e636f72436f6e7665727465725570677261646572** in the `getAddress` function to find the Upgrader address. This input is the bytes32 representation of "BancorConverterUpgrader". Save this returned address for Step \#2. 

Finally, navigate to your **Converter** contract on Etherscan and find the `WriteContract` section.

* Execute the `transferOwnership` function with the following parameter:
  * `_newOwner`: This is the address of the **BancorConverterUpgrader** contract you found above

This step transfers ownership of the contract briefly to Bancor in order to run the upgrade process.

### Step \#2: Execute the Upgrade

Rest assured that all the token weight, pool balance and conversion fee details will remain the same post-upgrade. Additionally, your converter will experience zero downtime. Your users will not be affected in any way.

* Navigate to the Etherscan `Write Contract` page of the **BancorConverterUpgrader**. This is the addresses you queried for in the previous step.
* Execute the `upgradeOld` function with the following parameters:
  * `_converter`: This is your converter's old address, i.e., the address you just transferred ownership of.
  * `_version`: **0x302e37** - the latest version

### Step \#3: Accept Ownership and Management

At this stage, you'll need to accept back the ownership over the converter \(both old and new\) from the Smart Contract. 

First, let's find the address of your new converter.

* On the **BancorConverterUpgrader** Etherscan page, navigate to the `Events` tab
* You should see the `ConverterUpgrade` event from your recent transaction \(if you're unsure which belongs to you, find the log with a **topic1** value that includes your old converter address
* Your new address is in **topic2** in the event log. To extract the address currently from the topic value, copy the rightmost 40 characters and add "0x" to the beginning

With the new converter address, open a new Etherscan `Write Contract` view. 

* Execute the `acceptOwnership` function
* Execute the `acceptManagement` function

Now, return to your original converter address

* Execute the `acceptOwnership` function
* Execute the `acceptManagement` function

Done!







