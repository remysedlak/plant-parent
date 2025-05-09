import React from "react";
import GetPlants from "../api/GetPlants";
import { useState, useEffect } from "react";
import PlantForm from "../components/forms/PlantForm";

const Plants = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetPlants();
      setResponse(response);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <h1 className="text-2xl mt-2 text-left bg-gray-200 p-2 rounded-xl">
        Your Garden
      </h1>
      <div className="rounded-xl h-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 bg-gray-200">
        {/* Upload Button */}
        <div
          className="w-full p-2 border-dashed border-gray-400 border-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
          onClick={() => setShowPopup(true)}
        >
          <h1 className="text-xl font-normal cursor-pointer text-center">
            + Add New Plant
          </h1>
        </div>
        {/* Map all plants */}
        {showPopup && <PlantForm onToggle={() => setShowPopup(false)} />}
        {response.map((plant) => {
          const acquiredDate = new Date(plant.acquired_date);
          const today = new Date();
          const diffTime = Math.abs(today - acquiredDate);
          const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
          const diffMonths = Math.floor(
            (diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)
          );
          const diffDays = Math.floor(
            (diffTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
          );

            return (
            <div
              key={plant.id}
              className="bg-yellow-50 hover:bg-yellow-100 transition duration-200 ease-in-out p-4 rounded-lg text-left border-gray-400 border w-full relative"
            >
              <div className="flex flex-row">
              <div>
                <div className="flex flex-row gap-2 justify-between">
                <h2 className="text-xl font-normal">{plant.name}</h2>
                <p className="text-gray-800 bg-green-100 border-gray-400 border-1 p-1 rounded-full absolute top-2 right-2">
                  {plant.species}
                </p>
                </div>
                <p className="text-gray-800">{plant.scientific_name}</p>
                <p className="text-gray-600 text-sm">
                Age: {diffYears > 0 ? `${diffYears} years` : ""}
                {diffMonths > 0 ? ` ${diffMonths} months` : ""}
                {diffDays > 0 ? ` ${diffDays} days` : ""}
                </p>
                <p className="text-gray-600 text-sm">
                Location: {plant.location}
                </p>
                <p className="text-gray-600 text-sm">
                Water: {plant.watering_interval_days}
                </p>
                <p className="text-gray-600 text-sm">
                Last Watered: {plant.last_watered}
                </p>
                <p className="text-gray-500 text-sm">{plant.notes}</p>
                {plant.latest_image ? (
                <img
                  src={"http://localhost:8000" + plant.latest_image.image}
                  alt={plant.latest_image.description || "Plant image"}
                  className="w-full h-24 md:w-48 object-cover rounded-xl p-1"
                />
                ) : (
                <img
                  src={"https://placehold.co/600x400?text=No+image+found"}
                  alt={"No image found"}
                  className="w-full h-24 md:w-48 object-cover rounded-xl p-1"
                />
                )}
              </div>
              </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};

export default Plants;
