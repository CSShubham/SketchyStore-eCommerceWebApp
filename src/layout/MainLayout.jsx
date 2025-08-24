import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Outlet } from 'react-router-dom';
function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex w-full  pb-10 sm:pb-0 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout
