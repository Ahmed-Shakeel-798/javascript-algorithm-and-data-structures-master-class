const productOfArray = function (arr = []) {
    if (arr.length === 0) return 0;
    if (arr.length === 1) return arr[0];

    const currentValue = arr[0];

    return currentValue * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));