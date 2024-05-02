const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber using Chai', function() {
    describe('SUM', function() {
        it('should return the sum of two rounded numbers', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
        });
    });

    describe('SUBTRACT', function() {
        it('should return the difference of two rounded numbers', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
    });

    describe('DIVIDE', function() {
        it('should return the quotient of two rounded numbers', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.05);
        });

        it('should return "Error" when dividing by zero', function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
        });
    });
});
