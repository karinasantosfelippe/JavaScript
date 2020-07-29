const arr = [1,3,4,5,8,9]

/** AO INVES DISSO:
    const newArr = arr.map(function(item){
        return item*2
    })
* fazemos isso:
 */
const newArr = arr.map(item => item*2)
console.log(newArr)

var teste = () => { return 'Teste' }
console.log(teste) // SEM O PARENTESES
console.log(teste()) // AGORA CHAMANDO A FUNÇÃO
teste = () => 'Sem o return'
console.log(teste())
teste = () => 3
console.log(teste()) // AGORA RETORNA UM VALOR
teste = () => ({ nome: 'Nome do Objeto' }) // RETORNA O OBJETO
console.log(teste())
teste = () => ({ nome: 'Nome do Objeto' }) // RETORNA A PROPRIEDADE
console.log(teste().nome)