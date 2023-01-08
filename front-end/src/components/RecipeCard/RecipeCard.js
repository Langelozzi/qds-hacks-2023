import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
    const [recipeData, setRecipeData] = React.useState({ ...recipe })

    function progressBarWithLabel() {
        const matchScorePercentage = recipe.matchScore * 100;
        let colorVariant = 'primary';

        if (matchScorePercentage < 30) {
            colorVariant = 'danger';
        } else if (matchScorePercentage => 30 && matchScorePercentage <= 60) {
            colorVariant = 'warning';
        } else {
            colorVariant = 'success';
        }


        return <ProgressBar 
            variant={colorVariant}
            now={matchScorePercentage} 
            label={`${matchScorePercentage}%`}
        />
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
                        <p>{`Matched ${recipe.numMatches}/${recipe.numIngredients} ingredients`}</p>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    )
}
