const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootBinaryTree = null;
  }

  root() {
    return this.rootBinaryTree;
  }
  
  add(data) {
    let newNode = new Node(data);
    this.rootBinaryTree = addNode(this.rootBinaryTree, data);
      function addNode(node, data) {
        if (node === null) return newNode;
        else if (data > node.data) node.right = addNode(node.right, data);
        else if (data < node.data) node.left = addNode(node.left, data);
        return node;
      }
  }

  has(data) {
    return hasNode(this.rootBinaryTree, data);
      function hasNode(node, data) {
        if (node === null) return false;
        else if (node.data === data) return true; 
        else if (data > node.data) return hasNode(node.right, data);
        else if (data < node.data) return hasNode(node.left, data);
      }
  }

  find(data) {
    return findNode(this.rootBinaryTree, data);
      function findNode(node, data) {
        if (node === null) return null;
        else if (node.data === data) return node;
        else if (data > node.data) return findNode(node.right, data);
        else if (data < node.data) return findNode(node.left, data);
      }
  }

  remove(data) {
    this.rootBinaryTree = remNode(this.rootBinaryTree, data);
      function remNode(node, data) {
        if (data > node.data) {
          node.right = remNode(node.right, data);
          return node;
        } else if (data < node.data) {
          node.left = remNode(node.left, data);
          return node;
        } else {
          if (node.right === null) return node = node.left;
          else if (node.left  === null) return node = node.right;
          let maxLeft = node.left;
          while (maxLeft.right) {
            maxLeft = maxLeft.right;
          }
          node.left = remNode(node.left, maxLeft.data);
          node.data = maxLeft.data;
          return node;
        }
      }
  }

  min() {
    let min = this.rootBinaryTree;
    while (min.left) min = min.left;
    return min.data;
  }

  max() {
    let max = this.rootBinaryTree;
    while (max.right) max = max.right;
    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};