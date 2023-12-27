// Requires a sorted array.

const binarySerach = (arr = [], valueToSearch) => {
    let startingPoint = 0;
    let endingPoint = arr.length - 1;
    let middlePoint = Math.floor(( startingPoint + endingPoint ) / 2);
    
    while( startingPoint <= endingPoint ){
        console.log("startingPoint: " + startingPoint + " , endingPoint: " + endingPoint + " , middlePoint: " + middlePoint)

        if(arr[middlePoint] === valueToSearch){
            return middlePoint;
        }

        if( valueToSearch < arr[middlePoint]) {
            endingPoint = middlePoint - 1;
        }else {
            startingPoint = middlePoint + 1;
        }

        middlePoint = Math.floor(( startingPoint + endingPoint ) / 2);
    }

    return -1;
}

let arr = [];
for(let i = 1; i <= 16; i ++) {
    arr.push(i);
}
binarySerach(arr, 16);

// worst case complexity: log2(16) = 4
// worst case complexity: log2(32) = 5
// worst case complexity: log2(64) = 6
// worst case complexity: log2(n)

