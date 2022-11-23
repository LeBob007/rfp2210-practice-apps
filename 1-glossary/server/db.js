const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

mongoose.connect('mongodb://localhost/glossary')

let glossarySchema = mongoose.Schema({
  word: {
    type: String,
    unique: true
  },
  definition: String
})

let Glossary = mongoose.model('Glossary', glossarySchema)

let addWord = (item, callback) => {
  Glossary.find()
    .then((res) => {
      let words = res.map((element) => element.word)
      if (!words.includes(item.word)) {
        Glossary.create(item)
      }
      callback(null, 'finished adding');
    })
    .catch((err) => {
      callback(err)
    })
}

let getWords = (callback) => {
  Glossary.find().then((res) => {
    callback(null, res)
  }).catch((err) => {
    callback(err)
  })
}

let updateWord = (oldWord, newWord, callback) => {
  Glossary.updateOne(oldWord, newWord).then((res) => {
    callback(null, newWord)
  }).catch((err) => {
    callback(err)
  })
}

let deleteWord = (target, callback) => {
  Glossary.deleteOne(target).then((res) => {
    callback(null, 'removal finished')
  }).catch((err) => {
    callback(err)
  })
}

module.exports = {
  addWord,
  getWords,
  updateWord,
  deleteWord
}