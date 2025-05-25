// Reverse Method :
// swap head and tail.
// create variable called prev
// create a variable called node initialise to head property/
// loop through the list.
// set next to be the next property on whatever node is.
// set the next property on node to be whatever prev is.
// set the prev to be the value of node variable.
// set the node variable to be the valie of the next variable.

//Initial:
//         [reversed]    [to do]
// Step 0:  null           1 → 2 → 3 → 4 → null

// After Step 1 (process 1):
// Step 1:  1 → null       2 → 3 → 4 → null

// After Step 2 (process 2):
// Step 2:  2 → 1 → null   3 → 4 → null

// After Step 3 (process 3):
// Step 3:  3 → 2 → 1 → null   4 → null

// After Step 4 (process 4):
// Step 4:  4 → 3 → 2 → 1 → null


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
    // 1) Swap head and tail
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    // 2) Initialize pointers
    let prev = null;
    let next = null;

      for (let i = 0; i < this.length; i++) {
      // 3a. Save next
      next = node.next;
      // 3b. Reverse pointer
      node.next = prev;
      // 3c. Step prev and node forward
      prev = node;
      node = next;
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
