const sequelize = require('../helpers/mysql-connect')
const { INTEGER, STRING } = require('sequelize')

const Vehicle = sequelize.define('vehicle', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: INTEGER,
        references: {
            model: 'vehicleType',
            key: 'id'
        },
        allowNull: false
    },
    model: {
        type: STRING,
        allowNull: false
    },
    plate: {
        type: STRING,
        unique: true,
        allowNull: false
    }
})

Vehicle.sync({ force: false })

module.exports = Vehicle