var todos = ['Buy new turtle'];

var input = prompt("What would you like to do?");


while (input!== "quit") {
    if (input==="list") {
        listTodos();
    } else if (input==="new"){
        addTodos();
    } else if (input === "delete"){
        deleteTodos();
    }
    input = prompt("Okay, now what would you like to do?")
}

console.log("Okay, you've quit the app.")

function listTodos(){
    console.log("**********")
        todos.forEach(function(todo,index){
            console.log(index+': '+todo)
        })
        console.log("**********")
}

function addTodos(params) {
    var newTodo = prompt("Enter new todo")
        todos.push(newTodo)
        console.log("Added todo.")
}

function deleteTodos(params) {
    index = prompt("Enter index of todo to delete.")
    todos.splice(index,1)
    console.log("Deleted todo.")
}