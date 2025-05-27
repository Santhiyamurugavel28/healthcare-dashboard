import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';
import { userData } from '../mockData';

function Header() {
  return (
    <header className="bg-white py-4 px-6 border-b border-gray-100 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-cyan-400">Health<span className="text-gray-700">care.</span></h1>
        <div className="ml-8 relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search" 
            className="pl-10 pr-4 py-2 rounded-full bg-gray-50 w-64 focus:outline-none focus:ring-1 focus:ring-blue-300 text-sm"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell className="h-5 w-5 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center">
          <img 
            src={userData.avatar} 
            alt="User avatar" 
            className="h-9 w-9 rounded-full object-cover"
          />
        </div>
        <button className="bg-indigo-600 p-2 rounded-lg text-white hover:bg-indigo-700 transition-colors">
          <Plus className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export default Header;