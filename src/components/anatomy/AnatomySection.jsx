import React from 'react';
import { anatomyIndicators } from '../../mockData';
import { Search } from 'lucide-react';

function AnatomySection() {
  return (
    <div className="relative bg-white rounded-xl shadow-sm p-6 flex-1">
      <div className="absolute top-4 right-4">
        <button className="p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
          <Search className="h-5 w-5" />
        </button>
      </div>
      
      <div className="relative h-96 flex items-center justify-center">
        <div className="w-64 h-full relative flex items-center justify-center">
          <img 
            src="https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg?auto=compress&cs=tinysrgb&w=300" 
            alt="Human anatomy" 
            className="h-full object-contain opacity-80"
          />
          
          {anatomyIndicators.map((indicator) => (
            <div 
              key={indicator.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ 
                top: indicator.position.top, 
                left: indicator.position.left
              }}
            >
              <div 
                className={`px-3 py-1.5 rounded-full text-sm font-medium flex items-center ${
                  indicator.status === 'good' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-red-500 text-white'
                }`}
              >
                <span className="mr-1.5">{indicator.icon}</span>
                {indicator.name}
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gray-200 rounded-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full border border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnatomySection;