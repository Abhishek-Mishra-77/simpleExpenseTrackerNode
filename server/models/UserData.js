const Sequelize = require('sequelize')

const sequelize = require('../util/database');

const User = sequelize.define('Info', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    product: Sequelize.STRING,
    amount: Sequelize.STRING,
    description: Sequelize.STRING,
    category: Sequelize.STRING
},
    {
        tableName: 'Info'
    }
)

module.exports = User;