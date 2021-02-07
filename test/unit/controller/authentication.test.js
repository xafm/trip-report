const authenticationController = require('../../../controllers/authentication');
const {Unauthorized} = require('../../../util/errorTypes');
const chai = require('chai');
const {expect} = chai;

describe('Authentication Controller', () => {
  describe('/login', () => {
    it('should throw unauthorized error because credentials are wrong', done => {
      expect(() => {
        authenticationController.login({
          body: {
            username: 'admins',
            password: '1234',
          },
        });
      }).to.throw('Incorrect username or password');

      done();
    });

    it('should successfully return token because credentials are correct', () => {
      const loginResult = authenticationController.login({
        body: {
          username: 'admin',
          password: '1234',
        },
      });

      expect(loginResult)
        .to.be.an('object')
        .to.have.property('token')
        .not.to.be.a('number')
        .not.to.eql(-1);
    });
  });
});
