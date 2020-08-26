Converter Upgrader
The converter upgrader contract allows upgrading an older converter contract (0.4 and up)
to the latest version.
To begin the upgrade process, simply execute the 'upgrade' function.
At the end of the process, the ownership of the newly upgraded converter will be transferred
back to the original owner and the original owner will need to execute the 'acceptOwnership' function.
The address of the new converter is available in the ConverterUpgrade event.
Note that for older converters that don't yet have the 'upgrade' function, ownership should first
be transferred manually to the ConverterUpgrader contract using the 'transferOwnership' function
and then the upgrader 'upgrade' function should be executed directly.

# Functions:
- [`constructor(contract IContractRegistry _registry, contract IEtherToken _etherToken)`](#ConverterUpgrader-constructor-contract-IContractRegistry-contract-IEtherToken-)
- [`upgrade(bytes32 _version)`](#ConverterUpgrader-upgrade-bytes32-)
- [`upgrade(uint16 _version)`](#ConverterUpgrader-upgrade-uint16-)
- [`upgradeOld(contract IConverter _converter, bytes32 _version)`](#ConverterUpgrader-upgradeOld-contract-IConverter-bytes32-)

# Events:
- [`ConverterOwned(contract IConverter _converter, address _owner)`](#ConverterUpgrader-ConverterOwned-contract-IConverter-address-)
- [`ConverterUpgrade(address _oldConverter, address _newConverter)`](#ConverterUpgrader-ConverterUpgrade-address-address-)

# Function `constructor(contract IContractRegistry _registry, contract IEtherToken _etherToken)` {#ConverterUpgrader-constructor-contract-IContractRegistry-contract-IEtherToken-}
initializes a new ConverterUpgrader instance

## Parameters:
- `_registry`:    address of a contract registry contract
# Function `upgrade(bytes32 _version)` {#ConverterUpgrader-upgrade-bytes32-}
upgrades an old converter to the latest version
will throw if ownership wasn't transferred to the upgrader before calling this function.
ownership of the new converter will be transferred back to the original owner.
fires the ConverterUpgrade event upon success.
can only be called by a converter

## Parameters:
- `_version`: old converter version
# Function `upgrade(uint16 _version)` {#ConverterUpgrader-upgrade-uint16-}
upgrades an old converter to the latest version
will throw if ownership wasn't transferred to the upgrader before calling this function.
ownership of the new converter will be transferred back to the original owner.
fires the ConverterUpgrade event upon success.
can only be called by a converter

## Parameters:
- `_version`: old converter version
# Function `upgradeOld(contract IConverter _converter, bytes32 _version)` {#ConverterUpgrader-upgradeOld-contract-IConverter-bytes32-}
upgrades an old converter to the latest version
will throw if ownership wasn't transferred to the upgrader before calling this function.
ownership of the new converter will be transferred back to the original owner.
fires the ConverterUpgrade event upon success.

## Parameters:
- `_converter`:   old converter contract address

- `_version`:     old converter version

# Event `ConverterOwned(contract IConverter _converter, address _owner)` {#ConverterUpgrader-ConverterOwned-contract-IConverter-address-}
triggered when the contract accept a converter ownership

## Parameters:
- `_converter`:   converter address

- `_owner`:       new owner - local upgrader address
# Event `ConverterUpgrade(address _oldConverter, address _newConverter)` {#ConverterUpgrader-ConverterUpgrade-address-address-}
triggered when the upgrading process is done

## Parameters:
- `_oldConverter`:    old converter address

- `_newConverter`:    new converter address
