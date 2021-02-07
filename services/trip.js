const Trips = require('../models/Trip');
const {DEFAULT_START_DATE, DEFAULT_RADIUS} = require('../util/constants');

exports.startedAtPoint = async ({
  longitude,
  latitude,
  radius = DEFAULT_RADIUS,
  startDate = new Date(DEFAULT_START_DATE),
  completeDate = new Date(),
}) => {
  const coordinates = [Number(longitude), Number(latitude)];
  const foundTrips = await Trips.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates,
        },
        distanceField: 'distance',
        maxDistance: Number(radius),
        spherical: true,
        key: 'start',
        query: {
          start_date: {
            $gte: new Date(startDate),
            $lte: new Date(completeDate),
          },
        },
      },
    },
    {$limit: 1000},
  ]);
  return foundTrips;
};

exports.minMaxDistanceTravelled = async ({
  longitude,
  latitude,
  radius = DEFAULT_RADIUS,
}) => {
  const coordinates = [Number(longitude), Number(latitude)];

  const foundTrips = await Trips.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates,
        },
        distanceField: 'distance',
        maxDistance: Number(radius),
        spherical: true,
        key: 'start',
      },
    },
    {
      $match: {distance_travelled: {$exists: true, $ne: null}},
    },
    {
      $sort: {distance_travelled: 1},
    },
    {
      $group: {
        _id: null,
        minDistanceTravel: {$first: '$$ROOT'},
        maxDistanceTravel: {$last: '$$ROOT'},
      },
    },
    {
      $project: {
        _id: false,
        minDistanceTravel: true,
        maxDistanceTravel: true,
      },
    },
  ]);

  if (!foundTrips.length)
    return {}

  return {
    minDistanceTravel: foundTrips[0].minDistanceTravel,
    maxDistanceTravel: foundTrips[0].maxDistanceTravel
  };
};

exports.groupByVehicleModelAtPoint = async ({
  longitude,
  latitude,
  radius = DEFAULT_RADIUS,
}) => {
  const coordinates = [Number(longitude), Number(latitude)];

  const foundTrips = await Trips.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates,
        },
        distanceField: 'distance',
        maxDistance: Number(radius),
        spherical: true,
        key: 'start',
      },
    },
    {
      $group: {_id: '$year', numberOfTrips: {$sum: 1}},
    },
    {
      $sort: {_id: 1},
    },
    {
      $project: {
        _id: false,
        year: '$_id',
        numberOfTrips: true,
      },
    },
  ]);
  return foundTrips;
};
