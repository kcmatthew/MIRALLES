const Instructor = require('../models/instructors.model.js');

exports.getAllInstructors = async (req, res) => {
    try {
        const instructors = await Instructor.findAll();
        res.status(200).json(instructors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findByPk(req.params.id);
        if (instructor) {
            res.status(200).json(instructor);
        } else {
            res.status(404).json({ message: 'Instructors not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createInstructor = async (req, res) => {
    try {
        const newInstructor = await Instructor.create(req.body);
        res.status(201).json(newInstructor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateInstructor = async (req, res) => {
    try {
        const [updated] = await Instructor.update(req.body, {
            where: { _id: req.params.id }
        });
        if (updated) {
            const updatedInstructor = await Instructor.findByPk(req.params.id);
            res.status(200).json(updatedInstructor);
        } else {
            res.status(404).json({ message: 'Instructors not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteInstructor = async (req, res) => {
    try {
        const deleted = await Instructor.destroy({
            where: { _id: req.params.id }
        });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ message: 'Instructors not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


