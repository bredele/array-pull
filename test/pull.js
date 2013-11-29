var pull = require('pull');
var assert = require('assert');


describe('pull', function(){
  it('creates an array of unique values present in all provided arrays', function(){
    var arr = [1, 2, 3, 1, 2, 3];
    pull(arr, 2, 3);
    assert(arr[0] === 1);
    assert(arr[1] === 1);
    assert(arr.length === 2);
  });

});
