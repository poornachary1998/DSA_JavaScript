// Shift method: 
// If theere are no nodes, return undefined.
// store the current head property to variable temp; 
// set the head property to current head next property
// decrement length by 1;
//  return value of node removed.

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
}

let list = new SinglyLinkedList();
list.push("Hey");
list.push("I dont know");
list.push("!")
console.log(list)
console.log("----------1")
list.shift()
console.log(list)
console.log("----------2")
list.shift()
console.log(list)
console.log("----------3")
