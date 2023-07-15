// import logo from './platzi.webp';

import './App.css';

import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
// const defaultTodo = [
//   { id: 1, text:"Almorzar", state: false },
//   { id: 2, text:"Desayunar", state: false },
//   { id: 3, text:"Tomar el algo", state: false },
//   { id: 4, text:"Cenar", state: false },
//   { id: 5, text:"Dormir", state: true },
//   { id: 6, text:"Despertar", state: true },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodo));

// localStorage.removeItem('TODOS_V1');

function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
   } = useLocalStorage('TODOS_V1', []);
  
  const [search, setSearch] = React.useState('');

  const countTodo = todos.filter(todo => !!todo.state).length;
  const totalTodo = todos.length;

  const searched = todos.filter(
    (todo) => {return todo.text.toLowerCase().includes(search.toLowerCase())}
  );


  const changeStateTodos = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    const estado = newTodos[todoIndex].state;
    newTodos[todoIndex].state = !estado;
    saveTodos(newTodos); 
  };

  const deleteTrueTodo = (id) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id === id
    )
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos); 
  };

  return(
    <AppUI 
      error={error}
      loading={loading}
      countTodo={countTodo}
      totalTodo={totalTodo}
      search={search}
      setSearch={setSearch}
      searched={searched}
      changeStateTodos={changeStateTodos}
      deleteTrueTodo={deleteTrueTodo}
    />)

}



export default App;
