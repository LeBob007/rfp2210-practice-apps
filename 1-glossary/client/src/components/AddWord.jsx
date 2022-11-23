import React, { useState } from 'react'

const AddWord = ({add}) => {

  const [term, setTerm] = useState({word: '', definition: ''})

  const wordChanger = (event) => {
    setTerm({...term, word: event.target.value})
  }

  const defChanger = (event) => {
    setTerm({...term, definition: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    add(term)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        Word: <input onChange={wordChanger}></input>
        <br></br>
        Definition: <input onChange={defChanger}></input>
        <button>Add Word</button>
      </form>
    </div>
  )

}

export default AddWord