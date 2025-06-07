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
    // insert(val){
    // let newNode = new Node(val);
    
    // if(!this.root){
    //     this.root = newNode;
    //     return this;
    // } else {
    //    let current = this.root;
    //    while(true){
    //         if(val === current.value) return undefined;
    //             if(val < current.value){
    //                 if(current.left === null){
    //                     current.left = newNode;
    //                     return this;
    //                      } else { 
    //                         current = current.left
    //                             }} else if(val >  current.value){
    //                                     if(current.right === null){
    //                                         current.right = newNode;
    //                                         return this;
    //                                     } else {
    //                                         current = current.right
    //                                     }
    //                             }
    //             }
    // }
    // }
   insert(val){
    let newNode = new Node(val);
    if(this.root === null){
        this.root = newNode;
        return this;
    } else {
        let current = this.root;
        while(true){
                    if( val === current) return undefined;

            if(val < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this
                } else {
                    current = current.left;
                }

            } else if( val > current.value){
                if(current.right === null){
                    current.right = newNode;
                    return this;
                }else {
                    current = current.right;
                }
            }
        }
    }

   }

//    find(val){
//     if(!this.root) return undefined;
//     if(val === this.root){
//         return val;
//     } else {
//         let foundNode = false
//         var currentNode = this.root;
//         while(true && !foundNode)
//         if(val < currentNode.value ){
//             if(currentNode.left === val){
//                 foundNode = true;
//                 return currentNode.left
//             } else {
//                 currentNode =currentNode.left
//             }
//         } else if(val> currentNode.value){
//             if(currentNode.right === val){
//                 foundNode= true;
//                 return currentNode.right;
//             } else {
//                 currentNode = currentNode.right
//             }
//         }
//     }
//    }
find(val) {
  if (!this.root) return undefined;

  let currentNode = this.root;

  while (currentNode) {
    if (val === currentNode.value) {
      return console.log(currentNode);
    } else if (val < currentNode.value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }
  return undefined; // Not found
}

//Pseudo code:
// Create a queue (FIFO) this can be a Array. and a variable to store the values of nodes visited.
// Place the root node to the queue.
// Loop as long as there are items in queue.
//     Dequeue node from queue and push the value of node to variable that stores the nodes.
//     If there is a left property on node dequeue and ADD it to queue.

//     If there is a right property on node dequeued add it to the queue.

// Return the variable that stores the values.

BreadthFirstSearch(){
var node = this.root;
var queue = [];
var visited = [];

queue.push(node)
while(queue.length){
node = queue.shift();
visited.push(node.value)
if(node.left) queue.push(node.left);
if(node.right) queue.push(node.right);
}
return console.log(visited);
}

//Psuedo code:
// Create a variable to store the values of nodes visited.
// Store the root of BST in a variable called current.
// Write helper function which accepts a node.
//     PUSH the value of the node to the variable that stores the values.
//     if the node has a left propperty, call the helper function with the left property on node.
//     if the node has a right property, call the helper funciton with the right property on node.

// Invote the helper funtcion with current value.

// return data.
DFSPreorer(){
let visited = [];
let current = this.root;

function traverse(node){
visited.push(node.value);
if(node.left) traverse(node.left);
if(node.right) traverse(node.right)
}
traverse(current);
return console.log(visited);
}
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// tree.BreadthFirstSearch()
tree.DFSPreorer()

// let BST = new BinarySearchTree();
// BST.root = new Node(10);
// BST.insert(5);
// BST.insert(20)
// BST.insert(12)
// BST.insert(22)
// BST.insert(1)
// BST.insert(7)
// BST.insert(11)
// BST.insert(17)
// BST.find(11)
// console.dir(BST.root, { depth: null });
// BST.printLevelOrder()
    //         10
    //     5          20
    // 1       7   11      21
