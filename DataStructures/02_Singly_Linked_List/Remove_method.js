// Remove Method
// If the index is less than zero or greater than the length return undefined.
//If the index is the same as length, use pop;
// If the index is at 0, shift a new node
//Otherwise, use the get method to access the node at index - 1( because pre node).
// set the next property on that node to the next of next node.
// decrement the length 
// return removed node.

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

     remove(idx){
        if(idx < 0 || idx> this.length) return undefined;
        if(idx = 0) return this.shift();
        if(idx = this.length) return this.pop();
        let preNode = this.get(idx - 1);
        let removingNode = preNode.next
        let aftNode = removingNode.next
        preNode.next = aftNode;
        this.length--;
        return removingNode
     }

   reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let previousNode = null;
    let nextNode;

    while (currentNode !== null) {
        nextNode = currentNode.next;      // store next node
        currentNode.next = previousNode;  // reverse the pointer
        previousNode = currentNode;       // move prev forward
        currentNode = nextNode;           // move current forward
    }

    return this;
}
}


let list = new SinglyLinkedList();
list.push("10");
list.push("20");
list.push("30")
list.push("40")

console.log(list,"1")
list.reverse()
console.log(list)
