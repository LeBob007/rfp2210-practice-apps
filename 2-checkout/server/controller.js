const model = require('./model.js')

const get = (req, res) => {
  model.get((err, purchase) => {
    if (err) {
      res.status(404).send('Error getting')
    } else {
      res.status(200).send(purchase)
    }
  })
}

const post = (req, res) => {
  model.post(req.body, (err, purchase) => {
    if (err) {
      res.status(500).send('Error posting')
    } else {
      res.status(201).send('Successful post')
    }
  })
}

module.exports = {
  get,
  post
}