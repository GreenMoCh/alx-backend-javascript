const { readDatabase } = require = ("../utils");

class StudentsController {
    static async getAllStudents(req, res) {
        try {
            const studentsPerField = await readDatabase(req.dbFilePath);

            let responseBody = 'This is the list of our students\n';
            Object.entries(studentsPerField).sort(([a], [b]) => a.localeCompare(b)).forEach(([field, names]) => {
                responseBody += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
            });

            res.status(200).send(responseBody);
        } catch (error) {
            res.status(500).send('Cannot load the database');
        }
    }

    static async getAllStudentsByMajor(req, res) {
        try {
            const studentsPerField = await readDatabase(req.dbFilePath);

            const major = req.params.major.toUpperCase();
            if (major !== 'CS' && major !== 'SWE') {
                throw new Error('Major parameter must be CS or SWE');
            }

            const students = studentsPerField[major] || [];

            res.status(200).send(`List: ${students.join(', ')}`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

module.exports = StudentsController;
