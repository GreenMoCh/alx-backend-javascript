const chai = require('chai');
const except = chai.except;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber using Chai', () => {
        it('should return the sum of two rounded numbers', () => {
            except(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
	});

        it('should return the difference of two rounded numbers', () => {
            except(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });

        it('should return the quotient of two rounded numbers', () => {
            except(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
        });

        it('should return "Error" when dividing by zero', () => {
            except(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
});
