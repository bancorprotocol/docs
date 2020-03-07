# BancorX

## Group BancorX

[**Modules**](https://github.com/bancorprotocol/docs/tree/8f41a761c0e4e8a9a597f33b377ea0ee0bfda223/api-reference/eos-smart-contracts/modules.md) **&gt;** [**BancorX**](./)

_The BancorX contract allows cross chain token transfers._ [More...](./#detailed-description)

### Modules

| Type | Name |
| ---: | :--- |
| module | [**Amounts Table**](group___amounts___table.md)  _This table quantities for cross-transfers._ |
| module | [**Reporters Table**](group___reporters___table.md)  _This table stores the account names of BancorX reporters_  _!_ |
| module | [**Transfers Table**](group___tranfsers___table.md)  _This table stores transfer stats._ |
| module | [**Settings Table**](group___x_settings___table.md)  _This table stores settings for cross-transfers._ |

### Public Functions

| Type | Name |
| ---: | :--- |
| ACTION | [**addreporter**](./#function-addreporter) \(name reporter\)  _adds a new reporter, can only be called by the contract account_ |
| ACTION | [**clearamount**](./#function-clearamount) \(uint64\_t x\_transfer\_id\)  _closes row in amounts table, can only be called by bnt token contract or self_ |
| ACTION | [**enablerpt**](./#function-enablerpt) \(bool enable\)  _can only be called by the contract account_ |
| ACTION | [**enablext**](./#function-enablext) \(bool enable\)  _can only be called by the contract account_ |
| ACTION | [**init**](./#function-init) \(name x\_token\_name, uint64\_t min\_reporters, uint64\_t min\_limit, uint64\_t limit\_inc, uint64\_t max\_issue\_limit, uint64\_t max\_destroy\_limit\)  _initializes the contract settings_ |
| void | [**on\_transfer**](./#function-on-transfer) \(name from, name to, asset quantity, string memo\)  _transfer intercepts with standard transfer args_ |
| ACTION | [**reporttx**](./#function-reporttx) \(name reporter, string blockchain, uint64\_t tx\_id, uint64\_t x\_transfer\_id, name target, asset quantity, string memo, string data\)  _reports an incoming transaction from a different blockchain_ |
| ACTION | [**rmreporter**](./#function-rmreporter) \(name reporter\)  _removes an existing reporter, can only be called by the contract account_ |
| ACTION | [**update**](./#function-update) \(uint64\_t min\_reporters, uint64\_t min\_limit, uint64\_t limit\_inc, uint64\_t max\_issue\_limit, uint64\_t max\_destroy\_limit\)  _updates the contract settings_ |

### Macros

| Type | Name |
| ---: | :--- |
| define | [**EMIT\_DESTROY\_EVENT**](./#define-emit-destroy-event) \(from, quantity\)  _triggered when account tokens are destroyed after cross chain transfer initiation_ |
| define | [**EMIT\_ISSUE\_EVENT**](./#define-emit-issue-event) \(target, quantity\)  _triggered when enough reports arrived and tokens are issued to an account and the cross chain transfer is fulfilled_ |
| define | [**EMIT\_TX\_REPORT\_EVENT**](./#define-emit-tx-report-event) \(reporter, blockchain, transaction, target, quantity, x\_transfer\_id, memo\)  _triggered when a reporter reports a cross chain transfer from another blockchain_ |
| define | [**EMIT\_X\_TRANSFER\_COMPLETE\_EVENT**](./#define-emit-x-transfer-complete-event) \(target, id\)  _triggered when final report is succesfully submitted_ |
| define | [**EMIT\_X\_TRANSFER\_EVENT**](./#define-emit-x-transfer-event) \(blockchain, target, quantity, id\)  _triggered when an account initiates a cross chain transafer_ |

## Detailed Description

There are two processes that take place in the contract:

* Initiate a cross chain transfer to a target blockchain \(destroys tokens from the caller account on EOS\)
* Report a cross chain transfer initiated on a source blockchain \(issues tokens to an account on EOS\) Reporting cross chain transfers works similar to standard multisig contracts, meaning that multiple callers are required to report a transfer before tokens are issued to the target account. 

### Public Functions Documentation

#### [function addreporter](./#function-addreporter) <a id="function-addreporter"></a>

```cpp
ACTION addreporter (
    name reporter
)
```

**Parameters:**

* `reporter` - name of the reporter 

#### [function clearamount](./#function-clearamount) <a id="function-clearamount"></a>

```cpp
ACTION clearamount (
    uint64_t x_transfer_id
)
```

**Parameters:**

* `x_transfer_id` - the transfer id 

#### [function enablerpt](./#function-enablerpt) <a id="function-enablerpt"></a>

```cpp
ACTION enablerpt (
    bool enable
)
```

**Parameters:**

* `enable` - true to enable reporting \(and thus issuance\), false to disable it 

#### [function enablext](./#function-enablext) <a id="function-enablext"></a>

```cpp
ACTION enablext (
    bool enable
)
```

**Parameters:**

* `enable` - true to enable cross chain transfers, false to disable them 

#### [function init](./#function-init) <a id="function-init"></a>

```cpp
ACTION init (
    name x_token_name,
    uint64_t min_reporters,
    uint64_t min_limit,
    uint64_t limit_inc,
    uint64_t max_issue_limit,
    uint64_t max_destroy_limit
)
```

can only be called once, by the contract account

**Parameters:**

* `x_token_name` - cross chain token account 
* `min_reporters` - minimum required number of reporters to fulfill a cross chain transfer 
* `min_limit` - minimum amount that can be transferred out \(destroyed\) 
* `max_issue_limit` - maximum amount that can be issued on EOS in a given timespan 
* `max_destroy_limit` - maximum amount that can be transferred out \(destroyed\) in a given timespan 

#### [function on\_transfer](./#function-on-transfer) <a id="function-on-transfer"></a>

```cpp
void on_transfer (
    name from,
    name to,
    asset quantity,
    string memo
)
```

if the token received is the cross transfers token, initiates a cross transfer

**Parameters:**

* `from` - the sender of the transfer 
* `to` - the receiver of the transfer 
* `quantity` - the quantity for the transfer 
* `memo` - the memo for the transfer 

#### [function reporttx](./#function-reporttx) <a id="function-reporttx"></a>

```cpp
ACTION reporttx (
    name reporter,
    string blockchain,
    uint64_t tx_id,
    uint64_t x_transfer_id,
    name target,
    asset quantity,
    string memo,
    string data
)
```

can only be called by an existing reporter

**Parameters:**

* `reporter` - reporter account 
* `blockchain` - name of the source blockchain 
* `tx_id` - unique transaction id on the source blockchain 
* `x_transfer_id` - unique \(if non zero\) pre-determined id \(unlike \_txId which is determined after the transactions been mined\) 
* `target` - target account on EOS 
* `quantity` - amount to issue to the target account if the minimum required number of reports is met 
* `memo` - memo to pass in in the transfer action 
* `data` - custom source blockchain value, usually a string representing the tx hash on the source blockchain 

#### [function rmreporter](./#function-rmreporter) <a id="function-rmreporter"></a>

```cpp
ACTION rmreporter (
    name reporter
)
```

**Parameters:**

* `reporter` - name of the reporter 

#### [function update](./#function-update) <a id="function-update"></a>

```cpp
ACTION update (
    uint64_t min_reporters,
    uint64_t min_limit,
    uint64_t limit_inc,
    uint64_t max_issue_limit,
    uint64_t max_destroy_limit
)
```

can only be called by the contract account

**Parameters:**

* `min_reporters` - new minimum required number of reporters 
* `min_limit` - new minimum limit 
* `limit_inc` - new limit increment 
* `max_issue_limit` - new maximum incoming amount 
* `max_destroy_limit` - new maximum outgoing amount 

### Macro Definition Documentation

#### [define EMIT\_DESTROY\_EVENT](./#define-emit-destroy-event) <a id="define-emit-destroy-event"></a>

```cpp
#define EMIT_DESTROY_EVENT (
    from,
    quantity
) START_EVENT("destroy", "1.1") \
    EVENTKV("from",from) \
    EVENTKVL("quantity",quantity) \
    END_EVENT()
```

#### [define EMIT\_ISSUE\_EVENT](./#define-emit-issue-event) <a id="define-emit-issue-event"></a>

```cpp
#define EMIT_ISSUE_EVENT (
    target,
    quantity
) START_EVENT("issue", "1.1") \
    EVENTKV("target",target) \
    EVENTKVL("quantity",quantity) \
    END_EVENT()
```

#### [define EMIT\_TX\_REPORT\_EVENT](./#define-emit-tx-report-event) <a id="define-emit-tx-report-event"></a>

```cpp
#define EMIT_TX_REPORT_EVENT (
    reporter,
    blockchain,
    transaction,
    target,
    quantity,
    x_transfer_id,
    memo
) START_EVENT("txreport", "1.2") \
    EVENTKV("reporter",reporter) \
    EVENTKV("from_blockchain",blockchain) \
    EVENTKV("transaction",transaction) \
    EVENTKV("target",target) \
    EVENTKV("quantity",quantity) \
    EVENTKV("x_transfer_id",x_transfer_id) \
    EVENTKVL("memo",memo) \
    END_EVENT()
```

#### [define EMIT\_X\_TRANSFER\_COMPLETE\_EVENT](./#define-emit-x-transfer-complete-event) <a id="define-emit-x-transfer-complete-event"></a>

```cpp
#define EMIT_X_TRANSFER_COMPLETE_EVENT (
    target,
    id
) START_EVENT("xtransfercomplete", "1.2") \
    EVENTKV("target", target) \
    EVENTKVL("id", id) \
    END_EVENT()
```

#### [define EMIT\_X\_TRANSFER\_EVENT](./#define-emit-x-transfer-event) <a id="define-emit-x-transfer-event"></a>

```cpp
#define EMIT_X_TRANSFER_EVENT (
    blockchain,
    target,
    quantity,
    id
) START_EVENT("xtransfer", "1.2") \
    EVENTKV("blockchain",blockchain) \
    EVENTKV("target",target) \
    EVENTKV("quantity",quantity) \
    EVENTKVL("id",id) \
    END_EVENT()
```

