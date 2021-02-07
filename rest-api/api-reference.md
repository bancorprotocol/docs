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
[{
    "data": [{
        "dlt_type": "ethereum",
        "dlt_id": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
        "symbol": "BNT",
        "name": "Bancor Network Token",
        "decimals": 18,
        "liquidity": {
            "usd": "178502745.931707"
        },
        "price": {
            "usd": "2.369000"
        },
        "price_24h_ago": {
            "usd": "2.496500"
        },
        "volume_24h": {
            "usd": "20393956.486161"
        }
    }]
},
...
]
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
[{
    "data": [{
        "reserves": [{
            "dlt_id": "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
            "symbol": "BNT",
            "name": "Bancor Network Token",
            "balance": {
                "usd": "16850566.984558724465641618"
            },
            "weight": 500000,
            "price": {
                "usd": "2.370500"
            },
            "price_24h_ago": {
                "usd": "2.502500"
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
                "usd": "2018.655878"
            },
            "price_24h_ago": {
                "usd": "2148.301887"
            }
        }],
        "dlt_type": "ethereum",
        "dlt_id": "0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533",
        "type": 3,
        "version": 44,
        "symbol": "ETHBNT",
        "name": "ETH/BNT",
        "supply": "26631304.427665387148466071",
        "converter_dlt_id": "0xe24C8bbDBA150aa3Cb13C785d3A19D012dDC1e86",
        "conversion_fee": "0.1",
        "liquidity": {
            "usd": "79652630.136009"
        },
        "volume_24h": {
            "usd": "8412041.183004"
        },
        "fees_24h": {
            "usd": "8420.461472"
        }
    }]
},
...
]
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

