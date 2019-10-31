/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (61.67%)
 * Likes:    164
 * Dislikes: 0
 * Total Accepted:    47.2K
 * Total Submissions: 75.7K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 * 
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
var preorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 前序遍历: DLR

  const res = []

  function recursion(node) {
    if (!node) return

    const { val, left, right } = node

    res.push(val)

    if (left !== null) {
      recursion(left)
    }

    if (right !== null) {
      recursion(right)
    }
  }

  recursion(root)

  return res
};

// 迭代法
var preorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 前序遍历: DLR

  const res = []
  const stack = []
  let current = root

  while (current !== null || stack.length) {
    while (current !== null) {
      res.push(current.val)
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    current = current.right
  }

  return res
};
// @lc code=end

