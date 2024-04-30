const fs = require('fs');

/**
 * Read a CSV file and counts students per field
 * @param {string} path The path to the CSV file
 */
function countStudents(path) {
    try {
        const data = fs.readFileSync(path, { encoding: 'utf-8' });
        const lines = data.split('\n').filter(line => line.length > 0 && line !== 'firstname,lastname,age,feild');

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

        const totalStudents = line.length;
        console.log(`Number of students: ${totalStudents}`);

        for (const [field, names] of Object.entries(studentsPerField)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot loaad the database');
    }
}

module.exports = countStudents;
