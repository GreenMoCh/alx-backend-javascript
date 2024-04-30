const fs = require('fs/promises');

/**
 * Reads a CSV file asynchronously and counts students per field
 * @param {string} path The path to the CSV file
 * @returns {Promise<void>} A promisr that resolves when processing is complete
 */
function countStudents(path) {
    return fs.readFile(path, { encoding: 'utf-8'})
        .then((data) => {
            const lines = data.split('\n').filter(line => line.length > 0 && line !== 'firstname,lastname,age,field');

            if (lines.length === 0) {
                throw new Error('No data in CSV file');
            }

            const studentsPerField = {};
            for (const line of lines) {
                const [firstname, , , field] = line.split(',');
                if (field in studentsPerField) {
                    studentsPerField[field].push(firstname);
                } else {
                    studentsPerField[field] = [firstname];
                }
            }

            const totalStudents = lines.length;
            console.log(`Number of students: *{totalStudents}`);

            for (const [field, names] of Object.entries(studentsPerField)) {
                console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`)
            }
        })
        .catch(() => {
            throw new Error('Cannot load the database');
        });
}

module.exports = countStudents;
