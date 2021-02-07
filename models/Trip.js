const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** trip Schema prototype decleration  */
const tripSchema = new Schema({});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;

// {
//   _id: 5cebab1fa2752d2aa3d25859,
//   distance_travelled: 790,
//   driver_rating: 5,
//   rider_rating: 5,
//   start_zip_code: null,
//   end_zip_code: '',
//   charity_id: null,
//   requested_car_category: 'REGULAR',
//   free_credit_used: null,
//   surge_factor: 0,
//   color: 'Black',
//   make: 'Cadillac',
//   model: 'XTS',
//   year: 2013,
//   rating: 5,
//   Date: '2016-06-04',
//   PRCP: 0.1,
//   TMAX: 86,
//   TMIN: 67,
//   AWND: 4.9,
//   GustSpeed2: 13,
//   Fog: 1,
//   HeavyFog: 0,
//   Thunder: 0,
//   start: { type: 'Point', coordinates: [ -97.70929823, 31.04685111 ] },
//   end: { type: 'Point', coordinates: [ -97.14107472, 30.39216848 ] },
//   complete_date: 2016-06-04T15:26:07.000Z,
//   start_date: 2016-06-04T15:24:25.000Z
// }