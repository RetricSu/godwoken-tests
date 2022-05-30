pragma solidity ^0.8.6;

contract Cycle {
    function runOut() public pure returns (uint256) {
        uint len;
        while (true) {
            len++;
        }
        return len;
    }
}
