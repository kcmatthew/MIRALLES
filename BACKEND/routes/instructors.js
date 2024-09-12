const express = require('express');
const router = express.Router();
const InstructorController = require('../controllers/instructors.controller.js');

router.get('/', InstructorController.getAllInstructors);
router.get('/:id', InstructorController.getInstructorById);
router.post('/', InstructorController.createInstructor);
router.put('/:id', InstructorController.updateInstructor);
router.delete('/:id', InstructorController.deleteInstructor);
module.exports = router;
