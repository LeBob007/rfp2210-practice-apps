import React, { useState }from 'react'
import axios from 'axios'

const GlossaryListItem = ({word, render, setRender}) => {

  const [editPanel, setEditPanel] = useState(false)
  const [term, setTerm] = useState({word: '', definition: ''})

  const wordChanger = (event) => {
    setTerm({...term, word: event.target.value})
  }

  const defChanger = (event) => {
    setTerm({...term, definition: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const oldWord = {word: word.word}
    axios.patch('/glossary', {oldWord, newWord: term}).then((res) => {
      setRender(!render)
      setEditPanel(false)
    })
  }

  const handleEdit = (event) => {
    setEditPanel(!editPanel)
  }

  const handleDelete = (event) => {
    axios.delete('/glossary', word).then((res) => {
      setRender(!render)
    })
  }

  return (
    <div>
      {word.word} - {word.definition}
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
      <br></br>
      {editPanel
        ? <div>
          <form onSubmit={handleSubmit}>
            Word: <input onChange={wordChanger}></input>
            <br></br>
            Definition: <input onChange={defChanger}></input>
            <button>Edit Word</button>
          </form>
        </div>
        : null}
    </div>
  )

}

export default GlossaryListItem