const reserveString = require('./reversestring');

describe('ReverseString', () => {
    it('should be a function', () => {
        expect(typeof reserveString).toBe('function');
    });
    it('should return a string', () => {
        expect(typeof reserveString('hello')).toBe('string');
    });
    it('should return the reversed string', () => {
        expect(reserveString('hello')).toBe('olleh');
        expect(reserveString('world')).toBe('dlrow');
    });
});
