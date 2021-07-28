// 21. 合并两个有序链表
// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]

// https://leetcode-cn.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null
  // 前缀节点
  let newList = new ListNode()
  let head = newList
  let fn = (n1, n2) => {
    if (!n1 && !n2) return null
    if (n1 && !n2) {
      head.next = n1
      return
    }
    if (!n1 && n2) {
      head.next = n2
      return
    }
    if (n1.val <= n2.val) {
      head.next = n1
      head = n1
      fn(n1.next, n2)
    } else {
      head.next = n2
      head = n2
      fn(n2.next, n1)
    }
  }
  fn(l1, l2)
  // 返回前缀节点的next即可
  return newList.next
}
