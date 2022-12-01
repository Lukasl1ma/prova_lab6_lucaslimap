const express = require('express')
const customerController = require('customerController')

const router = express.Router()

router.post('/', customerController.save)
router.delete('/',customerController.remove)

module.exports = router