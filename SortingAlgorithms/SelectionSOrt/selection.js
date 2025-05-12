function sorting(arr){
    function helperswap(arr, idx1, idx2){
[arr[idx1], arr[idx2]] =[arr[idx2], arr[idx1]]
    }
for (let i =0; i< arr.length;i++){
    let lowest = i;
    for (let j = i+1; j<arr.length; j++){
        if(arr[lowest]>arr[j]){
            lowest =j;
        }
    }
    if( i!== lowest) helperswap(arr, i , lowest)
}
return arr;
}
console.log(sorting([12,32,1,4]));