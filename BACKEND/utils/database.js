const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'sample',
    dialect: 'mysql'
})

module.exports = sequelize;
