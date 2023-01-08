import React from 'react'
import RecipeCard from '../RecipeCard/RecipeCard'

export default function RecipeList({ recipes }) {

    return (
        <div className='recipe-list'>
            {
                recipes.length > 0 ?
                recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })
                :
                <h2>No recipes found with the ingredients you have</h2>
            }
        </div>
    )
}
