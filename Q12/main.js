console.log("Problem Solving Q: 12");

/* Reverse Each Word */

/*  
Write a function that reverses the characters of every word of a sentence. Input sentences contain only English letter and space characters.
*/

function reverseEachWord(str) {
  // YOUR CODE HERE
  let strSplit = str.split(" ");
  for (let i = 0; i < strSplit.length; i++) {
    strSplit[i] = strSplit[i].split("").reverse().join("");
  }
  strSplit = strSplit.join(" ");
  return strSplit;
}

/* 
Examples:
reverseEachWord("This is a test") // => "sihT si a tset"
reverseEachWord("Lets code guys") // => "steL edoc syug"
reverseEachWord("Jouza admire Fried Chicken") // => "azuoJ erimda deirF nekcihC"
*/
