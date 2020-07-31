# LiquidityPoolConverter

Liquidity Pool Converter

The liquidity pool converter is the base contract for specific types of converters that

manage liquidity pools.

Liquidity pools have 2 reserves or more and they allow converting between them.

Note that TokenRateUpdate events are dispatched for pool tokens as well.

The pool token is the first token in the event in that case.

## Functions:

* [`acceptAnchorOwnership()`](liquiditypoolconverter.md#LiquidityPoolConverter-acceptAnchorOwnership--)

## Events:

* [`LiquidityAdded(address _provider, address _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](liquiditypoolconverter.md#LiquidityPoolConverter-LiquidityAdded-address-address-uint256-uint256-uint256-)
* [`LiquidityRemoved(address _provider, address _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)`](liquiditypoolconverter.md#LiquidityPoolConverter-LiquidityRemoved-address-address-uint256-uint256-uint256-)

## Function `acceptAnchorOwnership()` <a id="LiquidityPoolConverter-acceptAnchorOwnership--"></a>

accepts ownership of the anchor after an ownership transfer

also activates the converter

can only be called by the contract owner

note that prior to version 28, you should use 'acceptTokenOwnership' instead

## Event `LiquidityAdded(address _provider, address _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` <a id="LiquidityPoolConverter-LiquidityAdded-address-address-uint256-uint256-uint256-"></a>

triggered after liquidity is added

### Parameters:

* `_provider`: liquidity provider
* `_reserveToken`: reserve token address
* `_amount`: reserve token amount
* `_newBalance`: reserve token new balance
* `_newSupply`: pool token new supply

## Event `LiquidityRemoved(address _provider, address _reserveToken, uint256 _amount, uint256 _newBalance, uint256 _newSupply)` <a id="LiquidityPoolConverter-LiquidityRemoved-address-address-uint256-uint256-uint256-"></a>

triggered after liquidity is removed

### Parameters:

* `_provider`: liquidity provider
* `_reserveToken`: reserve token address
* `_amount`: reserve token amount
* `_newBalance`: reserve token new balance
* `_newSupply`: pool token new supply

