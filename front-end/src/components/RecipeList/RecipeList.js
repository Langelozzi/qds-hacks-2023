import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function RecipeList({ recipes }) {
    function log() {
        console.log(recipes);
    }

    return (
        <div>
            {
                recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })
            }
        </div>
    )
}
