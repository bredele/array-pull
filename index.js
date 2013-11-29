var indexOf = require('indexof');

module.exports = function(arr) {
  var args = [].slice.call(arguments, 1);
	var l = arr.length;
	while(l--){
		var val = arr[l];
		if(indexOf(args,val) > -1) {
			arr.splice(l,1);
		}
	}
	return arr;
};