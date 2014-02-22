
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
  var n = a.length
    , i = 0
    , res = 0;

  while (i++ < n) res += (a[i] + b[i]);

  return res;
};
