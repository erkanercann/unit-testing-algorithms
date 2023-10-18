const largestPrimeFactor = require('./largestPrimeFactor');

describe('Largest Prime Factor Finder', () => {
    it('should be a function', () => {
        expect(typeof largestPrimeFactor).toBe('function');
    });
    it('should return a number', () => {
        expect(typeof largestPrimeFactor(10)).toBe('number');
    });

    it('should find the largest prime factor', () => {
        expect(largestPrimeFactor(8)).toBe(2);
        expect(largestPrimeFactor(95)).toBe(19);
        expect(largestPrimeFactor(245)).toBe(7);
        expect(largestPrimeFactor(13195)).toBe(29);
    });
});
