import React from "react";
import RecipeList from "../RecipeList/RecipeList";
import Search from "../Search/Search";
import "./Home.css";

export default function Home() {
  const [filteredRecipes, setFilteredRecipes] = React.useState([]);

  return (
    <div className="landing-page">
      <img className="home-img" src={require("../../transparent_logo.png")} alt="recipe" />
      <Search
        filteredRecipes={filteredRecipes}
        setFilteredRecipes={setFilteredRecipes}
      />
      <RecipeList recipes={filteredRecipes} setRecipes={setFilteredRecipes} />
    </div>
  );
}
