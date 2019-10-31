/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (67.50%)
 * Likes:    183
 * Dislikes: 0
 * Total Accepted:    35.7K
 * Total Submissions: 52.2K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
var postorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 后序遍历: LRD

  const res = []

  function recursion(node) {
    if (!node) return

    const { val, left, right } = node

    if (left !== null) {
      recursion(left)
    }

    if (right !== null) {
      recursion(right)
    }

    res.push(val)
  }

  recursion(root)

  return res
};

// 迭代法
var postorderTraversal = function (root) {
  // L、D、R分别表示遍历左子树、访问根结点和遍历右子树
  // 后序遍历: LRD

  const res = []
  const stack = []
  let current = root

  while (current || stack.length) {
    if (current.left) {
      stack.push(current)
      current = current.left
    } else if (current.right) {
      stack.push(current)
      current = current.right
    } else {
      res.push(current.val)
      current = stack.pop()
      if (current && current.left) {
        current.left = null
      } else if (current && current.right) {
        current.right = null
      }
    }
  }

  return res
};
// @lc code=end

