const app = require('../../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);

describe('Trips', () => {
  let token;

  before(function (done) {
    this.timeout(0);
    const reqBody = {
      username: 'admin',
      password: '1234',
    };

    chai
      .request(app)
      .post('/login')
      .auth()
      .send(reqBody)
      .end((err, res) => {
        token = res.body.data.token;
        done();
      });
  });

  describe('/trips/startedAtPoint', () => {
    it('should give error because token has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/startedAtPoint')
        .query(query)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error longitude parameter has not been passed', done => {
      const query = {
        // longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/startedAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error latitude parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        // latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/startedAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error radius parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        // radius: 500,
      };
      chai
        .request(app)
        .get('/trips/startedAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should successfully return result array (even its empty)', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/startedAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(true);
          res.body.should.have.property('data');
          res.body.data.should.be.an('array');
          done();
        });
    });
  });


  describe('/trips/minMaxDistanceTravelled', () => {
    it('should give error because token has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/minMaxDistanceTravelled')
        .query(query)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error longitude parameter has not been passed', done => {
      const query = {
        // longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/minMaxDistanceTravelled')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error latitude parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        // latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/minMaxDistanceTravelled')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error radius parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        // radius: 500,
      };
      chai
        .request(app)
        .get('/trips/minMaxDistanceTravelled')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should successfully return result array (even its empty)', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/minMaxDistanceTravelled')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(true);
          res.body.should.have.property('data');
          res.body.data.should.be.an('object');
          done();
        });
    });
  });

  describe('/trips/groupByVehicleModelAtPoint', () => {
    it('should give error because token has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/groupByVehicleModelAtPoint')
        .query(query)
        .end((err, res) => {
          res.should.have.status(401);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error longitude parameter has not been passed', done => {
      const query = {
        // longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/groupByVehicleModelAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error latitude parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        // latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/groupByVehicleModelAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should give error radius parameter has not been passed', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        // radius: 500,
      };
      chai
        .request(app)
        .get('/trips/groupByVehicleModelAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(422);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(false);
          res.body.should.have.property('errors');
          res.body.errors.should.be.an('array');
          done();
        });
    });

    it('should successfully return result array (even its empty)', done => {
      const query = {
        longitude: -97.70929823,
        latitude: 31.04685111,
        radius: 500,
      };
      chai
        .request(app)
        .get('/trips/groupByVehicleModelAtPoint')
        .set({Authorization: `Bearer ${token}`})
        .query(query)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.have.property('body');
          res.body.should.be.an('object');
          res.body.should.have.property('success');
          res.body.success.should.be.eql(true);
          res.body.should.have.property('data');
          res.body.data.should.be.an('array');
          done();
        });
    });
  });


});
