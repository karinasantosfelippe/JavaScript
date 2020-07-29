
function buscarPerfil(){
    var inputUser = document.querySelector('input#user').value
    var listaRepos = document.querySelector('ul#reposList')
    axios.get(`https://api.github.com/users/${inputUser}/repos`)
        .then(function(response){
            listaRepos.innerHTML = ''
            for(item of response.data){
                let repos = document.createElement('li')
                repos.appendChild(document.createTextNode(item.name))
                listaRepos.appendChild(repos)
            }
        })
        .catch(function(error){
            window.alert('[ERRO] Usuário não encontrado!')
        })
}