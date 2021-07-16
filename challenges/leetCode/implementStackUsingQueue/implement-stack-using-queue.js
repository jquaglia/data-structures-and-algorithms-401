'use strict';

// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

//     void push(int x) Pushes element x to the top of the stack.
//     int pop() Removes the element on the top of the stack and returns it.
//     int top() Returns the element on the top of the stack.
//     boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

//     You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
//     Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False


/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.queueOne = new Array();
  this.queueTwo = new Array();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  if (this.queueOne.length === 0 && this.queueOne.length === 0) {
    this.queueOne.unshift(x);
  }
  else if (this.queueOne.length > 0) {
    this.queueOne.unshift(x);
  }
  else if (this.queueTwo.length > 0) {
    this.queueTwo.unshift(x);
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.queueTwo.length === 0) {
    while (this.queueOne.length > 1) {
      this.queueTwo.unshift(this.queueOne.pop());
    }
    return this.queueOne.pop();
  }
  else if (this.queueOne.length === 0) {
    while (this.queueTwo.length > 1) {
      this.queueOne.unshift(this.queueTwo.pop());
    }
    return this.queueTwo.pop();
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queueOne.length > this.queueTwo.length ? this.queueOne[0] : this.queueTwo[0];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queueOne.length > 0 || this.queueTwo.length > 0 ? false : true;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */


//  let myStack = new MyStack();
//  myStack.push(1);
//  myStack.push(2);
//  console.log(myStack);
//  console.log(myStack.top()); // return 2
//  console.log(myStack.pop()); // return 2
//  console.log(myStack.empty()); // return False