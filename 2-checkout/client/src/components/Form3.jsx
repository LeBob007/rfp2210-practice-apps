import React from 'react'

const Form3 = ({add, nextForm}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('Purchase'))
    const data = {}
    for (const [key, value] of formData) {
      data[key] = value
    }
    add(data)
    nextForm()
  }

  return (
    <div>
      <h3>Form3</h3>
      <form id='Purchase' onSubmit={handleSubmit}>
        Credit Card # <input name='creditCard' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" maxLength='20'></input><br></br>
        Expiration <input name='expiration' pattern="[0-2]{2}/[0-9]{2}" maxLength='5'></input><br></br>
        CVV <input name='cvv' pattern="[0-9]{4}" maxLength='4'></input><br></br>
        Bill Zip <input name='billZipCode' pattern="[0-9]{5}-[0-9]{4}" maxLength='10'></input>
        <button>Next</button>
      </form>
    </div>
  )

}

export default Form3