const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const Student = sequelize.define('students', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    studentNo: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE,
    gender: DataTypes.STRING,
    address: DataTypes.JSON,
    citizenship: DataTypes.STRING,
    avatar: DataTypes.JSON,
    contact: DataTypes.STRING,
    civilStatus: DataTypes.STRING,
    social: DataTypes.STRING,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
});

module.exports = Student;
