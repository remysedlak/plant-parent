import { useEffect, useState, React } from 'react';
import GetPhotos from '../api/GetPhotos';


const RecentGallery = () => {
  const [response, setResponse] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    const response = await GetPhotos();
    setResponse(response);
  };
  fetchData();
}, []);

  return (
    <div>
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl text-left my-2">Recent Gallery</h1>
        <div className="flex flex-row gap-x-3">
                {response.map((photo) =>
                        
                        <div
                            key={`${photo.id}`}
                            className="p-2 border flex flex-col justify-center rounded-lg hover:bg-yellow-100 transition duration-100 ease-in-out cursor-pointer bg-yellow-50"
                        >
                            <img
                                src={'http://localhost:8000/'.concat(photo.image)}
                                alt={`${photo.description} photo`}
                                className="h-32 w-32 object-cover rounded-md"
                            />
                            <p className="text-gray-800 text-sm mt-2">{photo.description}</p>
                            <p className="text-gray-500 text-sm mt-2">Date: {photo.date_added}</p>
                        </div>
                    )
                }
            </div>
      </div>
    </div>
  );
};
export default RecentGallery;
