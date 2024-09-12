const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const StudentInfo = sequelize.define('studentsinfo', {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    studentId: DataTypes.INTEGER,
    yearLevel: DataTypes.INTEGER,
    course: DataTypes.STRING,
    section: DataTypes.STRING,
    InstructorId: DataTypes.INTEGER,
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    timestamps: true, 
    tableName: 'studentsinfo', 
});

module.exports = StudentInfo;
