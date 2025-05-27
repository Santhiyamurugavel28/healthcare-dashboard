import React from 'react';

const activityData = {
  Mon: [
    { height: 35, color: 'bg-cyan-400' },
    { height: 45, color: 'bg-indigo-700' },
    { height: 25, color: 'bg-gray-200' }
  ],
  Tues: [
    { height: 30, color: 'bg-gray-200' },
    { height: 40, color: 'bg-cyan-400' },
    { height: 35, color: 'bg-indigo-700' }
  ],
  Wed: [
    { height: 25, color: 'bg-cyan-400' },
    { height: 35, color: 'bg-gray-200' },
    { height: 30, color: 'bg-indigo-700' }
  ],
  Thurs: [
    { height: 20, color: 'bg-gray-200' },
    { height: 45, color: 'bg-indigo-700' },
    { height: 30, color: 'bg-cyan-400' }
  ],
  Fri: [
    { height: 40, color: 'bg-cyan-400' },
    { height: 35, color: 'bg-indigo-700' },
    { height: 25, color: 'bg-gray-200' }
  ],
  Sat: [
    { height: 25, color: 'bg-gray-200' },
    { height: 35, color: 'bg-indigo-700' },
    { height: 30, color: 'bg-cyan-400' }
  ],
  Sun: [
    { height: 35, color: 'bg-cyan-400' },
    { height: 30, color: 'bg-indigo-700' },
    { height: 20, color: 'bg-gray-200' }
  ]
};

const colors = ['bg-grey-100', 'bg-indigo-500', 'bg-indigo-100'];

export function Activity() {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div className="flex justify-between mb-2">
        <h2 className="font-bold text-lg text-gray-800">Activity</h2>
        <span className="text-sm text-gray-400">3 appointment on this week</span>
      </div>
      <div className="flex justify-between items-end">
        {Object.entries(activityData).map(([day, bars]) => (
          <div key={day} className="flex flex-col items-center">
            <span className="text-xs text-gray-500 ">{day}</span>
            <div className="flex gap-[2px]">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className={`${bar.color} w-1.5`}
                  style={{ 
                    height: `${bar.height}px`,
                    opacity: bar.color === 'bg-gray-200' ? 0.5 : 1 
                  }}
                />
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ActivityChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md max-w-xl mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="font-bold text-lg text-gray-800">Activity</h2>
        <span className="text-sm text-gray-400">3 appointment on this week</span>
      </div>
      <div className="flex justify-between items-end h-40">
        {Object.entries(activityData).map(([day, bars]) => (
          <div key={day} className="flex flex-col items-center space-y-1">
            <div className="flex space-x-1 items-end">
              {bars.map((bar, index) => (
                <div
                  key={index}
                  className={`${bar.color} w-1.5 rounded-full`}
                  style={{ 
                    height: `${bar.height}px`,
                    opacity: bar.color === 'bg-gray-200' ? 0.5 : 1 
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 mt-1">{day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

