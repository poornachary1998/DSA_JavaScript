class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(val){
    let newNode = new Node(val);
    
    if(!this.root){
        this.root = newNode;
        return this;
    } else {
       let current = this.root;
       while(true){
            if(val === current.value) return undefined;
                if(val < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                         } else { 
                            current = current.left
                                }} else if(val >  current.value){
                                        if(current.right === null){
                                            current.right = newNode;
                                            return this;
                                        } else {
                                            current = current.right
                                        }
                                }
                }
    }
    }
   

}

let BST = new BinarySearchTree();
BST.root = new Node(10);
BST.insert(5);
BST.insert(20)
BST.insert(12)
BST.insert(22)
BST.insert(1)
BST.insert(7)
BST.insert(11)
BST.insert(17)
console.dir(BST.root, { depth: null });
// BST.printLevelOrder()
    //         10
    //     5          20
    // 1       7   11      21
