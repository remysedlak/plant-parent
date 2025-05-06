import React from 'react';
import GetPlants from '../api/GetPlants';
import {useState, useEffect} from 'react'
import PlantForm from '../components/forms/PlantForm';


const Plants = () => {

    const [response, setResponse] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
    const fetchData = async () => {
        const response = await GetPlants();
        setResponse(response);
    };
    fetchData();
    }, []);

    return (
        <div className="">
            <h1 className="text-2xl mt-2 text-left bg-gray-200 p-2 rounded-xl">Your Garden</h1>
            <div className="rounded-xl h-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 bg-gray-200">
                {/* Upload Button */}
                <div
                    className="w-full p-2 border-dashed border-gray-400 border-1 rounded-lg bg-yellow-50 hover:bg-yellow-100 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
                    onClick={() => setShowPopup(true)}
                >
                    <h1 className="text-xl font-normal cursor-pointer text-center">+ Add New Plant</h1>
                </div>
                {/* Map all plants */}

                {showPopup && (
                    <PlantForm onToggle={() => setShowPopup(false)} />
                )}
                {response.map((plant) => (
                    <div
                        key={plant.id}
                        className="bg-yellow-50 hover:bg-yellow-100 transition duration-200 ease-in-out p-4 rounded-lg text-left border-gray-400 border w-full"
                    >
                        <div className="flex flex-row">
                            <div>
                                <h2 className="text-xl font-normal">{plant.name}</h2>
                                <p className="text-gray-700">{plant.species}</p>
                                <p className="text-gray-700">{plant.scientific_name}</p>
                                <p className="text-gray-500 text-sm">Age: {plant.aquired_date}</p>
                                <p className="text-gray-500 text-sm">Location: {plant.location}</p>
                                <p className="text-gray-500 text-sm">Water: {plant.watering_interval_days}</p>
                                <p className="text-gray-500 text-sm">Last Watered: {plant.last_watered}</p>
                                <p className="text-gray-500 text-sm">{plant.notes}</p>
                            </div>
                            {/* Add image here when implemented */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plants;
