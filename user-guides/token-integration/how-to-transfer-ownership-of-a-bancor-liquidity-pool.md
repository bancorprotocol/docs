---
description: >-
  This guide provides step-by-step instructions on how to transfer the ownership
  of a Bancor Liquidity Pool.
---

# How to Transfer Ownership of a Bancor Liquidity Pool

For reference the images are from MyEtherWallet yet you can execute the same process on MyCrypto.

\*Keep in mind that only the current owner can transfer the ownership to a new owner

## Step 1:

Go to MyEtherWallet, and choose contracts tab:![Screen\_Shot\_2018-11-27\_at\_17.17.53.png](https://support.bancor.network/hc/article_attachments/360015997132/Screen_Shot_2018-11-27_at_17.17.53.png)

Please paste the following data into the relevant fields:

```text
 a. Contract Address - paste the converter address \(the liquidity pool smart contract address whose ownership you wish to transfer\)

 b. Select Existing Contract - do not change this drop down.

 c. ABI / JSON Interface - copy the converter code from the URL below. 
```

This is the raw source code for any Bancor Smart Token ABI.

[contracts/build/SmartToken.abi](contracts/build/SmartToken.abi) d. Access - once the above information was entered, click the “access” button.  
![Screen\_Shot\_2018-11-27\_at\_17.20.27.png](https://support.bancor.network/hc/article_attachments/360015997292/Screen_Shot_2018-11-27_at_17.20.27.png)

## Step 2:

Once you click “ACCESS”, a new section below the button will appear with the options to perform actions on the converter address. Do not worry, only the owner can successfully perform actions.

```text
a. In the “Read / Write Contract” section, click the drop-down menu and select "transferOwnership" 

b. Enter the address of the new owner in the "\_newOwner" field. \(The new wallet address you wish to use\)
```

Once you select the relevant function, you will see a new section below the “Read / Write Contract” section you are on.

![Screen\_Shot\_2018-11-27\_at\_17.45.20.png](https://support.bancor.network/hc/article_attachments/360015999472/Screen_Shot_2018-11-27_at_17.45.20.png)

c. Select the option you wish in order to access your wallet \(make sure you are using the wallet that was assigned as the new “owner” of the pool token

d. Log into your account

e. Click “Write” to proceed with the “transferOwnership” action and move to the next step of executing it. ![Screen\_Shot\_2018-11-27\_at\_17.58.22.png](https://support.bancor.network/hc/article_attachments/360016044511/Screen_Shot_2018-11-27_at_17.58.22.png)

## Step 3:

Once you click, a new popup will appear![Screen\_Shot\_2018-11-27\_at\_18.00.40.png](https://support.bancor.network/hc/article_attachments/360015999832/Screen_Shot_2018-11-27_at_18.00.40.png) a. Fill out the following fields:

* Amount to send - keep this field empty
* Gas Limit - set the gas limit to 40,000 b. Click “Generate Transaction” c. Another section will now reveal. Click the “Yes, I am sure! Make Transaction”![Screen\_Shot\_2018-11-27\_at\_18.03.59.png](https://support.bancor.network/hc/article_attachments/360016044871/Screen_Shot_2018-11-27_at_18.03.59.png)

  Done! This will complete the process of “TransferOwnership”

  \*Keep in mind that only the current owner can transfer the ownership to a new owner

The New Owner will the have to accept ownership/management of the Bancor liquidity pool.

