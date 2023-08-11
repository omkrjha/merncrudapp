const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('connected', () => {
  console.log('mongodb connected succesfully');
});
db.on('error', (err) => {
  console.log('connection error in mongodb');
});

module.exports = db;
