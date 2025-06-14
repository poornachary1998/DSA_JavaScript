class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }



    enqueue(val, priority) {
        const newNode = new Node(val, priority)
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let indexValue = this.values.length - 1;
        let indexEle = this.values[indexValue];

        while (indexValue > 0) {
            let parentIndex = Math.floor((indexValue - 1) / 2)
            let parentValue = this.values[parentIndex];

            if (parentValue.priority <= indexEle.priority) break;

            this.values[parentIndex] = indexEle;
            this.values[indexValue] = parentValue;

            indexValue = parentIndex;

        }
    }

    dequeue() {
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }

        return console.log(min);
    }
    sinkDown() {
        let idx = 0;
        let length = this.values.length;
        let element = this.values[0];

        while (true) {
            let leftChildIdx = (2 * idx) + 1
            let rightChildIdx = (2 * idx) + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx
                }
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)) {
                    swap = rightChildIdx
                }

            }
            if (swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element
            idx = swap;
        }
    }
}

let heap = new PriorityQueue();
heap.enqueue(41,5);
heap.enqueue(39,7)
heap.enqueue(33,4)
heap.enqueue(18,1)
heap.enqueue(27,3)
heap.enqueue(12,0)
heap.enqueue(55,6)
// heap.dequeue()
console.log(heap)