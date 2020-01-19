---
description: >-
  This guide outlines how to temporarily enable or disable conversions of an
  ERC-20 Bancor liquidity pool
---

# How to Enable/Disable a Bancor Pool

There may be times when you want to temporarily disable conversions of a Bancor liquidity pool that you are the owner or manager of. The function can be called either by the owner or by the manager of the smart contract.

**You will need:**

* \[Converter Address\]
* Find your pool token on etherscan
* Click the "read contract" tab
* Go to "owner" 
* This is the address of the converter currently used for conversions and the one we would want to disable \(or enable\)
* Access to the owner or manager wallet that controls the converter

## Enable/Disable Process

1. Go to mycrypto.com \(always use a trusted endpoint to execute transactions\)
2. Click “Contracts” in the top navigation menu 
3. Paste the following:
   1. **Contract Address:** **\[Converter Address\]**
   2. **ABI / JSON Interface:** 
      1. Copy/paste the ABI from this URL:
      2. [https://etherscan.io/address/\*\*\[Converter](https://etherscan.io/address/**[Converter) Address\]\*\*\#code 
   3. Click “**Access**”
4. Scroll down to the next step
5. Select the “**disableConversions**” function from the drop down
6. Select ‘True’ to DISABLE conversions or ‘False’ to ENABLE conversions
7. Sign in to your wallet \(this must be the wallet that owns the converter\)
8. Click “**Write**”
9. Done!

**Once this function is confirmed on the blockchain, the following will happen:**

* **If the converter is disabled, all transactions that attempt to execute a conversion that involves the converter will fail**
* If the converter is enabled, the converter will continue operating normally

Reference:

### Converter ABI

[https://etherscan.io/address/\*\*\[Converter](https://etherscan.io/address/**[Converter) Address\]\*\*\#code

