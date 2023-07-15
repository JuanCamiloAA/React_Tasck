import React from 'react'

import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";



function TodoItem(props){
    return (
      <div id="alert-additional-content-1" className={`mx-4 flex justify-between p-4 mb-4 border border-gray-900 rounded-lg ${props.state && "bg-green-300 "} `}>
        <button className="svg-check text-lg font-medium hover:text-gray-200"
        onClick={props.onComplete}
        >

        <FaCheck className='text-gray-500'/> 
           
        </button>
        <div className="flex text-center">
          <h4 className={`text-center mx-auto ${props.state && "line-through"}`}>{props.text}</h4>
        </div>
        <div className="flex justify-end">
          <button type="button" 
          className="bg-red-400 hover:bg-red-900 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center"
          onClick={props.onDelete}
          >
            <FaXmark/>
          </button>
        </div>
      </div>
    );
  }

export { TodoItem };


