



// src/API/apiCall.js
import axios from 'axios';

const APP_ID = 'LOIFSLLA9YGW0AZ'; // Replace with your actual App ID
const API_KEY = '314416608cd4448f9f2d10df2ec7d6c320240712182938368472'; // Replace with your actual API Key
const API_URL = '/api'; // Use the proxy path

export const apiCall = async (page = 1, limit = 10) => {
    try {
        const response = await axios.get(`${API_URL}/products`, {
            params: {
                organization_id: '0451c87499bf4b70b65a092793e4a797', // Replace with your actual organization ID
                page,
                size: limit,
                Appid: APP_ID,
                Apikey: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data', error);
        throw error;  // Rethrow the error after logging it
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await axios.get(`${API_URL}/products/${productId}`, {
            params: {
                organization_id: '0451c87499bf4b70b65a092793e4a797', // Replace with your actual organization ID
                Appid: APP_ID,
                Apikey: API_KEY
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching product data', error);
        throw error;  // Rethrow the error after logging it
    }
};
