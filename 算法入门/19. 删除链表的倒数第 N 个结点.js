// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

// 进阶：你能尝试使用一趟扫描实现吗？
// 示例 1：
// 输入：head = [1,2,3,4,5], n = 2
// 输出：[1,2,3,5]
// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function (head, n) {
//   let arr = []
//   let h = head
//   while (h.next) {
//     arr.push(h)
//     h = h.next
//   }
//   let len = arr.length
//   let idx = len - n
//   if (len === 1) return []
//   if (idx !== 0)  {
//     arr[idx-1].next = arr[idx].next
//   }

//   return arr[0]

// }
// 快慢指针
var removeNthFromEnd = function (head, n) {
  let dum = new ListNode()
  dum.next = head
  let slow = dum
  let fast = head
  let dif = 0
  while (fast) {
    if (dif > n) {
      slow = slow.next
    }
    fast = fast.next
    dif++
  }
  slow.next = slow.next.next

  return dum.next
}