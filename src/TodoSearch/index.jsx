import React from 'react'

import { FaSistrix } from "react-icons/fa6";
import { TodoContext } from '../TodoContext';

function TodoSearch() {

  
  const {
    search,
    setSearch,
  } = React.useContext(TodoContext)

  return (
    <>
      <div className='w-1/2 mx-auto my-4'>
        <form className="flex items-center">   
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <input
                type="text" id="voice-search" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Tarea"
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                  <FaSistrix />
                </button>
            </div>
        </form>
      </div>
    </>
  )
}

export { TodoSearch };


