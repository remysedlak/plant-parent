import React from 'react';
import RecentPlants from '../components/RecentPlants';
import RecentGallery from '../components/RecentGallery';
import UnhealthyPlants from '../components/UnhealthyPlants';

const Home = () => {
  
  return (
      <div className="flex-grow flex">
        <div className="rounded-lg text-center flex flex-row gap-x-2">
          <div className="flex flex-col border p-2 bg-gray-200 rounded-xl">
            {/* 3 Recently viewed plants. */}
            <RecentPlants />

            {/* Recently uploaded pictures here. */}
            <RecentGallery />
          
          </div>
          <div className="flex flex-col border p-2 bg-gray-200 rounded-xl">
            <h1 className="text-2xl my-2 text-left font-normal">Upcoming Plant Duties</h1>
            <div className="flex flex-col gap-y-5">
              <span className="w-180 h-50 bg-orange-50 hover:bg-orange-100 rounded-xl border p-2"></span>
              <span className="w-180 h-50 bg-yellow-50 hover:bg-yellow-100 rounded-xl border p-2"></span>
              <span className="w-180 h-50 bg-blue-50  hover:bg-blue-100 rounded-xl border p-2"></span>
            </div>
            </div>
          
        </div>
      </div>
        
  );
};

export default Home;
