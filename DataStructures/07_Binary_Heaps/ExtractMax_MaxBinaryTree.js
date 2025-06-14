// pseudo Code Extract max - Removing MAX:

// swap the first value in the vlaues property with last one.
// Pop the value property to get rid of largest item.
// Have a new root "Sink Down" to correct spot.
//  -> Your parent index starts at 0 (the root).
//  -> Find the index of left child (2 * index) + 1 - make sure it is not out of bounds.
//  -> Find the index of right child (2 * index) + 2 - Make sure it is not out of bounds.
//  -> If the left or right is greater then element then do swap.
//  -> If the both left and right are greater than swap with largest child.
//  -> The child index you swapped now becomes new parent index.
//  -> Keep looping and swap until neither child is greater than element.
//  -> return the old root.


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

    extractMax(){
        const max = this.values[0];
        const end = this.values.pop();

        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }

        return console.log(max);
    }
    sinkDown(){
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while(true){
            let leftChildIdx = (2 * idx ) +1
            let rightChildIdx = (2 * idx) +2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIdx <length){
            leftChild = this.values[leftChildIdx];
            if(leftChild > element){
                swap = leftChildIdx
            }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element ) || (swap !== null && rightChild>leftChild)) {
                    swap = rightChildIdx
                }

            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap;
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
heap.extractMax()
console.log(heap)