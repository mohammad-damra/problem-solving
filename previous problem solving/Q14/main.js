console.log('Problem Solving Q:14 ');

/* ArrayMiddle */

/*  
Given an array of negative/positive integers, return the element in the center position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

function ArrayMiddle(arr) {
	if (arr.length % 2 == 0) {
		return (arr[arr.length / 2 - 1] + arr[arr.length / 2 + 1]) / 2;
	} else {
		return arr[Math.ceil(arr.length / 2 - 1)];
	}
	// YOUR CODE HERE
}

/* 
Examples:
ArrayMiddle([200,5,100]) // => 5
ArrayMiddle([2,3,2,3,2]) // => 2
ArrayMiddle([2,3]) // => 2.5
*/
