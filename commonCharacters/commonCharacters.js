/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
const commonCharacters = function(string1, string2) {
  let commonChars = new Set();

  for(let i =0; i<string1.length; i++){
    for(let n = 0; n<string2.length;n++){
      if(string1[i]===string2[n]){
        commonChars.add(string1[i]);
      }
    }
  }
  let together = [];
  for(item of commonChars){
    together.push(item);
  }
  return together.join('');
};


const assertEquals = function(actual, expect, testDescription){
  if(actual === expect){
    console.log('Passed\n', actual);
  }else{
    console.log(`Failed [${testDescription}] Expected ${expect} but got ${actual}.`);
  }
};

assertEquals(commonCharacters('acexivou', 'aegihobu'), 'aeiou', 'Should only return characters both strings have without dupes.');
