import React from 'react'

function RecipeDetails({ ingredients }) {
  return ingredients.map((ingredient, i) => {
    return (
      <ul key={i} className='ingredient-list'>
        <li className='ingredient-text'>{ingredient.text}</li>
        <li className='ingredient-weight'>{ingredient.weight}</li>
      </ul>
    )
  })
}

export default RecipeDetails
