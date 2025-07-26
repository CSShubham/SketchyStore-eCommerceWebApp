import React from 'react'
import { useNavigate } from 'react-router-dom';

function Front() {
    const navigate=useNavigate()
  return (
    <div className="flex w-full h-[700px]">
        <div className='absolute -translate-x-150 translate-y-10 -z-1 opacity-90 bg-[#FF735C] h-140 w-250 rounded-[80%]'>
        {/* orange box */}
        </div>
      <div className="w-[40vw] flex flex-col justify-center font-roboto items-start p-8 ">
        <h1 className="text-8xl absolute font-bold text-gray-800 tracking-wide top-20 left-50 mb-4">Welcome to Our Store</h1>
        <h2 className='text-3xl -translate-y-10 font-semibold text-gray-600 mb-2'>Your One-Stop Shop for Everything You Need!</h2>
        <p className="text-lg -translate-y-10 text-zinc-500 mb-1 ">Find the best products here!</p>
        <button className='border-2 rounded-2xl py-3 px-5 font-medium hover:bg-white hover:text-black -translate-y-8' onClick={()=>navigate('/home')}>Shop Now &#8594; </button>
        {/* Add more styled text/buttons as needed */}
      </div>
      <div className="w-[60vw]">
        <img
          src="/21727022_6505894.jpg"
          alt="loading......"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default Front
