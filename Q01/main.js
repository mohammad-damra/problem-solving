console.log("Problem Solving Q: 1 ");

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function LongestWord(sen) {
  // YOUR CODE HERE
  let theLongestWord = "";
  let arrOfWords = sen.split(" ");
  for (let i = 0; i < arrOfWords.length; i++) {
    if (theLongestWord.length < arrOfWords[i].length) {
      theLongestWord = arrOfWords[i];
    }
  }
  return theLongestWord;
}

/* 
Examples:
LongestWord('lol time'); // => 'time'
LongestWord('I love cats'); // => 'love'
LongestWord('coding is awesome'); // => 'awesome'
LongestWord('hello world'); // => 'hello'
*/
