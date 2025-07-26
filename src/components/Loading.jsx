import React from 'react'

function Loading() {
  return (
    <div className="w-full  h-screen flex items-center flex-col justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      <p className="text-xl font-semibold ml-4">Loading...</p>
    </div>
  )
}

export default Loading
