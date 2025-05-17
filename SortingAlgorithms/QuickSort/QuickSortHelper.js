function QuickSortHelper(arr, start = 0 , end = arr.length-1){
    let pivotValue = arr[start];
    let pivotIndex = start;
for(let i = start +1;i<=end;i++){
    if(arr[i]< pivotValue){
        pivotIndex++;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
    }
}
[arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
return pivotIndex
}

function QuickSort(arr, left=0, right = arr.length-1 ){
if(left<right){
let pivotIndex = QuickSortHelper(arr, left, right)

//
QuickSort(arr, left, pivotIndex-1)
QuickSort(arr, pivotIndex+1, right)
}
return arr
}
console.log(QuickSort([12,3,1,5,8,2]))