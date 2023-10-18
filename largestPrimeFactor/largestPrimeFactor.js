function largestPrimeFactor(number) {
    let largestFactor = 2;

    while (number > 1) {
        if (number % largestFactor === 0) {
            number /= largestFactor;
        } else {
            largestFactor++;
        }
    }
    return largestFactor;
}

module.exports = largestPrimeFactor;
