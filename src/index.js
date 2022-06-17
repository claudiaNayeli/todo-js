import{Todo,TodoList} from './class';
import { crearTodoHtml } from './js/componentes';
import './styles.css';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

/*
const tarea = new Todo('aprender Js');
todoList.nuevoTodo(tarea);


crearTodoHtml(tarea);

//localStorage.setItem('mi-key','ABC123');
//sessionStorage.setItem()

 setTimeout( () => {  //elimina lo que esta en el local storage
    localStorage.removeItem('mi-key');
}, 1500);*/


