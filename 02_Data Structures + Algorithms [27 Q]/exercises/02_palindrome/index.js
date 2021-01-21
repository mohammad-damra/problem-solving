// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	let revStr = '';
	while (stack.length > 0) {
		revStr += stack.pop();
	}
	if (revStr === str) {
		return true;
	} else {
		return false;
	}
}

module.exports = palindrome;
