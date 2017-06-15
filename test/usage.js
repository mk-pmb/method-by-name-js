/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var eq = require('equal-pmb');

(function readmeDemo(expectEqual) {
  //#u
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
  //#r
}(eq));








console.log("+OK usage test passed.");    //= "+OK usage test passed."
