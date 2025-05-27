//Insert Method:
//Adding a node in DLL by certail position.

//if the index is less than 0 or greeater than or equal to length return false.
// If the index is  0, unshift
// if the index is at same length of list then use push.
// use the get method to access the index - 1 as found Node
// store a new vriable for index value as nextFoundNode.
// create a new node
// set the next property of foundNode to the new Node
// point the prev property of new Node to found Node.
//  point the nextDFoundNode prev property to new node.
// point the next property of new node as nextFoundnode.
// increment the length.
// return true

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

    insert(idx, val){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === 0) return !!this.unshift(val)
            if(idx === this.length-1) return !!this.push(val);
        let prevNode = this.get(idx-1);
        let nextNode = prevNode.next;
        let newNode = new Node(val);
       
        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++
        return true
    }

    remove(idx){
        if(idx < 0 || idx >= this.length) return false;
        if(idx === this.length - 1) return !!this.pop();
        if(idx === 0) return !!this.shift();

        let foundNode = this.get(idx);
        let prevFoundNode = foundNode.prev;
        let afterFoundNode = foundNode.next;


        prevFoundNode.next = afterFoundNode;
        afterFoundNode.prev = prevFoundNode;
        foundNode.next = null;
        foundNode.prev = null;

        this.length--;
        return false
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
// DLL.set(2, 25)
// DLL.printDLL()
// console.log("---------")
DLL.insert(2, 180)
DLL.printDLL()
DLL.remove(2)
DLL.printDLL()



