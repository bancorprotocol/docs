# Managed

Provides support and utilities for contract management

Note that a managed contract must also have an owner

## Functions:

* [`constructor()`](managed.md#Managed-constructor--)
* [`transferManagement(address _newManager)`](managed.md#Managed-transferManagement-address-)
* [`acceptManagement()`](managed.md#Managed-acceptManagement--)

## Events:

* [`ManagerUpdate(address _prevManager, address _newManager)`](managed.md#Managed-ManagerUpdate-address-address-)

## Function `constructor()` <a id="Managed-constructor--"></a>

initializes a new Managed instance

## Function `transferManagement(address _newManager)` <a id="Managed-transferManagement-address-"></a>

allows transferring the contract management

the new manager still needs to accept the transfer

can only be called by the contract manager

### Parameters:

* `_newManager`:    new contract manager

## Function `acceptManagement()` <a id="Managed-acceptManagement--"></a>

used by a new manager to accept a management transfer

## Event `ManagerUpdate(address _prevManager, address _newManager)` <a id="Managed-ManagerUpdate-address-address-"></a>

triggered when the manager is updated

### Parameters:

* `_prevManager`: previous manager
* `_newManager`: new manager

