// Get Method;
// This method should accept an index,
// If the index is leass than 0 or greatar than equal to length then return null;
// loop through the list until you find the index and return the node at specific index.
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
        return console.log(current);
    }
}

let list = new SinglyLinkedList();
list.push("Hey");
list.push("I dont know");
list.push("!")
console.log(list)
console.log(list.get(2))