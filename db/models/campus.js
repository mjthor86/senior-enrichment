const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'https://static.pexels.com/photos/39561/solar-flare-sun-eruption-energy-39561.jpeg'
    }
  }
);
