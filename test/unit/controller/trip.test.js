const tripController = require('../../../controllers/trip');
const chai = require('chai');
const {expect} = chai;

describe('Trip Controller', () => {
  describe('/trips/startedAtPoint', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripController.startedAtPoint({
        query: {
          longitude: -97.70929823,
          latitude: 31.04685111,
          radius: 500,
        },
      });

      expect(foundTrips).to.be.an('array');
    });
  });

  describe('/trips/minMaxDistanceTravelled', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripController.minMaxDistanceTravelled({
        query: {
          longitude: -97.70929823,
          latitude: 31.04685111,
          radius: 500,
        },
      });

      expect(foundTrips).to.be.an('object');
    });
  });

  describe('/trips/groupByVehicleModelAtPoint', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripController.groupByVehicleModelAtPoint({
        query: {
          longitude: -97.70929823,
          latitude: 31.04685111,
          radius: 500,
        },
      });

      expect(foundTrips).to.be.an('array');
    });
  });
});
