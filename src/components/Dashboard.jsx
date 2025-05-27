import { Search, Bell, Plus, Calendar, UserCircle, ArrowRight,ChevronDown } from 'lucide-react';
import anatomyModel from '../assets/anatomy.png';
import { Activity } from './activity/ActivityFeed';
import { HealthStatusCards } from './health/HealthStatusCards';
import {SimpleAppointmentCard} from './schedule/SimpleAppointmentCard';
import {UpcomingSchedule} from './schedule/UpComingSchedule';
import { CalendarView } from './calendar/CalendarView';
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
            
          <HealthStatusCards />
          </div>

          <div className="mt-8">
                      <Activity />
          </div>
        </div>

        <div>
          <CalendarView />

          <SimpleAppointmentCard />

          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
} 