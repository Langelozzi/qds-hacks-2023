import React from 'react';
import { getRecipesOrderedByIngredients } from '../../services/recipe.service'
import { Button, Form, InputGroup } from 'react-bootstrap';
import IngredientCard from '../IngredientCard/IngredientCard';

import './Search.css';

export default function Search({ filteredRecipes, setFilteredRecipes }) {
    const [ingredients, setIngredients] = React.useState([]);
    const [textInputVal, setTextInputVal] = React.useState('');

    function addIngredient() {
        let ingredientsCopy = [...ingredients];
        ingredientsCopy.push(textInputVal);
        setIngredients(ingredientsCopy);
        setTextInputVal('')
    }

    function removeIngredient(index) {
        let ingredientsCopy = [...ingredients];
        ingredientsCopy.splice(index, 1);
        setIngredients(ingredientsCopy)
    }

    async function handleSearchSubmit(event) {
        const recipes = await getRecipesOrderedByIngredients(ingredients)
        await setFilteredRecipes(recipes);
    };

    return (
        <div>
            <div>
                {
                    ingredients.map((ingredient, index) => {
                        return <IngredientCard key={`${ingredient}-${index}`} text={ingredient} index={index} removeIngredient={removeIngredient} />
                    })
                }
            </div>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Enter ingredient"
                    aria-label="ingredient"
                    aria-describedby="basic-addon2"
                    value={textInputVal}
                    onChange={event => setTextInputVal(event.target.value)}
                />
                <Button
                    variant="success"
                    id="button-addon2"
                    onClick={addIngredient}
                >Add
                </Button>
            </InputGroup>
            <InputGroup className="searchBtn">
                <Button
                    variant="primary"
                    size="lg"
                    onClick={event => handleSearchSubmit(event)}
                >Search
                </Button></InputGroup>
        </div>
    )
}
