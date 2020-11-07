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

var powerSet = function(str) {
    let result = [''];

    const addToArray = function(pref, str){
        if(str.length===0){
            return [''];
        }

        for(let i=0;i<str.length;i++){
            result.push(pref, str[i]);
            addToArray(pref+str[i], str.slice(i+1));
        }
    }

    addToArray('', str);
    return result;
};

const assertEquals = function(actual, expect, desc){
    if(actual === expect){
        console.log(`Passed`, actual);
    }else{
        console.log(`Failed [${desc}]: Expected ${expect} but got ${actual}`);
    }
}

assertEquals(powerSet('abc'), outcomeOfABC, 'Should provide powerSet of string');