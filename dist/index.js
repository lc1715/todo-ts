"use strict";
const btn = document.getElementById('addbtn');
const input = document.getElementById('todoinput');
const form = document.getElementById('todoform');
const list = document.getElementById('todolist');
const deletelist = document.getElementById('removeform');
const todos = readTodos();
todos.forEach(createTodo);
//Load todos from local storage
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
//Save todos to local storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}
function handleSubmit(e) {
    e.preventDefault();
    if (!input.value) {
        alert('Please enter a to-do');
    }
    else {
        const newTodo = {
            text: input.value,
            completed: false,
        };
        createTodo(newTodo);
        todos.push(newTodo);
        saveTodos();
        input.value = '';
    }
}
function createTodo(todo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    checkbox.addEventListener('change', function () {
        todo.completed = checkbox.checked;
        saveTodos();
    });
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
function removeTodos() {
    localStorage.removeItem('todos');
    readTodos();
}
form.addEventListener('submit', handleSubmit);
deletelist.addEventListener('submit', removeTodos);
