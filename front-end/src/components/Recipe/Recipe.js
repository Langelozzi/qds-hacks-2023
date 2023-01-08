import React from 'react';
import './Recipe.css';
import Image from 'react-bootstrap/Image'
import { useLocation } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs"
import { TbTarget } from "react-icons/tb"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


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
          <div className="menuitem"><FaRegClock></FaRegClock>&nbsp;&nbsp;{recipe.readyInMinutes}</div>
          <div className="menuitem" id="centrepiece"><BsPeopleFill></BsPeopleFill>&nbsp;&nbsp;{recipe.servings}</div>
          <div className="menuitem"><TbTarget></TbTarget>&nbsp;&nbsp;{recipe.matchScore * 100}% match</div>
        </div>
      </div>

      <main>
        <div className="recipeContent">
          <Tabs
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="description" title="Description">
              <p>{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </Tab>
            <Tab eventKey="ingredients" title="Ingredients">
              {
                ingredientsToRender
              }
            </Tab>
            <Tab eventKey="instructions" title="Instructions">
              {
                instructionsToRender
              }
            </Tab>
          </Tabs>
        </div>

        <div className="recipeImage">
          <img className="mealPicture centerImage" src={recipe.image}></img>
        </div>
      </main>
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
