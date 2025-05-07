// refer Part 1


// If you see below we are getting undefined because we are searing for j+1 element for last item in array.

// node Bubblesort.js
// [ 10, 5, 32, 23, 1 ] 10 5
// [ 5, 10, 32, 23, 1 ] 10 32
// [ 5, 10, 32, 23, 1 ] 32 23
// [ 5, 10, 23, 32, 1 ] 32 1
// [ 5, 10, 23, 1, 32 ] 32 undefined --> The last item is already sorted but we are still comparing, we need to reduce this
// swap done
// [ 5, 10, 23, 1, 32 ] 5 10
// [ 5, 10, 23, 1, 32 ] 10 23
// [ 5, 10, 23, 1, 32 ] 23 1
// [ 5, 10, 1, 23, 32 ] 23 32 --> The last item is already sorted but we are still comparing, we need to reduce this
// [ 5, 10, 1, 23, 32 ] 32 undefined--> The last item is already sorted but we are still comparing, we need to reduce this
// swap done
// [ 5, 10, 1, 23, 32 ] 5 10
// [ 5, 10, 1, 23, 32 ] 10 1
// [ 5, 1, 10, 23, 32 ] 10 23 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 5, 1, 10, 23, 32 ] 23 32 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 5, 1, 10, 23, 32 ] 32 undefined-->The last item is already sorted but we are still comparing, we need to reduce this
// swap done
// [ 5, 1, 10, 23, 32 ] 5 1
// [ 1, 5, 10, 23, 32 ] 5 10 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 10 23 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 23 32 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 32 undefined-->The last item is already sorted but we are still comparing, we need to reduce this
// swap done
// [ 1, 5, 10, 23, 32 ] 1 5 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 5 10 -->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 10 23-->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 23 32-->The last item is already sorted but we are still comparing, we need to reduce this
// [ 1, 5, 10, 23, 32 ] 32 undefined -->The last item is already sorted but we are still comparing, we need to reduce this
// swap done
// [ 1, 5, 10, 23, 32 ]

//Solution: we will now follow pseudo code iterate the loop from back ward and we will stop comparing if value is i -1
// if an array size is 5 elements, we will compare only till 4 elements so that highgest number will be at end always and no comparision is needded.


function BubbleSort(arr){
for ( let  i = arr.length ; i>0 ; i--){
    
    for  (let j = 0 ; j < i-1 ; j++){
        console.log(arr, arr[j], arr[j+1])
        if(arr[j]> arr[j+1]){
       [ arr[j], arr[j+1]] = [ arr[j+1], arr[j]]
        }
    }
    console.log("swap done")
}
return arr;
}
console.log(BubbleSort([1,23,4,3,12]))

// node Bubblesort-part2.js
// [ 1, 23, 4, 3, 12 ] 1 23
// [ 1, 23, 4, 3, 12 ] 23 4
// [ 1, 4, 23, 3, 12 ] 23 3
// [ 1, 4, 3, 23, 12 ] 23 12
// swap done
// [ 1, 4, 3, 12, 23 ] 1 4
// [ 1, 4, 3, 12, 23 ] 4 3
// [ 1, 3, 4, 12, 23 ] 4 12
// swap done
// [ 1, 3, 4, 12, 23 ] 1 3
// [ 1, 3, 4, 12, 23 ] 3 4
// swap done
// [ 1, 3, 4, 12, 23 ] 1 3
// swap done
// swap done
// [ 1, 3, 4, 12, 23 ]
// pnarsingosu@PNARSING-M-3029 BubbleSort % 