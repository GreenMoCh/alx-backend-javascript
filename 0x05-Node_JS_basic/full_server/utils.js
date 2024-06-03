const fs = require('fs');

/**
 * Reads the database asynchronously
 * @param {string} filePath The file path of the database
 * @returns {Promise<Object>} Resolves with an object of arrays of first names per fields
 */
async function readDatabase(filePath) {
    try {
        const data = await (fs.readFile, 'utf-8');
        const studentsPerField = {};

        data.trim().split('\n').forEach(line => {
            const [firstname, , , field] = line.split(',');
            if (field in studentsPerField) {
                studentsPerField[field].push(firstname);
            } else {
                studentsPerField[field] = [firstname];
            }
        });

        return studentsPerField;
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = {
    readDatabase,
};
