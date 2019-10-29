/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (35.97%)
 * Likes:    302
 * Dislikes: 0
 * Total Accepted:    37.4K
 * Total Submissions: 103.8K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 * 
 * 注意：
 * 
 * 答案中不可以包含重复的四元组。
 * 
 * 示例：
 * 
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 * 
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length
  const res = []

  nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的

  if (nums[0] * nums[len - 1] > 0) { // 如果整个数组同符号，无解
    return res
  }

  for (let i = 0; i <= len - 4; i++) {
    const first = nums[i]

    if (first === nums[i - 1]) { // 去重
      continue
    }

    for (let j = i + 1; j <= len - 3; j++) {
      const second = nums[j] // 首发（元素）

      if (j - 1 > i && second === nums[j - 1]) { // 去重
        continue
      }

      let l = j + 1 // 双指针
      let r = len - 1 // 双指针

      while (l < r) {
        const result = first + second + nums[l] + nums[r]

        if (result === target) { // 可以组队
          res.push([first, second, nums[l], nums[r]])
        }

        if (result <= target) { // 实力太弱，把菜鸟那边右移一位
          while (nums[l] === nums[++l]) { } // 去重
        } else if (result > target) { // 实力太强，把大神那边左移一位
          while (nums[r] === nums[--r]) { } // 去重
        } else {
          break
        }
      }
    }

  }

  return res
};
// @lc code=end
