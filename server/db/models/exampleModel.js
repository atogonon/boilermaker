const Sequelize = require('sequelize');
const db = require('../database')

module.exports = db.define('example', {
  col1: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  col2: {
    type: Sequelize.STRING
  },
  col3: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  col4: {
    type: Sequelize.TEXT,
  },
})
