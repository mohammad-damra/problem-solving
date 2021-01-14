console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(str) {
	// YOUR CODE HERE
	let subStr = str.substring(str.indexOf('?') + 1);
	let x = str.indexOf('=');
	console.log('x', x);
	return subStr;
}

/* 
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/
