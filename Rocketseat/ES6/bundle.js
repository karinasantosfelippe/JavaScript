"use strict";

var arr = [1, 3, 4, 5, 8, 9]; // MAP

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr); // REDUCE

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); // FILTER

var filter = arr.filter(function (item) {
  return item % 2 === 0; // PRECISA RETORNAR TRUE OU FALSE, OBRIGATORIAMENTE!
});
console.log(filter); // FIND

var find = arr.find(function (item) {
  return item === 4; // RETORNA A BUSCA (OU SEJA, O NUMERO PROCURADO OU UNDEFINED PARA O QUE NÃO ACHAR)
});
console.log(find);
