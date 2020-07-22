let num = [5,8,4]
/* 
MÉTODO BRUTO: num[3] = 6
PARA ORDENAR: num.sort()
PARA ADICIONAR: num.push(6)
*/
console.log(`Vetor [${num}] de ${num.length} elementos.`)
let pos = num.indexOf(6)
if(pos != -1) console.log(`O valor ${num[pos]} está na posição ${pos}`)
else console.log('Esse valor não existe no vetor')
 /*
for(let i in num){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/