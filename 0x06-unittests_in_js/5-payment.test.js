const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterAll(() => {
        consoleSpy.restore();
    });

    it('logs the total for 100 and 20', () => {
        sendPaymentRequestToApi(100, 20);

        expect(consoleSpy.calledWithExactly('The total is: 120')).to.be.true;
        expect(consoleSpy.calledOnce);
    });

    it('logs the total for 10 and 10', function () {
        sendPaymentRequestToApi(10, 10);

        expect(consoleSpy.calledWithExactly('The total is: 20')).to.be.true;
        expect(consoleSpy.calledOnce);
    });
});
