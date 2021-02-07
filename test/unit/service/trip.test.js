const tripService = require('../../../services/trip');
const chai = require('chai');
const {expect} = chai;

describe('Trip Service', () => {
  describe('startedAtPoint', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripService.startedAtPoint({
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      });

      expect(foundTrips).to.be.an('array');
    });
  });

  describe('minMaxDistanceTravelled', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripService.minMaxDistanceTravelled({
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      });

      expect(foundTrips).to.be.an('array');
    });
  });

  describe('groupByVehicleModelAtPoint', () => {
    it('should return trips as an array, an empty array is ok too', async () => {
      const foundTrips = await tripService.groupByVehicleModelAtPoint({
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      });

      expect(foundTrips).to.be.an('array');
    });
  });
});
