const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function () {
    let consoleSpy;

    beforeEach(function () {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterAll(function () {
        consoleSpy.restore();
    });

    it('logs the total for 100 and 20', function () {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });

    it('logs the total for 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce).to.be.true;
    });
});
