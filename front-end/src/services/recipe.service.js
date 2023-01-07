import axios from 'axios';
import configData from '../config.json';

async function getAllRecipes() {
    const recipes = await axios.get(`${configData.apiUrl}/recipes`)
    console.log(recipes)
    return recipes;
}

export {
    getAllRecipes
}