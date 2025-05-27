// Mock data for the healthcare dashboard
export const userData = {
  name: 'Dr. Smith',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
};

export const healthIndicators = [
  { title: 'Lungs', date: '26 Oct 2021', color: 'bg-red-500', progress: 75 },
  { title: 'Teeth', date: '26 Oct 2021', color: 'bg-teal-400', progress: 75 },
  { title: 'Bone', date: '26 Oct 2021', color: 'bg-orange-300', progress: 75 }
];

export const weekDays = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const anatomyIndicators = [
  {
    id: 'heart',
    name: 'Healthy Heart',
    position: { top: '37%', left: '42%' },
    status: 'good',
    icon: '❤️'
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    position: { top: '80%', left: '30%' },
    status: 'good',
    icon: '🦵'
  }
];

export const calendarData = {
  25: ['10:00', '11:00', '12:00'],
  26: ['08:00', '09:00', '10:00'],
  27: ['12:00','---', '13:00'],
  28: ['10:00', '11:00','---'],
  29: ['---','14:00', '16:00'],
  30: ['12:00', '14:00', '15:00'],
  31: ['09:00', '10:00', '11:00']
};

export const appointments = [
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

export const upcomingSchedule = {
  days: [
    {
      day: 'Thursday',
      appointments: [
        {
          id: 1,
          title: 'Health checkup complete',
          time: '11:00 AM',
          icon: '💉'
        },
        {
          id: 2,
          title: 'Ophthalmologist',
          time: '14:00 PM',
          icon: '👁️'
        }
      ]
    },
    {
      day: 'Saturday',
      appointments: [
        {
          id: 3,
          title: 'Cardiologist',
          time: '12:00 AM',
          icon: '❤️'
        },
        {
          id: 4,
          title: 'Neurologist',
          time: '16:00 PM',
          icon: '🧠'
        }
      ]
    }
  ]
};

export const activityData = {
  summary: '3 appointments on this week',
  days: [
    { day: 'Mon', values: [25, 40, 10] },
    { day: 'Tues', values: [10, 30, 40] },
    { day: 'Wed', values: [30, 10, 20] },
    { day: 'Thurs', values: [40, 20, 50] },
    { day: 'Fri', values: [20, 40, 10] },
    { day: 'Sat', values: [30, 20, 40] },
    { day: 'Sun', values: [10, 30, 20] }
  ]
};

export const navigationLinks = [
  { id: 'dashboard', name: 'Dashboard', icon: 'Layout' },
  { id: 'history', name: 'History', icon: 'Clock' },
  { id: 'calendar', name: 'Calendar', icon: 'Calendar' },
  { id: 'appointments', name: 'Appointments', icon: 'CalendarCheck' },
  { id: 'statistics', name: 'Statistics', icon: 'BarChart2' },
  { id: 'tests', name: 'Tests', icon: 'Clipboard' },
  { id: 'chat', name: 'Chat', icon: 'MessageSquare' },
  { id: 'support', name: 'Support', icon: 'PhoneCall' },
  { id: 'settings', name: 'Setting', icon: 'Settings' }
];