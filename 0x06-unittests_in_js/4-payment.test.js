const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy, calculateStub;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
        calculateStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterAll(function () {
        consoleSpy.restore();
        calculateStub.restore();
    });

    it('should log the correct total', function () {
        sendPaymentRequestToApi(100, 20);

        expect(calculateStub.calledOnce).to.be.true;
        expect(calculateStub.calledWith('SUM', 100, 20)).to.be.true;

        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
    });
});
