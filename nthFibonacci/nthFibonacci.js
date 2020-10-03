/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 * O: The sum of numbers in N(how many numbers the program needs to go thru) 
 * I: A number
 * C: Have to be a positive number
 * E: if is input 0 or 1 the return should be the input
 * 
 */

/* iterative solution
const nthFibonacci = function (n) {
  let seq = [0,1];
  for(let i =2;i<n;i++){
    seq.push(seq[seq.length-1]+seq[seq.length-2]);
  }
  return seq[seq.length-1];
};

*/

const nthFibonacci = function(n){
  let seq = [0,1];
  const recurse = function(array){
    if(seq.length-1===n){
      return 
    }
    seq.push(seq[seq.length-1]+seq[seq.length-2]);
    recurse(seq);
  }
  recurse(seq);
  return seq[seq.length-1];
};


const assertFibon = function(actual, expect, des){
  if(actual===expect){
    console.log('Passed:', actual);
  }else{
    console.log(`Failed [${des}]: Expected ${expect} but got ${actual}`);
  }
};


assertFibon(nthFibonacci(4), 3, 'Should grab Fibonacci number of n');
assertFibon(nthFibonacci(5), 5, 'Should grab Fibonacci number of n')

