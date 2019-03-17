const sequelize = require('../helpers/mysql-connect')
const seq = require('sequelize')
const bcrypt = require('bcrypt')

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
}, {
        hooks: {
            beforeCreate: (user) => {
                const salt = bcrypt.genSaltSync()
                user.password = bcrypt.hashSync(user.password, salt)
            }
        }
    })

User.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

User.sync({ force: false })

module.exports = User