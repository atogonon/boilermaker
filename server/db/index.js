const db = require('./database')

const Example = require('./models/exampleModel')
const User = require('./models/User')

//Associations here

module.exports = {
  // Include your models in this exports object as well!
  db,
  Example,
  User
}
