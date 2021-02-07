const authenticationService = require('../../../services/authentication');
const chai = require('chai');
const {expect} = chai;

describe('Authentication Service', () => {
  describe('login', () => {
    it('should return -1 because credentials are wrong', done => {
      const loginResult = authenticationService.login({
        username: 'admins',
        password: '1234',
      });

      expect(loginResult).to.be.a('number').to.be.eql(-1);
      done();
    });

    it('should successfully return token because credentials are correct', () => {
      const loginResult = authenticationService.login({
        username: 'admin',
        password: '1234',
      });

      expect(loginResult)
        .to.be.a('string')
        .not.to.be.a('number')
        .not.to.eql(-1);
    });
  });
});
