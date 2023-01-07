import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import './Home.css';
import { Squash as Hamburger } from 'hamburger-react';

export default function Home({ recipes, setRecipes }) {
    function logRecipes() {
        console.log(recipes);
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
