import React from 'react'

function Error({ error }) {
  return (
    <div className='alert'>
      <h3>{error}</h3>
    </div>
  )
}

export default Error
