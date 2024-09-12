const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const studentRoutes = require('./routes/students');
const studentInfoRoutes = require('./routes/studentsinfo');
const instructorRoutes = require('./routes/instructors');

app.use('/students', studentRoutes);
app.use('/studentsinfo', studentInfoRoutes);
app.use('/instructors', instructorRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
