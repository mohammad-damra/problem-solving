console.log("Problem Solving Q: 10");

/* Times Of Most Freq Char */

/*  
Write a function that returns the number of occurrences of the most frequent character in a sentence.
*/

function timesOfMostFreqChar(str) {
  // YOUR CODE HERE
  let max = 0;
  str.split("").forEach((char) => {
    if (str.split(char).length > max) {
      max = str.split(char).length;
    }
  });
  return max - 1;
}

/* 
Examples:
answer1('hello world') // => 3
answer1('hello world lol') // => 5
answer1('hello world lol woooow') // => 7
answer1('hello world lol wow www.com') // => 6
*/
