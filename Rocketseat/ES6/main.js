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
    
}

const MinhaLista = new TodoList()
document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('Novo todo')
}