const router = require('express').Router();
const {NotFound} = require('../util/errorTypes')

// 404
router.use((req, res, next) => {
  next(new NotFound('Route does not exist'))
});

module.exports = router;
