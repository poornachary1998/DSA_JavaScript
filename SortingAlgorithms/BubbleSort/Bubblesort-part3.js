function BubbleSort(arr){
function swap ( arr, idx1, idx2){
 return   [arr[idx1], arr[idx2]] = [arr[idx2],arr[idx1]]
}
for( let i = arr.length; i>0; i--){
    for (let j = 0; j<i-1; j ++){
        console.log(arr, arr[j], arr[j+1])
        if(arr[j]>arr[j+1]){
            swap ( arr,j, j+1)
        }
    }
    console.log("swap done")
}
return arr;
}

console.log(BubbleSort([1,5,2,7,2]))

// node BubblesortHelper.js
// [ 1, 5, 2, 7, 2 ] 1 5
// [ 1, 5, 2, 7, 2 ] 5 2
// [ 1, 2, 5, 7, 2 ] 5 7
// [ 1, 2, 5, 7, 2 ] 7 2
// swap done
// [ 1, 2, 5, 2, 7 ] 1 2
// [ 1, 2, 5, 2, 7 ] 2 5
// [ 1, 2, 5, 2, 7 ] 5 2
// swap done
// [ 1, 2, 2, 5, 7 ] 1 2 --> At this point, the array is alreay soted but sort algorithm keeps checking again and again for complete array.
// [ 1, 2, 2, 5, 7 ] 2 2 --> At this point, the array is alreay soted but sort algorithm keeps checking again and again for complete array.
// swap done
// [ 1, 2, 2, 5, 7 ] 1 2 --> At this point, the array is alreay soted but sort algorithm keeps checking again and again for complete array.
// swap done
// swap done
// [ 1, 2, 2, 5, 7 ]

// check the solution in next file
