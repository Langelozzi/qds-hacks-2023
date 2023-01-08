import React from 'react';
import RecipeList from '../RecipeList/RecipeList';
import Search from '../Search/Search';
import './Home.css';

export default function Home({ recipes, setRecipes }) {
    const [filteredRecipes, setFilteredRecipes] = React.useState([]);

    return (
        <div className="landing-page">
            <img src={require("../../transparent_logo.png")} alt="recipe" />
            <Search filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes} />
            <RecipeList recipes={filteredRecipes} />
        </div>
    )
}
