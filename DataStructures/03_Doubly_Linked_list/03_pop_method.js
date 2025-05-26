//pop method: Doubly Linked list
//psuedo code:

// if there is no tail and no head retrun undefined.
// Store the current tail in a variable to retrurn later.
// If the length is 1, set the head and tail property to be null.
// Update the tail to be the previous Node.
// set the newTail next to null.
// Decrement the length;
// return value removed / this


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
    printDLL() {
  let current = this.head;
  while (current) {
    console.log(
      `Val: ${current.val}, Prev: ${current.prev?.val ?? 'null'}, Next: ${current.next?.val ?? 'null'}`
    );
    current = current.next;
  }
}
pop(){
    if(!this.head) return undefined;
    let tail = this.tail;
    if(this.length === 1){
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

}

let DLL =  new DoublyLinkedList();
DLL.push(10);
DLL.push(20);
DLL.push(30);
DLL.printDLL()

DLL.pop()
DLL.printDLL()
// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: 30
// Val: 30, Prev: 20, Next: null
// // Node { val: 30, prev: null, next: null } return console
// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: null