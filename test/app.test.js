const chai = require('chai');
const server = require('../server');

describe('Starting Server', () => {
  before(function (done) {
    this.timeout(0);
    server.on('up', async () => {
      done();
    });
  });

  describe('Calling Unit Tests', () => {
    describe('Services', () => {
      require('./unit/service/authentication.test');
      require('./unit/service/trip.test');
    });
    describe('Controllers', () => {
      require('./unit/controller/authentication.test');
      require('./unit/controller/trip.test');
    });
  });

  describe('Calling e2e Tests', () => {
    require('./e2e/authentication.test');
    require('./e2e/trip.test');
  });
});
