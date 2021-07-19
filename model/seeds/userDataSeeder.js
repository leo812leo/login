const UserData = require('../userDate')
const db = require('../../config/moongoose')
const UserDataSeed = require('./userData.json')


db.once('open', () => {
  UserDataSeed.forEach((data) => {
    UserData.create(data)
  })
  console.log('seeder success')
})