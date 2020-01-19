---
description: >-
  This guide instructs how a new owner can accept ownership of a Bancor
  liquidity pool.
---

# How to Accept Ownership of a Bancor Liquidity Pool

The entity that creates a Bancor liquidity pool may want to transfer ownership to a new owner or manager. This guide will show you how to do that. For the sake of simplicity, we will outline the process using MyEtherWallet \(you can select MyCrypto as well\). Follow these steps carefully:

## Step 1:

Go to MyEtherWallet, and choose contracts tab:![Screen\_Shot\_2018-08-05\_at\_16.12.54.png](https://support.bancor.network/hc/article_attachments/360008672831/Screen_Shot_2018-08-05_at_16.12.54.png)

Please paste the following data into the relevant fields:

```text
 a. Contract Address - paste the converter address received from Bancor support

 b. Select Existing Contract - do not change this drop down.

 c. ABI / JSON Interface - copy the converter code from the URL below. 
```

This will enable you to perform the “accept ownership” function on the converter address.

[https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi](https://raw.githubusercontent.com/bancorprotocol/contracts/master/solidity/build/BancorConverter.abi)

```text
 d. Access - once the above information was entered, click the “access” button. 
```

![Screen\_Shot\_2018-08-05\_at\_16.14.55.png](https://support.bancor.network/hc/article_attachments/360008672851/Screen_Shot_2018-08-05_at_16.14.55.png)

## Step 2:

Once you click “ACCESS”, a new section below the button will appear with the options to perform actions on the converter address. Do not worry, only the owner can successfully perform actions.

You will need to perform 2 actions in order to complete the process:

```text
 a. Accept ownership

 b. Accept management
```

### Accept Ownership:

In the “Read / Write Contract” section,

```text
 c. Click the drop-down menu
```

d. Select “AcceptOwnership” \(Note, there are few “accept” functions. Make sure you select the “AcceptOwnership” one\)

Once you select the relevant function, you will see a new section below the “Read / Write Contract” section you are on.

![Screen\_Shot\_2018-08-05\_at\_17.26.53.png](https://support.bancor.network/hc/article_attachments/360008639512/Screen_Shot_2018-08-05_at_17.26.53.png)

```text
e. Select the option you wish in order to access your wallet \(make sure you are using the wallet that was assigned as the new “owner” of the pool token

f. Log in to your account

g. Click “Write” to proceed with the “AcceptOwnership” action and move to the next step of executing it
```

![Screen\_Shot\_2018-08-05\_at\_17.29.26.png](https://support.bancor.network/hc/article_attachments/360008639552/Screen_Shot_2018-08-05_at_17.29.26.png)

```text
h. Once you click, a new popup will appear![Screen\_Shot\_2018-08-05\_at\_17.30.50.png](https://support.bancor.network/hc/article_attachments/360008639572/Screen_Shot_2018-08-05_at_17.30.50.png)

i. Fill the following fields:
```

* Amount to send - keep this field empty
* Gas Limit - set the gas limit to 40,000

  j. Click “Generate Transaction”

  k. Another section will now reveal. Click the “Yes, I am sure! Make Transaction”![Screen\_Shot\_2018-08-05\_at\_17.35.03.png](https://support.bancor.network/hc/article_attachments/360008639632/Screen_Shot_2018-08-05_at_17.35.03.png)

  Done! This will complete the process of “Accept Ownership”

### Accept Management:

In the “Read / Write Contract” section,

a. Click the drop-down menu

b. Select “AcceptManagement” \(Note, there are few “accept” functions. Make sure you select the “AcceptManagement” one\)

Once you select the relevant function, you will see a new section below the “Read / Write Contract” section you are on.

![Screen\_Shot\_2018-08-06\_at\_14.16.09.png](https://support.bancor.network/hc/article_attachments/360008691931/Screen_Shot_2018-08-06_at_14.16.09.png)

c. Select the option you wish in order to access your wallet \(make sure you are using the wallet that was assigned as the new “owner” of the pool token

d. Log in to your account

e. Click “Write” to proceed with the “AcceptManagment” action and move to the next step of executing it

![Screen\_Shot\_2018-08-06\_at\_14.20.19.png](https://support.bancor.network/hc/article_attachments/360008656712/Screen_Shot_2018-08-06_at_14.20.19.png)

```text
 f. Once you click, a new popup will appear![Screen\_Shot\_2018-08-06\_at\_14.22.05.png](https://support.bancor.network/hc/article_attachments/360008692171/Screen_Shot_2018-08-06_at_14.22.05.png)
```

g. Fill the following fields:

* Amount to send - keep this field empty
* Gas Limit - set the gas limit to 40,000

  h. Click “Generate Transaction”

  i. Another section will now reveal. Click the “Yes, I am sure! Make Transaction”![Screen\_Shot\_2018-08-06\_at\_14.26.39.png](https://support.bancor.network/hc/article_attachments/360008692191/Screen_Shot_2018-08-06_at_14.26.39.png)

Done! This will complete the process of “Accept Ownership”

