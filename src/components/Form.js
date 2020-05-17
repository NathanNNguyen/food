import React from 'react'
import Error from './Error'

function Form({ submit, error, query, setQuery }) {
  return (
    <>
      <form className='search-form' autoComplete='off' onSubmit={submit}>
        {error !== '' && <Error error={error} />}
        <input type='text' placeholder='Search' value={query} onChange={e => setQuery(e.target.value)} />
        <input type='submit' value='search' />
      </form>
    </>
  )
}

export default Form
