# API Reference

{% api-method method="get" host="https://api-v2.bancor.network" path="/tokens" %}
{% api-method-summary %}
Tokens
{% endapi-method-summary %}

{% api-method-description %}
Returns all tradable tokens in the Bancor Network, along with their metadata, liquidity, volume and pricing info.  
You can provide an optional filter in order to only receive data for a specific token.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dlt\_type" type="string" %}
blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="dlt\_id" type="string" %}
token id \(address\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
	"data": [{
		"dlt_type": "ethereum",
		"dlt_id": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
		"symbol": "BNT",
		"name": "Bancor Network Token",
		"decimals": 18,
		"liquidity": {
			"usd": "208974925.739873"
		},
		"price": {
			"usd": "2.742000"
		},
		"price_24h_ago": {
			"usd": "2.748000"
		},
		"volume_24h": {
			"usd": "2689789.534580",
			"base": "13067302.363768235719295110"
		}
	}]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/pools" %}
{% api-method-summary %}
Pools
{% endapi-method-summary %}

{% api-method-description %}
Returns all pools in the Bancor Network, along with their metadata, liquidity, volume and pricing info.  
You can provide an optional filter in order to only receive data for a specific pool.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dlt\_type" type="string" required=false %}
blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="dlt\_id" type="string" required=false %}
pool id \(pool token address\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```text
{
	"data": [{
		"reserves": [{
			"dlt_id": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
			"symbol": "BNT",
			"name": "Bancor Network Token",
			"balance": {
				"usd": "17552731.135069373164339744"
			},
			"weight": 500000,
			"price": {
				"usd": "2.736000"
			},
			"price_24h_ago": {
				"usd": "2.746000"
			},
			"volume_24h": {
				"usd": "18064772.829577",
				"base": "5422266.457796686492994259"
			}
		}, {
			"dlt_id": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
			"symbol": "ETH",
			"name": "",
			"balance": {
				"usd": "19729.125454948233055202"
			},
			"weight": 500000,
			"price": {
				"usd": "2437.295411"
			},
			"price_24h_ago": {
				"usd": "2460.918815"
			},
			"volume_24h": {
				"usd": "18064772.829577",
				"base": "8565.256376663367063464"
			}
		}],
		"dlt_type": "ethereum",
		"dlt_id": "0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533",
		"type": 3,
		"version": 44,
		"symbol": "ETHBNT",
		"name": "ETH/BNT",
		"supply": "28569728.028646077727740944",
		"converter_dlt_id": "0xe24C8bbDBA150aa3Cb13C785d3A19D012dDC1e86",
		"conversion_fee": "0.1",
		"liquidity": {
			"usd": "96136308.426774"
		},
		"volume_24h": {
			"usd": "18064772.829577"
		},
		"fees_24h": {
			"usd": "18082.855422"
		}
	}]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/stats" %}
{% api-method-summary %}
Stats
{% endapi-method-summary %}

{% api-method-description %}
Returns global stats of the Bancor Network.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
	"data": {
		"num_tokens": 264,
		"num_pools": 286,
		"volume_24h": {
			"usd": "70700321.566346"
		},
		"volume_7d": {
			"usd": "404181182.167546"
		},
		"fees_24h": {
			"usd": "112835.290829"
		},
		"fees_7d": {
			"usd": "636353.956783"
		}
	}
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/history/liquidity-depth" %}
{% api-method-summary %}
Liquidity Depth History
{% endapi-method-summary %}

{% api-method-description %}
Returns the global liquidity depth history in the network.  
You can provide an optional filter in order to receive the liquidity depth for a specific token.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dlt\_type" type="string" required=false %}
blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="token\_dlt\_id" type="string" required=false %}
token id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="start\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="end\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="interval" type="string" required=true %}
data interval \(minute/15minutes/hour/day/week\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
	"data": [{
		"timestamp": 1621944000000,
		"bnt": "306421865.239698943720448814",
		"usd": "1305803296.156803",
		"eur": "1065651594.134359",
		"eth": "530507.694882020956352443",
		"eos": "248593096.243309918420224389"
	}, {
		"bnt": "306322279.676858317991294018",
		"timestamp": 1621947600000,
		"usd": "1329498732.964277",
		"eur": "1085534479.761228",
		"eth": "523161.305394348260740199",
		"eos": "248959828.854510739144863767"
	}, {
		"bnt": "306310082.480868525144033734",
		"timestamp": 1621951200000,
		"usd": "1362723814.014856",
		"eur": "1112936478.074103",
		"eth": "526305.826298173776139373",
		"eos": "254443160.086881622217879521"
	}, {
		"bnt": "306577656.137718081989192962",
		"timestamp": 1621954800000,
		"usd": "1375511852.730342",
		"eur": "1124197578.310357",
		"eth": "528229.849682794482895123",
		"eos": "250846836.284658826334044374"
	}, {
		"bnt": "306313635.055366040145459986",
		"timestamp": 1621958400000,
		"usd": "1364626018.917013",
		"eur": "1115125905.323545",
		"eth": "528448.248944033221788770",
		"eos": "252058062.728085588624920331"
	}, {
		"bnt": "306557477.445338853028411466",
		"timestamp": 1621962000000,
		"usd": "1363966184.397453",
		"eur": "1113760102.456109",
		"eth": "529334.142233576180977544",
		"eos": "255504150.093387336435385951"
	}, {
		"bnt": "308946740.660136718553318274",
		"timestamp": 1621965600000,
		"usd": "1379662434.364161",
		"eur": "1125816986.823468",
		"eth": "533802.038626445323916657",
		"eos": "255594865.297572302231017305"
	}, {
		"bnt": "309087595.879754662032467050",
		"timestamp": 1621969200000,
		"usd": "1335986315.488740",
		"eur": "1090851415.897269",
		"eth": "533506.190416394476446700",
		"eos": "256386945.726826679865716442"
	}]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}



{% api-method method="get" host="https://api-v2.bancor.network" path="/history/volume" %}
{% api-method-summary %}
Volume History
{% endapi-method-summary %}

{% api-method-description %}
Returns the global volume history in the network.  
You can provide an optional filter in order to receive the volume for a specific token.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dlt\_type" type="string" required=false %}
blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="token\_dlt\_id" type="string" required=false %}
token id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="start\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="end\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="interval" type="string" required=true %}
data interval \(minute/15minutes/hour/day/week\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
	"data": [{
		"timestamp": 1621944000000,
		"bnt": "1047835.395176379086145978",
		"usd": "4412670.562287",
		"eur": "3599408.488969",
		"eth": "1808.712682797840888285",
		"eos": "846621.215263795165658720"
	}, {
		"bnt": "1672717.584406960779189689",
		"timestamp": 1621947600000,
		"usd": "7255862.006245",
		"eur": "5922645.794985",
		"eth": "2884.424150892768828438",
		"eos": "1357234.080092951937587400"
	}, {
		"bnt": "1792100.060296478029137492",
		"timestamp": 1621951200000,
		"usd": "7995781.568117",
		"eur": "6525514.970087",
		"eth": "3067.456371679518365193",
		"eos": "1475804.966759662667673302"
	}, {
		"bnt": "2444388.487737920498902362",
		"timestamp": 1621954800000,
		"usd": "10835050.104863",
		"eur": "8852585.361992",
		"eth": "4184.016814080772871318",
		"eos": "2006471.632252668765325681"
	}, {
		"bnt": "1536683.395992663009088032",
		"timestamp": 1621958400000,
		"usd": "6836643.660836",
		"eur": "5588001.443650",
		"eth": "2650.014444336059905658",
		"eos": "1261357.679435441599275196"
	}, {
		"bnt": "605662.338066649515946089",
		"timestamp": 1621962000000,
		"usd": "2679855.677525",
		"eur": "2188445.135624",
		"eth": "1044.022759634898725425",
		"eos": "502451.243036379173599699"
	}, {
		"bnt": "528482.411953943595437324",
		"timestamp": 1621965600000,
		"usd": "2363204.506690",
		"eur": "1928891.477034",
		"eth": "909.994184939028506124",
		"eos": "436523.566198152598560405"
	}, {
		"bnt": "1097689.210909705268709960",
		"timestamp": 1621969200000,
		"usd": "4835711.504670",
		"eur": "3947424.668923",
		"eth": "1892.919713880954141463",
		"eos": "912523.660334257811380180"
	}, {
		"bnt": "591325.948735818056365286",
		"timestamp": 1621972800000,
		"usd": "2587644.898841",
		"eur": "2112725.858375",
		"eth": "1016.288932241581177255",
		"eos": "489014.216523857702949750"
	}, {
		"bnt": "905262.532450578112639183",
		"timestamp": 1621976400000,
		"usd": "4019295.887515",
		"eur": "3280987.493575",
		"eth": "1557.308513912558711859",
		"eos": "743494.350566489195791048"
	}, {
		"bnt": "1629115.955708226621400835",
		"timestamp": 1621980000000,
		"usd": "7463336.181511",
		"eur": "6091563.703135",
		"eth": "2783.749847174619410226",
		"eos": "1348803.541721320426309567"
	}, {
		"bnt": "1111322.836114528815488540",
		"timestamp": 1621983600000,
		"usd": "5135640.660172",
		"eur": "4192396.663274",
		"eth": "1902.603349649947269273",
		"eos": "910489.315485314653592850"
	}, {
		"bnt": "1921477.136130184053097311",
		"timestamp": 1621987200000,
		"usd": "8844570.239569",
		"eur": "7219664.528994",
		"eth": "3288.902233603181119841",
		"eos": "1567423.110669793285218746"
	}, {
		"bnt": "2383917.837829764084981317",
		"timestamp": 1621990800000,
		"usd": "11209599.890736",
		"eur": "9153815.151157",
		"eth": "4111.875120381297624274",
		"eos": "1942246.617071132042723019"
	}, {
		"bnt": "1976506.546829144784462422",
		"timestamp": 1621994400000,
		"usd": "9523765.446143",
		"eur": "7775474.913880",
		"eth": "3399.199386652207190863",
		"eos": "1606168.250567866095647637"
	}]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/history/price" %}
{% api-method-summary %}
Price History
{% endapi-method-summary %}

{% api-method-description %}
Returns the price history for a given token in the network.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="dlt\_type" type="string" required=true %}
blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="token\_dlt\_id" type="string" required=true %}
token id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="quote\_symbol" type="string" required=true %}
currency to return the result in \(bnt/eth/eos/usd/eur\)
{% endapi-method-parameter %}

{% api-method-parameter name="start\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="end\_date" type="integer" required=true %}
unix time
{% endapi-method-parameter %}

{% api-method-parameter name="interval" type="string" required=true %}
data interval \(minute/15minutes/hour/day/week\)
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
{
	"data": [{
		"usd": {
			"first": "4.243163",
			"last": "4.151721",
			"high": "4.243163",
			"low": "4.128641"
		},
		"timestamp": 1621944000000
	}, {
		"usd": {
			"first": "4.243163",
			"last": "4.151721",
			"high": "4.243163",
			"low": "4.128641"
		},
		"timestamp": 1621944900000
	}, {
		"usd": {
			"first": "4.243163",
			"last": "4.151721",
			"high": "4.243163",
			"low": "4.128641"
		},
		"timestamp": 1621945800000
	}, {
		"usd": {
			"first": "4.137979",
			"last": "4.261456",
			"high": "4.261456",
			"low": "4.137979"
		},
		"timestamp": 1621946700000
	}, {
		"usd": {
			"first": "4.286006",
			"last": "4.292499",
			"high": "4.331170",
			"low": "4.286006"
		},
		"timestamp": 1621947600000
	}, {
		"usd": {
			"first": "4.281301",
			"last": "4.392425",
			"high": "4.392425",
			"low": "4.281301"
		},
		"timestamp": 1621948500000
	}, {
		"usd": {
			"first": "4.403701",
			"last": "4.428025",
			"high": "4.428025",
			"low": "4.403701"
		},
		"timestamp": 1621949400000
	}, {
		"usd": {
			"first": "4.376424",
			"last": "4.340196",
			"high": "4.376424",
			"low": "4.340196"
		},
		"timestamp": 1621950300000
	}, {
		"usd": {
			"first": "4.318231",
			"last": "4.421192",
			"high": "4.421192",
			"low": "4.318231"
		},
		"timestamp": 1621951200000
	}]
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/transactions/swap" %}
{% api-method-summary %}
Trade Transaction Creation
{% endapi-method-summary %}

{% api-method-description %}
Creates a trade transaction, ready to be signed by the user wallet.  
Note that if approval is required, the API will also return the necessary approval transactions.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="source\_dlt\_type" type="string" required=true %}
source token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="source\_dlt\_id" type="string" required=true %}
source id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_type" type="string" required=true %}
target token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_id" type="string" required=true %}
target id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="amount" type="number" required=true %}
source amount - decimal, may include decimal point
{% endapi-method-parameter %}

{% api-method-parameter name="min\_return" type="number" required=true %}
the transaction will fail if the trade returns a value smaller than this one
{% endapi-method-parameter %}

{% api-method-parameter name="user\_source\_dlt\_id" type="string" required=true %}
user wallet/account \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="nonce" type="number" required=false %}
default: node default
{% endapi-method-parameter %}

{% api-method-parameter name="gas\_price" type="number" required=false %}
gas price in wei. default: node default
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
WBTC -&gt; ETH trade transaction creation request:  
`https://api-v2.bancor.network/transactions/swap?source_dlt_type=ethereum&source_dlt_id=0x2260fac5e5542a773aa44fbcfedf7c193bc2c599&target_dlt_type=ethereum&target_dlt_id=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=2.5&min_return=9&user_source_dlt_id=0xe1d66536b09b6f99e0d5510da0a6dea4ab66cd13`  
The response includes 2 transactions - the first one is an approve transaction, while the second one is the actual trade transaction.
{% endapi-method-response-example-description %}

```
[{
	"dlt_type": "ethereum",
	"transaction": {
		"data": "0x095ea7b30000000000000000000000002f9ec37d6ccfff1cab21733bdadede11c823ccb0000000000000000000000000000000000000000000000000000000000ee6b280",
		"to": "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
		"nonce": 0,
		"from": "0xe1d66536b09b6f99e0d5510da0a6dea4ab66cd13"
	}
}, {
	"dlt_type": "ethereum",
	"transaction": {
		"data": "0xb77d239b00000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000ee6b2800000000000000000000000000000000000000000000000007facf7419d98000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000050000000000000000000000002260fac5e5542a773aa44fbcfedf7c193bc2c599000000000000000000000000fee7eeaa0c2f3f7c7e6301751a8de55ce4d059ec0000000000000000000000001f573d6fb3f13d689ff844b4ce37794d79a7ff1c000000000000000000000000b1cd6e4153b2a390cf00a6556b0fc1458c4a5533000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
		"to": "0x2F9EC37d6CcFFf1caB21733BdaDEdE11c823cCB0",
		"nonce": 1,
		"from": "0xe1d66536b09b6f99e0d5510da0a6dea4ab66cd13"
	}
}]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/pricing/target-amount" %}
{% api-method-summary %}
Expected Target Amount
{% endapi-method-summary %}

{% api-method-description %}
Returns the expected target amount, given source/target tokens and source amount.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="source\_dlt\_type" type="string" required=true %}
source token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="source\_dlt\_id" type="string" required=true %}
source id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_type" type="string" required=true %}
target token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_id" type="string" required=true %}
target id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="amount" type="number" required=true %}
source amount - decimal, may include decimal point
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
To get the expected ETH amount for trading 1 BNT:  
`https://api-v2.bancor.network/pricing/target-amount?source_dlt_type=ethereum&source_dlt_id=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C&target_dlt_type=ethereum&target_dlt_id=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=1`
{% endapi-method-response-example-description %}

```
{
	"amount": "0.001318822674619802"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

{% api-method method="get" host="https://api-v2.bancor.network" path="/pricing/source-amount" %}
{% api-method-summary %}
Expected Source Amount
{% endapi-method-summary %}

{% api-method-description %}
Returns the expected source amount, given source/target tokens and target amount.
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-query-parameters %}
{% api-method-parameter name="source\_dlt\_type" type="string" required=true %}
source token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="source\_dlt\_id" type="string" required=true %}
source id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_type" type="string" required=true %}
target token blockchain type \(ethereum\)
{% endapi-method-parameter %}

{% api-method-parameter name="target\_dlt\_id" type="string" required=true %}
target id \(address\)
{% endapi-method-parameter %}

{% api-method-parameter name="amount" type="number" required=true %}
target amount - decimal, may include decimal point
{% endapi-method-parameter %}
{% endapi-method-query-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
To get the required amount of BNT that will return 1 ETH:  
`https://api-v2.bancor.network/pricing/source-amount?source_dlt_type=ethereum&source_dlt_id=0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C&target_dlt_type=ethereum&target_dlt_id=0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE&amount=1`
{% endapi-method-response-example-description %}

```
{
	"amount": "755.722900317536461992"
}
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

