const router = require('express').Router()
const localRouter = require('./local')

router.use('/local', localRouter)

module.exports = router
