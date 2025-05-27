import React from 'react';
import { healthStatus } from '../../mockData';

function HealthStatusCards() {
  return (
    <div className="flex flex-col gap-6">
      {healthStatus.map((item) => (
        <div key={item.id} className="bg-white rounded-xl shadow-sm p-5">
          <div className="flex items-center mb-3">
            <span className="text-xl mr-3">{item.icon}</span>
            <h3 className="font-medium text-gray-800">{item.name}</h3>
          </div>
          <div className="text-xs text-gray-500 mb-3">Date: {item.date}</div>
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${
                item.status === 'good' ? 'bg-green-400' : 'bg-red-400'
              }`}
              style={{ width: item.status === 'good' ? '75%' : '40%' }}
            ></div>
          </div>
        </div>
      ))}
      
      <div className="text-right">
        <button className="text-indigo-600 text-sm font-medium flex items-center justify-end hover:text-indigo-800 transition-colors">
          Details
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default HealthStatusCards;