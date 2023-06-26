const assert = require('chai').assert;     //assign the assert module from the chai library to the variable
const multiply = require("../multiply");   // import the multiply funtion

describe("multiply test", function(){
    it("check that return is 1", function(){
        assert.equal(multiply(1, 1), 1);
    } )
    it("check that return is 4",function(){
        assert.equal(multiply(2, 2), 4);
    })
    it("check that return is 9",function(){
        assert.equal(multiply(3, 3), 9);
    })
    it("check that return is 16",function(){
        assert.equal(multiply(4, 4), 16);
    })
    it("check that return is 1035",function(){
        assert.equal(multiply(23, 45), 23*45);
    })
});

