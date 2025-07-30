import React, { useEffect } from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Sidebar from '../components/AccountSidebar';

function Account() {
  const location = useLocation();
  const navigate = useNavigate();
  const isDesktop = window.matchMedia('(min-width: 768px)').matches;
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  useEffect(() => {
    if (isMobile && location.pathname === '/home/account/profile') {
      navigate('/home/account/mprofile'); // push a new page on mobile
    } else if (isDesktop && location.pathname === '/home/account') {
      navigate('/home/account/profile', { replace: true }); // replace on desktop
    }
  }, [isDesktop, isMobile, location.pathname, navigate]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row w-full">
      <Sidebar />
      <div className="flex-1 hidden md:block bg-gray-50 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
