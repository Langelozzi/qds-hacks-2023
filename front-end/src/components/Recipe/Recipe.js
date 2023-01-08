import React from 'react';
import './Recipe.css';
import Image from 'react-bootstrap/Image'
import { useLocation } from 'react-router-dom';

export default function Recipe() {
    const location = useLocation();
    const recipe = location.state?.recipe;

  let ingredientsToRender;
  if (recipe.extendedIngredients) {
    ingredientsToRender = recipe.extendedIngredients.map(ingredient => {
      return <div key={ingredient.id}>{ingredient.name}</div>;
    });
  }

  let instructionsToRender;
  if (recipe.analyzedInstructions[0].steps) {
    instructionsToRender = recipe.analyzedInstructions[0].steps.map(instructions => {
      return <div key={instructions.number}>{instructions.step}</div>;
    });
  }

  return (
    <div>
      <div className="header">
        <h1 className="centre">{recipe.title}</h1>
        <img className="mealPicture centerImage" src={recipe.image}></img>
      </div>

      <div className="description">
        <h2 className="left">Description</h2>
        <p>{recipe.summary}</p>
      </div>

      <div className="ingredients">
        <h2 className="left">Ingredients</h2>
        {
          ingredientsToRender
        }
      </div>

      <div className="instructions">
        <h2 className="left">Instructions</h2>
        {
          instructionsToRender
        }
      </div>


    </div>
  )
}
