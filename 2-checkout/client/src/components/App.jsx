import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import ConfirmForm from './ConfirmForm.jsx'


const App = () => {

  const [purchase, setPurchase] = useState({sessionID: document.cookie})

  const [checkout, setCheckout] = useState(true)
  const [form1, setForm1] = useState(false)
  const [form2, setForm2] = useState(false)
  const [form3, setForm3] = useState(false)
  const [confirm, setConfirm] = useState(false)

  const handleCheckout = (e) => {
    axios.get('/purchase')
      .then((res) => {
        let ids = res.data.map(element => element.sessionID)
        if (!ids.includes(purchase.sessionID)) {
          setCheckout(false)
          setForm1(true)
        } else {
          alert('You have already completed your purchase')
        }
      })

  }

  const handleForm2 = (e) => {
    setForm1(false)
    setForm2(true)
  }

  const handleForm3 = (e) => {
    setForm2(false)
    setForm3(true)
  }

  const handleConfirm = (e) => {
    setForm3(false)
    setConfirm(true)
  }

  const handleFinish = (e) => {
    axios.post('/purchase', purchase)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
    setConfirm(false)
    setCheckout(true)
  }

  const addData = (obj) => {
    const newData = {...purchase, ...obj}
    setPurchase(newData)
  }

  return (
    <div>
      {checkout
        ? <button onClick={handleCheckout}>Ready to Checkout?</button>
        : <div>
          {form1
            ? <Form1 add={addData} nextForm={handleForm2}/>
            : null}
          {form2
            ? <Form2 add={addData} nextForm={handleForm3}/>
            : null}
          {form3
            ? <Form3 add={addData} nextForm={handleConfirm} />
            : null}
          {confirm
            ? <ConfirmForm data={purchase} nextForm={handleFinish}/>
            : null}
          </div>}



    </div>
  )

}


export default App;