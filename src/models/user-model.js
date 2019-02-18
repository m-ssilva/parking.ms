const sequelize = require('../helpers/mysql-connect')
const seq = require('sequelize')

const User = sequelize.define('user', {
    id: {
        type: seq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: seq.STRING,
        allowNull: false
    },
    username: {
        type: seq.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: seq.STRING,
        allowNull: false
    }
})

User.sync({ force: true })

module.exports = User