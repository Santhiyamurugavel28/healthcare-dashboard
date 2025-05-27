import React from 'react';
import { calendarData } from '../../mockData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function CalendarView() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-4 items-center">
          <div className="text-gray-800 font-medium">
            {calendarData.month}
          </div>
          <div className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-md">
            This Week
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button className="p-1.5 rounded-md text-gray-500 hover:bg-gray-100 transition-colors">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-4">
        {calendarData.days.map((day) => (
          <div key={day.day} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{day.day}</div>
            <div className={`text-lg font-medium mb-2 ${
              day.day === 'Thurs' ? 'text-indigo-600' : 'text-gray-800'
            }`}>{day.date}</div>
            
            <div className="space-y-1.5">
              {day.appointments.map((time, idx) => (
                <div 
                  key={`${day.day}-${idx}`}
                  className={`text-xs py-1 px-1 rounded ${
                    idx === 0 && day.day === 'Thurs' 
                      ? 'bg-indigo-600 text-white' 
                      : idx === 1 && day.day === 'Wed'
                      ? 'bg-indigo-100 text-indigo-700'
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
      
      <div className="flex gap-4 mt-6">
        {calendarData.appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className={`flex-1 rounded-xl p-4 ${
              appointment.id === 1 
                ? 'bg-indigo-600 text-white'
                : 'bg-indigo-100 text-indigo-800'
            }`}
          >
            <div className="flex justify-between mb-2">
              <div className="font-medium">{appointment.title}</div>
              <div className="text-xl">{appointment.icon}</div>
            </div>
            <div className={`text-sm ${
              appointment.id === 1 ? 'text-indigo-200' : 'text-indigo-600'
            }`}>
              {appointment.time}
            </div>
            <div className={`text-sm mt-1 ${
              appointment.id === 1 ? 'text-indigo-200' : 'text-indigo-600'
            }`}>
              {appointment.doctor}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;