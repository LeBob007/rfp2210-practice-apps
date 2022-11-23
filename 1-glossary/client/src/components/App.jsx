import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlossaryList from './GlossaryList.jsx'
import Search from './Search.jsx'
import Header from './Header.jsx'
import AddWord from './AddWord.jsx'

const App = () => {

  const [words, setWords] = useState([])
  const [query, setQuery] = useState('')
  const [render, setRender] = useState(false)

  const add = (newWord) => {
    axios.post('/glossary', newWord).then((res) => {
      setRender(!render);
    })
  }

  const search = (term) => {
    setQuery(term)
  }

  useEffect(() => {
    axios.get('/glossary').then((res) => {
      setWords(res.data)
    })
  }, [render])

  return (
    <div>
      <Header />
      <AddWord add={add}/>
      <br></br>
      <Search search={search}/>
      <GlossaryList words={words} query={query} render={render} setRender={setRender}/>
    </div>
  )

}

export default App