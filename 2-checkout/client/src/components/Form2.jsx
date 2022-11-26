import React from 'react'

const Form2 = ({add, nextForm}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('Address'))
    const data = {}
    let addressStr = ''
    for (const [key, value] of formData) {
      if (value.length > 0) {
        if (key != 'phone') {
          addressStr += value + ' '
        }
        else {
          data[key] = value
        }
      }
    }
    data['address'] = addressStr.slice(0, addressStr.length-1)
    add(data)
    nextForm()
  }

  return (
    <div>
      <h3>Form2</h3>
      <form id='Address' onSubmit={handleSubmit}>
        Line1 <input name='line1' maxLength='30'></input><br></br>
        Line2 <input name='line2' maxLength='30'></input><br></br>
        City <input name='city' maxLength='25'></input><br></br>
        State <input name='state' maxLength='5'></input><br></br>
        Zip <input name='zip' pattern="[0-9]{5}-[0-9]{4}" maxLength='10'></input><br></br><br></br>
        Phone <input name='phone' pattern="1-[0-9]{3}-[0-9]{3}-[0-9]{4}" maxLength='14'></input>
        <button>Next</button>
      </form>
    </div>
  )

}

export default Form2