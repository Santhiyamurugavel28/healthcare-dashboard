import React from 'react';

function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 transition-transform hover:scale-[1.02] duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
        <div className="text-xl">{icon}</div>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;