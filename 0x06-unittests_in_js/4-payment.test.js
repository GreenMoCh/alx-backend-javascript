const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const utils = require('./utils');
const chai = require('chai');
const expect = chai.expect;

describe('sendPaymentRequestToApi', function () {
	it('Send payment request method', () => {
		const fctstub = sinon.stub(utils, 'calculateNumber');
		fctstub.returns(10);

		const reqApi = sendPaymentRequestToApi(100, 20);
		const spyy = sinon.spy(console, 'log');

		expect(spyy.calledWithExactly('The total is: 10'));
		expect(utils.calculateNumber('SUM', 100, 20)).to.equal(reqApi);

		fctstub.restore();
		spyy.restore();
	});
});
