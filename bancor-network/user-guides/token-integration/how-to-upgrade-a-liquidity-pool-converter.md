---
description: This guide outlines how to upgrade the converter of a liquidity pool
---

# How to Upgrade A Liquidity Pool Converter

For ERC-20 Tokens, we have created a smart contract that can be used to upgrade the converter of a Bancor liquidity pool in a single atomic action. All smart contract functions are public and all upgrades are opt-in. We highly recommend you upgrade your converters regularly for security reasons, and to support any other product improvements that could lead to gas cost reduction, etc.

New converter upgrades will be announced in the [Bancor Developers Telegram Group.](https://t.me/BancorDevelopers)

**You will need:**

* **\[Original Converter Address\]**
* Find your pool token on etherscan
* Click the "read contract" tab
* Go to "owner" 
* This is the address of the converter currently used and the one we would like to upgrade.
* ![gif\_1\_.gif](https://support.bancor.network/hc/article_attachments/360006559599/gif_1_.gif)
* Access to the wallet that owns the original converter
* \[BancorConverterUpgrader\] contract address
* Go to our registry [https://etherscan.io/address/0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4\#readContract](https://etherscan.io/address/0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4#readContract)
* Scroll to point 3 and enter “BancorConverterUpgrader” to receive the latest address to use:

![Bancor Coverter Address ](https://support.bancor.network/hc/article_attachments/360006541380/pic_2.png)

## Step 1 - Transfer Converter Ownership

First step is to transfer the converter ownership to the BancorConverterUpgrader smart contract. This will then allow you to execute the entire upgrade process with a single transaction. 

1. Go to mycrypto.com \(always use a trusted endpoint to execute transactions\)
2. Click “Contracts” in the top navigation menu![pic\_3.png](https://support.bancor.network/hc/article_attachments/360006541400/pic_3.png)
3. Paste the following:
   1. **Contract Address:** **\[Current Converter Address\]**
   2. **ABI / JSON Interface:** 
      1. Copy/paste the ABI from this URL:
      2. https://etherscan.io/address/**\[Current Converter Address\]**\#code 
   3. Click “**Access**”
4. Scroll down to the next step
5. Select the “**transferOwnership**” function from the drop down
6. Enter the “BancorConverterUpgrader” contract address under \_newOwner: **\[BancorConverterUpgrader\]** ![pic\_4.png](https://support.bancor.network/hc/article_attachments/360006559919/pic_4.png)
7. Sign in to your wallet \(this must be the wallet that owns the converter\)
8. Click “**Write**”
9. Proceed to **Step 2**

## Step 2 - Converter Upgrade 

### What the converter smart contract does:

1. New converter is created with the same values as the old converter in terms of supply, conversion fee, connector tokens and weight
2. Moves connector balances from old converter to new one
3. Transfers pool token ownership to the new converter \(this will assure all transactions of the pool tokens will work with the new converter\)
4. Transfer the old and new converter ownership to the original owner

**Important - when using the BancorConverterUpgrader, your users will experience NO down time!**

Estimate Gas cost is roughly 0.03 ETH

### Execution Process

1. Go to mycrypto.com \(always use a trusted endpoint to execute transactions\)
2. Click “Contracts” in the top navigation menu ![pic\_5.png](https://support.bancor.network/hc/article_attachments/360006559899/pic_5.png)
3. Paste the following:
   1. Enter the “BancorConverterUpgrader” contract address under **Contract Address**: **\[BancorConverterUpgrader\]**
   2. **ABI / JSON Interface:** Copy/paste the ABI from this URL: [https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverterUpgrader.abi](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverterUpgrader.abi)
   3. Click “**Access**”
4. Scroll down and you will see the next step
5. Select the “**upgradeOld**” function from the drop down
6. Enter the following:
   1. **\_converter** = **\[Original Converter Address\]**
   2. **\_version** =  0x302e37  \(if you use parity, replace this value with 0.7\)![pic\_6.png](https://support.bancor.network/hc/article_attachments/360006541800/pic_6.png)
7. Sign with your wallet \(this must be the wallet that owns the old converter\)
8. Click “Write”
9. View the transaction on etherscan and keep it open once confirmed. You will need this for the next step.
10. Proceed to Step 3

**Once this function is confirmed on the blockchain, the following will happen:**

* **Your converter will be upgraded to the latest version**
* Your pool token will be available for conversion \(there will be NO down time\)
* You will receive ownership of both the old and new converters

\*\*\*\*\*listen to etherscan

## Step 3 - Accept ownership and management 

At this stage, you will need to accept back the ownership over the converter \(both old and new\) from the Smart Contract.

For this you will need to go to the address of the converter and execute the function “accept ownership”.

Process:

1. On the upgrade action view on etherscan, click the “Event Logs” tab ![pic\_7.png](https://support.bancor.network/hc/article_attachments/360006541820/pic_7.png)
2. Scroll all the way to the bottom. Here you will see 3 values:
   1. Value \[0\] - hash data. You can ignore this part
   2. Value \[1\] - address of your original converter \(should equal  **\[New Converter Address\]**\)
   3. Value \[2\] - address of your new converter. 

Both \[1\] and \[2\] will be in a slightly different format from a normal address, simply copy the 40 rightmost numbers and add 0x to the beginning.

Example:

\[1\] 0x000000000000000000000000836c1b5ad499b0ff00d9ec13cc0ad97a1dba25d1

Address will be: 0x836c1b5ad499b0ff00d9ec13cc0ad97a1dba25d1

1. Go back to mycrypto.com
2. Open contract tab
3. Enter the  **\[Original Converter Address\]**
4. ABI from this URL: [https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi)
5. Click “Access”
6. In the drop down menu, select “acceptOwnership”
7. Click “Write”
8. Go to the drop down menu again, now select the action “acceptManagement”
9. Click “Write”
10. Repeat steps 5-11 only this time using the address of the new converter \(2.c\)
11. Done!

