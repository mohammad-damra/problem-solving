console.log('Problem Solving Q: 21');

/* onlyUnique */

/*  
Given a string, remove any characters that are not unique from the string.
*/

function onlyUnique(str) {
	// YOUR CODE HERE
	let uniqStr = '';
	for (let i = 0; i < str.length; i++) {
		if (uniqStr.indexOf(str.charAt(i)) === -1) uniqStr += str[i];
	}
	return uniqStr;
}

/* 
Examples:
onlyUnique('hello there') // => 'o tr'
onlyUnique('xyz') // => 'xyz'
onlyUnique('iiii') // => ''
*/
