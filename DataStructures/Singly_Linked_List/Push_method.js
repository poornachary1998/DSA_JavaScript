//starter code for creating node.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
// let first = new Node("Hello!")
// first.next = new Node ("How are you?");
// first.next.next = new Node ("respond fastly")

// console.log(first)

//  {
//   val: 'Hello!',
//   next: Node {
//     val: 'How are you?',
//     next: Node { val: 'respond fastly', next: null }
//   }
// }

// Adding .next.mext.next seems not a cleaner code so we have a push method.
// we need to write push method for below pseudo code

// This function should accpet a value.
// Create a new node using a value passed to function.
// If there is no head property on list, set head and tail property to the newly created node.
// Otherwise set the next property on tail to be new node and set the tail property on list to be the newly created node.
// Increment the length by one.


class SinglyLinkedList{
    constructor(){
        //  initial values where there are no nodes.
this.head = null;
this.tail = null;
this.length = 0;
    }
    push(val){
let first = new Node(val);
if(!this.head){
    this.head = first;
    this.tail = this.head;
}else{
    this.tail.next = first;
    this.tail = first;
}
this.length++;
   return this;
   }
   
}

let vanish = new SinglyLinkedList();
vanish.push("Hi!")
vanish.push("How are you??")

console.log(vanish)