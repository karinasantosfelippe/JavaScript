"use strict";

var arr = [1, 3, 4, 5, 8, 9];
/** AO INVES DISSO:
    const newArr = arr.map(function(item){
        return item*2
    })
* fazemos isso:
 */

var newArr = arr.map(function (item) {
  return item * 2;
});
console.log(newArr);

var teste = function teste() {
  return 'Teste';
};

console.log(teste); // SEM O PARENTESES

console.log(teste()); // AGORA CHAMANDO A FUNÇÃO

teste = function teste() {
  return 'Sem o return';
};

console.log(teste());

teste = function teste() {
  return 3;
};

console.log(teste()); // AGORA RETORNA UM VALOR

teste = function teste() {
  return {
    nome: 'Nome do Objeto'
  };
}; // RETORNA O OBJETO


console.log(teste());

teste = function teste() {
  return {
    nome: 'Nome do Objeto'
  };
}; // RETORNA A PROPRIEDADE


console.log(teste().nome);
