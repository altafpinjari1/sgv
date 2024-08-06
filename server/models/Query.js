const mongoose = require('mongoose');

const querySchema = new mongoose.Schema({
  name: String,
  email: String,
  phoneNumber: String,
  subject: String,
  message: String,
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
