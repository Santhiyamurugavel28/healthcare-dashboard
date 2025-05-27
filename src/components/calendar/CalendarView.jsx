import React from 'react';
import { weekDays } from '../../mockData';

export function CalendarView() {
  const dates = [25, 26, 27, 28, 29, 30, 31];
  const dailySchedule = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00','---', '13:00'],
    28: ['10:00', '11:00','---'],
    29: ['---','14:00', '16:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['09:00', '10:00', '11:00']
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">October 2021</h2>
          <p className="text-sm text-gray-500"></p>
        </div>
        <div className="flex items-center gap-0">
          <div className="flex gap-0">
            <button className="p-2 rounded-lg text-indigo-800 text-3xl">←</button>
            <button className="p-2 rounded-lg text-indigo-800 text-3xl">→</button>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="grid grid-cols-7 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-sm text-indigo-800 text-center font-semibold">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7">
          {dates.map((date) => (
            <div key={date} className={`text-center ${
              date === 26 ? 'bg-indigo-100 rounded-lg' : ''
            }`}>
              <div className={`inline-block px-3 py-1 rounded-lg font-bold ${date === 31 ? 'text-gray-400' : ''}`}>
                {date}
              </div>
              <div className="mt-2 space-y-2">
                {dailySchedule[date].map((time, index) => (
                  <div 
                    key={`${date}-${time}-${index}`} 
                    className={`text-xs font-semibold mx-2 p-1 rounded-lg ${
                      date === 26 && time === '09:00' 
                        ? 'bg-indigo-800 text-white' 
                        : date === 31 
                          ? 'text-gray-400' 
                          : 'text-gray-500'
                    }`}
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
