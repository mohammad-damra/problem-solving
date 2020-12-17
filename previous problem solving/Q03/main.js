console.log("Problem Solving Q: 3 ");

/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH.
*/

function FirstReverse(str) {
  // YOUR CODE HERE
  // there is three ways to solve this.

  // the 1st answer:
  // let splitString = str.split("");
  // let reverseArray = splitString.reverse();
  // let joinArray = reverseArray.join("");
  // return joinArray;

  // the 2nd answer:
   return str.split("").reverse().join("");

  //the 3rd answer:
  // let newString = "";
  // for (let i = str.length - 1; i >= 0; i--) {
  //   newString += str[i];
  // }
  // return newString;
}

/* 
Examples:
FirstReverse('I Love Code'); // => 'edoC evoL I'
FirstReverse('Hello World'); // => 'dlroW olleH'
FirstReverse('How are you?'); // => '?uoy era woH'
*/
