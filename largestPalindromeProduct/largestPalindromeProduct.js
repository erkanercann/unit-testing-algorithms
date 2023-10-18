// Solution 1

function largestPalindromeProduct(n) {
    let largestPalindrome = 0;

    for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
        for (let j = i; j < Math.pow(10, n); j++) {
            let product = j * i;
            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}

function largestPalindromeProduct(n) {
    const max = Math.pow(10, n) - 1;
    const min = Math.pow(10, n - 1);
    let largestPalindrome = 0;

    for (let a = max; a >= min; a--) {
        for (let b = max; b >= a; b--) {
            const product = a * b;

            if (isPalindrome(product) && product > largestPalindrome) {
                largestPalindrome = product;
            }
        }
    }

    return largestPalindrome;
}
function isPalindrome(number) {
    const numberStr = number.toString();
    const reversedNumberStr = numberStr.split('').reverse().join('');
    return numberStr === reversedNumberStr;
}

module.exports = largestPalindromeProduct;
