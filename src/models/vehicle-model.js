const sequelize = require('../helpers/mysql-connect')
const seq = require('sequelize')

const Vehicle = sequelize.define('vehicle', {
    id: {
        type: seq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: seq.INTEGER
    },
    model: {
        type: seq.STRING,
        allowNull: false
    },
    plate: {
        type: seq.STRING,
        unique: true,
        allowNull: false
    }
})

Vehicle.sync({ force: false })

module.exports = Vehicle