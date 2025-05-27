// Mock data for the healthcare dashboard
export const userData = {
  name: 'Dr. Smith',
  avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100'
};

export const healthStatus = [
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'warning',
    date: '26 Oct 2021',
    icon: '🫁'
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'good',
    date: '26 Oct 2021',
    icon: '🦷'
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: '26 Oct 2021',
    icon: '🦴'
  }
];

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
  month: 'October 2021',
  days: [
    { day: 'Mon', date: 25, appointments: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, appointments: ['08:00', '09:00', '10:00'] },
    { day: 'Wed', date: 27, appointments: ['12:00', '13:00'] },
    { day: 'Thurs', date: 28, appointments: ['10:00', '11:00'] },
    { day: 'Fri', date: 29, appointments: ['14:00', '15:00', '16:00'] },
    { day: 'Sat', date: 30, appointments: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, appointments: ['09:00', '10:00', '11:00'] }
  ],
  appointments: [
    {
      id: 1,
      title: 'Dentist',
      time: '09:00-11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷'
    },
    {
      id: 2,
      title: 'Physiotherapy Appointment',
      time: '11:00-12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '🧑‍⚕️'
    }
  ]
};

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