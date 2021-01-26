Time store contract

# Functions:

- [`addCheckpoint(address _address)`](#CheckpointStore-addCheckpoint-address-)

- [`addPastCheckpoint(address _address, uint256 _time)`](#CheckpointStore-addPastCheckpoint-address-uint256-)

- [`addPastCheckpoints(address[] _addresses, uint256[] _times)`](#CheckpointStore-addPastCheckpoints-address---uint256---)

- [`checkpoint(address _address)`](#CheckpointStore-checkpoint-address-)

# Events:

- [`CheckpointUpdated(address _address, uint256 _time)`](#CheckpointStore-CheckpointUpdated-address-uint256-)

## Function `addCheckpoint(address _address)` {#CheckpointStore-addCheckpoint-address-}

adds a new data point to the store

can only be called by an owner

## Parameters:

- `_address`: the address we're collecting the data for

## Function `addPastCheckpoint(address _address, uint256 _time)` {#CheckpointStore-addPastCheckpoint-address-uint256-}

adds a past checkpoint to the store

can only be called by a seeder

## Parameters:

- `_address`: the address we're collecting the data for

- `_time`: the checkpoint

## Function `addPastCheckpoints(address[] _addresses, uint256[] _times)` {#CheckpointStore-addPastCheckpoints-address---uint256---}

adds past checkpoints to the store

can only be called by a seeder

## Parameters:

- `_addresses`: the addresses we're collecting the data for

- `_times`: the checkpoints

## Function `checkpoint(address _address) → uint256` {#CheckpointStore-checkpoint-address-}

returns the store value for a specific address

## Parameters:

- `_address`: the address we're collecting the data for

## Return Values:

- the checkpoint

## Event `CheckpointUpdated(address _address, uint256 _time)` {#CheckpointStore-CheckpointUpdated-address-uint256-}

triggered when a new data point is being added

## Parameters:

- `_address`: the address we're collecting the data for

- `_time`: the checkpoint
