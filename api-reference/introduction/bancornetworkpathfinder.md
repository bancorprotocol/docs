# BancorNetworkPathFinder

The BancorNetworkPathFinder contract allows generating a conversion path between any token pair in the Bancor Network.

The path can then be used in various functions in the BancorNetwork contract.

See the BancorNetwork contract for conversion path format.

## Functions:

* [`constructor(contract IContractRegistry _registry)`](bancornetworkpathfinder.md#BancorNetworkPathFinder-constructor-contract-IContractRegistry-)
* [`setAnchorToken(address _anchorToken)`](bancornetworkpathfinder.md#BancorNetworkPathFinder-setAnchorToken-address-)
* [`generatePath(address _sourceToken, address _targetToken)`](bancornetworkpathfinder.md#BancorNetworkPathFinder-generatePath-address-address-)

## Function `constructor(contract IContractRegistry _registry)` <a id="BancorNetworkPathFinder-constructor-contract-IContractRegistry-"></a>

initializes a new BancorNetworkPathFinder instance

### Parameters:

* `_registry`: address of a contract registry contract

## Function `setAnchorToken(address _anchorToken)` <a id="BancorNetworkPathFinder-setAnchorToken-address-"></a>

updates the anchor token

### Parameters:

* `_anchorToken`: address of the anchor token

## Function `generatePath(address _sourceToken, address _targetToken) → address[]` <a id="BancorNetworkPathFinder-generatePath-address-address-"></a>

generates and returns the conversion path between a given token pair in the Bancor Network

### Parameters:

* `_sourceToken`: address of the source token
* `_targetToken`: address of the target token

### Return Values:

* path from the source token to the target token

