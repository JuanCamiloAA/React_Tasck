import React from 'react'

function TodoCounter({count, total}) {
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