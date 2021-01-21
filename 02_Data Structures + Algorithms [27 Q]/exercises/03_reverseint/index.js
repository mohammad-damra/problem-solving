// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let str = n + '';
	let stack = [];
	for (let i = 0; i < str.length; i++) {
		stack.push(str[i]);
	}
	let revStr = '';
	while (stack.length > 0) {
		console.log('stack: ', stack);
		if (stack[stack.length - 1] === '0') {
			stack.pop();
		} else {
			revStr += stack.pop();
		}
	}
	if (revStr.charAt(revStr.length - 1) === '-') {
		1;
		revStr = revStr.substring(0, revStr.length - 1);
		revStr = '-' + revStr;
	}
	revStr *= 1;
	return revStr;
}

module.exports = reverseInt;
