const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Instructor = sequelize.define('instructors', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    subject: DataTypes.STRING,
    degree: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    avatar: DataTypes.JSON,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Instructor;
