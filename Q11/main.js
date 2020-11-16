console.log("Problem Solving Q: 11");

/* Is Power Of Two */

/*  
Write a function that returns YES if a number is a power of 2, and NO otherwise.
*/

function isPowerOfTwo(num) {
  // YOUR CODE HERE
  if (num && (num & (num - 1)) === 0) return "YES";
  else return "NO";

  /*
   explain (num & (num - 1)) :
   The bitwise AND operator (&) returns a 1 in each bit position
   for which the corresponding bits of both operands are 1s.(read it at MDN).
   example (num=5): (5 & (5 - 1)) => (5 & 4) => (101 & 100)"number in bits"
   return 1 because the first bit in 5 is 1 also the first bit in 4 is 1;
  */
}

/* 
Examples:
isPowerOfTwo(0) // => 'NO'  
isPowerOfTwo(1) // => 'YES'  
// I am sure not a typo 1 => YES

isPowerOfTwo(2) // => 'YES'
isPowerOfTwo(4) // => 'YES'
isPowerOfTwo(6) // => 'NO'
isPowerOfTwo(11) // => 'NO'
isPowerOfTwo(16) // => 'YES'
isPowerOfTwo(18) // => 'YES'
isPowerOfTwo(24) // => 'NO'
isPowerOfTwo(25) // => 'NO'
isPowerOfTwo(28) // => 'NO'
isPowerOfTwo(32) // => 'YES'
isPowerOfTwo(63) // => 'NO'
isPowerOfTwo(64) // => 'YES'
isPowerOfTwo(1023) // => 'NO'
isPowerOfTwo(1024) // => 'YES'
*/
