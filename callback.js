/*
function x(){
    setTimeout(() => {
        console.log("birinci fonksiyon")
    }, 2000);
}
function y(){
    console.log("ikinci fonksiyon");
}
x();
y(); //output ikinci fonksiyon
              birinci fonksiyon
*/
/*
function x(callback){
    setTimeout(() => {
        console.log("birinci fonksiyon")
        callback();
    }, 2000);
}
function y(){
    console.log("ikinci fonksiyon");
}
x(y);
*/

let todos = [
    {title : "Todo 1" , description:"1. Job"},
    {title : "Todo 2" , description:"2. Job"},
    {title : "Todo 3" , description:"3. Job"},
];

function todoList(){
    setTimeout(() => {
        console.log(todos)
    }, 1000);
}

function addNewTodo(todo,callback){
    setTimeout(() => {
        todos.push(todo);
        callback();
    }, 2000);
}
addNewTodo({title : "Todo 4" , description:"4. Job"},todoList);
