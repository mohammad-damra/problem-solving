console.log('Problem Solving Q: 22');

/* characterFrequency */

/*  
 Write a function that takes as its input a str and returns an array of 
 arrays as shown below sorted in descending order by frequency and then by 
 ascending order by character.
*/

function characterFrequency(str) {
	// YOUR CODE HERE
	let freq = [];
	for (let i = 0; i < str.length; i++) {
		let character = str.charAt(i);
		if (freq[character]) {
			freq[character]++;
		} else {
			freq[character] = 1;
		}
	}

	return freq;
}

/* 
Examples:
characterFrequency('mississippi') // =>  [ ['i', 4],['s', 4],  ['p', 2],  ['m', 1]  ]
characterFrequency('miaaiaaippi') // =>  [ ['a', 4],  ['i', 4],  ['p', 2],  ['m', 1] ]
*/
