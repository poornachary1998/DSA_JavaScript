//shift method: Doubly Linked list
//psuedo code:

// if there is no tail and no head retrun undefined.
// Store the current tail in a variable to retrurn later.
// If the length is 1, set the head and tail property to be null.
// update the head to be next of the old head.
// set the heads prev property to null.
// set the old head next to null.
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
shift(){
    if(!this.head) return undefined;
    let currentHead = this.head;
    if(this.length === 1){
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
unshift(val){
    let newNode  = new Node(val);
    if(this.length === 0 ){
            this.head =  newNode;
            this.tail = this.head;
    } else{
        this.head.prev = newNode;
        newNode.next = this.head;
        // newNode.prev = null;
        this.head = newNode
    }
    this.length++
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
}

let DLL =  new DoublyLinkedList();
DLL.push(10);
DLL.push(20);
DLL.push(30);
DLL.printDLL()
console.log("------")
DLL.unshift(2)
DLL.printDLL();

// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: 30
// Val: 30, Prev: 20, Next: null
// ------
// Val: 20, Prev: null, Next: 30
// Val: 30, Prev: 20, Next: null