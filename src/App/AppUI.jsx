import React from 'react'

import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { LoadItems } from '../LoadItems/index';
import { ErrorItems } from '../ErrorItems/index';
import { NotItems } from '../NotItems/index';

function AppUI( {countTodo,totalTodo,search,setSearch,searched,changeStateTodos,deleteTrueTodo,loading,error} ) {
        
  return (
    <>
      <TodoCounter 
        count={countTodo} 
        total={totalTodo}
      />

      <TodoSearch 
        search={search}
        setSearch={setSearch}
      />
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
            onDelete={() => deleteTrueTodo(Todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export  {AppUI}