require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require('./db.js')

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.get('/glossary', (req, res) => {
  db.getWords((err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send()
    } else {
      res.status(200).send(data)
    }
  })
})

app.post('/glossary', (req, res) => {
  db.addWord(req.body, (err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send()
    } else {
      res.status(201).send(data)
    }
  })
})

app.patch('/glossary', (req, res) => {
  db.updateWord(req.body.oldWord, req.body.newWord, (err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send()
    } else {
      res.status(204).send(data)
    }
  })
})

app.delete('/glossary', (req, res) => {
  db.deleteWord(req.body, (err, data) => {
    if (err) {
      console.log(err)
      res.status(404).send()
    } else {
      res.status(204).send(data)
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
