//get method : Accessing a node in a DLL.
//pseudo code:

// In SLL, if the neeed value is at 4th index we need to traverse the node from startting till the index is found,
// In DLL, we can check if the index is close to 0 length or this.length - 1( tail ) and traverse to required node.
// Ex: If there are 1000 nodes and given in=dx is 997 then we can start traversing from back (tail) side.

// pseudo code: 

// If the index is less than 0 or greater than nor equesl to length return null.
// If the index is less than 0r equal half of the lenght of list 
        // Loop through the list starting from the head and loop through towards middle/
        // Return node once found.
//If the index is greater than half of the length of list,
        // Loop through the list starting from tail and towards middle.
        //return the node once found.

class Node {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.next = null;
        this.prev = null;
    }
    push(val) {
        let newNode = new Node(val);
        //  let current = this.head
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail

            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let tail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev
            tail.prev = null;
            this.tail.next = null;
        }
        this.length--;
        return console.log(tail);
    }
    shift() {
        if (!this.head) return undefined;
        let currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return this;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            // newNode.prev = null;
            this.head = newNode
        }
        this.length++
        return this;
    }

    get(idx) {
        if (idx < 0 || idx >= this.length) return null;
        let middle = Math.floor(this.length / 2);
        let currenthead = this.head;
        let currentTail = this.tail
        let counterHead = 0;
        let counterTail = this.length - 1
        if (idx <= middle) {
            console.log("starting")
            while (idx !== counterHead) {
                currenthead = currenthead.next;
                counterHead++;
            }
            return currenthead
        } else {
            console.log("ending")
            while (idx !== counterTail) {
                currentTail = currentTail.prev
                counterTail--
            }
            return currentTail
        }
    }
    printDLL() {
        let current = this.head;
        while (current) {
            console.log(
                `Val: ${current.val}, Prev: ${current.prev?.val ?? 'null'}, Next: ${current.next?.val ?? 'null'}`
            );
            current = current.next;
        }
    }
}

let DLL = new DoublyLinkedList();
DLL.push(10);
DLL.push(20);
DLL.push(30);
DLL.push(40);
DLL.push(50);
DLL.push(60);
// DLL.push(70);

DLL.printDLL()
console.log("------")
let foundOne = DLL.get(3)
console.log(foundOne)
// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: 30
// Val: 30, Prev: 20, Next: null
// ------
// Val: 20, Prev: null, Next: 30
// Val: 30, Prev: 20, Next: null