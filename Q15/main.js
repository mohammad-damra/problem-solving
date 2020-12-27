console.log('Problem Solving Q:15 ');

/*  commonCharacters*/

/*  
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.
Your function should return the common characters in the same order that they appear in the first argument. 
Do not return duplicate characters and ignore whitespace in your returned string.
*/

function commonCharacters(str1, str2) {
	// YOUR CODE HERE
	let commonChar = '';
	for (let i = 0; i < str1.length; i++)
		for (let j = 0; j < str2.length; j++) {
			if (str1[i] === str2[j])
				if (str1[i] === ' ') {
					break;
				} else {
					commonChar = commonChar + str1[i];
				}
		}
	commonChar = commonChar.split('');
	commonChar = commonChar.filter((item, i, commonChar) => commonChar.indexOf(item) === i);
	return commonChar.join('');
}

/* 
Examples:
commonCharacters('abc', 'abc') // => 'abc'
commonCharacters('What is love?', "Baby don't hurt me") // => 'hatoe'
commonCharacters('Riding on a buffalo makes me more approachable','so what') // => 'oash'
*/
