// POP Method pseudo code:
// IF there are no nodes in list return undefined.
// Loop through the list until you react the last time.
// Set the next property of the last 2nd node as null.
// Decrement the length by 1.
// Return the node that is removed.

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode =  new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail =  this.head;
        } else {
            this.tail.next =  newNode;
            this.tail = newNode
        }
        this.length++;
        return this;
    }
    //pop method
    traverse(){
        
    }
}

let SLL = new SinglyLinkedList();
SLL.push("Hey");
SLL.push("I dont know");
SLL.push("!")

console.log(SLL)