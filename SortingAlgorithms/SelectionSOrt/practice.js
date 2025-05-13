function selectionSort(arr){

    function swap(arr, idx1, idx2){
       [ arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for(let i = 0; i< arr.length; i++){
        let lowest  = i
        for(var j = i+1; j< arr.length; j++){
            if(arr[j]<arr[lowest]){
               lowest = j
            }
        }
         if(i !==lowest) swap(arr, i, lowest);
    }
    return arr;
}

console.log(selectionSort([12,223,31,2121,32324,12,123,3,32,1]))