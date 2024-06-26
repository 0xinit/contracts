// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "../src/ERC20/ERC20Named.sol";

contract ERC20Basic is ERC20Named {

    constructor(string memory _symbol, string memory _name, uint8 _decimals, address _admin) ERC20Named(_symbol, _name, _decimals, _admin) {
        // intentially left empty
    }

    function mint(address target, uint256 amount) external onlyOwner {
        _mint(target, amount);
    }

}