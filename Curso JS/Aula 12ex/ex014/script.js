//alert('Olá!')
function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //hora = 14
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 18 || hora < 5){
        img.src = 'fotonoite.png'
        document.body.style.background = '#65599d'
        
    }else if(hora < 12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#f1cbb1'
    }else{
        img.src = 'fototarde.png'
        document.body.style.background = '#fd7b9a'
    }
}