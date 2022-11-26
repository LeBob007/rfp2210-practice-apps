import React from 'react'

const ConfirmForm = ({data, nextForm}) => {



  return (
    <div>
      <h3>ConfirmForm</h3>
      Name: {data.name}<br></br>
      Email: {data.email}<br></br>
      Password: {data.password}<br></br>
      Address: {data.address}<br></br>
      Phone Number: {data.phone}<br></br>
      Credit Card #: {data.creditCard}<br></br>
      Expiration Date: {data.expiration}<br></br>
      CVV: {data.cvv}<br></br>
      Bill Zip Code: {data.billZipCode}<br></br>


      <button onClick={nextForm}>Finish Checkout</button>
    </div>
  )

}

export default ConfirmForm