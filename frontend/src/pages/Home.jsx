import React from 'react';
import RecentPlants from '../components/RecentPlants';
import RecentGallery from '../components/RecentGallery';

const Home = () => {
  
  return (
      <div className="w-full h-full">
        <div className="rounded-lg text-center flex flex-col md:flex-row w-full gap-x-2 gap-y-5">
        
          <div className="flex flex-col md:flex-row gap-x-5 gap-y-6 mx-auto w-full border p-2 bg-gray-200 rounded-xl">
            {/* 3 Recently viewed plants. */}
            <div className="md:flex md:flex-row">
            <RecentPlants />
            <RecentGallery />
            </div>
            <div className="flex flex-col p-2 bg-gray-200 rounded-xl ">
            <h1 className="text-2xl my-2 text-left font-normal">Upcoming Plant Duties</h1>
            <div className="flex flex-col gap-y-5">
              <span className="w-full h-50 bg-orange-50 hover:bg-orange-100 rounded-xl border p-2"></span>
              <span className="w-full h-50 bg-yellow-50 hover:bg-yellow-100 rounded-xl border p-2"></span>
            </div>
            </div>
          
        </div>
          </div>
          
      </div>
        
  );
};

export default Home;
