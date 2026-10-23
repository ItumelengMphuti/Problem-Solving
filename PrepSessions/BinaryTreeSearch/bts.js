// Binary Search Tree (BST)

// left child: contains smaller values. right child contains bigger values

// heaps - keeping data ordered as is added
// tries - tries are for storing words effeciently for quick lookups
// html - represent a structure of an html document

//               <div>
//             /      \
//          <h1>      <p>

// types of tee traveral: it's specific ways to move/traverse through a tree

// in-order Traversal - Visits a tree in the left subtree, then the root, then to the right subtree. this tree gives the nodes in ascending order
// post-order Traversal - Visits the left subtree, then the right subtree, and then finally the root. this gives the tree a lead to which node can be deleted in a tree
// pre-order Traversal - Visits the root first, followed by the left and the right subtrees. this one is used to create a tree

[23, 16, 45, 3, 22, 99, 40];

//                                     23       -    Root  Node
//                                    /   \     -    branch
//                                 16      45   -    leafs/child nodes
//                                /  \    /   \
//                              3     22 40    99

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show() {
    return this.data;
  }
}

class BTS {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let node = new Node(data);
    if (this.root == null) {
      this.root = node;
    } else {
      let currentNode = this.root;
      let parent;

      while (currentNode != null) {
        parent = currentNode;

        if (data < currentNode.data) {
          currentNode = currentNode.left;

          if (currentNode == null) {
            parent.left = node;
            break;
          }
        } else {
          currentNode = currentNode.right;
          if (currentNode == null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  inOrder(node = this.root) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.show());
      this.inOrder(node.right);
    }
  }

  preOrder(node = this.root) {
    if (node !== null) {
      console.log(node.show());
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node = this.root) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show());
    }
  }
}

// [23, 16, 45, 3, 22, 99, 40]

let newTree = new BTS();
console.log("Inserting node ...");
console.log(newTree);
newTree.insert(23);
newTree.insert(16);
newTree.insert(45);
newTree.insert(3);
newTree.insert(22);
newTree.insert(99);
newTree.insert(40);

console.log("Removing 40");
newTree.remove(40);

console.log("In-Order traversal");
newTree.inOrder();

console.log("Pre-Order traversal");
newTree.preOrder();

console.log("Post-order traversal");
newTree.postOrder();

// In-Order traversal
// [3, 16, 22, 23, 40, 45, 99]

// post-order Traversal - Visits the left subtree, then the right subtree, and then finally the root. this gives the tree a lead to which node can be deleted in a tree
// pre-order Traversal - Visits the root first, followed by the left and the right subtrees. this one is used to create a tree

// Pre-Order traversal
// [23, 16, 3, 22, 45, 40, 99]

// Post-order traversal
// [3, 22, 16, 40, 99, 45, 23]
