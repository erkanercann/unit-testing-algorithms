const isPalindrom = require('./palindrome');

describe('Palindrome', () => {
    it('should be a function', () => {
        expect(typeof isPalindrom).toBe('function');
    });
    it('should return a string', () => {
        expect(typeof isPalindrom('hello')).toBe('boolean');
    });

    it('should return true if is a palindrome', () => {
        expect(isPalindrom('stats')).toBeTruthy();
        expect(isPalindrom('level')).toBeTruthy();
        expect(isPalindrom('civic')).toBeTruthy();
    });
    it('should return false if is not a palindrome', () => {
        expect(isPalindrom('hello')).toBeFalsy();
        expect(isPalindrom('world')).toBeFalsy();
        expect(isPalindrom('palindrome')).toBeFalsy();
    });
    it('should return false if is includes spaces', () => {
        expect(isPalindrom(' level')).toBeFalsy();
    });
});
