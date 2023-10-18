// Solution 1

function chunk(arrayToChunk, chunkSize) {
    const chunkedArray = [];

    for (let element of arrayToChunk) {
        const lastChunk = chunkedArray[chunkedArray.length - 1];

        if (!lastChunk || lastChunk.length === chunkSize) {
            chunkedArray.push([element]);
        } else lastChunk.push(element);
    }
    return chunkedArray;
}

// Solution 2

function chunk(arrayToChunk, chunkSize) {
    const chunkedArray = [];

    for (let i = 0; i < arrayToChunk.length; i += chunkSize) {
        chunkedArray.push(arrayToChunk.slice(i, i + chunkSize));
    }

    return chunkedArray;
}

module.exports = chunk;
