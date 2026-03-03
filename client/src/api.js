import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Point to backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export const askAssistant = async (text, mode) => {
    try {
        const response = await api.post('/ask', { text, mode });
        return response.data;
    } catch (error) {
        throw error.response?.data || error;
    }
};

export default api;
