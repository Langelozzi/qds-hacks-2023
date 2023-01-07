import React from 'react';
import './Recipe.css';
import { getRecipeById } from '../../services/recipe.service';
import Image from 'react-bootstrap/Image'

export default function Recipe() {
  const [recipe, setRecipe] = React.useState({});

  React.useEffect(() => {
    async function loadRecipe() {
      const data = await getRecipeById(641794);
      setRecipe(data);
    }
    loadRecipe();
  }, [])

  return (
    <div>
      <h1 class="centre">{recipe.title}</h1>
      <img class="mealPicture centerImage" src={recipe.image}></img>
    </div>
  )
}
