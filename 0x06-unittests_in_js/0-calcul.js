function calculateNumber(a, b) {
    const roundA = Math.round(a);
    const RoundB = Math.round(b);
    return roundA + RoundB;
}

module.exports = calculateNumber;
