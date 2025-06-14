// Step 1: Insert
// Push the new value to the end of the values array (heap).
// Step 2: Bubble Up
// Initialize:
// index = last index of the array (values.length - 1)
// parentIndex = Math.floor((index - 1) / 2)
// Loop until heap property is restored:
// While the value at parentIndex is less than the value at index:
// Swap the values at index and parentIndex
// Set index = parentIndex
// Recalculate parentIndex = Math.floor((index - 1) / 2)


//practice to max_binaryheap.js file
class MaxBinaryHeap{
    constructor(){
this.values = [];
    }

    insert(ele){
this.values.push(ele);
this.bubbleUp();
    }
    bubbleUp(){
        let indexValue = this.values.length -1;
        let indexEle =  this.values[indexValue];

        while(indexValue>0){
            let parentIndex = Math.floor ((indexValue - 1) /2)
            let parentValue = this.values[parentIndex];

            if(parentValue>= indexEle)  break;

this.values[parentIndex] = indexEle;
this.values[indexValue] = parentValue;

indexValue =parentIndex;

        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)

console.log(heap)