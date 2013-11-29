var remove = require('remove'),
    indexOf = require('indexof');

module.exports = function(arr) {
	var args = [].slice.call(arguments, 1);
	remove(arr, function(val) {
		return indexOf(args, val) > -1;
	});
	return arr;
};