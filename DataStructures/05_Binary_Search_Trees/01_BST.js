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
}

let BST = new BinarySearchTree();
BST.root = new Node(10);
BST.root.left = new Node(5);
BST.root.right = new Node(15);
BST.root.left.left = new Node(2);
BST.root.left.right = new  Node(7);
console.log(BST)
