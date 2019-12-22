---
description: The guide below will cover how to add Bancor's affiliate widget to your app.
---

# How to Create an Affiliate Widget



Any developer can now generate revenue \(up to 3% on each transaction\) by adding Bancor conversions into their product.

The guide below will cover how to add Bancor's affiliate widget to your app.

You can also embed Bancor's [pre-built affiliate widget](https://support.bancor.network/hc/en-us/articles/360010667060), or integrate affiliate fees directly on the blockchain, using Bancor's [blockchain conversion widget](https://github.com/nionis/bancor-conversion-widget) or in code by calling [Bancor's quickConvert function](https://docs.bancorfoundation.org/contracts/converter/bancorconverter#BancorConverter-quickConvert2-contract-IERC20Token---uint256-uint256-address-uint256-).

## How can you create a custom affiliate widget?

### Step 1

Visit 

[https://widget-](https://widget-convert.bancor.network/)[convert.bancor.network/](https://widget-convert.bancor.network/)

### Step 2

Adjust the widget settings as you wish

* Type - we allow you to work with 4 different options of widget. 
  * Default - this is the classic horizontal widget display that fits window width. 
  * no widget - for the places where you want to create your own button or call to action trigger that opens the widget
  * express - more focused on tokens with a large call to action
  * express vertical - if you'd like to set it on a sidebar, this is the option for you
* blockchainTypes - you can indicate to show only tokens from a specific blockchain
  * empty \(default\) - support tokens from all blockchains
  * ethereum - limit to ethereum
  * eos - limit to eos
  * poa - limit to poa you can select more than 1 option if you'd like to support partial list of blockchains.
* baseCurrencyId - the default token that will be visible in the toToken \(the destination token\)
* pairCurrencyId - the default token that will be visible in the fromToken \(the origin token you would like to start with or convert out of\)
* primaryColor - the main color of the widget. this will be used for all call to action items and texts.
* containerId - you can change the container name for the widget. suggested to leave as is if you are not sure.
* displayCurrency - in the widget we indicate the estimated value of each transaction in a display currency. you can set the widget to use one of 3 supported currencies:
  * USD
  * EUR
  * ETH
* primaryColorHover \(optional\) - for better user experience, we suggest using the hover color indication. this will allow users to see a different color when they hover on a button. 
* affiliateFee - the fee you wish to take from the transaction as an affiliate. Value should be passed as a decimal between 0-3.0000. For example, pass 1.5 if the fee is set to 1.5%.
* affiliateAccount - the recipient account that collects the affiliate fee from the transaction. Currently we support an Ethereum wallet address in this field. Please pass a valid Ethereum wallet. You will see an error if the wallet format is not valid.
* Check boxes
  * Hide Volume - select if you wish to hide volume from the widget. this only effects the "default" Type of the widget
  * Unlock Base Currency - select if you wish to enable the user to change both fromToken and toToken. if you leave it empty, the user will limited to convert from and to the token indicated in the toToken. for example, if you select toToken to be BNT, the widget will support any token to BNT or BNT to any token conversions.

### Step 3

Copy paste the code into your site

1. Insert the main div in the desired location - the widget will be injected into it

```text
<div class="bancor-wc" id="bancor-dd-id-1"></div>;
```

2. Insert these scripts at the end of your html file

```text
<script src="https://widget-convert.bancor.network/v1"></script>
<script>
const widgetInstance = BancorConvertWidget.createInstance({
    "type": "3",
    "baseCurrencyId": "594bb7e468a95e00203b048d",
    "pairCurrencyId": "5937d635231e97001f744267",
    "primaryColor": "#102644",
    "widgetContainerId": "bancor-dd-id-1",
    "displayCurrency": "ETH"
});
</script>
```

### step 4 \(optional\)

if you wish to open the widget with your own custom call to action, use this code \(relevant for "no widget" type\).

to open the popup programmatically, without the widget's buttons, run this: \([Click Here](javascript:void%280%29;) to try\)

```text
widgetInstance.showConvertPopup('')x
```

