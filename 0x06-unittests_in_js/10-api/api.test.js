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

describe('Cart page', function () {
    it('should return correct status code when id is a number', function (done) {
        request.get('http://localhost:7865/cart/12', function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should return correct status code when id is NOT a number', function (done) {
        request.get('http://localhost:7865/cart/hello', function (error, response, body) {
            expect(response.statusCode).to.equal(404);
            done();
        });
    });
});

describe('Available payments methods', function () {
    it('should return correct payment methods', function (done) {
        request.get('http://localhost:7865/available_payments', function (error, response, body) {
            const expectedResponse = {
                payment_methods: {
                    credit_card: true,
                    paypal: false
                }
            };
            expect(JSON.parse(body)).to.deep.equal(expectedResponse);
            done();
        });
    });
});

describe('Login endpoint', function () {
    it('should return correct welcome message', function (done) {
        const options = {
            url: 'http://localhost:7865/login',
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ userName: 'Betty' })
        };

        request(options, function (error, response, body) {
            expect(body).to.equal('Welcome Betty');
            done();
        });
    });
});
