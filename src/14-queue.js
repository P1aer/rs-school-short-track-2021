const ListNode = require('../extensions/list-node');

// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.current = this.queue;
  }

  get size() {
    return this.current.length;
  }

  // current пустой элемент который возьмет новый, и продолжит цепь
  enqueue(element) {
    this.current.value = element;
    this.current.next = new ListNode();
    this.current = this.current.next;
  }

  dequeue() {
    // берем текущие значение и двигаем очередь
    const val = this.queue.value;
    this.queue.value = this.queue.next.value;
    this.queue.next = this.queue.next.next;
    return val;
  }
}

module.exports = Queue;
