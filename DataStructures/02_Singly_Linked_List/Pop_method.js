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
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newtail = current;
        while(current.next){
            newtail = current;
            current  = current.next;
        }
        this.tail = newtail;
        this.tail.next = null;
        this.length--;
        if(this.length ===0){
            this.head = null;
            this.tail = null;
        }
        return current, this;
    }
}

let list = new SinglyLinkedList();
list.push("Hey");
list.push("I dont know");
list.push("!")
console.log(list)
list.pop()
console.log(list)
list.pop()
console.log(list)
list.pop()
console.log(list)