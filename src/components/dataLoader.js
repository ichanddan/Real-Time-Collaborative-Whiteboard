// src/dataLoader.js
import axios from 'axios';

export const loadData = async () => {
  try {
    const response = await axios.get('/eve.json');
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      console.error("Data is not an array:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error loading data:", error);
    return [];
  }
};
