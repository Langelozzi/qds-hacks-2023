import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {

    return (
        <Card>
            <Card.Img variant="top" src={recipe.image} />
            <Card.Body>
                <Card.Title>{recipe.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
