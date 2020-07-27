//alert('Olá!')
//res.style.textAlign = 'center'
//res.style.fontSize = '8pt'
//res.style.padding = '100px'
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
            alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var sex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var caminho = 'foto'
        if (idade >=0 && idade < 18){
            //CRIANÇA
            caminho += 'Crianca'
        }else if(idade < 60){
            //ADULTO
            caminho += 'Adulto'
        }else{
            //IDOSO
            caminho += 'Idoso'
        }
        if(sex[0].checked){
            genero = 'Homem'
            caminho += 'H.png'
        }else{
            genero = 'Mulher'
            caminho += 'M.png'
        }
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.setAttribute('src', String(caminho))
        img.style.marginTop = '20px'
        res.innerHTML = `${genero} de ${idade} anos.</br>`
        res.appendChild(img)
    }
}