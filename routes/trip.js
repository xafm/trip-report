const router = require('express').Router();
const tripController = require('../controllers/trip');
const tripValidator = require('../validations/trip');
const authenticateLogin = require('../middlewares/auth');
const validatorCatcher = require('../middlewares/validatorCatcher');
const errorHandler = require('../middlewares/errorHandler');

/* 
  Returns the trips which was started at the specified coordinates
*/
router.get(
  '/trips/startedAtPoint',
  authenticateLogin,
  tripValidator.startedAtPoint,
  validatorCatcher,
  async (req, res, next) => {
    errorHandler.async(req, res, next, tripController.startedAtPoint(req));
  },
);

/* 
  Returns the trips with min and max travel distance 
  that started at the specified coordinates 
*/
router.get(
  '/trips/minMaxDistanceTravelled',
  authenticateLogin,
  tripValidator.minMaxDistanceTravelled,
  validatorCatcher,
  async (req, res, next) => {
    errorHandler.async(
      req,
      res,
      next,
      tripController.minMaxDistanceTravelled(req),
    );
  },
);

/* 
  Returns the number of trips grouped by vehicle model years 
  of travels which started at the specified coordinates  
*/
router.get(
  '/trips/groupByVehicleModelAtPoint',
  authenticateLogin,
  tripValidator.groupByVehicleModelAtPoint,
  validatorCatcher,
  async (req, res, next) => {
    errorHandler.async(
      req,
      res,
      next,
      tripController.groupByVehicleModelAtPoint(req),
    );
  },
);

module.exports = router;
