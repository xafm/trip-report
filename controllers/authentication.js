const authenticationService = require('../services/authentication');
const {Unauthorized} = require('../util/errorTypes');

exports.login = (req) => {
  const {username, password} = req.body;
  const token = authenticationService.login({username, password});

  if (token === -1)
    throw new Unauthorized('Incorrect username or password');

  return {token};
};


