const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create Schema
const UserSchema = new Schema({
  // definition of the mongoDB fields/datapoints inside 'Item'
  // we want a `name`
  // id: {
  //   type: String,
  //   required: true
  // },

  name: {
    type: String,
    required: true
  },

  username: {
    type: String,
    required: true
  },

  // we want a `date`
  // date: {
  //   type: Date,
  //   default: Date.now
  // }
});

module.exports = mongoose.model('user', UserSchema);
