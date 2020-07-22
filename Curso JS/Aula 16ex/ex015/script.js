//alert('Olá!')     ||      [ERRO]
var slc = document.querySelector('select#slcadicionar')
let valores = []

function adicionar(){
    let numero = document.querySelector('input#txtnum').value
    if(numero.length == 0){
        window.alert('[ERRO] Digite um número para adicionar!')
    }else if(Number(numero)<1 || Number(numero)>100){
        window.alert('[ERRO] O número não está no intervalo entre 1 e 100')
    }else if(valores.indexOf(Number(numero)) != -1){
        window.alert('Esse valor já foi adicionado')
    }else{
        escreverNaDiv('')
        valores.push(Number(numero))
        let item = document.createElement('option')
        item.value = `option${numero}`
        item.text = `Número ${numero} adicionado`
        slc.appendChild(item)
        slc.size = slc.length
        apagarTxtNum()
    }
}
function finalizar(){
    if(slc.childElementCount > 0){
        let soma = 0
        for(let num in valores){
            soma += Number(valores[num])
        }
        valores.sort((a,b)=>a-b)
        let tamanhodalista = valores.length
        let texto = ''
        texto += `<p>Ao todo, temos ${tamanhodalista} números cadastrados.</p>`
        texto += `<p>O maior valor informado foi ${valores[tamanhodalista - 1]}</p>`
        texto += `<p>O menor valor informado foi ${valores[0]}</p>`
        texto += `<p>Soma dos valores: ${soma}`
        texto += `<p>A média dos valores digitados é ${soma/tamanhodalista}`
        escreverNaDiv(texto)
    }else {
        window.alert('[ERRO] Adicione números na lista!')
    } 
}
function limpar(){
    while(slc.length > 0){
        slc.firstChild.remove()
    }
    slc.size = 0
    apagarTxtNum()
    escreverNaDiv('')
    valores = []
}
function escreverNaDiv(texto){
    var resultado = document.querySelector('div#res')
    resultado.innerHTML = texto
}
function apagarTxtNum(){
    let txtNum = document.querySelector('input#txtnum')
    txtNum.value = ''
    txtNum.focus()
}