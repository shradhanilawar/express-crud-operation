const Sequelize = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

sequelize.sync().then(() => {
  console.log('Users table has been created.');
});

module.exports = User;
