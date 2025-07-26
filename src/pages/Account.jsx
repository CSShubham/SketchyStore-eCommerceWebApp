import React from 'react'
import { useNavigate } from 'react-router-dom';
function Account() {
  const navigate=useNavigate();
  return (
    <div className='p-10'>
        <div className='px-10'>
          <button
          className="px-5 py-2 border-1 rounded-xl flex items-center text-white bg-[#FF735C] active:text-[#FF735C] active:bg-white"
          onClick={() => {
            navigate(-1);
          }}
        >
          {" "}
          &larr; Back{" "}
        </button>
        </div>
       <div className="flex  flex-col justify-center items-center h-150 border-0">
          <img
            src="/underConstruction.jpg"
            alt="imageloading....."
            className="h-120 w-120"
          />
          
        </div>
      
    </div>
  )
}

export default Account
