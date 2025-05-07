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

// solution we are going to add a swap variable here

function BubbleSort(arr){
    for ( let  i = arr.length ; i>0 ; i--){
        let noswap = true;
        for  (let j = 0 ; j < i-1 ; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]> arr[j+1]){
           [ arr[j], arr[j+1]] = [ arr[j+1], arr[j]]
           noswap = false;
            }
        }
        console.log("swap done")
        // if(noswap) break;
    }
    return arr;
    }

console.log(BubbleSort([10,20,40,22,21]))

// Before:
// [ 10, 20, 40, 22, 21 ] 10 20
// [ 10, 20, 40, 22, 21 ] 20 40
// [ 10, 20, 40, 22, 21 ] 40 22
// [ 10, 20, 22, 40, 21 ] 40 21
// swap done
// [ 10, 20, 22, 21, 40 ] 10 20
// [ 10, 20, 22, 21, 40 ] 20 22
// [ 10, 20, 22, 21, 40 ] 22 21
// swap done
// [ 10, 20, 21, 22, 40 ] 10 20
// [ 10, 20, 21, 22, 40 ] 20 21
// swap done
// [ 10, 20, 21, 22, 40 ] 10 20 --> extra is removed.
// swap done
// swap done
// [ 10, 20, 21, 22, 40 ]


// After:
// [ 10, 20, 40, 22, 21 ] 10 20
// [ 10, 20, 40, 22, 21 ] 20 40
// [ 10, 20, 40, 22, 21 ] 40 22
// [ 10, 20, 22, 40, 21 ] 40 21
// swap done
// [ 10, 20, 22, 21, 40 ] 10 20
// [ 10, 20, 22, 21, 40 ] 20 22
// [ 10, 20, 22, 21, 40 ] 22 21
// swap done
// [ 10, 20, 21, 22, 40 ] 10 20
// [ 10, 20, 21, 22, 40 ] 20 21
// swap done
// [ 10, 20, 21, 22, 40 ]