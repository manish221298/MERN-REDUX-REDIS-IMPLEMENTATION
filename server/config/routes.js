const express = require('express')
const router = express.Router()

const candidateController =  require('../controllers/candidateController')

router.post('/addcandidate', candidateController.create)
router.get('/candidate', candidateController.list)


module.exports = router