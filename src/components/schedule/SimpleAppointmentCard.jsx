import React from 'react';
import { appointments } from '../../mockData';

export function SimpleAppointmentCard() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
    {appointments.map((apt, i) => (
      <div
        key={i}
        className={`p-4 rounded-lg ${apt.bgColor} ${apt.textColor}`}
      >
        <div className="flex items-center gap-3 mb-2">    
                      
          <div>
            <div className="font-semibold">{apt.title}</div>
            <div className="text-sm opacity-80">{apt.time}</div>
            <div className="text-sm opacity-80">{apt.doctor}</div>
          </div>
          <span className="text-xl mb-10">{apt.icon}</span>
        </div>
       
      </div>
    ))}
  </div>
  );
}
