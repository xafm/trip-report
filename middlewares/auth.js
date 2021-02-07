const {Unauthorized} = require('../util/errorTypes');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const {authorization} = req.headers;

  if (!authorization) {
    return next(new Unauthorized('You must log in'));
  }

  const token = authorization.replace('Bearer ', '');

  try {
    const paylod = jwt.verify(token, process.env.JWT_SECRET);
    return next();
  } catch (error) {
    return next(new Unauthorized('You must log in'));
  }
};
