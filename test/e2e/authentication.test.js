const app = require('../../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);

describe('Authentication', () => {
  describe('/login', () => {
    it('should give error because credentials are wrong', done => {
      const reqBody = {
        username: 'admins',
        password: '1234',
      };
      chai
        .request(app)
        .post('/login')
        .send(reqBody)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.have.property('body');
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.have.property('message');
          res.body.errors[0].message.should.be.a('string');
          res.body.errors[0].message.should.be.eql(
            'Incorrect username or password',
          );
          done();
        });
    });

    it('should give error because a parameter is missing', done => {
      const reqBody = {
        username: 'admins',
      };
      chai
        .request(app)
        .post('/login')
        .send(reqBody)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.a('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.a('array');
          res.body.errors[0].should.have.property('message');
          res.body.errors[0].message.should.be.a('string');
          done();
        });
    });

    it('should return token because credentials are true', done => {
      const reqBody = {
        username: 'admin',
        password: '1234',
      };
      chai
        .request(app)
        .post('/login')
        .send(reqBody)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property('body');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(true);
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('token');
          res.body.data.token.should.be.a('string');
          done();
        });
    });
  });
});
