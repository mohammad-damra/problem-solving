console.log('Problem Solving Q:26 ');

/*  */

/*  
Write a JavaScript function to clone an array.
*/

function array_Clone(arr) {
	// YOUR CODE HERE
	let cloneArr = [];
	for (let i = 0; i < arr.length; i++) {
		cloneArr.push(arr[i]);
	}
	return cloneArr;
}

/* 
Examples:
array_Clone ([1,2,3]) // =>[1,2,3]
array_Clone ([1,9,8]) // =>[1,9,8]
*/
