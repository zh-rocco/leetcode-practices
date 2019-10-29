/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.90%)
 * Likes:    1471
 * Dislikes: 0
 * Total Accepted:    111.1K
 * Total Submissions: 456.9K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 解题思路:
 * https://leetcode-cn.com/problems/3sum/solution/three-sum-ti-jie-by-wonderful611/
 * https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const len = nums.length
  const res = []

  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的

  if (nums[0] * nums[len - 1] > 0) { // 如果整个数组同符号，无解
    return res
  }

  for (let i = 0; i <= len - 3; i++) {
    const curr = nums[i] // 首发（元素）

    if (curr > 0) { // 如果最左值为正数，无解
      break
    }

    if (curr === nums[i - 1]) { // 去重
      continue
    }

    let l = i + 1 // 双指针
    let r = len - 1 // 双指针

    while (l < r) {
      const result = curr + nums[l] + nums[r]

      if (result === 0) { // 可以组队
        res.push([curr, nums[l], nums[r]])
      }

      if (result <= 0) { // 实力太弱，把菜鸟那边右移一位
        while (nums[l] === nums[++l]) { } // 去重
      } else if (result > 0) { // 实力太强，把大神那边左移一位
        while (nums[r] === nums[--r]) { } // 去重
      } else {
        break
      }
    }
  }

  return res
};
// @lc code=end
