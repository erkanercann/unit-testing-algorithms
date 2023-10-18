// Solution 1

function reverseString(str) {
    const strToArr = str.split('');
    const reversedArr = strToArr.reverse();
    return reversedArr.join('');
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Solution 2

function reverseString(str) {
    const strArr = str.split('');
    let reversed = '';

    for (let i = strArr.length - 1; i >= 0; i--) {
        reversed += strArr[i];
    }
    return reversed;
}

function reverseString(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

// Solution 3

function reverseString(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '');
}

module.exports = reverseString;
