import React from 'react'
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const {
    countTodo:count,
    totalTodo:total
  } = React.useContext(TodoContext)
  
  return (
    <>
      <h2 className='text-center font-weight-bold text-5xl text-gray-700 p-8'> Has completado 
        <span className='font-bold text-gray-800'> {count} </span>
        de 
        <span className='font-bold text-gray-800'> {total} </span>
        TODOs 
      </h2>
    </>
  )
}

export { TodoCounter };