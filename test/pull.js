var pull = require('pull');
var assert = require('assert');




describe('pull', function(){
  it('creates an array of unique values present in all provided arrays', function(){
    var result = pull([1, 2, 3, 1, 2, 3], 2, 3);
    assert(result[0] === 1);
    assert(result[1] === 1);
    assert(result.length === 2);
  });

});
