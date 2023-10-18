// Solution 1

function palindrome(str) {
    return str.split('').reverse().join('') === str;
}

// Solution 2

function palindrome(str) {
    let palindrome = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            palindrome = false;
            break;
        }
    }

    return palindrome;
}

// Solution 3

function palindrome(str) {
    return str.split('').every((char, index) => {
        return char === str[str.length - 1 - index];
    });
}

module.exports = palindrome;
