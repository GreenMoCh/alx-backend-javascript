const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.type('text').send('Hello Horlberton School!');
});

app.get('/students', async (req, res) => {
    try {
        const dbFileName = await countStudents(process.argv[2]);

        res.send(`This is the list of our students\n${dbFileName.join('\n')}`);
    } catch (error) {
        res.send('Cannot load the database');
    }
});

app.listen(1245)

module.experts = server;
