/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

module.exports = (function () {
  var EX, slice = Array.prototype.slice;
  EX = function callMethodByName(m) {
    return this[m].apply(this, slice.call(arguments, 1));
  };
  EX.binder = function (obj) {
    return function (m) {
      // (m, args…) -> obj[m].bind(obj, args…)
      return Function.bind.apply(obj[m],
        [obj].concat(slice.call(arguments, 1)));
    };
  };
  return EX;
}());
