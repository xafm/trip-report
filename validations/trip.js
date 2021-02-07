const {check} = require('express-validator');
const formatter = require('../middlewares/validatorCatcher');

exports.startedAtPoint = [
  checkLongitude(),
  checkLatitude(),
  checkRadius(),
  checkStartDate(),
  checkCompleteDate(),
  formatter,
];

exports.minMaxDistanceTravelled = [
  checkLongitude(),
  checkLatitude(),
  checkRadius(),
  formatter,
];

exports.groupByVehicleModelAtPoint = [
  checkLongitude(),
  checkLatitude(),
  checkRadius(),
  formatter,
];

function checkLongitude() {
  return check('longitude')
    .exists()
    .withMessage('Longitude parameter must be passed')
    .bail()

    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Longitude can not be empty!')
    .bail()

    .isNumeric()
    .withMessage('Longitude must be a number')
    .bail()

    .isFloat({min: -180, max: 80})
    .withMessage('Longitude must be between -180 and 80')
    .bail();
}

function checkLatitude() {
  return check('latitude')
    .exists()
    .withMessage('Latitude parameter must be passed')
    .bail()

    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Latitude can not be empty!')
    .bail()

    .isNumeric()
    .withMessage('Latitude must be a number')
    .bail()

    .isFloat({min: -90, max: 90})
    .withMessage('Latitude must be between -90 and 90')
    .bail();
}

function checkRadius() {
  return check('radius')
    .exists()
    .withMessage('Radius parameter must be passed')
    .bail()

    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Radius can not be empty!')
    .bail()

    .isNumeric()
    .withMessage('Radius must be a number')
    .bail()

    .isFloat({min: 0})
    .withMessage('Radius must be a positive number')
    .bail();
}

function checkStartDate() {
  return check('startDate')
    .custom(value => {
      if (value === undefined) return true;

      return isDateValid(value);
    })
    .withMessage('startDate must be a valid date')
    .bail();
}

function checkCompleteDate() {
  return check('completeDate')
    .custom(value => {
      if (value === undefined) return true;

      return isDateValid(value);
    })
    .withMessage('completeDate must be a valid date')
    .bail();
}

function isDateValid(...val) {
  return !Number.isNaN(new Date(...val).valueOf());
}
