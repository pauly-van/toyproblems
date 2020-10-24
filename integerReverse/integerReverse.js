/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  let rev = 0;
  while(number>0){
    rev*=10;
    rev+=number%10;
    number=Math.floor(number/10);
  }
  return rev;
}

const assertEqual = function(actual, expect, description){
  if(actual === expect){
    console.log('Passed:\n', actual);
  }else{
    console.log(`Failed [${description}] expected ${expect} but got ${actual}`);
  }
};

assertEqual(reverseInteger(123), 321, 'Should reverse the number without converting');
assertEqual(reverseInteger(456), 654, 'Should reverse the number without converting');
assertEqual(reverseInteger(789), 987, 'Should reverse the number without converting');
assertEqual(reverseInteger(527), 725, 'Should reverse the number without converting')