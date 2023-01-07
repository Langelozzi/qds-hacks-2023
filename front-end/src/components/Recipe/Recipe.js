import React from 'react';
import './Recipe.css';
import { getRecipeById } from '../../services/recipe.service';
import { Button } from 'react-bootstrap'

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
    <div>{recipe.title}
      <Button>sup</Button>

    </div>
  )
}
