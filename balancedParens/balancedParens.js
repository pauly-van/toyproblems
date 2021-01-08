/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

var balancedParens = function(input) {
  isBalanced = false;
  backIndex = input.length;
  openingBs = ['[', '{', '('];
  closingBs = [']', '}', ')'];

  if(input.length<=1){return false;}

  var reverseScan = function(startingIndex, endingIndex, closingBracket){
    for(let i = endingIndex;i>startingIndex;i--){
      if(input[i]===closingBracket){
        return i;
      }
      for(let j = 0; j<openingBs.length;j++){
        if(openingBs[j]===input[i] || closingBs[j]===input[i]){
          return false;
        }
      }
    }
  };

  for(let i = 0;i<input.length;i++){
    // need to break after getting to last index
    for(let n = 0;n<openingBs.length;n++){
      if(input[i]===openingBs[n]){
        let closedIndex = reverseScan(i, backIndex, closingBs[n]);
        if(typeof(closedIndex)==='number'){
          isBalanced = true;
          backIndex=closedIndex;
          continue;
        }else{
          return false;
        }
      }else if(input[i]===closingBs[n]){
        return false;
      }
    }
  }
};
   
   console.log(balancedParens('('));  // false
   console.log(balancedParens('()')); // true
   console.log(balancedParens(')('));  // false
   console.log(balancedParens('(())'));  // t