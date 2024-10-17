const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000;

const UserRouter = require('./routes/users');
app.use('/users', UserRouter)

const InstructorRouter = require('./routes/instructors');
app.use('/instructors', InstructorRouter)

const StudentRouter = require('./routes/students');
app.use('/students', StudentRouter)

const StudentInfoRouter = require('./routes/studentsinfo');
app.use('/studentsinfo', StudentInfoRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
