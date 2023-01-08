import React from 'react';
import './Recipe.css';
import { useLocation } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs"
import { TbTarget } from "react-icons/tb"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Fraction from 'fraction.js';


export default function Recipe() {
  const location = useLocation();
  const recipe = location.state?.recipe;

  let ingredientsToRender;
  if (recipe.extendedIngredients) {
    ingredientsToRender = recipe.extendedIngredients.map(ingredient => {
      return <tr key={ingredient.id}>
        <td className={(ingredient.amount > 10 && ingredient.amount % 1 != 0) ? 'number-small' : 'number'} key="number">
          <div key={"number"}>{Fraction(ingredient.amount).toFraction(true)}</div>
        </td>
        <td className="ingredient" key="ingredient">
          <div key={ingredient.id}>
            {ingredient.unit}{ingredient.unit ? ' ' : ''}{ingredient.name}
          </div>
        </td>
      </tr>;
    });
  }

  let instructionsToRender;
  if (recipe.analyzedInstructions) {
    instructionsToRender = recipe.analyzedInstructions[0].steps.map(instructions => {
      return <tr key={instructions.number}>
        <td className="number" key="number">
          <div key={instructions.number}>{instructions.number}</div>
        </td>
        <td className="instruction" key="instruction">
          <div key={instructions.number}>{instructions.step}</div>
        </td>
      </tr>
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
            defaultActiveKey="ingredients"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="ingredients" title="Ingredients">
              <div className="recipeDescription">
                <table>
                  <tbody>
                    {
                      ingredientsToRender
                    }
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="instructions" title="Instructions">
              <div className="recipeDescription">
                <table>
                  <tbody>
                    {
                      instructionsToRender
                    }
                  </tbody>
                </table>
              </div>
            </Tab>
            <Tab eventKey="description" title="Description">
              <p className="recipeDescription">{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </Tab>
          </Tabs>
        </div>

        <div className="recipeImage">
          <img className="mealPicture centerImage" src={recipe.image}></img>
        </div>
      </main>
    </div>
  )
}
