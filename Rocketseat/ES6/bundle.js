"use strict";

// REST
function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log(soma(1, 3, 4, 5, 6, 7, 8)); // SPREAD

var arrA = [1, 2, 3];
var arrB = [4, 5, 6];
var arr3 = [].concat(arrA, arrB);
console.log(arr3);
