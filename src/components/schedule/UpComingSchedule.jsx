import React from 'react';

export function UpcomingSchedule() {
  return (
    <div>
    <h3 className="text-lg font-semibold mb-4">The Upcoming Schedule</h3>
    <div className="space-y-4">
      <div>
        <h4 className="text-gray-400 mb-2">On Thursday</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className='font-bold'>Health checkup complete</span>
              <span>💉</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 font-semibold">11:00 AM</div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className='font-bold'>Ophthalmologist</span>
              <span>👁️</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 font-semibold">14:00 PM</div>
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-gray-400 mb-2">On Saturday</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className='font-bold'>Cardiologist</span>
              <span>❤️</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 font-semibold">12:00 PM</div>
          </div>
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center justify-between">
              <span className='font-bold'>Neurologist</span>
              <span>👨🏼‍⚕️</span>
            </div>
            <div className="text-sm text-gray-600 mt-1 font-semibold">16:00 PM</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
