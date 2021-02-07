const {check} = require('express-validator');

exports.login = [
  check('username')
    .exists()
    .withMessage('username parameter must be passed')
    .bail()

    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Username can not be empty!')
    .bail(),

  check('password')
    .exists()
    .withMessage('password parameter must be passed')
    .bail()

    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Password can not be empty!'),
];
