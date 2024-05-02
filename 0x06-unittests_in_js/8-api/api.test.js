const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', function () {
    it('should return correct status code', function (done) {
        request.get('http://localhost:7865', function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct result', function (done) {
        request.get('http://localhost:7865', function (error, response, body) {
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
