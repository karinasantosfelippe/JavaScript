class List{
    constructor(){
        this.data = []
    }
    add(param){
        this.data.push(param)
        console.log(this.data)
    }
}
class TodoList extends List{
    constructor() {
        super() // CHAMANDO A CLASSE PAI
        this.usuario = 'Diego' // CRIANDO NOVA PROPRIEDADE PARA A FILHA
    }

    mostraUsuario(){
        console.log(this.usuario)
    }
}
class Matematica {      // COM O METODO ESTATICO NÓS NÃO VAMOS PRECISAR DE CONSTRUTOR PORQUE O METODO NÃO EXERGA O THIS. , ENTÃO SE QUISERMOS USAR ALGUM PARAMETRO DENTRO DO METODO STATIC PRECISAREMOS RECEBE-LO NA CHAMADA.
    static soma(a,b){
        return a + b
    }
}
console.log(Matematica.soma(1,2)) // NÃO PRECISAMOS DEFINIR UMA NOVA CLASSE (= new Matematica()) COM METODO STATIC

const MinhaLista = new TodoList()
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo')
}

MinhaLista.mostraUsuario()