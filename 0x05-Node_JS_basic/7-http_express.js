const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
    res.type('text').send('Hello Horlberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const studenst = await countStudents(process.argv[2]);

        let response = 'This is the list of our students\n';
        response += `Number of students: ${students.total}\n`;

        for (const [field, names] of Object.entries(students.fields)) {
            response += `Number of students in ${field}: ${name.length}. List: ${names.join(', ')}\n`;
        }

        res.type('text').send(response);
    } catch (error) {
        res.type('text').send('Cannot load the database');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.experts = app;
