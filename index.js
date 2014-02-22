
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
    , result = 0;

  while (i++ < n) result += (a[i] + b[i]);

  return result;
};