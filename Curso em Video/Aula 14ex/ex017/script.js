//alert('Olá!') ||
function calcular(){
    if(document.getElementById('txtnum').value.length == 0){
        window.alert('[ERRO] Digite um número!')
    }
    else{
        let num = Number(document.getElementById('txtnum').value)
        let res = document.getElementById('slcresultado')
        res.innerHTML = ''
        for(let c=1; c<=10;c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `option${c}`
            res.appendChild(item)
        }
    }
}