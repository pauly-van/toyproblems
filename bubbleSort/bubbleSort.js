/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.


var bubbleSort = function(array) {
  for(let i=0;i<array.length;i++){
    for(let n=i+1;n<array.length;n++){
      let temp;
      if(array[i]>array[n]){
        temp=array[i];
        array[i]=array[n];
        array[n]=temp;
      }
    }
  }
};

const assertBubbleSort = function(result, expect, descrip){
  if(JSON.stringify(result)===JSON.stringify(expect)){
    console.log('passed with: ', result);
  }else{
    console.log('Failed: ', descrip,`[expected ${result} to equal ${expect}]` );
  }
};

assertBubbleSort(bubbleSort([2,3,1]), [1,2,3], 'Should sort array numerically')
assertBubbleSort(bubbleSort([2,3,1,4,7,5,6]), [1,2,3,4,5,6,7], 'Should sort array numerically');
assertBubbleSort(bubbleSort([2,1,3]), [1,2,3], 'Should sort array numerically');
assertBubbleSort(bubbleSort([3,1,8,4,6,2,5,7]), [1,2,3,4,5,6,7,8], 'Should sort array numerically')


/*
Time complexity of this is O of n squared because in the worst case scenario we would have to traverse through the array n squared times
*/