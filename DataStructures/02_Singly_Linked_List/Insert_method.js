// Insert Method
// If the index is less than zero or greater than the length return false.
//If the index is the same as length, push a new node to end of list.
// If the index is at 0, unshift a new node to the start of list/
//Otherwise, use the get method to access the node at index - 1( because pre node).
// create a new node with value passed.
// set the next property on that node to be the new node.
// set the next property on new Node to be the previous next.
// Increment the length 
// return true.
// Note: Before using predefined methods like shift/get etc essure they are returning boolean not value of 'this' for this insert funciton..

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

    shift(){
        if(!this.head) return undefined;
        let current = this.head;
    this.head = this.head.next;
    this.length--;

    if(this.length === 0){
        this.head = null;
        this.tail = null
    }
    console.log("removed",current)
return current

    }

    unshift(val){
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this;
    }

     get(index){
        if(index< 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head
        while(counter !== index){
            current = current.next;
            counter++
        }
        return current;
    }

    set(index, val){
        let foundNode  = this.get(index);
console.log(foundNode)
        if(foundNode){
            foundNode.val = val;
            return true
        }
        return false;
    }

    insert(idx, val){
        if(idx<0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(val);
        if(idx === 0) return !!this.unshift(val)
            let newNode =  new Node(val);
        let prevNode = this.get(idx - 1);
        let tempNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = tempNode;
        this.length++
        return true
     }
}

let list = new SinglyLinkedList();
list.push("Hey");
list.push("I dont know");
list.push("!")
console.log(list)
list.insert(1, "Inserted")
console.log(list)
