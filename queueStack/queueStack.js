/**
 * Write a stack using your preferred instantiation pattern. 
 * Avoid using native array methods i.e., push, pop, and length.
 * Once you're done, implement a queue using two stacks.
 */

/**
  * Stack Class
  */
var Stack = function() {
  let instance = {};
  let counter = 0;
  let storage ={};

  // add an item to the top of the stack
  this.push = function(val) {
    storage[counter]=val;
    counter++;
  };

  // remove an item from the top of the stack
  this.pop = function() {
    if(counter===0){ return undefined; }
    let keys = Object.keys(storage);
    let lastElem = keys[keys.length-1];
    let poppedElem = storage[lastElem];
    delete storage[lastElem];
    counter--;
    return poppedElem;
  };

  // return the number of items in the stack
  this.size = function() {
    let keys = Object.keys(storage);
    return keys.length;
  };

  return instance;
};

/**
  * Queue Class
  */
var Queue = function() {
  // Use two `stack` instances to implement your `queue` Class
  var inbox = new Stack();
  var outbox = new Stack();

  // called to add an item to the `queue`
  this.enqueue = function() {
    // TODO: implement `enqueue`
  };

  // called to remove an item from the `queue`
  this.dequeue = function() {
    // TODO: implement `dequeue`
  };

  // should return the number of items in the queue
  this.size = function() {
    // TODO: implement `size`
  };
};
