const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = [];
  }

  getUnderlyingList() {
    class Node {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }

    class LinkedList {
      add(value) {
        if (this.value === undefined) {
          this.value = new Node(value);
        } else {
          let current = this.value;

          while (current.next) {
            current = current.next;
          }
          current.next = new Node(value);
        }
      }
    }

    const list = new LinkedList();
    for (let i = 0; i < this.queue.length; i++) {
      list.add(this.queue[i])
    }
    return list.value;
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.queue);
queue.getUnderlyingList();


module.exports = {
  Queue
};
