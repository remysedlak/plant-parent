import axios from "axios";

const getWatering = async () => {
  let response;
  try {
    response = await axios.get("http://localhost:8000/needs_watering");
    console.log("Plants that need watered:", response.data);
  } catch (error) {
    console.error(
      "Logging an Axios Error:",
      error.response ? error.response.data : error.message
    );
  }
  return response?.data || [];
};
export default getWatering;
