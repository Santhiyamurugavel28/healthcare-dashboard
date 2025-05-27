import React from 'react';
import AnatomySection from './anatomy/AnatomySection';
import HealthStatusCards from './health/HealthStatusCards';
import CalendarView from './calendar/CalendarView';
import UpcomingSchedule from './schedule/UpComingSchedule';
import ActivityFeed from './activity/ActivityFeed';

function DashboardMainContent() {
  return (
    <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
          {/* Left column: Anatomy + Health Status */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <AnatomySection />
            <ActivityFeed />
          </div>
          
          {/* Right column: Health Status Cards + Calendar */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Health Status Cards - 1/3 of the right column */}
              <div className="lg:col-span-1">
                <HealthStatusCards />
              </div>
              
              {/* Calendar - 2/3 of the right column */}
              <div className="lg:col-span-2">
                <CalendarView />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;