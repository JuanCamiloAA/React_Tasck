
import React from 'react';

import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { LoadItems } from '../LoadItems/index';
import { ErrorItems } from '../ErrorItems/index';
import { NotItems } from '../NotItems/index';
import { TodoContext } from '../TodoContext';

function AppUI() {
        
  const {
    loading,
    error,
    searched,
    changeStateTodos,
    deleteTodo
} = React.useContext(TodoContext);
  return (
    <>

      <TodoCounter />

      <TodoSearch />
      
      <TodoList>
          {loading && <LoadItems/>}
          {error && <ErrorItems/>}
          {(!loading && searched === 0) && <NotItems/>}

          {searched.map(Todo => (
          <TodoItem 
              key={Todo.id}
              id={Todo.id}
              text={Todo.text}
              state={Todo.state}
              onComplete={() => changeStateTodos(Todo.id)}
              onDelete={() => deleteTodo(Todo.id)}
          />
          ))}
      </TodoList>
      
      <CreateTodoButton />

      

    </>
  );
}

export  {AppUI}