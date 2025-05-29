//Skeleton for Stack - Last In First Out.

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0
    }
    push(val){
        let newNode = new Node(val);

        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        } else{
        let temp = this.first;
         this.first = newNode;
        newNode.next = temp;
      

        }
        this.size++
        return this
    }
    print(){
        let current = this.first;
        while (current) {
            console.log(
                `Val: ${current.val}, Next: ${current.next?.val ?? 'null'}`
            );
            current = current.next;
        }
    }
}

let stackSLL = new Stack;
stackSLL.push(10)
stackSLL.push(20)
stackSLL.push(30)
stackSLL.push(40)
stackSLL.print()