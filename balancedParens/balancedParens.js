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
 let openBrac = 0; closeBrac = 0;
 let keys = {
   '{': '}',
   '[': ']',
   '(': ')'
 }
 for(let i=0;i<input.length;i++){
  for(let key in keys){
    if(input[i]===keys[key]&&openBrac<closeBrac){
      return false;
    }else if(input[i]===key){
      openBrac++;
    }else if(input[i]===keys[key]){
      closeBrac++;
    }
  } 
 }
 if(openBrac===closeBrac){
  return true;
 }
 return false;
};


