const router = require('express').Router()
const controller = require('./controller.js')

router.get('/purchase', controller.get)
router.post('/purchase', controller.post)

module.exports = router