/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */


var firstNonRepeatedCharacter = function(string) {
  let repeating = false;
  let charCnt = 0;
  for(let i=0;i<string.length;i++){
  if(string[i]===string[i+1]){
    repeating = true;
    charCnt+=2;
  }else{
    if(i===0){
      return string[i+1];
    }
    if(repeating === false && charCnt === 0){
      return string[i];
    }
    repeating = false;
    charCnt = 0
    }
  }
};

console.log(firstNonRepeatedCharacter('ABA')); // => 'B'
console.log(firstNonRepeatedCharacter('AACBDB')); // => 'C'
console.log(firstNonRepeatedCharacter('BBBBBBDDDACCC'));
console.log(firstNonRepeatedCharacter('BBDACCC'));
console.log(firstNonRepeatedCharacter('CCCAABDD'));