//alert('Olá!') ||
function contar(){
    if(document.getElementById('txtinicio').value.legth == 0 || document.getElementById('txtfim').value.legth == 0){
        window.alert('ERRO! Verifique se todos os dados foram preenchidos!')
    }else{
        let ini = Number(document.getElementById('txtinicio').value)
        let fim = Number(document.getElementById('txtfim').value)
        let pas = Number(document.getElementById('txtpasso').value)
        if(pas <= 0){
            window.alert('Passo inválido! Resultado será considerando Pass: 1')
            document.querySelector('input#txtpasso').value = 1
            pas = 1
        }
        let resposta = ''
        if(ini < fim){
            //CONTAGEM CRESCENTE
            for(let cont = ini; cont<=fim; cont+=pas){
                if(cont == fim || (cont + pas) > fim){
                    resposta += `${cont} \u{2705} `
                }else {
                     resposta += `${cont} \u{1F449} `
                }
            }
        } else{
            //CONTAGEM DESCRESCENTE
            for(let cont = ini; cont>=fim; cont-=pas){
                if(cont == fim || (cont - pas) < fim){
                    resposta += `${cont} \u{2705} `
                }else {
                    resposta += `${cont} \u{1F449} `
                }
            }
        }
        
        var res = document.querySelector('div#res')
        res.innerHTML = resposta
    }
}