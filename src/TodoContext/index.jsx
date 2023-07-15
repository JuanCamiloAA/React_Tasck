
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

// const TodoContext = React.createContext();

const TodoContext = React.createContext()

function TodoProvider({children}) {
    
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

    const deleteTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
        (todo) => todo.id === id
        )
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos); 
    };

    return (
        <TodoContext.Provider value={{
            countTodo,
            totalTodo,
            search,
            setSearch,
            searched,
            changeStateTodos,
            deleteTodo,
            loading,
            error
        }}>
            {children}
        </TodoContext.Provider>
    );
}


export {TodoContext, TodoProvider};