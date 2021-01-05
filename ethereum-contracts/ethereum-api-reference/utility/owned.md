# Owned

This contract provides support and utilities for contract ownership.

## Functions:

* [`constructor()`](owned.md#Owned-constructor--)
* [`transferOwnership(address _newOwner)`](owned.md#Owned-transferOwnership-address-)
* [`acceptOwnership()`](owned.md#Owned-acceptOwnership--)

## Events:

* [`OwnerUpdate(address _prevOwner, address _newOwner)`](owned.md#Owned-OwnerUpdate-address-address-)

## Function `constructor()` <a id="Owned-constructor--"></a>

initializes a new Owned instance

## Function `transferOwnership(address _newOwner)` <a id="Owned-transferOwnership-address-"></a>

allows transferring the contract ownership

the new owner still needs to accept the transfer

can only be called by the contract owner

### Parameters:

* `_newOwner`:    new contract owner

## Function `acceptOwnership()` <a id="Owned-acceptOwnership--"></a>

used by a new owner to accept an ownership transfer

## Event `OwnerUpdate(address _prevOwner, address _newOwner)` <a id="Owned-OwnerUpdate-address-address-"></a>

triggered when the owner is updated

### Parameters:

* `_prevOwner`: previous owner
* `_newOwner`: new owner

