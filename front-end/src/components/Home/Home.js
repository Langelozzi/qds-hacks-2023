import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import { getRecipesOrderedByIngredients } from '../../services/recipe.service'
import IngredientCard from '../IngredientCard/IngredientCard';
import './Home.css';

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
            <h1>Welcome to Reci.py</h1>
            <img src={require("../../recipy.png")} alt="recipe" />
            <IngredientCard text={'Sugar'}/>
            <Form onSubmit={handleSearchSubmit}>
                <FormGroup>
                    <FormControl type="text" placeholder="Input ingredient" />
                </FormGroup>
                <Button type="submit">Search</Button>
            </Form>
        </div>
    )
}
