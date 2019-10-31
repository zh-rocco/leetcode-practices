/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (67.88%)
 * Likes:    310
 * Dislikes: 0
 * Total Accepted:    71.4K
 * Total Submissions: 104K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 输出: [1,3,2]
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归法
var inorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 中序遍历: LDR

  const res = []

  function recursion(node) {
    if (!node) return

    const { val, left, right } = node

    if (left !== null) {
      recursion(left)
    }

    res.push(val)

    if (right !== null) {
      recursion(right)
    }
  }

  recursion(root)

  return res
};

// 迭代法
var inorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 中序遍历: LDR

  const res = []
  const stack = []
  let current = root

  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    res.push(current.val)
    current = current.right
  }

  return res
};
// @lc code=end

