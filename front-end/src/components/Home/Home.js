import React from 'react';
import Search from '../Search/Search';
import './Home.css';

export default function Home({ recipes, setRecipes }) {
    const [filteredRecipes, setFilteredRecipes] = React.useState([]);

    return (
        <div className="landing-page">
            <h1>Welcome to Reci.py</h1>
            <img src={require("../../recipy.png")} alt="recipe" />
            <Search filteredRecipes={filteredRecipes} setFilteredRecipes={setFilteredRecipes}/>
        </div>
    )
}
