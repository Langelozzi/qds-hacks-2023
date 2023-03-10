import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './RecipeCard.css';

export default function RecipeCard({ recipe }) {
    const [recipeData, setRecipeData] = React.useState({ ...recipe })

    function progressBarWithLabel() {
        const matchScorePercentage = Math.round(recipe.matchScore * 100);
        let colorVariant = 'primary';
        let animation = false;

        if (matchScorePercentage < 30) {
            colorVariant = 'danger';
        } else if (30 <= matchScorePercentage && matchScorePercentage <= 60) {
            colorVariant = 'warning';
        } else {
            colorVariant = 'success';
        }

        if (matchScorePercentage == 100) {
            animation = true;
        }

        return <ProgressBar 
            variant={colorVariant}
            now={matchScorePercentage} 
            label={`${matchScorePercentage}%`}
            animated={animation}
        />
    }

    return (
        <div className='card-container'>
            <Link to='/recipe' state={{ recipe: recipeData }}>
                <Card className='recipe-card'>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                        <Card.Title className='recipe-card-title'>{recipe.title}</Card.Title>
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
