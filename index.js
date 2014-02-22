
/**
 * Module dependencies.
 */

var sum = require('riemann-sum');

/**
 * a·b
 *
 * @param {Array} a
 * @param {Array} b
 * @return {Number}
 */

module.exports = function(a, b){
  if (a.length === b.length){
    throw new RangeError("Array lengths must match"); 
  }
  return sum(o, a.length, function(i, a, b){
    return a[i] + b[i]; 
  });
};
