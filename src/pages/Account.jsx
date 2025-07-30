import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/AccountSidebar';

function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      <Sidebar />
       {isDesktop &&
      <div className="flex-1 hidden md:block bg-gray-50 p-4">
         <Outlet />
      </div>
}
    </div>
  );
}

export default Account;
