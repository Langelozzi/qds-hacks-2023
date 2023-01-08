import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

export default function RecipeList({ recipes }) {

    return (
        <div className='recipe-list'>
            {
                recipes.length > 0 ?
                recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })
                :
                <h2>No results</h2>
            }
        </div>
    )
}
