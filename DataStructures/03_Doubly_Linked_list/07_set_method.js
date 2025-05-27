// set(idx, val)

//set is not addig a new value to node.
//set is replacig a value if node to DLL.

//pseudo code:
//create a variable which is result of get method, at the index passed to function.
// if the get method return a valid node, set the value of that node to be the value passed to the fucniton.
//return true.
// otherwise return false.

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

    set(idx, val) {
        let foundNode = this.get(idx);

        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        else return false
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
DLL.set(2, 25)
DLL.printDLL()

