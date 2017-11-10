pragma solidity ^0.4.15;

contract TestContract{
    string public constant name = "Test Stepan Contract";
    uint private balance = 100000;
    int first = 10;
    int second = 12;
    
    function getBalance() returns(uint){
            return  balance;
    }

    function retrunString() returns (string){
        return "SUPER PUPPER STRING";
    }

    function multiplication() returns (int){
        return first*second;
    }
}