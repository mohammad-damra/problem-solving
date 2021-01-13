console.log('Problem Solving Q: 20');

/* largestProductOfThree */

/*  
Write a function that accepts an array of integers and returns the largest product possible from three of those numbers.
*/

function largestProductOfThree(arr) {
	// YOUR CODE HERE
	arr.sort((a, b) => {
		return a - b;
	});
	return arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1];
}

/* 
Examples:
largestProductOfThree([2, 1, 3, 7]) // => 42
largestProductOfThree([0, 2, 3]) // => 0
largestProductOfThree([2, 3, 5]) // => 30
*/
