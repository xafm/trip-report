const {validationResult} = require('express-validator');

module.exports = (req, res, next) => {
  let errors = validationResult(req).array();
  errors = errors.map(err => {
    return {message: err.msg, param: err.param};
  });

  if (errors.length)
    return res.status(422).json({success: false, errors: errors});

  next();
};
