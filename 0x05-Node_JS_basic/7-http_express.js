const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.type('text').send('Hello Horlberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const dbFileName = process.argv[2];

        await countStudents(dbFileName);
        res.type('text').send('This is the list of our students');
    } catch (error) {
        res.type('text').status(500).send('Cannot load the database');
    }
});

const server = app.listen(1245, () => {
    console.log('Server is running on port 1245');
});

module.experts = server;
