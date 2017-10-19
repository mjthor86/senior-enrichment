const Sequelize = require('sequelize');
const db = require('../../db');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: 'http://www.placecage.com/200/200',
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    },
  }
}, {
  scopes: {
    populated: () => ({
      include: [{
        model: db.model('campus'),
        as: 'campus',
      }]
    })
  }
});
