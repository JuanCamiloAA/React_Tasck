import React from 'react'

function LoadItems (){
    return (
        <>
            <div role="status" className="my-4 mx-auto max-w-lg p-4 space-y-4  divide-y divide-gray-400 rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2 bg-gray-600 rounded-full dark:bg-gray-600 w-10 mb-2.5"></div>
                    </div>
                        <div className="w-60 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-10"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="my-4 mx-auto max-w-lg p-4 space-y-4  divide-y divide-gray-400 rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2 bg-gray-600 rounded-full dark:bg-gray-600 w-10 mb-2.5"></div>
                    </div>
                        <div className="w-60 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-10"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
            <div role="status" className="my-4 mx-auto max-w-lg p-4 space-y-4  divide-y divide-gray-400 rounded shadow animate-pulse md:p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <div className="h-2 bg-gray-600 rounded-full dark:bg-gray-600 w-10 mb-2.5"></div>
                    </div>
                        <div className="w-60 h-2 bg-gray-400 rounded-full dark:bg-gray-700"></div>
                    <div className="h-2.5 bg-gray-600 rounded-full dark:bg-gray-700 w-10"></div>
                </div>
                <span className="sr-only">Loading...</span>
            </div>
        </>
    )
}

export {LoadItems}