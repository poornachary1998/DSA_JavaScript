function QuickSortHelper(arr, start = 0 , end = arr.length-1){
    let pivotValue = arr[start];
    let pivotIndex = start;
for(let i = start +1;i< end;i++){
    if(arr[i]< pivotValue){
        pivotIndex++;
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]]
    }
}
[arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
return pivotIndex
}
console.log(QuickSortHelper([5,2,1,8,4,7,6,3]))