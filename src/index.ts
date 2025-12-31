interface Todo {
    text: string,
    completed: boolean,
}

const todos: Todo[] = [];

const btn = document.getElementById('btn')! as HTMLButtonElement;
const input = document.getElementById('todoinput')! as HTMLInputElement;
const form = document.querySelector('form')!;
const list = document.getElementById('todolist')!;

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
        input.value = '';
    }
}

function createTodo(todo: Todo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newLi.append(todo.text);
    newLi.append(checkbox);
    list.append(newLi);
}

form.addEventListener('submit', handleSubmit);

