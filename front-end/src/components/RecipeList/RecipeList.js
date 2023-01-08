import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeList.css';

export default function RecipeList({ recipes, setRecipes }) {
    const localHostKey = 'RECIPE_LIST_DATA';

    React.useState(() => {
        let localHostRecipes = JSON.parse(window.localStorage.getItem(localHostKey));
        setRecipes(localHostRecipes);
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem(localHostKey, JSON.stringify(recipes)); 
    }, [recipes])

    return (
        <div className='recipe-list'>
            {
                !recipes || recipes.length < 0 ?
                <h2>No results</h2>
                :
                recipes.map((recipe) => {
                    return <RecipeCard key={recipe.id} recipe={recipe}/>
                })
            }
        </div>
    )
}
