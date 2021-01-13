console.log('Problem Solving Q:17 ');

/*  */

/*  
Given an arbitrary input string, return the first non-repeating character. For strings with all repeats, return 'sorry'
*/

function firstNonRepeatedCharacter(str) {
	// YOUR CODE HERE
	for (let i = 0; i < str.length; i++) {
		let char = str[i];
		if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
			return char;
		}
	}
	return 'none';
}

/* 
Examples:
firstNonRepeatedCharacter('ABCDBIRDUP') // => 'A'
firstNonRepeatedCharacter('ALABAMA') // => 'L'
firstNonRepeatedCharacter('Uber for horses') // => 'U'
*/
