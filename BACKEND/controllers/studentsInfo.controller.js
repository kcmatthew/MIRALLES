const StudentInfo = require('../models/studentsinfo.model.js');

exports.getAllStudentInfo = async (req, res) => {
    try {
        const studentInfo = await StudentInfo.findAll();
        res.status(200).json(studentInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getStudentInfoById = async (req, res) => {
    try {
        const studentInfo = await StudentInfo.findByPk(req.params.id);
        if (studentInfo) {
            res.status(200).json(studentInfo);
        } else {
            res.status(404).json({ message: 'StudentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createStudentInfo = async (req, res) => {
    try {
        const newStudentInfo = await StudentInfo.create(req.body);
        res.status(201).json(newStudentInfo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateStudentInfo = async (req, res) => {
    try {
        const [updated] = await StudentInfo.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated) {
            const updatedStudentInfo = await StudentInfo.findByPk(req.params.id);
            res.status(200).json(updatedStudentInfo);
        } else {
            res.status(404).json({ message: 'StudentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteStudentInfo = async (req, res) => {
    try {
        const deleted = await StudentInfo.destroy({
            where: { _id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'StudentInfo not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
