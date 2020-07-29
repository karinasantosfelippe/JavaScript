const arr = [1,3,4,5,8,9]
// MAP
const newArr = arr.map(function(item){
    return item*2
})
console.log(newArr)
// REDUCE
const sum = arr.reduce(function(total, next){
    return total + next
})
console.log(sum)
// FILTER
const filter = arr.filter(function(item){
    return item % 2 === 0 // PRECISA RETORNAR TRUE OU FALSE, OBRIGATORIAMENTE!
})
console.log(filter)
// FIND
const find = arr.find(function(item){
    return item === 4 // RETORNA A BUSCA (OU SEJA, O NUMERO PROCURADO OU UNDEFINED PARA O QUE NÃO ACHAR)
})
console.log(find)

//NOVO MÉTODO INCLUDES, QUE RETORNA TRUE CASO ENCONTRE. Param: valor da busca, index (opcional - a partir de qual indice vai iniciar a busca, por padrão 0)
console.log(arr.includes(4))