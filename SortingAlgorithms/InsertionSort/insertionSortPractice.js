function insertionSort(arr){
for( let i = 1; i<  arr.length; i++){
    let currentval = arr[i];
    for (var j = i -1 ; j >=0 && arr[j]> currentval; j--){
   arr[j+1] = arr[j]
    }
    arr[j+1] = currentval;
}
return arr;
}
console.log(insertionSort([10,8,3,1,4]))