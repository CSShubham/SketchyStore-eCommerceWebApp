import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header/>
      <main className='flex '>
  
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout
