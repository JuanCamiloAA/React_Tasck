import React from 'react'
import { FaPlus } from "react-icons/fa6";

function CreateTodoButton() {
  return (
    <>
      <div className="relative">
        <button type="button" className="fixed bottom-5 right-5 text-white bg-blue-700 p-4 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-3"
        // dataDrawerTaget="drawer-example" dataDrawerShow="drawer-example" ariaControls="drawer-example"
        >
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
          </svg> */}
          <FaPlus className='rotate-0 hover:rotate-45' />
        </button>
      </div>
    </>
  )
}
export {CreateTodoButton};

// <!-- drawer init and toggle -->

// <!-- drawer component -->

