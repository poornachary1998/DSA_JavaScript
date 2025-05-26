//Push method: Doubly Linked list
//psuedo code:

// create a new node with value passed to the function
// If the head property is null set the head and tail property to be newly created node.
// If not, set the next property on tail to be that node.
// set the tail property to newly created node.
// Increment the length
// return DLL.

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

}

let DLL =  new DoublyLinkedList();
DLL.push(10);
DLL.push(20);
DLL.printDLL()
DLL.push(30);
DLL.printDLL()

// 03_Doubly_Linked_list % node 02_push_method.js
// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: null

// Val: 10, Prev: null, Next: 20
// Val: 20, Prev: 10, Next: 30
// Val: 30, Prev: 20, Next: null