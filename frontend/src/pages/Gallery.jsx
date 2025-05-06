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
        <div>
            {showPopup ? <ImageForm onToggle={() => setShowPopup(false)}/> : ``}
            <h1 className="text-2xl mt-2 text-left bg-gray-200">Your Gallery</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {response.map((photo) => (
                    <div
                        key={photo.id}
                        className="border flex flex-row justify-center rounded-lg transition duration-100 ease-in-out cursor-pointer bg-green-50 w-90"
                    >
                        <div className="flex flex-col">
                            <img
                                src={`http://localhost:8000/${photo.image}`}
                                alt={`${photo.description} photo`}
                                className="h-64 w-64 object-cover rounded-xl p-1" 
                            />
                            <p className="text-gray-800 text-md mt-2 font-normal">{photo.description}</p>
                            <p className="text-gray-500 text-sm mt-2">Date: {photo.date_added}</p>
                        </div>
                    </div>
                ))}
                <div
                    className="w-90 h-90 p-2 border-dashed border-gray-400 border-1 rounded-lg bg-green-50 hover:bg-green-100 flex items-center justify-center cursor-pointer transition duration-100 ease-in-out"
                    onClick={() => setShowPopup(true)}
                >   
                    <h1 className="text-xl font-normal cursor-pointer text-center">+ Upload New Image</h1>
                </div>
            </div>
        </div>
        
    );
};

export default Gallery;
