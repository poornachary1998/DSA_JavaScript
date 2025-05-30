class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val){
        let newNode = new Node(val);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            // newNode.next = this.first
            // this.first = newNode;
            this.last.next = newNode;
            this.last = newNode
         }

        this.size++
        return this
    }

    dequeue(){
        if(!this.first) return undefined;
        let currentfirst = this.first;
        if(this.size === 1){
             this.first = null;
    this.last = null; 
        } else {
            
            this.first = currentfirst.next
            currentfirst.next = null
            
        }
        this.size--
        return console.log("",currentfirst);
    }

    print(){
        let current = this.first;
        while(current){
             console.log(
                `Val: ${current.val}, Next: ${current.next?.val ?? 'null'}`
            );
            current = current.next;
        }
    }
}

let QueueLL = new Queue;
QueueLL.enqueue(10);
// QueueLL.dequeue()
QueueLL.enqueue(20);
QueueLL.enqueue(30);
QueueLL.dequeue()
QueueLL.print()