
<!--#echo json="package.json" key="name" underline="=" -->
method-by-name
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Generic method that calls other methods by name.
<!--/#echo -->


Usage
-----

from [test/usage.js](test/usage.js):

<!--#include file="test/usage.js" start="  //#u" stop="  //#r"
  outdent="  " code="javascript" -->
<!--#verbatim lncnt="18" -->
```javascript
var methodByName = require('method-by-name'), list = [], binder;
list.addUpper = function (s) { this.push(s.toUpperCase()); };
list.addLower = function (s) { this.push(s.toLowerCase()); };
list.mthd = methodByName;

list.mthd('addUpper', 'Apple');
list.mthd('addLower', 'Banana');
expectEqual(list.slice(), ['APPLE', 'banana']);

function suggestVeggie(callback) { callback('Tomato'); }
function suggestMeat(callback) { callback('Beef'); }

binder = methodByName.binder(list);
suggestVeggie(binder('addUpper'));
suggestMeat(binder('addLower'));
expectEqual(list.slice(), ['APPLE', 'banana', 'TOMATO', 'beef']);
```
<!--/include-->




<!--#toc stop="scan" -->



Known issues
------------

* needs more/better tests and docs




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
