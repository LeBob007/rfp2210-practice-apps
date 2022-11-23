import React from 'react'
import GlossaryListItem from './GlossaryListItem.jsx'

const GlossaryList = ({words, query, render, setRender}) => {
  let filteredWords = words.filter((word) => word.word.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {filteredWords.map((word) => { return <GlossaryListItem key={word._id} word={word} render={render} setRender={setRender}/>})}
    </div>
  )

}

export default GlossaryList