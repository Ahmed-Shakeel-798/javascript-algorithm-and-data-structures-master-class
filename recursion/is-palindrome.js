function isPalindrome(originalString, placeHolderString = '') {
    if (originalString.length === placeHolderString.length) {
        if (originalString === placeHolderString) {
            return true;
        } else {
            return false;
        }
    }
    placeHolderString = placeHolderString + originalString[originalString.length - 1];
    return isPalindrome(originalString.length - placeHolderString.length < 1 ? originalString : originalString.slice(0, -1),
        placeHolderString);
}

console.log(isPalindrome("aa"));