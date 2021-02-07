const mongoose = require('mongoose');

exports.connect = async ({expressApp}) => {
  mongoose.connection
    .on('error', err => {
      console.log('MongoDB connection error:', err.message);
      process.exit();
    })

    .on('disconnected', mongooseConnect)

    .once('open', () => {
      expressApp.listen(process.env.PORT, () => {
        expressApp.emit('up');
      });
    })

    // .on('connected', () => console.log('MongoDB connected'));

  await mongooseConnect();
};

exports.connection = mongoose.connection;

async function mongooseConnect() {
  try {
    await mongoose.connect(process.env.DB_CONNECTION_STRING, {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
  }
}
