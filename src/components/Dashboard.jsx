import { Search, Bell, Plus, Calendar, UserCircle, ArrowRight,ChevronDown } from 'lucide-react';
import anatomyModel from '../assets/anatomy.png';
import { Activity } from './activity/ActivityFeed';
import { useState } from 'react';

export default function Dashboard() {
  const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const dates = [25, 26, 27, 28, 29, 30, 31];
  
  const appointments = [
    {
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      bgColor: 'bg-indigo-700',
      textColor: 'text-white'
    },
    {
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪🏻',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-900'
    }
  ];

  const healthIndicators = [
    { title: 'Lungs', date: '26 Oct 2021', color: 'bg-red-500', progress: 75 },
    { title: 'Teeth', date: '26 Oct 2021', color: 'bg-teal-400', progress: 75 },
    { title: 'Bone', date: '26 Oct 2021', color: 'bg-orange-300', progress: 75 }
  ];

  const dailySchedule = {
    25: ['10:00', '11:00', '12:00'],
    26: ['08:00', '09:00', '10:00'],
    27: ['12:00','---', '13:00'],
    28: ['10:00', '11:00','---'],
    29: ['---','14:00', '16:00'],
    30: ['12:00', '14:00', '15:00'],
    31: ['09:00', '10:00', '11:00']
  };

  const activityData = {
    'Mon': Array(24).fill().map((_, i) => ({
      type: i % 3 === 0 ? 'cyan' : i % 3 === 1 ? 'indigo' : 'empty',
      height: '24px'
    })),
    'Tues': Array(24).fill().map((_, i) => ({
      type: i % 3 === 1 ? 'cyan' : i % 3 === 2 ? 'indigo' : 'empty',
      height: '24px'
    })),
    'Wed': Array(24).fill().map((_, i) => ({
      type: i % 3 === 2 ? 'cyan' : i % 3 === 0 ? 'indigo' : 'empty',
      height: '24px'
    })),
    'Thurs': Array(24).fill().map((_, i) => ({
      type: i % 3 === 0 ? 'indigo' : i % 3 === 1 ? 'cyan' : 'empty',
      height: '24px'
    })),
    'Fri': Array(24).fill().map((_, i) => ({
      type: i % 3 === 1 ? 'indigo' : i % 3 === 2 ? 'cyan' : 'empty',
      height: '24px'
    })),
    'Sat': Array(24).fill().map((_, i) => ({
      type: i % 3 === 2 ? 'indigo' : i % 3 === 0 ? 'cyan' : 'empty',
      height: '24px'
    })),
    'Sun': Array(24).fill().map((_, i) => ({
      type: i % 4 === 0 ? 'cyan' : i % 4 === 2 ? 'indigo' : 'empty',
      height: '24px'
    }))
  };

  const [selectedPart, setSelectedPart] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handlePartClick = (part) => {
    setSelectedPart(part);
    setIsZoomed(true);
  };

  const handleZoomOut = () => {
    setIsZoomed(false);
    setSelectedPart(null);
  };

  return (
    <div className="flex-1 p-8 bg-white">
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-100">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-12 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center">
            <Bell className="w-4 h-4 text-indigo-600" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-cyan-400" >
            <span className='text-2xl'>👨🏻‍🦱</span></div>
          <button className="p-2 rounded-lg bg-indigo-600 text-white">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <div className='flex justify-between'>
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          <div className='justify-end'> 
          <span className='flex items-center'>This week <ChevronDown className='w-5 h-5 mt-1 ml-2' /></span>
          </div>
          </div>
          <div className="flex gap-8">
            <div className="flex-1">
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-gray-100 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/30" />
                  <div className={`relative w-full h-full transition-transform duration-300 ${isZoomed ? 'scale-150' : ''}`}>
                    {isZoomed && (
                      <button
                        onClick={handleZoomOut}
                        className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full"
                      >
                        ✕
                      </button>
                    )}
                    <img 
                      src={anatomyModel} 
                      alt="3D Anatomy Model" 
                      className="w-full h-full object-fit"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-60">
              {healthIndicators.map((indicator, index) => (
                <div key={index} className="p-3 mb-2 bg-indigo-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {indicator.title === 'Lungs' && <span className='text-3xl'>🫁</span>}
                      {indicator.title === 'Teeth' && <span className='text-3xl'>🦷</span>}
                      {indicator.title === 'Bone' && <span className='text-3xl'>🦴</span>}
                      <span className="font-semibold">{indicator.title}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-sm text-gray-500">Date: {indicator.date}</div>
                  </div>
                  <div className="h-1.5 rounded-full bg-gray-200 overflow-hidden w-full">
                    <div
                      className={`h-full rounded-full ${indicator.color}`}
                      style={{ width: `${indicator.progress}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex justify-end">
              <button className="text-indigo-600 text-sm flex right-3">
                      Details <ArrowRight className="w-4  ml-1" />
                    </button>
                    </div>
            </div>
          </div>

          <div className="mt-8">
                      <Activity />
          </div>
        </div>

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
                  date === 26 ? 'bg-indigo-100' : ''
                }`}>
                  <div className={`inline-block px-3 py-1 rounded-lg font-bold ${date==31 ?'bg-grey-100':'font-bold'}`}>
                    {date}
                  </div>
                  <div className="mt-2 space-y-5">
                    {dailySchedule[date].map((time) => (
                        <div key={time} className={`text-xs text-gray-500 font-semibold ${date === 26 && time === '09:00' ? 'bg-indigo-800 text-white ml-2 mr-2 p-1 mb-0 mt-0 rounded-lg' : date==31 ?'text-grey-100':'p-1'}`}>
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

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
        </div>
      </div>
    </div>
  );
} 