# ContractRegistry

Contract Registry The contract registry keeps contract addresses by name. The owner can update contract addresses so that a contract name always points to the latest version of the given contract. Other contracts can query the registry to get updated addresses instead of depending on specific addresses. Note that contract names are limited to 32 bytes UTF8 encoded ASCII strings to optimize gas costs

## Functions:

* [`itemCount()`](contractregistry.md#ContractRegistry-itemCount--)
* [`addressOf(bytes32 _contractName)`](contractregistry.md#ContractRegistry-addressOf-bytes32-)
* [`registerAddress(bytes32 _contractName, address _contractAddress)`](contractregistry.md#ContractRegistry-registerAddress-bytes32-address-)
* [`unregisterAddress(bytes32 _contractName)`](contractregistry.md#ContractRegistry-unregisterAddress-bytes32-)
* [`getAddress(bytes32 _contractName)`](contractregistry.md#ContractRegistry-getAddress-bytes32-)

## Events:

* [`AddressUpdate(bytes32 _contractName, address _contractAddress)`](contractregistry.md#ContractRegistry-AddressUpdate-bytes32-address-)

## Function `itemCount() → uint256` <a id="ContractRegistry-itemCount--"></a>

returns the number of items in the registry

### Return Values:

* number of items

  **Function `addressOf(bytes32 _contractName) → address`**

  returns the address associated with the given contract name

### Parameters:

* `_contractName`:    contract name

### Return Values:

* contract address

  **Function `registerAddress(bytes32 _contractName, address _contractAddress)`**

  registers a new address for the contract name in the registry

### Parameters:

* `_contractName`: contract name
* `_contractAddress`: contract address

  **Function `unregisterAddress(bytes32 _contractName)`**

  removes an existing contract address from the registry

### Parameters:

* `_contractName`: contract name

  **Function `getAddress(bytes32 _contractName) → address`**

  deprecated, backward compatibility

## Event `AddressUpdate(bytes32 _contractName, address _contractAddress)` <a id="ContractRegistry-AddressUpdate-bytes32-address-"></a>

triggered when an address pointed to by a contract name is modified

### Parameters:

* `_contractName`: contract name
* `_contractAddress`: new contract address

