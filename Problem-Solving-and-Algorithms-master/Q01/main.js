console.log('Problem Solving Q: 1 ');

/* Longest Word */

/*  
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length.
*/

function longestWord(sen) {
	// YOUR CODE HERE
	let arr = sen.split(' ');
	let max = '';
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > max.length) {
			max = arr[i];
		}
	}
	return max;
}

/* 
Examples:
longestWord('lol time'); // => 'time'
longestWord('I love cats'); // => 'love'
longestWord('coding is awesome'); // => 'awesome'
longestWord('hello world'); // => 'hello'
*/
