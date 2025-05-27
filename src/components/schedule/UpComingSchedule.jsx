import React from 'react';
import { upcomingSchedule } from '../../mockData';
import SimpleAppointmentCard from './SimpleAppointmentCard';

function UpcomingSchedule() {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">The Upcoming Schedule</h2>
      
      {upcomingSchedule.days.map((day) => (
        <div key={day.day} className="mb-6">
          <h3 className="text-gray-500 mb-3">On {day.day}</h3>
          <div className="grid grid-cols-2 gap-4">
            {day.appointments.map((appointment) => (
              <SimpleAppointmentCard
                key={appointment.id}
                title={appointment.title}
                time={appointment.time}
                icon={appointment.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;