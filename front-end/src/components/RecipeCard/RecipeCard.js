import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
    const [recipeData, setRecipeData] = React.useState({ ...recipe })

    function progressBarWithLabel() {
        const now = recipe.matchScore * 100;
        return <ProgressBar now={now} label={`${now}%`}/>
    }

    return (
        <div className='card-container'>
            <Link to='/recipe' state={{ recipe: recipeData }}>
                <Card className='recipe-card'>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                        <Card.Title>{recipe.title}</Card.Title>
                        <Card.Text>
                            {recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}
                        </Card.Text>
                        {progressBarWithLabel()}
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}
