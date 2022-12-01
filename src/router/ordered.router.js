const express = require('express')
const orderedController = require('orderedController')

const router = express.Router()

router.post('/', orderedController.save)
router.delete('/', orderedController.remove)

module.exports = router