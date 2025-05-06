// Divide and conquer
//works with only sorted array

function BinarySearch(arr, num){
let min = 0;
let max = arr.length -1;

while ( min <= max){
    let middle = Math.floor((min+max)/2)

    let currentEle = arr[middle];

    if(currentEle < num){
        min = middle +1
    } else if ( currentEle > num) {
        max = middle -1
    } else return middle;
}
return -1;
}

console.log(BinarySearch([10,20,30,40,50,60,70],60))