import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

export default function RecipeList({ recipes, setRecipes }) {
    return (
        <div className='recipe-list'>
            {
                !recipes || recipes.length <= 0 ?
                <h2>No results</h2>
                :
                recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })
            }
        </div>
    )
}
