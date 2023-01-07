import React from 'react';
import './Recipe.css';
import { getRecipeById } from '../../services/recipe.service';
import Image from 'react-bootstrap/Image'

export default function Recipe() {
  const [recipe, setRecipe] = React.useState({});

  function removeTags(string) {
    console.log(recipe)
    console.log(string)
    return string.replace(/<\/?[^>]+(>|$)/g, "")
  }

  function getNameFromJson(list) {
    let list_of_items = []
    for (let element of list) {
      list_of_items.push(element.name)
    }
    return list_of_items
  }

  React.useEffect(() => {
    async function loadRecipe() {
      const data = await getRecipeById(641794);
      setRecipe(data);
    }
    loadRecipe();
  }, [])

  return (
    <div>
      <div class="header">
        <h1 class="centre">{recipe.title}</h1>
        <img class="mealPicture centerImage" src={recipe.image}></img>
      </div>

      <div class="description">
        <h2 class="left">Description</h2>
        <p>{removeTags(recipe.summary)}</p>
      </div>

      <div class="ingredients">
        <h2 class="left">Ingredients</h2>
        <p>{getNameFromJson(recipe.ingredients)}</p>
      </div>

      <div class="instructions">
        <h2 class="left">Instructions</h2>
      </div>


    </div>
  )
}
