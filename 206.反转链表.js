/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (64.32%)
 * Likes:    565
 * Dislikes: 0
 * Total Accepted:    95.3K
 * Total Submissions: 148.1K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 迭代
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null
  let point = head // 指针

  while (point) {
    const next = point.next // 暂存下一个节点
    point.next = prev // 反转当前节点和下一个节点
    prev = point // 更新 prev
    point = next // 移动指针
  }

  return prev
};

/**
 * 递归
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) { // 递归终止条件
    return head
  }

  const point = reverseList(head.next) // 保留最后一个节点的指针

  head.next.next = head // 反转当前节点和下一个节点
  head.next = null // head 节点的 next 指向 null

  return point
};
