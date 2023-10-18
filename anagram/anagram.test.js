const areAnagrams = require('./anagram');

describe('Anagram', () => {
    it('should be a function', () => {
        expect(typeof areAnagrams).toBe('function');
    });
    it('should return a boolean', () => {
        expect(typeof areAnagrams('peach', 'cheap')).toBe('boolean');
    });
    it('should return true if anagram', () => {
        expect(areAnagrams('Peach', 'cheap')).toBeTruthy();
        expect(areAnagrams('Elbow', 'below')).toBeTruthy();
        expect(areAnagrams('Heart', 'earth')).toBeTruthy();
    });
    it('should return false if not anagram', () => {
        expect(areAnagrams('car', 'chair')).toBeFalsy();
        expect(areAnagrams('ball', 'bell')).toBeFalsy();
        expect(areAnagrams('cat', 'coat')).toBeFalsy();
    });
});
