const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf-8', (err, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
				return;
			}

			const lines = data.split('\n').filter(line => line.trim() !== '');
			if (lines.length === 0) {
				reject(new Error('Cannot load the database'));
				return;
			}

			const studentsRecords = lines.slice(1);
			const numberOfStudents = studentsRecords.length;
			console.log(`Number of students: ${numberOfStudents}`);

			const fieldCounts = {};

			studentsRecords.forEach((record) => {
				const [firstname, lastname, age, field] = record.split(',');

				if (!fieldCounts[field]) {
					fieldCounts[field] = [];
				}
				fieldCounts[field].push(firstname);
			});

			for (const field in fieldCounts) {
				if (fieldCounts.hasOwnProperty(field)) {
					const count = fieldCounts[field].length;
					const list = fieldCounts[field].join(', ');
					console.log(`Number of students in ${field}: ${count}. List: ${list}`);
				}
			}

			resolve();
		});
	});
}

module.exports = countStudents;
