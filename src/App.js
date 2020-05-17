import React, { useState } from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';
import Form from './components/Form';
import './App.scss';

function App() {
  const [recipes, setRecipes] = useState([])
  const [query, setQuery] = useState('')
  const [error, setError] = useState('')

  const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`

  const get = async () => {
    if (query !== '') {
      const data = await axios.get(url)
      if (!data.data.more) {
        return setError('What type of food is that? 🤨')
      }
      setRecipes(data.data.hits)
      setError('')
      setQuery('')
    } else {
      setError('Please specify the food')
    }
  }

  const submit = e => {
    e.preventDefault();
    get();
  }

  return (
    <div className="App">
      <h1>Recipes Database</h1>
      <Form submit={submit} error={error} query={query} setQuery={setQuery} />
      <div className='recipes'>
        {recipes !== [] && recipes.map(recipe =>
          <Recipe key={recipe.recipe.label} recipe={recipe} />
        )}
      </div>
    </div>
  );
}

export default App;
