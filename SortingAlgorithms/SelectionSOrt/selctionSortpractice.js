function SelectionSort (arr){
    function swap (arr, idx1, idx2){
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let  i = 0; i< arr.length; i++){
        let lowest = i;
        for ( let j = i+1; j< arr.length; j++){
            if(arr[lowest]> arr[j]){
                console.log(arr[lowest],">", arr[j])
                lowest = j;
            }
console.log(lowest)
        }
        if( i!==lowest) swap(arr, i, lowest)
    }
return arr;
}

console.log(SelectionSort([12,11,10,9,16]));