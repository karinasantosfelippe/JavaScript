// EXERCICIO 2

const usuarios = [
    { nome: "Diego", idade: 23, empresa: "Rocketseat" },
    { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
    { nome: "Lucas", idade: 30, empresa: "Facebook" }
]
 // 2.1
var resultado = usuarios.map(item => item.idade)
console.log(resultado)
// 2.2
resultado = usuarios.filter(item => {
    return (item.empresa === 'Rocketseat' && item.idade > 18)
})
console.log(resultado)
// 2.3
resultado = usuarios.find(item => item.empresa === 'Google')
console.log(resultado)
// 2.4
resultado = usuarios.map(item => ({...item, idade : item.idade * 2}))
                    .filter(item => item.idade < 50)
console.log(resultado)