// AJAX é uma requisição asíncrona, que basicamente retorna conteúdo do servidor sem a necessidade de reload da página
var xhr = new XMLHttpRequest() // Classe usada para recuperar informação do servidor para a página Web, usando protocolo http

// Nesse exemplo vamos usar o servidor do GitHub. Usaremos a API de usuários do GitHub para consumir a URL via AJAX.
xhr.open('GET', 'https://api.github.com/users/karinasantosfelippe') // Parâmetros: método GET or POST (para BUSCAR ou ENVIAR informação) , URL (the location of the file), boolean: true (asynchronous) / false (synchronous) optionally, a login and a password may be added to arguments.

xhr.send(null) // Parâmetro: "string"	/ null for a GET command.

// O JAVASCRIPT não vai ficar esperando a requisição do XMLHttpRequest terminar para executar o resto do código

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText))
    }
}






/*
This is just a classical instance of class, but two options must be tried, for browser compatibility.

    if (window.XMLHttpRequest){                            // Standard object
        xhr = new XMLHttpRequest();                        // Firefox, Safari, ...
    } 
    else if (window.ActiveXObject){                        // Internet Explorer
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

Or exceptions may be used instead:
    try {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");      // Trying IE
    }
    catch(e)                                              // Failed, use standard object 
    {
        xhr = new XMLHttpRequest(); 
    }
*/