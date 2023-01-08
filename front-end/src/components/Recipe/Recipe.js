import React from 'react';
import './Recipe.css';
import Image from 'react-bootstrap/Image'
import { useLocation } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs"
import { GrTarget } from "react-icons/gr"

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
  if (recipe.analyzedInstructions) {
    instructionsToRender = recipe.analyzedInstructions[0].steps.map(instructions => {
      return <div key={instructions.number}>{instructions.step}</div>;
    });
  }

  return (
    <div>
      <div className="header">
        <h1 className="centre">{recipe.title}</h1>
        <div id="headerMenu">
          <div class="menuitem"><FaRegClock></FaRegClock>&nbsp;&nbsp;{recipe.readyInMinutes}</div>
          <div class="menuitem"><BsPeopleFill></BsPeopleFill>&nbsp;&nbsp;{recipe.servings}</div>
          <div class="menuitem"><GrTarget></GrTarget>&nbsp;&nbsp;69% match</div>
        </div>
      </div>

      {/* <img className="mealPicture centerImage" src={recipe.image}></img>
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
      </div> */}


    </div>
  )
}
