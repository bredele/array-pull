var diff = require('diff');


/**
 * Removes all provided values from the given array 
 * @param {Array} arr 
 * @return {Array} 
 * @api public
 */

module.exports = function(arr) {
  return diff(arr, [].slice.call(arguments, 1));
};