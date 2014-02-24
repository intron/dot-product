
var dot = require('dot-product');
var assert = require('assert');

describe('dot-product', function(){
  it("Should compute the dot product of two arrays", function(){
    var a = [1, 2, 3];
    var b = [4, 5, 6];
    assert.equal(32, dot(a, b)); // 32 
  });
});
