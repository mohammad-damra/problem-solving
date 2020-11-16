console.log("Problem Solving Q: 5 ");

/* Find Intersection */

/*  
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  // YOUR CODE HERE
  let result = "";
  let firstString = strArr[0];
  let secondString = strArr[1];
  firstString = firstString.split(", ");
  secondString = secondString.split(", ");
  for (let i = 0; i < firstString.length; i++)
    for (let j = 0; j < secondString.length; j++) {
      if (firstString[i] === secondString[j])
        result = result + firstString[i] + ",";
    }
  result = result.slice(0, -1);
  return result;
}

/* 
Examples:
FindIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
FindIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
*/
