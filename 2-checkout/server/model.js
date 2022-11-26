const db = require('./db.js')

const get = (cb) => {
  db.query('SELECT sessionID FROM responses', cb)
}

const post = (reqBody, cb) => {
  db.query(`INSERT INTO responses (sessionID, name, email, password, address, phone, creditCard, expiration, cvv, billZipCode) VALUES ("${reqBody.sessionID}", "${reqBody.name}", "${reqBody.email}", "${reqBody.password}", "${reqBody.address}", "${reqBody.phone}", "${reqBody.creditCard}", "${reqBody.expiration}", "${reqBody.cvv}", "${reqBody.billZipCode}")`, cb)
}

module.exports = {
  get,
  post
}