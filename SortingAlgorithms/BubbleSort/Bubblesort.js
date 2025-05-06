// Bubble Sort swaps the element is the element is larger and sets the largest element in last.


//pseudo code:
// start looping from a variable i in the end of array to beginning.
// start an inner loop j from beginning until i-1
// if the arr[j] > arr [j+1] then do swap 
// return array
function BubbleSort(arr){
for (let i = arr.length; i>0; i--){
    for (let j =0 ; j< i-1; j++){
       if (arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
       }
    }
}
return arr;
}

console.log(BubbleSort([10,5,32,56,23,38,1,3,0,22]))