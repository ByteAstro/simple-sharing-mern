import axios from "axios";

const API_URL = import.meta.env.VITE_BAKCEND_ENDPOINT

export const uploadFile = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/upload`, data);
        return response.data;
    } catch (error) {
        console.error('Error while calling the api', error.message);
    }
}