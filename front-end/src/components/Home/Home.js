import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import { getRecipesOrderedByIngredients } from '../../services/recipe.service'
import './Home.css';
import { Squash as Hamburger } from 'hamburger-react';

export default function Home({ recipes, setRecipes }) {
    async function getRecipesWithIngredients(ingredients) {
        const recipes = await getRecipesOrderedByIngredients(ingredients)
    }

    function handleSearchSubmit(event) {
        event.preventDefault();
        // Perform search here
    }

    return (
        <div className="landing-page">
            <Hamburger />
            <h1>Welcome to Reci.py</h1>
            <img src={require("../../recipy.png")} alt="recipe" />
            < Form onSubmit={handleSearchSubmit}>
                <FormGroup>
                    <FormControl type="text" placeholder="Search recipes" />
                </FormGroup>
                <Button type="submit">Search</Button>
            </Form>
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
