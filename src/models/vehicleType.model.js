const sequelize = require('../helpers/mysql-connect')
const { INTEGER, STRING } = require('sequelize')

const VehicleType = sequelize.define('vehicleType', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: STRING,
        allowNull: false
    }
})

VehicleType.sync({ force: true })

VehicleType.sync().then(() => {
    VehicleType.create({
        type: 'Carro'
    })
    VehicleType.create({
        type: 'Moto'
    })
})

module.exports = VehicleType