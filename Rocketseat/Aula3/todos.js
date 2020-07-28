var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var todos = [
    'Fazer chá',
    'Estudar JavaScript',
    'Fazer curso React'
]

function renderTodos(){
    listElement.innerHTML = ''
    for(todo of todos){
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(todo)
        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')
        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', `deleteTodo(${pos})`)
        var linkText = document.createTextNode(' remover')
        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}

renderTodos();

function adicionar(){
    let texto = inputElement.value
    todos.push(texto)
    inputElement.value = ''
    inputElement.focus()
    renderTodos();
}

buttonElement.onclick = adicionar

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
}