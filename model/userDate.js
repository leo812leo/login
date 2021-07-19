const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserDataSchema = new Schema({
  firstName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('UserData', UserDataSchema)