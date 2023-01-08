import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigation, Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
    const [recipeData, setRecipeData] = React.useState({...recipe})

    return (
        <Link to='/recipe' state={{recipe: recipeData}}>
            <Card>
                <Card.Img variant="top" src={recipe.image} />
                <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    <Card.Text>
                        {recipe.summary}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}
