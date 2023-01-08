import React from 'react';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
    // React.useEffect(() => {
    //     console.log(recipe)
    // }, [])

    return (
        <div>{recipe.title}</div>
    )
}
