const collectOdds = function (arr = [], odds = []) {
    if (arr.length === 0) return odds;

    if(arr[0] % 2 !== 0) {
        odds.push(arr[0]);
    }

    return collectOdds(arr.slice(1), odds);
}

console.log(collectOdds([3,4,5,6,7,8,9]));