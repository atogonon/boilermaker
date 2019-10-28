const router=require('express').Router()

router.use('/routeExample', require('./routeExample'))
//additional apiRouteExamples can be edded here

router.use(function (req, res, next) {
  const err= new Error('Not found.')
  err.status=404
  next(err)
})

module.exports = router
