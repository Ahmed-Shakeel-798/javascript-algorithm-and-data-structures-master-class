function stringReverse(stringToReverse, newString = '') {
    if (stringToReverse.length <= 0) {
        return newString;
    }
    return stringReverse(stringToReverse.slice(0, -1),
        newString + stringToReverse[stringToReverse.length - 1]);
}

console.log(stringReverse("Ahmed"));