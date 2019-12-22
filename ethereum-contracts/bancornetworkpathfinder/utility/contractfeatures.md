# ContractFeatures

Contract Features

Generic contract that allows every contract on the blockchain to define which features it supports.

Other contracts can query this contract to find out whether a given contract on the

blockchain supports a certain feature.

Each contract type can define its own list of feature flags.

Features can be only enabled/disabled by the contract they are defined for.

Features should be defined by each contract type as bit flags, e.g. -

uint256 public constant FEATURE1 = 1 &lt;&lt; 0;

uint256 public constant FEATURE2 = 1 &lt;&lt; 1;

uint256 public constant FEATURE3 = 1 &lt;&lt; 2;

...

## Functions:

* [`constructor()`](contractfeatures.md#ContractFeatures-constructor--)
* [`isSupported(address _contract, uint256 _features)`](contractfeatures.md#ContractFeatures-isSupported-address-uint256-)
* [`enableFeatures(uint256 _features, bool _enable)`](contractfeatures.md#ContractFeatures-enableFeatures-uint256-bool-)

## Events:

* [`FeaturesAddition(address _address, uint256 _features)`](contractfeatures.md#ContractFeatures-FeaturesAddition-address-uint256-)
* [`FeaturesRemoval(address _address, uint256 _features)`](contractfeatures.md#ContractFeatures-FeaturesRemoval-address-uint256-)

## Function `constructor()` <a id="ContractFeatures-constructor--"></a>

initializes a new ContractFeatures instance

## Function `isSupported(address _contract, uint256 _features) → bool` <a id="ContractFeatures-isSupported-address-uint256-"></a>

returns true if a given contract supports the given feature\(s\), false if not

### Parameters:

* `_contract`: contract address to check support for
* `_features`: feature\(s\) to check for

### Return Values:

* true if the contract supports the feature\(s\), false if not

## Function `enableFeatures(uint256 _features, bool _enable)` <a id="ContractFeatures-enableFeatures-uint256-bool-"></a>

allows a contract to enable/disable certain feature\(s\)

### Parameters:

* `_features`: feature\(s\) to enable/disable
* `_enable`: true to enable the feature\(s\), false to disabled them

## Event `FeaturesAddition(address _address, uint256 _features)` <a id="ContractFeatures-FeaturesAddition-address-uint256-"></a>

triggered when a contract notifies of features it supports

### Parameters:

* `_address`: contract address
* `_features`: features supported

## Event `FeaturesRemoval(address _address, uint256 _features)` <a id="ContractFeatures-FeaturesRemoval-address-uint256-"></a>

triggered when a contract notifies of features it no longer supports

### Parameters:

* `_address`: contract address
* `_features`: features no longer supported

