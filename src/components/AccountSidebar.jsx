// src/components/Sidebar.jsx
import { Link, useLocation } from 'react-router-dom';
import { User, ShoppingBag, Heart, CreditCard, LogOut } from 'lucide-react';

const navItems = [
  { path: 'profile', label: 'Profile', icon: <User size={18}/> },
  { path: 'orders', label: 'My Orders', icon: <ShoppingBag size={18}/> },
  { path: 'wishlist', label: 'Wishlist', icon: <Heart size={18}/> },
  { path: 'payment', label: 'Payment Method', icon: <CreditCard size={18}/> },
];

export default function Sidebar() {
  const loc = useLocation().pathname;
  return (
    <div className="block bg-white p-4">
      {/* Profile avatar/info */}
      <div className="flex items-center gap-4 mb-6">
        <span className="w-16 h-16 bg-gray-400 justify-center items-center flex rounded-full">J</span>
        <div>
          <h2 className="text-lg font-bold">John Doe</h2>
          <p className="text-gray-500 text-sm">johndoe@example.com</p>
        </div>
      </div>
      <nav className="space-y-2">
        {navItems.map(item => (
          <Link
            key={item.path}
            to={`/home/account/${item.path}`}
            className={`flex items-center gap-2 p-2 rounded ${loc.endsWith(item.path) ? 'bg-gray-100 font-semibold' : 'hover:bg-gray-100'}`}
          >
            {item.icon} {item.label}
          </Link>
        ))}
        <button className="flex items-center gap-2 p-2 text-red-500 hover:bg-gray-100 rounded">
          <LogOut size={18}/> Logout
        </button>
      </nav>
    </div>
  );
}
