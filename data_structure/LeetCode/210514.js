/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root || (!root.left && !root.right)) return root;

  const rightSide = [];
  let currentNode = root;

  while (true) {
    const leftNode = currentNode?.left;
    const rightNode = currentNode?.right;
    let rightValue = leftNode || rightNode;

    // 좌우 모두 값이 없으면 우측에서 값을 가져온다.
    if (!leftNode && !rightNode) {
      if (rightSide.length === 0) break; // 우측에도 값이 없다면 종료한다.
      rightValue = rightSide.pop();
    }

    // 좌우 모두 값이 있으면 우측에 값을 넣는다.
    if (leftNode && rightNode) rightSide.push(currentNode.right);

    currentNode.right = rightValue;
    currentNode.left = null;
    currentNode = currentNode.right;
  }
  return root;
};

console.log(flatten([1,2,5,3,4,null,6]), [1,null,2,null,3,null,4,null,5,null,6]);
console.log(flatten([]), []);
console.log(flatten([0]), [0]);