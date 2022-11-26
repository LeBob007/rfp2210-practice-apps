import React from 'react'

const Form1 = ({add, nextForm}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('Person'))
    const data = {}
    for (const [key, value] of formData) {
      data[key] = value
    }
    add(data)
    nextForm()
  }

  return (
    <div>
      <h3>Form1</h3>
      <form id='Person' onSubmit={handleSubmit}>
        Name <input name='name' maxLength='25'></input><br></br>
        Email <input name='email' maxLength='30'></input><br></br>
        Password <input name='password' maxLength='25'></input>
        <button>Next</button>
      </form>

    </div>
  )

}

export default Form1