const UserData = require('../userDate')
const UserDataSeed = require('./userData.json')
const db = require('../../config/moongoose')


db.once('open', () => {
  UserDataSeed.forEach((data) => {
    UserData.create(data)
  })
  console.log('seeder success')
})