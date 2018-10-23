pragma solidity ^0.4.15;

contract Token {

    string public user_token;

    function Token(string initialToke) public {
        initialToke = user_token;
    }

    function setToken(string newToken) public {
        user_token = newToken;
    }
}