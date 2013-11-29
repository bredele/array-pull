
# array-pull

  Removes all provided values from the given array (use ===)

## Installation

  Install with [component](http://component.io):

    $ component install leafs/array-pull

## Usage

```js
var arr = ['olivier', 'bruno', 'amy'];
var pull = require('pull');
pull(arr, 'bruno', 'amy');

//arr => ['olivier']
```



## License

  MIT
