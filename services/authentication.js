const jwt = require('jsonwebtoken');

exports.login = ({username, password}) => {
  if (username === 'admin' && password === '1234') {
    return jwt.sign({username}, process.env.JWT_SECRET);
  } else {
    return -1;
  }
};