import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css';

export default function Home({recipes}) {
    function logRecipes() {
        console.log(recipes);
    }

    return (
        <div>
            <Button onClick={logRecipes}>Log Recipes to console</Button>
            <h2>Recipe titles</h2>
            <div>
                {
                    recipes.map((recipe) => {
                        return <div key={recipe.id}>{recipe.title}</div> 
                    })
                }
            </div>
        </div>
    )
}
