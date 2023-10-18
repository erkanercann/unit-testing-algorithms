const fiboEvenSum = require('./fiboEvenSum');

describe('fiboEvenSum', () => {
    it('should be a function', () => {
        expect(typeof fiboEvenSum).toBe('function');
    });
    it('should return a number', () => {
        expect(typeof fiboEvenSum(10)).toBe('number');
    });
    it('should sum the even-valued Fibonacci numbers', () => {
        expect(fiboEvenSum(34)).toBe(44);
        expect(fiboEvenSum(60)).toBe(44);
        expect(fiboEvenSum(1000)).toBe(798);
    });
});
