/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (61.31%)
 * Likes:    267
 * Dislikes: 0
 * Total Accepted:    28.6K
 * Total Submissions: 45.8K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 例如，给出
 * 
 * 前序遍历 preorder = [3, 9, 1, 2, 20, 15, 7]
 * 中序遍历 inorder = [1, 9, 2, 3, 15, 20, 7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠    3
 * ⁠  /   \
 * ⁠ 9     20
 * ⁠/ \    / \
 *1   2  15  7
 * 
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  function recursion(preorder, inorder) {
    if (!preorder.length || !inorder.length) {
      return null
    }

    const rootVal = preorder.shift()
    const p = inorder.indexOf(rootVal)
    const left = []
    const right = []

    for (let i = 0; i < inorder.length; i++) {
      if (i < p) {
        left.push(inorder[i])
      } else if (i > p) {
        right.push(inorder[i])
      }
    }

    const res = new TreeNode(rootVal)

    res.left = recursion(preorder, left)
    res.right = recursion(preorder, right)

    return res
  }

  return recursion(preorder, inorder)
};

var buildTree = function (preorder, inorder) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  let point = 0

  function recursion(inorderLeft, inorderRight) {
    if (point > preorder.length - 1 || inorderLeft > inorderRight) {
      return null
    }

    const rootVal = preorder[point]
    const res = new TreeNode(rootVal)
    let rootValPoint = 0

    for (let i = inorderLeft; i <= inorderRight; i++) {
      if (inorder[i] === rootVal) {
        rootValPoint = i
        break
      }
    }

    if (inorderLeft < inorderRight && inorderLeft < rootValPoint) {
      // console.log('+', point, rootValPoint, inorderLeft, inorderRight)
      point++
      res.left = recursion(inorderLeft, rootValPoint - 1)
    }

    if (inorderLeft < inorderRight && rootValPoint < inorderRight) {
      // console.log('-', point, rootValPoint, inorderLeft, inorderRight)
      point++
      res.right = recursion(rootValPoint + 1, inorderRight)
    }

    return res
  }

  return recursion(0, inorder.length - 1)
};
// @lc code=end

