/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  let repeatingChar = {char: '', amt: 0};
  let streak = 1;
  if(string===''){
    return null;
  }
  for(let i=0;i<string.length-1;i++){
    if(repeatingChar.char===''){
      repeatingChar = {char: string[i], amt: 1};
      continue;
    }
    if(string[i]===repeatingChar.char){
      repeatingChar.amt++;
      streak++;
    }else if(string[i]!==repeatingChar.char && repeatingChar.amt<=streak && streak!==1){
      continue;
    }else{
      repeatingChar = {char: '', amt: 0}  
    }
  }
  if(streak===1){
    return [0,0];
  }
  return [string.indexOf(repeatingChar.char), string.indexOf(repeatingChar.char)+streak-1];
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
