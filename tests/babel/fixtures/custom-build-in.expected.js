var _div,
    _appendChild = require('nanohtml/lib/append-child');

_div = document.createElement('div', {
  is: 'my-div'
}), _appendChild(_div, ['\n    Hello world\n  ']), _div;