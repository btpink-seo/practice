/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minCameraCover = function(root) {
  // if (root.left) return 1;

  let count = 0;
  let nodeSize = 0;
  let prevNode = null;
  let currentNode = root;
  const rightSide = [];

  while (true) {
    if (currentNode.val > -1) nodeSize++;

    const leftNode = currentNode?.left || null;
    const rightNode = currentNode?.right || null;
    let newNode = leftNode || rightNode;


    const leftNodeVal = leftNode?.val !== undefined ? leftNode.val : -1;
    const rightNodeVal = rightNode?.val !== undefined ? rightNode.val : -1;
    const prevNodeVal = prevNode?.val !== undefined ? prevNode.val : -1;


    console.log(prevNodeVal, leftNodeVal, rightNodeVal);

    if (prevNode && currentNode.val === 0 && prevNodeVal < 1 && leftNodeVal < 1 && rightNodeVal < 1) {
      currentNode.val = 2;
      if (prevNode) prevNode.val = 1;
      if (leftNode) leftNode.val = 1;
      if (rightNode) rightNode.val = 1;

      count++;
      console.log('count!', count)
    }

    if (!leftNode && !rightNode) {

      if (currentNode.val === 0) {
        currentNode.val = 2;
        count++;

        console.log('count! in pop', count)
      }
      if (!rightSide.length) {
        break;
      }
      newNode = rightSide.pop();
    }

    // console.log(!!leftNode, !!rightNode, !!rightNode && !!rightNode)
    if (leftNode && rightNode) {
      // console.log('push')
      rightSide.push(rightNode);
    }


    prevNode = currentNode;
    currentNode = newNode;
  }
  // console.log(count, nodeSize, root)
  if (nodeSize < 4) return 1;
  return count;
};