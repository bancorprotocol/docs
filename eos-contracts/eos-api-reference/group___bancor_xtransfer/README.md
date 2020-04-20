# XTransferRerouter

## Group BancorXtransfer

[**Modules**](https://github.com/bancorprotocol/docs/tree/8f41a761c0e4e8a9a597f33b377ea0ee0bfda223/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorXtransfer**](./)

_XTransferRerouter contract._ [More...](./#detailed-description)

### Modules

| Type | Name |
| ---: | :--- |
| module | [**Settings Table**](group___xtransfer___settings___table.md)  _Basic minimal settings._ |

### Public Functions

| Type | Name |
| ---: | :--- |
| ACTION | [**enablerrt**](./#function-enablerrt) \(bool enable\)  _can only be called by the contract account_ |
| ACTION | [**reroutetx**](./#function-reroutetx) \(uint64\_t tx\_id, string blockchain, string target\)  _only the original sender may reroute an invalid transaction_ |

### Macros

| Type | Name |
| ---: | :--- |
| define | [**EMIT\_TX\_REROUTE\_EVENT**](./#define-emit-tx-reroute-event) \(tx\_id, blockchain, target\)  _events triggered when an account reroutes an xtransfer transaction_ |

## Detailed Description

Allows rerouting transactions sent to BancorX with invalid parameters.

### Public Functions Documentation

#### [function enablerrt](./#function-enablerrt) <a id="function-enablerrt"></a>

```cpp
ACTION enablerrt (
    bool enable
)
```

**Parameters:**

* `enable` - true to enable rerouting xtransfers, false to disable it 

#### [function reroutetx](./#function-reroutetx) <a id="function-reroutetx"></a>

```cpp
ACTION reroutetx (
    uint64_t tx_id,
    string blockchain,
    string target
)
```

allows an account to change xtransfer transaction details if the original transaction parameters were invalid \(e.g non-existent destination blockchain/target\)

**Parameters:**

* `tx_id` - unique transaction id 
* `blockchain` - target blockchain 
* `target` - target account/address 

### Macro Definition Documentation

#### [define EMIT\_TX\_REROUTE\_EVENT](./#define-emit-tx-reroute-event) <a id="define-emit-tx-reroute-event"></a>

```cpp
#define EMIT_TX_REROUTE_EVENT (
    tx_id,
    blockchain,
    target
) START_EVENT("txreroute", "1.1") \
    EVENTKV("tx_id",tx_id) \
    EVENTKV("blockchain",blockchain) \
    EVENTKVL("target",target) \
    END_EVENT()
```

