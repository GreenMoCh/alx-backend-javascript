const http = require('http');
const fs = require('fs');
const { promisify } = require('util');
const countStudents = require('./3-read_file_async');

const readFileASync = promisify(fs.readFile);

const app = http.createrServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;

    if (path === '/') {
        res.end('Hello Holberton School!');
    } else if (path === '/students') {
        try {
            const dbFileName = process.argv[2];
            const data = await readFileASync(dbFileName, 'utf-8');
            
            await countStudents(dbFileName);
            res.end('This is the list of our students');
        } catch (error) {
            res.end('Cannot load the database');
        }
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

app.listen(1245);

module.exports = app;
