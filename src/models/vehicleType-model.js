const sequelize = require('../helpers/mysql-connect')
const seq = require('sequelize')
const VehicleModel = require('./vehicle-model')

const VehicleType = sequelize.define('vehicleType', {
    id: {
        type: seq.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: seq.STRING,
        allowNull: false
    }
})

VehicleType.belongsTo(VehicleModel, { through: type, foreignKey: "id" })

module.exports = VehicleType