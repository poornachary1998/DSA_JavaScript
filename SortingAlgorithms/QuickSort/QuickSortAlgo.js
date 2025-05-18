function QuickSortHelper(arr, start = 0, end = arr.length){
let pivotIndex = start;
let pivotValue = arr[start];
for(let i  = start +1 ; i<end; i++){
    if(arr[i]<pivotValue){
        pivotIndex++
     [arr[i], arr[pivotIndex]]   = [arr[pivotIndex],arr[i]]
    }

}
[arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]

return pivotIndex;
}
// console.log(QuickSortHelper([15,11,9,13,1]))

function QuickSort(arr, left = 0, right = arr.length){
if(left<right){
    let pivotIndex = QuickSortHelper(arr, left, right)
    // left
    QuickSort(arr, left, pivotIndex-1)

    // right
    QuickSort(arr, pivotIndex+1, right)
}
return arr
}
console.log(QuickSort([15,11,9,13,1]))