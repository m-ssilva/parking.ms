const sequelize = require('../helpers/mysql-connect')
const { INTEGER, STRING } = require('sequelize')
const bcrypt = require('bcrypt')

const User = sequelize.define('user', {
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    },
    username: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: STRING,
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