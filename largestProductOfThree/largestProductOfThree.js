/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

const largestProductOfThree = function(array) {
  for(let i=0;i<array.length;i++){
    for(let j=i+1;n<array.length;j++){
      let temp;
      if(array[i]<array[j]){
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
      }
    }
  }
  return arr.reduce((acc, val)=>acc*val);
};

const assertProduct = function(actual, expect, description){
  if(actual === expect){
    console.log('Passed:\n', actual);
  }else{
    console.log(`Failed [${description}] Expected ${expect} but got ${actual}`);
  }
}

assertProduct(largestProductOfThree([2,1,3,7]), 42, 'Should calculate the largest product of 0-3 indexes');
