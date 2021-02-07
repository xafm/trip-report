const tripService = require('../services/trip');

exports.startedAtPoint = async req => {
    const {longitude, latitude, radius, startDate, completeDate} = req.query;
    const foundTrips = await tripService.startedAtPoint({
      longitude,
      latitude,
      radius,
      startDate,
      completeDate,
    });
    return foundTrips;
};

exports.minMaxDistanceTravelled = async req => {
  try {
    const {longitude, latitude, radius} = req.query;
    const foundTrips = await tripService.minMaxDistanceTravelled({
      longitude,
      latitude,
      radius,
    });
    return foundTrips;
  } catch (error) {
    throw error;
  }
};

exports.groupByVehicleModelAtPoint = async req => {
  try {
    const {longitude, latitude, radius} = req.query;
    const foundTrips = await tripService.groupByVehicleModelAtPoint({
      longitude,
      latitude,
      radius,
    });
    return foundTrips;
  } catch (error) {
    throw error;
  }
};
