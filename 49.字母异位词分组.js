/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (58.47%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    33.9K
 * Total Submissions: 57.5K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const hash = new Map()

  for (const str of strs) {
    const arr = new Array(26).fill(0)

    for (const s of str) {
      arr[s.charCodeAt(0) - 97]++
    }

    const hashKey = arr.join('#')

    if (hash.has(hashKey)) {
      const tmp = hash.get(hashKey)
      tmp.push(str)
      hash.set(hashKey, tmp)
    } else {
      hash.set(hashKey, [str])
    }
  }

  return [ ...hash.values() ]
};
// @lc code=end

