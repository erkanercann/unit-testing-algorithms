const largestPalindromeProduct = require('./largestPalindromeProduct');

describe('Largest Palindrome Product', () => {
    it('should be a function', () => {
        expect(typeof largestPalindromeProduct).toBe('function');
    });
    it('should return a number', () => {
        expect(typeof largestPalindromeProduct(2)).toBe('number');
    });
    it('should return the largest palindrome made from product of two n- digit numbers', () => {
        expect(largestPalindromeProduct(2)).toBe(9009);
        expect(largestPalindromeProduct(3)).toBe(906609);
    });
});
