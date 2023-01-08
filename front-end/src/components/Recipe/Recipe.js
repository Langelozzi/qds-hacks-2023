import React from 'react';
import './Recipe.css';
import { getRecipeById } from '../../services/recipe.service';
import Image from 'react-bootstrap/Image'

export default function Recipe() {
  const [recipe, setRecipe] = React.useState({});

  React.useEffect(() => {
    async function loadRecipe() {
      const data = await getRecipeById(641794);
      data.summary = data.summary.replace(/<\/?[^>]+(>|$)/g, "");
      setRecipe(data);
    }
    loadRecipe();
  }, [])

  let ingredientsToRender;
  if (recipe.extendedIngredients) {
    ingredientsToRender = recipe.extendedIngredients.map(ingredient => {
      return <div key={ingredient.id}>{ingredient.name}</div>;
    });
  }

  let instructionsToRender;
  if (recipe.analyzedInstructions) {
    instructionsToRender = recipe.analyzedInstructions[0].steps.map(instructions => {
      return <div key={instructions.number}>{instructions.step}</div>;
    });
  }

  return (
    <div>
      <div className="header">
        <h1 className="centre">{recipe.title}</h1>
        <img className="mealPicture centerImage" src={recipe.image}></img>
        <p>{recipe.readyInMinutes}</p>
        <p>{recipe.servings}</p>
        <p>69% match</p>
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
