---
description: This guide outlines how to add Bancor's affiliate widget to your app
---

# Creating an Affiliate Widget

Any developer can generate revenue \(up to 3% on each transaction\) by adding Bancor trading into their product. 

This guide will discuss how to create an affiliate widget, but you can also embed Bancor's [pre-built affiliate widget](https://github.com/nionis/bancor-conversion-widget) into your app to earn affiliate fees directly on the blockchain, or in code by calling [Bancor's quickConvert function](https://docs.bancorfoundation.org/contracts/converter/bancorconverter#ConverterBase-quickConvert2-contract-IERC20Token---uint256-uint256-address-uint256-). 

### Step \#1: Configure Your Widget

* Navigate to the Bancor Convert Widget [site](https://widget-convert.bancor.network/)
* Configure the widget settings as you wish:
  * **Type**: We allow you to work with 4 different options of widget. 
    * `Default` : This is the classic horizontal widget display that fits window width. 
    * `No Widget` : This option allows you to create your own button or call to action trigger that opens the widget
    * `Express` : This is more focused on tokens with a large call to action
    * `Express Vertical` : This is the correct option for if you'd like to set the widget on a sidebar
  * **blockchainTypes:** You can choose to show tokens from a specific blockchain only
    * `empty (default)`: Support tokens from all blockchains
    * `ethereum` : Limit to Ethereum tokens
    * `eos` : Limit to EOS tokens
    * `poa` : Limit to PoA
    *  You can select more than 1 option if you'd like to support partial list of blockchains.
  * **baseCurrencyId:** This is the default token that will be visible in the toToken \(the destination token\)
  * **pairCurrencyId:** This is the default token that will be visible in the fromToken \(the origin token you would like to start with or convert out of\)
  * **primaryColor:** This is the main color of the widget. It will be used for all call-to-action items and text
  * **containerId:** You can change the container name for the widget. We suggest that you leave this as is if you're not sure
  * **displayCurrency:** On the widget, we indicate the estimated value of each transaction in a display currency. You can set the widget to use one of 3 supported currencies:
    * `USD`
    * `EUR`
    * `ETH`
  * **primaryColorHover** \(optional\): For better user experience, we suggest using the hover color indication. This will allow users to see a different color when they hover on a button
  * **affiliateFee:** This is the fee you wish to take from the transaction as an affiliate. Value should be passed as a decimal between 0-3.0000. For example, pass 1.5 if the fee is set to 1.5%.
  * **affiliateAccount:** This is the recipient account that collects the affiliate fee from the transaction. Currently we support an Ethereum wallet address in this field. Please pass a valid Ethereum wallet. You will see an error if the wallet format is not valid.
  * **Hide Volume:** Select this checkbox if you wish to hide volume generated from the widget. This is only relevant for the "**default**" widget Type
  * **Unlock Base Currency:** Select this checkbox if you wish to enable the user to change both `fromToken` and `toToken`. If you leave this empty, the user will limited to convert from and to the token indicated in the `toToken`. For example, if you select `toToken` to be **BNT**, the widget will support any token-to-BNT or BNT-to-token conversions.

### Step \#2: Embed Your Widget

Time to copy and paste the code into your site.

* Paste the main `div` into the desired location on your site. The widget will be injected here.

```text
<div class="bancor-wc" id="bancor-dd-id-1"></div>;
```

* Insert these scripts at the end of your html file \(use the snippet on the widget site\)

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

If you wish to open the widget with your own custom call-to-action, use this code \(relevant for the "no widget" type\).

To open the popup programmatically, run this snippet: \([Click Here](javascript:void%280%29;) to try\)

```text
widgetInstance.showConvertPopup('')x
```

[  
](https://docs.bancor.network/user-guides/token-integration/how-to-upgrade-a-liquidity-pool-converter)



