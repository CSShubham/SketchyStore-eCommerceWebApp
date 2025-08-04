import React from 'react'

function SplashLoading() {
  return (
   <div className="w-full  h-screen flex items-center md:items-start justify-center ">
      
        <img className=' w-100 h-100 md:w-152 md:h-152 rounded-full animate-pulse' src="Mascot.jpeg" alt={<div className="animate-spin rounded-full h-52 w-52 border-b-4 border-[#ff375c]"></div>} />

    </div>
  )
}

export default SplashLoading
