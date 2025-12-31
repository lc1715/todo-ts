"use strict";
const todos = [];
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('form');
const list = document.getElementById('todolist');
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
        input.value = '';
    }
}
function createTodo(todo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}
form.addEventListener('submit', handleSubmit);
