import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
  return JSON.parse( localStorage.getItem('todos')) || []; // Retorna lo que esta en localStorage sino un arreglo vacio
}

export const useTodos = () => {

  const [ todos, dispatch ] = useReducer( todoReducer, [], init);

  useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);    

  const handleNewTodo = (todo) => {
      dispatch({
          type: '[TODO] Add Todo',
          payload: todo
      });
  };

  const handleDeleteTodo = (id) => {
      dispatch({
          type: '[TODO] Remove Todo',
          payload: id
      });
  };  

  const handleToggleTodo = (id) => {
      dispatch({
          type: '[TODO] Toggle Todo',
          payload: id
      });
  };  

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
