// Solution 1

function areAnagrams(str1, str2) {
    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);

    if (Object.keys(charMap1).length !== Object.keys(charMap2).length) return false;

    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) return false;
    }
    return true;
}

function buildCharMap(str) {
    const charMap = {};

    for (let char of str.toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

// Solution 2

function areAnagrams(str1, str2) {
    const charMap1 = buildCharMap(str1);
    const charMap2 = buildCharMap(str2);

    return mapsAreEqual(charMap1, charMap2);
}

function buildCharMap(str) {
    const charMap = new Map();

    for (let char of str.toLowerCase()) {
        charMap.set(char, charMap.get(char) + 1 || 1);
    }
    return charMap;
}

function mapsAreEqual(map1, map2) {
    if (map1.size !== map2.size) return false;

    for (let [key, value] of map1) {
        if (map2.get(key) !== value) return false;
    }

    return true;
}

module.exports = areAnagrams;
