const router = require('express').Router();
const authenticationController = require('../controllers/authentication');
const authenticationValidator = require('../validations/authentication');
const validatorCatcher = require('../middlewares/validatorCatcher');
const errorHandler = require('../middlewares/errorHandler');

/* Logs the user in, returns jwt token if the credentials are correct */
router.post(
  '/login',
  authenticationValidator.login,
  validatorCatcher,
  (req, res, next) => {
    errorHandler.nonAsync(
      req,
      res,
      next,
      authenticationController.login,
    );
  },
);

module.exports = router;
