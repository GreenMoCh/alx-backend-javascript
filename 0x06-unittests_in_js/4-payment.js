const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShiping) {
    const result = Utils.calculateNumber('SUM', totalAmount, totalShiping);
    console.log(`The total is: ${result}`);

    return result;
}

module.exports = sendPaymentRequestToApi;
