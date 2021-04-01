import './styles.css'


import { TodoList, Todo } from './classes';
import { crearTodoHtml } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';


export const todoList = new TodoList();

todoList.todo.forEach((todo) => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);

console.log(todoList.todo)

// localStorage.setItem('mi-key', 'abc123');


// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500)