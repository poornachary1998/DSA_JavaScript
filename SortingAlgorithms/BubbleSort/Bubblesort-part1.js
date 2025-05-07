// Bubble Sort swaps the element is the element is larger and sets the largest element in last.


//pseudo code:
// start looping from a variable i in the end of array to beginning.
// start an inner loop j from beginning until i-1
// if the arr[j] > arr [j+1] then do swap 
// return array

//naive solution:

function BubbleSort( arr){

    for( i = 0 ; i<arr.length; i++){
        for (let j = 0; j< arr.length; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j]>arr[j+1]){
                let temp;
                temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
        console.log('swap done')
    }
    return arr
}

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

console.log(BubbleSort([10,5,32,23,1]))