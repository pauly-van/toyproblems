/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

var deepEquals = function(apple, orange) {
  let objsEqual = true;
  
  const searchDepth = function(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
      objsEqual = false;
      return;
    }

    for(let key in obj1){
      if(typeof(obj1[key])!=='object' && obj1[key]!==obj2[key]){
        objsEqual = false;
      }else if(typeof(apple[key])==='object'){
        searchDepth(apple[key], orange[key]);
      }
    }
  };
  searchDepth(apple, orange);
  return objsEqual;
};