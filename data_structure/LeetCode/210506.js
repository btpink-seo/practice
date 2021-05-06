'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 class TreeNode {
  constructor(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
  }
}

const createTree = (head) => {
  if (head.length < 2) {
    return head[0] === undefined ? null : new TreeNode(head[0]);
  }

  const mid = Math.floor(head.length / 2);
  const left = head.slice(0, mid);
  const right = head.slice(mid + 1);

  return new TreeNode(head[mid], createTree(left), createTree(right));
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return head;

  const arr = [];
  let next = head;
  do {
    arr.push(next.val);;
    next = next.next;
  } while (next);

  return createTree(arr);
};