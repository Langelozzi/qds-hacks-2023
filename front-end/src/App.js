// React imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import css
import "./App.css";
// Import services
import { getAllRecipes } from "./services/recipe.service";
// Import components
import Nav from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";

function App() {
  return (
    <Router>
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/healthy" element={<Home filter={"healthy"} />} />
          <Route path="/vegan" element={<Home filter={"vegan"} />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
