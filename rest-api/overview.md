---
description: This section covers interacting with the Bancor Network through the REST APIs.
---

# Overview

The Bancor Network REST APIs allow simple access to network information as well as generating transactions on the network.

Note that v2 of the APIs is relatively new and is still in its experimental phase.

The Bancor Network APIs all return a JSON document as a response.

The APIs are designed to be blockchain agnostic and as such, all ids are defined using the generic DLT terminology and amounts are normalized to floating point numbers.

### DLT Identifier

Many API endpoints support DLT identifiers. These define the target blockchain and the target entity \(account, wallet etc.\) on the specific blockchain:

| Name | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `dlt_type` | `String` | blockchain type | "ethereum" |
| `dlt_id` | `String` | entity id \(wallet address, tx hash\) | 0x52Ae12ABe5D8BD778BD5397F99cA900624CfADD4 |

### Response Format

```text
{
    data // Object/Array, optional - when no error occurred, actual content
    error: { // Object, optional - when there’s an error
        status // integer, HTTP status code
        messages: [ // Array (String), list of human readable error messages
        ]
    }
}

```

\*\*\*\*

