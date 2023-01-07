import React from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import { getAllRecipes } from './services/recipe.service';

function App() {
  React.useEffect(() => {
    getAllRecipes();
    console.log('bruh')
  }, []);

  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
