// React imports
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import css
import './App.css';
// Import services
import { getAllRecipes } from './services/recipe.service';
// Import components
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

function App() {
    return (
        <Router>
            <Nav />
            <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
