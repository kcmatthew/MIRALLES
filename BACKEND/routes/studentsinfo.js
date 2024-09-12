const express = require('express');
const router = express.Router();
const StudentInfoController = require('../controllers/studentsinfo.controller.js');


router.get('/', StudentInfoController.getAllStudentInfo);
router.get('/:id', StudentInfoController.getStudentInfoById);
router.post('/', StudentInfoController.createStudentInfo);
router.put('/:id', StudentInfoController.updateStudentInfo);
router.delete('/:id', StudentInfoController.deleteStudentInfo);
module.exports = router;
