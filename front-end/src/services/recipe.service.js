import axios from 'axios';
import configData from '../config.json';

async function getAllRecipes() {
    const response = await axios.get(`${configData.apiUrl}/recipes`)
    return response.data;
}

export {
    getAllRecipes
}