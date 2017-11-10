// serch abstraction request for TestContract
var TestContract = artifacts.require("TestContract");


contract('TestContract', function(){
    
    // The it(...) function defines a test case (aka a "spec").

    it("Return public string name", function(){
        return TestContract.deployed().then(function(instance){
            return instance.name.call();
        }).then(function(result){
            // console.log(result);
            assert.equal(result, "Test Stepan Contract");
        });
    });

    it("Function retrunString must return 'SUPER PUPPER STRING'", function(){
        return TestContract.deployed().then(function(instance){
            return instance.retrunString.call();
        }).then(function(result){
            assert.equal(result, "SUPER PUPPER STRING");
        });
    });

    it("Function getBalance must return balance", function(){
        return TestContract.deployed().then(function(instance){
            return instance.getBalance.call();
        }).then(function(result){
            assert.equal(result, 100000);
        });
    });

    it("Function multiplication must return multiplication", function(){
        return TestContract.deployed().then(function(instance){
            return instance.multiplication.call();
        }).then(function(result){
            assert.equal(result, 120);
        });
    });


});