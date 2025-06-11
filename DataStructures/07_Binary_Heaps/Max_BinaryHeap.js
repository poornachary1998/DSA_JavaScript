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

class MaxBinaryHeap{
constructor(){
this.values = [];
}

insert(element){
    this.values.push(element);
    this.bubbleup();
}
bubbleup(){
    let index = this.values.length - 1;
    let newElement = this.values[index];

    while(index>0){
        let parentIndex = Math.floor((index - 1) / 2)
        let parentvalue = this.values[parentIndex];

        if(newElement <= parentvalue) break;

this.values[parentIndex] = newElement;
this.values[index] = parentvalue;
index = parentIndex;
    }
}}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.values);
