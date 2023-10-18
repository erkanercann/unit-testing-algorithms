// Solution 1

function fiboEvenSum(limit) {
    let prevTerm = 0;
    let currentTerm = 1;
    let sum = 0;

    for (let i = 0; currentTerm <= limit; i++) {
        currentTerm = currentTerm + prevTerm;
        prevTerm = currentTerm - prevTerm;

        if (currentTerm % 2 === 0) {
            sum += currentTerm;
        }
    }

    return sum;
}

// Solution 2

function fiboEvenSum(limit) {
    let prevTerm = 1;
    let currentTerm = 2;
    let sum = 0;

    while (currentTerm <= limit) {
        if (currentTerm % 2 === 0) {
            sum += currentTerm;
        }

        currentTerm += prevTerm;
        prevTerm = currentTerm - prevTerm;
    }

    return sum;
}

module.exports = fiboEvenSum;
