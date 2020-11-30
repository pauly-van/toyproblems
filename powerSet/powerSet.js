/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */
const outcomeOfABC = [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ];

var powerSet = function(str, powerSt = new Set()) {
    let char = str.split('').sort();
    if(str.length===0){
      powerSt.add(str);
      return Array.from(powerSt);
    }else if (powerSt.size === 0){
        char.forEach(elem => powerSt.add(elem));
        return powerSet(char.join('').slice(1), powerSt);
    }else if(powerSt.size > 0){
        powerSt.forEach(elem => {
            char.forEach(el => {
                if(!elem.includes(el)){
                  let temp = elem + el;
                  temp = temp.split('').sort().join('');
                  powerSt.add(temp);
                }
            })
        })
    }
  return powerSet(char.join('').slice(1), powerSt);
};

const assertEquals = function(actual, expect, desc){
    if(actual === expect){
        console.log(`Passed`, actual);
    }else{
        console.log(`Failed [${desc}]: Expected ${expect} but got ${actual}`);
    }
}

assertEquals(powerSet('abc'), outcomeOfABC, 'Should provide powerSet of string');