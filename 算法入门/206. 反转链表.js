// 206. 反转链表
// 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
// 输入：head = [1,2,3,4,5]
// 输出：[5,4,3,2,1]
// https://leetcode-cn.com/problems/reverse-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prehead = new ListNode()
  let fn = (curhead) => {
    if (!curhead) return
    let next = curhead.next
    curhead.next = prehead.next
    prehead.next = curhead
    fn(next)
  }
  fn(head)
  return prehead.next
};