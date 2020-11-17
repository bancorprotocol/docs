# Whitelist

The contract manages a list of whitelisted addresses

## Functions:

* [`isWhitelisted(address _address)`](whitelist.md#Whitelist-isWhitelisted-address-)

* [`addAddress(address _address)`](whitelist.md#Whitelist-addAddress-address-)

* [`addAddresses(address[] _addresses)`](whitelist.md#Whitelist-addAddresses-address---)

* [`removeAddress(address _address)`](whitelist.md#Whitelist-removeAddress-address-)

* [`removeAddresses(address[] _addresses)`](whitelist.md#Whitelist-removeAddresses-address---)

## Events:

* [`AddressAddition(address _address)`](whitelist.md#Whitelist-AddressAddition-address-)

* [`AddressRemoval(address _address)`](whitelist.md#Whitelist-AddressRemoval-address-)

## Function `isWhitelisted(address _address) → bool` <a id="Whitelist-isWhitelisted-address-"></a>

returns true if a given address is whitelisted, false if not

### Parameters:

* `_address`: address to check

### Return Values:

* true if the address is whitelisted, false if not

## Function `addAddress(address _address)` <a id="Whitelist-addAddress-address-"></a>

adds a given address to the whitelist

### Parameters:

* `_address`: address to add

## Function `addAddresses(address[] _addresses)` <a id="Whitelist-addAddresses-address---"></a>

adds a list of addresses to the whitelist

### Parameters:

* `_addresses`: addresses to add

## Function `removeAddress(address _address)` <a id="Whitelist-removeAddress-address-"></a>

removes a given address from the whitelist

### Parameters:

* `_address`: address to remove

## Function `removeAddresses(address[] _addresses)` <a id="Whitelist-removeAddresses-address---"></a>

removes a list of addresses from the whitelist

### Parameters:

* `_addresses`: addresses to remove

## Event `AddressAddition(address _address)` <a id="Whitelist-AddressAddition-address-"></a>

triggered when an address is added to the whitelist

### Parameters:

* `_address`: address that's added from the whitelist

## Event `AddressRemoval(address _address)` <a id="Whitelist-AddressRemoval-address-"></a>

triggered when an address is removed from the whitelist

### Parameters:

* `_address`: address that's removed from the whitelist
