import React from 'react';
import { getRecipesOrderedByIngredients, getHealthyRecipesOrderedByIngredients, getVeganRecipesOrderedByIngredients, getGlutenFreeRecipesOrderedByIngredients, getDairyFreeRecipesOrderedByIngredients } from '../../services/recipe.service'
import { Button, Form, InputGroup } from 'react-bootstrap';
import IngredientCard from '../IngredientCard/IngredientCard';

import './Search.css';
import { useLocation } from 'react-router-dom';

export default function Search({ filteredRecipes, setFilteredRecipes, filter }) {
    const [ingredients, setIngredients] = React.useState([]);
    const [textInputVal, setTextInputVal] = React.useState('');
    const location = useLocation();

    const localHostKey = 'INGREDIENT_LIST_KEY';

    React.useState(() => {
        let localHostIngredients = JSON.parse(window.localStorage.getItem(localHostKey));

        if (localHostIngredients != null) {
            setIngredients(localHostIngredients);
        }
    }, [])

    React.useEffect(() => {
        let localHostIngredients = JSON.parse(window.localStorage.getItem(localHostKey));

        if (localHostIngredients != null) {
            setIngredients(localHostIngredients);
        }

        handleSearchSubmit();
    }, [location])
    
    React.useEffect(() => {
        window.localStorage.setItem(localHostKey, JSON.stringify(ingredients));
    }, [ingredients])

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

    function handleEnterClick(event) {
        if (event.key == 'Enter') {
            addIngredient();
        }
    }

    async function handleSearchSubmit() {
        let recipes = [];

        switch (filter) {
            case "healthy":
                recipes = await getHealthyRecipesOrderedByIngredients(ingredients);
                break;
            case "vegan":
                recipes = await getVeganRecipesOrderedByIngredients(ingredients);
                break;
            case "gluten":
                recipes = await getGlutenFreeRecipesOrderedByIngredients(ingredients);
                break;
            case "dairy":
                recipes = await getDairyFreeRecipesOrderedByIngredients(ingredients);
                break;
            default:
                recipes = await getRecipesOrderedByIngredients(ingredients);
                break;
        }

        await setFilteredRecipes(recipes);
    };

    return (
        <div className='search'>
            <div className='ingredientList'>
                {
                    ingredients &&
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
                    onKeyUp={event => handleEnterClick(event)}
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
                    onClick={event => handleSearchSubmit()}
                >Search
                </Button></InputGroup>
        </div>
    )
}
