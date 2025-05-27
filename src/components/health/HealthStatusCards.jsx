import React from 'react';
import { ArrowRight } from 'lucide-react';
import { healthIndicators } from '../../mockData';

export function HealthStatusCards() {
  return (
    <>
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
  </>
  );
}
