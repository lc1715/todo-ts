interface Todo {
    text: string,
    completed: boolean,
}

const btn = document.getElementById('addbtn')! as HTMLButtonElement;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.getElementById('todoform')!;
const list = document.getElementById('todolist')!;
const deletelist = document.getElementById('removeform')!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

//Load todos from local storage
function readTodos(): Todo[] {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null) return [];
    return JSON.parse(todosJSON);
}

//Save todos to local storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!input.value) {
        alert('Please enter a to-do')
    } else {
        const newTodo: Todo = {
            text: input.value,
            completed: false,
        }
        createTodo(newTodo);
        todos.push(newTodo);

        saveTodos();
        input.value = '';
    }
}

function createTodo(todo: Todo) {
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


