import React from 'react';
import { LayoutGrid,MessageSquarePlus,Blocks,MessageCircleMore,Phone, ArrowUpDown, Calendar, ClipboardList, BarChart2, MessageSquare, HeadphonesIcon, Settings } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Blocks, label: 'Dashboard', active: true },
    { icon: ArrowUpDown, label: 'History' },
    { icon: Calendar, label: 'Calendar' },
    { icon: MessageSquarePlus, label: 'Appointments' },
    { icon: BarChart2, label: 'Statistics' }
  ];

  return (
    <div className="w-64 h-screen bg-indigo-50 p-6 flex flex-col">
      <div className="flex items-center mb-8">  
        <span className="text-2xl font-bold">
          <span className="text-cyan-400">Health</span>
          <span>care.</span>
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="text-gray-400 text-sm mb-4">General</div>
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-3 rounded-lg cursor-pointer ${
              item.active
                ? 'text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </div>
        ))}
        <div className="text-gray-400 text-sm mb-4">Tools</div>
        <div className="flex items-center p-3 rounded-lg cursor-pointer">
            <MessageCircleMore className="w-5 h-5 mr-3" />
            <span>Chat</span>
          </div>
          <div className="flex items-center p-3 rounded-lg cursor-pointer">
            <Phone className="w-5 h-5 mr-3" />
            <span>Support</span>
          </div>
      </div>
      <div className="mt-auto">
      <div className="flex items-center p-3 rounded-lg cursor-pointer">
            <Settings className="w-5 h-5 mr-3" />
            <span>Setting</span>
          </div>
      </div>
    </div>
  );
}