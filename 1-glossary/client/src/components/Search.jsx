import React, { useState } from 'react'

const Search = ({search}) => {

  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  const handleClick = (event) => {
    search(term)
  }

  return (
    <div>
      <input onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
    </div>
  )

}

export default Search