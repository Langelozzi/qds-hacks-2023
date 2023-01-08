// React imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// Import css
import './App.css';
// Import services
import { getAllRecipes } from './services/recipe.service';
// Import components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';

function App() {
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        async function loadRecipes() {
            const data = await getAllRecipes();
            setRecipes(data);
        }
        loadRecipes();
    }, [])

    return (
        <Router>
            <Nav />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home recipes={recipes} setRecipes={setRecipes} />} />
                    <Route path='/recipe' element={<Recipe />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
