import axios from 'axios';
import configData from '../config.json';

async function getAllRecipes() {
    const response = await axios.get(`${configData.apiUrl}/recipes`)
    return response.data;
}

async function getRecipesOrderedByIngredients(ingredients) {
    const response = await axios.post(
        `${configData.apiUrl}/recipes/ingredient-wizard`,
        { ingredients: ingredients }
    );
    return response.data;
}

async function getRecipeById(id) {
    const response = await axios.get(
        `${configData.apiUrl}/recipes/${id}`
    );
    return response.data;
}

export {
    getAllRecipes,
    getRecipesOrderedByIngredients,
    getRecipeById
}