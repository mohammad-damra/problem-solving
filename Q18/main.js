console.log('Problem Solving Q:18 ');

/*  factorial*/

/*  
Given an integer, n, return n! (n factorial)
5! = 5 * 4 * 3 * 2 * 1
*/

function factorial(num) {
	// YOUR CODE HERE

	//  First Solution : Recursion
	/*
	if (num < 0) return 'must be a positive number';
	else if (num === 0 || num === 1) return 1;
  else return num * factorial(num - 1);
  */

	// Second Solution : While Loop
	/*
	let result = num;
	if (num < 0) return 'must be a positive number';
	else if (num === 0 || num === 1) return 1;
	while (num > 1) {
		num--;
		result *= num;
	}
  return result;
  */

	// Third Solution : For Loop

	if (num < 0) return 'must be a positive number';
	else if (num === 0 || num === 1) return 1;
	for (let i = num - 1; i >= 1; i--) {
		num *= i;
	}
	return num;
}

/* 
Examples:
factorial(1) // => 1
factorial(3) // => 6
factorial(4) // => 24
*/
