import { React, useState, useEffect } from 'react';
import ImageForm from '../components/forms/ImageForm';
import GetPhotos from '../api/GetPhotos';

const Gallery = () => {
    const [response, setResponse] = useState([]);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await GetPhotos();
            setResponse(response);
        };
        fetchData();
    }, []);

    return (
        <div className="">
            {showPopup ? <ImageForm onToggle={() => setShowPopup(false)}/> : ``}
            <h1 className="text-2xl mt-2 text-left bg-gray-200 p-2 rounded-xl">Your Gallery</h1>
            <div className="rounded-xl h-full p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4 bg-gray-200">
            <div
                    className="w-full h-16 md:h-64 mt-4 p-2 border-dashed border-gray-400 border-1 rounded-lg bg-green-50 hover:bg-green-100 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
                    onClick={() => setShowPopup(true)}>   
                <h1 className="text-xl font-normal cursor-pointer text-center">+ Upload New Image</h1>
            </div>
                {response.map((photo) => (
                    
                    <div
                        key={photo.id}
                        className="border mt-4 flex flex-row justify-center rounded-lg transition duration-100 ease-in-out cursor-pointer bg-green-50 w-full"
                    >
                        
                        <div className="flex flex-col">
                            <img
                                src={`http://localhost:8000/${photo.image}`}
                                alt={`${photo.description} photo`}
                                className="w-full h-10 md:h-48 object-cover rounded-xl p-1" 
                            />
                            <p className="text-gray-800 text-md text-center mt-2 font-normal">{photo.description}</p>
                            <p className="text-gray-500 text-sm text-center mt-2">Date: {photo.date_added}</p>
                        </div>
                    </div>
                ))}
                
            </div>
            
        </div>
        
    );
};

export default Gallery;
