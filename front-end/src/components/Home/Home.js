import React from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";
import "./Home.css";

export default function Home({filter}) {
    const [filteredRecipes, setFilteredRecipes] = React.useState([]);
    const localHostKey = 'RECIPE_LIST_DATA';

    React.useState(() => {
        let localHostRecipes = JSON.parse(window.localStorage.getItem(localHostKey));
        setFilteredRecipes(localHostRecipes);
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem(localHostKey, JSON.stringify(filteredRecipes));
    }, [filteredRecipes])

    return (
        <div className="landing-page">
            <img className="home-img" src={require("../../transparent_logo.png")} alt="recipe" />
            <Search
                filteredRecipes={filteredRecipes}
                setFilteredRecipes={setFilteredRecipes}
                filter={filter}
            />
            <RecipeList recipes={filteredRecipes} setRecipes={setFilteredRecipes} />
        </div>
    );
}
