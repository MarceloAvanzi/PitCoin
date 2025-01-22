// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

// This is the main building block for smart contracts.
contract PitCoin {
    // Token details.
    string public name = "PitCoin";
    string public symbol = "PIT";
    uint8 public decimals = 18; // Standard ERC-20 tokens use 18 decimals.

    // The fixed total supply of tokens, stored in an unsigned integer type variable.
    uint256 public totalSupply = 1_000_000 * (10 ** uint256(decimals));

    // The address of the contract owner.
    address public owner;

    // Mapping to store balances of each address.
    mapping(address => uint256) balances;

    // Event to notify about transfers.
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Event to notify about ownership transfers.
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * Contract initialization.
     */
    constructor() {
        // Assign the total supply to the contract deployer.
        balances[msg.sender] = totalSupply;
        owner = msg.sender;

        // Emit a Transfer event to indicate the creation of tokens.
        emit Transfer(address(0), msg.sender, totalSupply);
    }

    /**
     * A function to transfer tokens to another address.
     */
    function transfer(address to, uint256 amount) external {
        // Ensure the sender has enough balance.
        require(balances[msg.sender] >= amount, "Not enough tokens");

        // Perform the transfer.
        balances[msg.sender] -= amount;
        balances[to] += amount;

        // Emit the Transfer event.
        emit Transfer(msg.sender, to, amount);
    }

    /**
     * Read-only function to get the balance of a specific account.
     */
    function balanceOf(address account) external view returns (uint256) {
        return balances[account];
    }

    /**
     * A function to transfer ownership of the contract to a new owner.
     */
    function transferOwnership(address newOwner) external {
        require(msg.sender == owner, "Only the owner can transfer ownership");
        require(newOwner != address(0), "New owner cannot be the zero address");

        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }
}
