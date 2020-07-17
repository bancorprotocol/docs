The ConversionPathFinder contract allows generating a conversion path between any token pair in the Bancor Network.

The path can then be used in various functions in the BancorNetwork contract.

See the BancorNetwork contract for conversion path format.

# Functions:

- [`constructor(contract IContractRegistry _registry)`](#ConversionPathFinder-constructor-contract-IContractRegistry-)

- [`setAnchorToken(address _anchorToken)`](#ConversionPathFinder-setAnchorToken-address-)

- [`findPath(address _sourceToken, address _targetToken)`](#ConversionPathFinder-findPath-address-address-)

# Function `constructor(contract IContractRegistry _registry)` {#ConversionPathFinder-constructor-contract-IContractRegistry-}

initializes a new ConversionPathFinder instance

## Parameters:

- `_registry`: address of a contract registry contract

# Function `setAnchorToken(address _anchorToken)` {#ConversionPathFinder-setAnchorToken-address-}

updates the anchor token

## Parameters:

- `_anchorToken`: address of the anchor token

# Function `findPath(address _sourceToken, address _targetToken) → address[]` {#ConversionPathFinder-findPath-address-address-}

generates a conversion path between a given pair of tokens in the Bancor Network

## Parameters:

- `_sourceToken`: address of the source token

- `_targetToken`: address of the target token

## Return Values:

- a path from the source token to the target token
