---
description: >-
  This article outlines how a liquidity provider can add liquidity to or
  liquidate their pool tokens for Bancor liquidity pools. For ERC-20 token only.
---

# How to Fund / Liquidate Liquidity Pool Holdings

#### Liquidity Pool Liquidation Guide

This article outlines how a liquidity provider can fund or liquidate the holdings in their smart contract for ERC-20 tokens.This guide is intended to be used by experienced blockchain developers, and technical questions can be addressed to the [Bancor Developers Telegram Group.](https://t.me/BancorDevelopers)

The Bancor Converter contract has functions that allows users to fund the liquidity pool or liquidate part of or their entire liquidity pool holdings in a single atomic action. The functions were introduced to the Bancor Converter in version 11. Earlier versions must first be upgraded to version 11 or the latest version.

You will need:

* **\[Converter Address\]**
  * Find the pool token on Etherscan
  * Click the "read contract" tab
  * Go to "owner" 
  * This is the address of the converter currently used and the one we would need to use for funding/liquidation.
  * ![](https://lh5.googleusercontent.com/hERKC-Fbvw2-mrpaZKKBpfKNM3QNaymOCyVwhSzaBIp4BFjkcJoVL0FyVwuLXifqaRFki_gG_f9lpjGPt61AEbTNbHmkku5mlxS_4ZeayomXWjikKw4Lp9gb7BMo7z6BjS-upgoh)
* For funding:
  * Address and ABI of each reserve token - note that the ABI can be any standard ERC20 ABI - it doesn’t have to be specific to the reserve tokens\)
  * Access to a wallet that holds reserve tokens - all reserve tokens should be in the same wallet 
* For liquidation:
  * Access to the wallet that holds the pool tokens

## **To Fund a Liquidity Pool**

1. Go to mycrypto.com \(always use a trusted endpoint to execute transactions\)
2. Click “Contracts” in the top navigation menu ![](https://lh6.googleusercontent.com/DNHNpW6CDvJXCc4BFNlCrxvAajm5JBSnvSq0EmEkwHws-wWnZbHxspv4IwVwPnQF9KiLOwuLXfANiqlbz5uKQkUl-av8eCgnAOot_RgawJitdaZepEzSITZbK3IOpE0YxYVBFoY8)
3. The first step is to give the converter contract permission \(allowance\) to access some of the reserve tokens in your wallet.

For each reserve wallet:

1. 1. Paste the following:
      1. **Contract Address: \[Reserve Token Address\]**
      2. **ABI / JSON Interface:** 
         1. Copy/paste the ABI from this URL:
         2. https://etherscan.io/address/**\[Reserve Token Address\]**\#code 
      3. Click **“Access”**
   2. Scroll down to the next step
   3. Select the **“approve”** function from the drop down
   4. Enter the **\[Converter Address\]** in the \_spender field.
   5. Enter the amount that you’d like to fund with under \_value \(the name might be slightly different depending on the specific token\). The amount should be enough to cover the required pool amount \(you can put a higher amount if you’re not sure\)
   6. Sign in to your wallet \(this must be the wallet that holds the reserve tokens\)
   7. Click **“Write”**

 Once the permissions are in place, it’s time to do the actual funding.

1. Paste the following:
   1. **Contract Address: \[Converter Address\]**
   2. **ABI / JSON Interface:** 
      1. Copy/paste the ABI from this URL:
      2. https://etherscan.io/address/**\[Converter Address\]**\#code 
   3. Click **“Access”**
2. Scroll down to the next step
3. Select the **“fund”** function from the drop down
4. Enter the amount of the pool tokens that you’d like to receive under \_amount.
5. Sign in to your wallet \(this must be the wallet that holds the reserve tokens\)
6. Click **“Write”**
7. Done!

Note that when specifying the amount, you will need to put the wei amount as a whole number \(without decimal points\). So to fund with 1 reserve token, you usually need to put in 1000000000000000000.

Once this function is confirmed on the blockchain, the following will happen:

1. All reserve tokens will be transferred from your wallet into the liquidity pool
2. The amount of pool tokens you requested will be issued to your wallet
3. The amount of reserve tokens that will get transferred is equal to the ratio between the amount pool tokens that you requested and the current total supply of the pool tokens. So if you request to increase the liquidity by 50%, the amount of each reserve token that you transfer will be equal to 50% of the current liquidity pool reserve balance for each reserve.

## **To Liquidate a Liquidity Pool** 

1. Go to mycrypto.com \(always use a trusted endpoint to execute transactions\)
2. Click “Contracts” in the top navigation menu ![](https://lh6.googleusercontent.com/DNHNpW6CDvJXCc4BFNlCrxvAajm5JBSnvSq0EmEkwHws-wWnZbHxspv4IwVwPnQF9KiLOwuLXfANiqlbz5uKQkUl-av8eCgnAOot_RgawJitdaZepEzSITZbK3IOpE0YxYVBFoY8)
3. Paste the following:
   1. **Contract Address: \[Converter Address\]**
   2. **ABI / JSON Interface:** 
      1. Copy/paste the ABI from this URL:
      2. https://etherscan.io/address/**\[Converter Address\]**\#code 
   3. Click **“Access”**
4. Scroll down to the next step
5. Select the **“liquidate”** function from the drop down
6. Enter the amount that you’d like to liquidate under \_amount. You can liquidate part of your pool tokens or the entire amount
7. Sign in to your wallet \(this must be the wallet that owns the converter\)
8. Click **“Write”**
9. Done!

Note that when specifying the amount, you will need to put the wei amount as a whole number \(without decimal points\). So to liquidate 1 pool token, you usually need to put in 1000000000000000000.

Once this function is confirmed on the blockchain, the following will happen:

1. The amount you liquidate will be destroyed
2. You will receive both reserve tokens to the same account
3. The amount you receive is equal to the relative amount of pool tokens you hold, from each reserve. So if you hold 50% of the total supply of the pool tokens, you will receive 50% of each reserve balance.

Reference:

#### **Converter ABI**

**https://etherscan.io/address/\[Converter Address\]\#code**  




