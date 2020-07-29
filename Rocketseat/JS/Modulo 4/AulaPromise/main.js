var minhaPromise = function (){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/karinasantosfelippe');
        xhr.send(null)

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                } else{
                    reject('[ERRO] na requisição ')
                }
            }
        }
    });
}
/**
    var resultado = minhaPromise();
    console.log(resultado)

 *  FAZENDO ASSIM, NÓS CHAMAMOS A PROMISE MAS ANTES DELA EXECUTAR NÓS JÁ PEDIMOS O LOG, ENTÃO RESULTADO VAI VIR COM STATUS <pending>
 */
minhaPromise()
    .then(function(response){
        console.log(response);
    }) // vai executar quando chamar o resolve na promisse
    .catch(function(error){
        console.warn(error);
    });   // vai executar quando vier do reject da promise