
var dot = require('./index');
var assert = require('assert');

describe('dot-product', function(){
  it("Should compute the dot product of two arrays", function(){
    var a = [1, 2, 3];
    assert.equal(14, dot(a, a)); 
  });
});
