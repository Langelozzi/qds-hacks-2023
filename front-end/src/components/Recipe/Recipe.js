import React from 'react';
import './Recipe.css';
import Image from 'react-bootstrap/Image'
import { useLocation } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs"
import { TbTarget } from "react-icons/tb"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


{/* <table>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}




export default function Recipe() {
  const location = useLocation();
  const recipe = location.state?.recipe;

  let ingredientsToRender;
  if (recipe.extendedIngredients) {
    ingredientsToRender = recipe.extendedIngredients.map(ingredient => {
      return <tr key={ingredient.id}>
        <td className="number" key="number">
          <div key={"number"}>{ingredient.amount}</div>
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
            defaultActiveKey="description"
            id="uncontrolled-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="description" title="Description">
              <p className="recipeDescription">{recipe.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
            </Tab>
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
