const espress = require ('express')
const productController = require ('productController')

const router = express.Router()

router.post('/', productController.save)
router.delete('/',productController.delete)

module.exports = router