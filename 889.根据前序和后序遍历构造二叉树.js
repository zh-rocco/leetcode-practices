/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (57.94%)
 * Likes:    40
 * Dislikes: 0
 * Total Accepted:    2.1K
 * Total Submissions: 3.6K
 * Testcase Example:  '[1,2,4,5,3,6,7]\n[4,5,2,6,7,3,1]'
 *
 * 返回与给定的前序和后序遍历匹配的任何二叉树。
 * 
 * pre 和 post 遍历中的值是不同的正整数。
 * 
 * 
 * 
 * 示例：
 * 
 * 输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
 * 输出：[1,2,3,4,5,6,7]
 * 
 * 返回如下的二叉树：
 * 
 * ⁠    1
 * ⁠  /   \
 * ⁠ 2     3
 * ⁠/ \    / \
 *4   5  6   7
 * 
 * 
 * 提示：
 * 
 * 
 * 1 <= pre.length == post.length <= 30
 * pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列
 * 每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。
 * 
 * 思路：
 * 
 * 前序遍历为：(根结点) (前序遍历左分支) (前序遍历右分支)
 * 而后序遍历为：(后序遍历左分支) (后序遍历右分支) (根结点)
 * 例如，如果最终的二叉树可以被序列化的表述为 [1, 2, 3, 4, 5, 6, 7]，那么其前序遍历为 [1] + [2, 4, 5] + [3, 6, 7]，而后序遍历为 [4, 5, 2] + [6, 7, 3] + [1].
 * 如果我们知道左分支有多少个结点，我们就可以对这些数组进行分组，并用递归生成树的每个分支。
 * 
 * 算法：
 * 我们令左分支有 L 个节点。我们知道左分支的头节点为 pre[1]，但它也出现在左分支的后序表示的最后。所以 pre[1] = post[L-1]（因为结点的值具有唯一性），因此 L = post.indexOf(pre[1]) + 1。
 * 现在在我们的递归步骤中，左分支由 pre[1 : L+1] 和 post[0 : L] 重新分支，而右分支将由 pre[L+1 : N] 和 post[L : N-1] 重新分支。
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
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  const len = pre.length

  if (len === 0) {
    return null
  }

  const root = new TreeNode(pre[0])

  if (len === 1) {
    return root
  }

  let n = 0 // 左分支的节点个数

  for (let i = 0; i < len; i++) {
    if (pre[1] === post[i]) {
      n = i + 1
      break
    }
  }

  root.left = constructFromPrePost(pre.slice(1, n + 1), post.slice(0, n))
  root.right = constructFromPrePost(pre.slice(1 + n, len), post.slice(n, len - 1))

  return root
};

var constructFromPrePost = function (pre, post) {
  function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
  }

  function make(p0, p1, n) {
    if (n === 0) {
      return null
    }

    const root = new TreeNode(pre[p0])

    if (n === 1) {
      return root
    }

    let l = 1 // 左分支的节点个数

    for (; l < n; ++l) {
      if (pre[p0 + 1] === post[p1 + l - 1]) {
        break
      }
    }

    root.left = make(p0 + 1, p1, l)
    root.right = make(p0 + l + 1, p1 + l, n - 1 - l)

    return root
  }

  return make(0, 0, pre.length)
};
// @lc code=end

