const chunk = require('./arraychunk');
const assert = require('assert');

describe('Array Chunking', () => {
    it('should split the array into chunks of a specific size ', () => {
        const inputArray = [1, 2, 3, 4, 5];
        const chunkedArray1 = chunk(inputArray, 2);
        const chunkedArray2 = chunk(inputArray, 3);

        assert.deepEqual(
            chunkedArray1,
            [[1, 2], [3, 4], [5]],
            'Chunk size 2 should produce three chunks.'
        );
        assert.deepEqual(
            chunkedArray2,
            [
                [1, 2, 3],
                [4, 5],
            ],
            'Chunk size 3 should produce two chunks.'
        );
    });
});
